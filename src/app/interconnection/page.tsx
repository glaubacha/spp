"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import JSZip from "jszip";
import { interconnectionData } from "@/data/interconnection-data";
import { sppStudyGridMetrics } from "@/data/spp-study-grid-metrics";
import { substationMvaRatings, type SubstationMvaRating } from "@/data/substation-mva-ratings";
import { substationUpgradeRecords, type SubstationUpgradeRecord } from "@/data/substation-upgrade-years";

type Project = (typeof interconnectionData.activeProjects)[number];
type MapMode = "active" | "nearby";
type QueueYear = "all" | string;
type LonLat = { lon: number; lat: number };
type ElectricalDistanceEstimate = {
  electricalMiles?: number;
  snapMiles?: number;
  source?: string;
  status: "resolved" | "unavailable";
};
type ElectricalDistanceLookup = Record<string, ElectricalDistanceEstimate>;
type ElectricalDistanceSummary = {
  message: string;
  resolved: number;
  source?: string;
  total: number;
};
type GeoJsonFeatureCollection = {
  type: "FeatureCollection";
  features: Array<{
    type: "Feature";
    geometry: {
      type: "Point";
      coordinates: [number, number];
    };
    properties: Record<string, string | number | boolean>;
  }>;
};
type LocatorFeatureCollection = {
  type: "FeatureCollection";
  features: Array<{
    type: "Feature";
    geometry:
      | {
          type: "Point";
          coordinates: [number, number];
        }
      | {
          type: "Polygon";
          coordinates: Array<Array<[number, number]>>;
        };
    properties: Record<string, string | number | boolean>;
  }>;
};
type LineGeometry =
  | {
      type: "LineString";
      coordinates: Array<[number, number]>;
    }
  | {
      type: "MultiLineString";
      coordinates: Array<Array<[number, number]>>;
    };
type MapLibreFeature = {
  geometry?: LineGeometry | { type: string; coordinates?: unknown };
  layer?: { id?: string };
  properties?: Record<string, string | number | boolean | null>;
};

declare global {
  interface Window {
    maplibregl?: {
      Map: new (options: Record<string, unknown>) => MapLibreMap;
      NavigationControl: new (options?: Record<string, unknown>) => unknown;
      Popup: new (options?: Record<string, unknown>) => MapLibrePopup;
    };
  }
}

type MapLibreMap = {
  addControl: (control: unknown, position?: string) => void;
  addLayer: (layer: Record<string, unknown>) => void;
  addSource: (id: string, source: Record<string, unknown>) => void;
  fitBounds: (bounds: [[number, number], [number, number]], options?: Record<string, unknown>) => void;
  getCanvas: () => HTMLCanvasElement;
  getLayer: (id: string) => unknown;
  getSource: (id: string) => { setData?: (data: GeoJsonFeatureCollection | LocatorFeatureCollection) => void } | undefined;
  isStyleLoaded: () => boolean;
  on: (event: string, layerOrHandler: string | ((event?: MapLibreEvent) => void), handler?: (event: MapLibreEvent) => void) => void;
  queryRenderedFeatures: (
    pointOrBox: unknown,
    options?: { layers?: string[] },
  ) => MapLibreFeature[];
  querySourceFeatures?: (sourceId: string, options?: { sourceLayer?: string }) => MapLibreFeature[];
  once: (event: string, handler: () => void) => void;
  remove: () => void;
  setLayoutProperty: (layerId: string, name: string, value: unknown) => void;
};

type MapLibreEvent = {
  features?: Array<{
    layer?: { id?: string };
    properties?: Record<string, string | number | boolean | null>;
  }>;
  lngLat: { lat: number; lng: number };
  point?: { x: number; y: number };
};

type MapLibrePopup = {
  addTo: (map: MapLibreMap) => MapLibrePopup;
  remove: () => void;
  setHTML: (html: string) => MapLibrePopup;
  setLngLat: (lngLat: { lat: number; lng: number }) => MapLibrePopup;
};

const typeColors: Record<string, string> = {
  "Battery/Storage": "#9b6bd3",
  Hybrid: "#d7c85f",
  Solar: "#f97316",
  Thermal: "#23395d",
  Wind: "#42a579",
  Unknown: "#718096",
};

const assetColors = {
  generator: "#ff2d8d",
  parcel: "#b71c1c",
  powerLine: "#00e5ff",
  substation: "#39ff14",
};

const stageColors = ["#2f4858", "#e4572e", "#17bebb", "#ffc914", "#6a4c93", "#76b041"];
const defaultParcelCenter: LonLat = {
  lat: interconnectionData.parcel.center.lat,
  lon: interconnectionData.parcel.center.lon,
};
const electricalFallbackSummary: ElectricalDistanceSummary = {
  message: "Electrical path distances calculate from public power-line geometry after the map loads.",
  resolved: 0,
  total: interconnectionData.activeProjects.length,
};
const hifldTransmissionLinesUrl =
  "https://services2.arcgis.com/LYMgRMwHfrWWEg3s/arcgis/rest/services/HIFLD_US_Electric_Power_Transmission_Lines/FeatureServer/0/query";
const maxElectricalSnapMiles = 35;

function formatMw(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
}

function formatMiles(value: number): string {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
}

function roundMiles(value: number): number {
  return Math.round(value * 10) / 10;
}

function haversineMiles(a: LonLat, b: LonLat): number {
  const earthRadiusMiles = 3958.8;
  const toRadians = (value: number) => (value * Math.PI) / 180;
  const dLat = toRadians(b.lat - a.lat);
  const dLon = toRadians(b.lon - a.lon);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * earthRadiusMiles * Math.asin(Math.min(1, Math.sqrt(h)));
}

function geospatialMilesFromParcel(project: Project, parcelCenter: LonLat): number {
  return roundMiles(haversineMiles(parcelCenter, { lat: project.lat, lon: project.lon }));
}

function electricalMilesForProject(project: Project, lookup: ElectricalDistanceLookup): number | undefined {
  const value = lookup[project.id]?.electricalMiles;
  return Number.isFinite(value) ? value : undefined;
}

function distanceSortMiles(project: Project, parcelCenter: LonLat, lookup: ElectricalDistanceLookup): number {
  return electricalMilesForProject(project, lookup) ?? geospatialMilesFromParcel(project, parcelCenter);
}

function electricalDistanceLabel(project: Project, parcelCenter: LonLat, lookup: ElectricalDistanceLookup): string {
  const electricalMiles = electricalMilesForProject(project, lookup);
  if (electricalMiles !== undefined) return `${formatMiles(electricalMiles)} mi`;
  if (Object.keys(lookup).length === 0) return "Calculating...";
  return `No path; ${formatMiles(geospatialMilesFromParcel(project, parcelCenter))} mi straight-line`;
}

function distanceBasisLabel(project: Project, lookup: ElectricalDistanceLookup): string {
  const estimate = lookup[project.id];
  if (estimate?.status === "resolved" && estimate.source) return estimate.source;
  if (Object.keys(lookup).length === 0) return "Calculating network path";
  return "Straight-line fallback";
}

function formatPoiVoltage(value: string | number | boolean | null | undefined): string {
  if (isUnavailableSentinel(value)) return "Not listed";
  const numeric = numericValuesFrom(value)[0];
  if (!Number.isFinite(numeric) || numeric <= 0 || isSentinelNumber(numeric)) return "Not listed";
  return `${new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(numeric)} kV`;
}

function projectColor(project: Project) {
  return typeColors[project.generationType] ?? typeColors.Unknown;
}

function stageColor(stage: string) {
  const index = Math.abs(
    stage.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0),
  ) % stageColors.length;
  return stageColors[index];
}

function projectYear(project: Project): string {
  return project.commercialOperationDate?.slice(0, 4) ?? "Pending";
}

function projectsFor(
  mode: MapMode,
  selectedYear: QueueYear,
  parcelCenter: LonLat,
  lookup: ElectricalDistanceLookup,
): Project[] {
  const projectSet =
    mode === "nearby"
      ? interconnectionData.activeProjects
          .filter((project) => distanceSortMiles(project, parcelCenter, lookup) <= 300)
          .sort((a, b) => distanceSortMiles(a, parcelCenter, lookup) - distanceSortMiles(b, parcelCenter, lookup))
      : [...interconnectionData.activeProjects];
  if (selectedYear === "all") return projectSet;
  return projectSet.filter((project) => projectYear(project) === selectedYear);
}

function yearsFor(mode: MapMode, parcelCenter: LonLat, lookup: ElectricalDistanceLookup): string[] {
  return Array.from(new Set(projectsFor(mode, "all", parcelCenter, lookup).map(projectYear))).sort();
}

function mapDataFor(
  projectSet: readonly Project[],
  selectedId: string,
  parcelCenter: LonLat,
  lookup: ElectricalDistanceLookup,
): GeoJsonFeatureCollection {
  return {
    type: "FeatureCollection",
    features: projectSet.map((project) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [project.lon, project.lat],
      },
      properties: {
        id: project.id,
        capacityMw: project.capacityMw,
        color: projectColor(project),
        distanceBasis: distanceBasisLabel(project, lookup),
        electricalMiles: electricalMilesForProject(project, lookup) ?? "",
        geospatialMiles: geospatialMilesFromParcel(project, parcelCenter),
        generationType: project.generationType,
        nearby: distanceSortMiles(project, parcelCenter, lookup) <= 300,
        poi: project.poi,
        poiVoltageKv: project.poiVoltageKv ?? 0,
        queueStage: project.queueStage,
        selected: project.id === selectedId,
        status: project.status,
        transmissionOwner: project.transmissionOwner,
      },
    })),
  };
}

function escapeHtml(value: string | number | boolean | null | undefined): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function numericValuesFrom(value: string | number | boolean | null | undefined): number[] {
  return (
    String(value ?? "")
      .match(/-?\d[\d,]*(?:\.\d+)?/g)
      ?.map((part) => Number(part.replaceAll(",", "")))
      .filter((part) => Number.isFinite(part)) ?? []
  );
}

function isSentinelNumber(value: number): boolean {
  return value <= -999 || Math.abs(value) >= 999000;
}

function isUnavailableSentinel(value: string | number | boolean | null | undefined): boolean {
  if (value === undefined || value === null || value === "") return true;
  const raw = String(value).trim();
  if (!raw) return true;
  const numericValues = numericValuesFrom(raw);
  return numericValues.length > 0 && !/[a-z]/i.test(raw) && numericValues.every(isSentinelNumber);
}

function cleanInfrastructureValue(value: string | number | boolean | null | undefined): string | undefined {
  if (isUnavailableSentinel(value)) return undefined;
  const cleaned = String(value).trim();
  return cleaned === "" ? undefined : cleaned;
}

function firstAvailableInfrastructureValue(...values: Array<string | number | boolean | null | undefined>): string {
  for (const value of values) {
    const cleaned = cleanInfrastructureValue(value);
    if (cleaned) return cleaned;
  }

  return "Not available in source";
}

function joinedAvailableInfrastructureValues(...values: Array<string | number | boolean | null | undefined>): string | undefined {
  const cleanedValues = values
    .map(cleanInfrastructureValue)
    .filter((value): value is string => Boolean(value));
  return Array.from(new Set(cleanedValues)).join(" / ") || undefined;
}

function firstInfrastructureValue(
  properties: Record<string, string | number | boolean | null> | undefined,
  keys: string[],
): string {
  if (!properties) return "Not available in source";

  for (const key of keys) {
    const value = cleanInfrastructureValue(properties[key]);
    if (value) return value;
  }

  return "Not available in source";
}

function formatKv(value: string | number | boolean | null | undefined): string {
  if (isUnavailableSentinel(value)) return "Not available in source";

  const raw = String(value);
  const values = raw
    .split(/[;/|]+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const numeric = numericValuesFrom(part)[0];
      if (!Number.isFinite(numeric) || numeric <= 0 || isSentinelNumber(numeric)) return undefined;
      const kv = numeric > 1000 ? numeric / 1000 : numeric;
      return `${new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(kv)} kV`;
    })
    .filter((part): part is string => Boolean(part));

  return values.length > 0 ? values.join(" / ") : "Not available in source";
}

function formatMva(value: string | number | boolean | null | undefined): string {
  if (isUnavailableSentinel(value)) return "Not available in source";
  const numeric = numericValuesFrom(value)[0];
  if (!Number.isFinite(numeric) || numeric <= 0 || isSentinelNumber(numeric)) return "Not available in source";
  return `${new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(numeric)} MVA`;
}

function firstNumericValue(
  properties: Record<string, string | number | boolean | null> | undefined,
  keys: string[],
): { key: string; value: number } | undefined {
  if (!properties) return undefined;

  for (const key of keys) {
    const raw = properties[key];
    if (isUnavailableSentinel(raw)) continue;
    const numeric = numericValuesFrom(String(raw).split(/[;/|]+/)[0])[0];
    if (Number.isFinite(numeric) && numeric > 0 && !isSentinelNumber(numeric)) return { key, value: numeric };
  }

  return undefined;
}

function calculatedThreePhaseMva(
  properties: Record<string, string | number | boolean | null> | undefined,
): { label: string; source: string; type: string } | undefined {
  const voltage = firstNumericValue(properties, ["voltage", "voltage:primary", "voltage:secondary"]);
  const current = firstNumericValue(properties, [
    "rating:amps",
    "rating:amp",
    "rating:current",
    "ampacity",
    "current",
    "max_current",
    "current:rating",
    "current:thermal",
  ]);
  if (!voltage || !current) return undefined;

  const kv = voltage.value > 1000 ? voltage.value / 1000 : voltage.value;
  const mva = (Math.sqrt(3) * kv * current.value) / 1000;
  if (!Number.isFinite(mva) || mva <= 0) return undefined;

  return {
    label: `${new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(mva)} MVA`,
    source: `Calculated from mapped ${voltage.key} and ${current.key} tags`,
    type: "Calculated three-phase apparent power",
  };
}

function normalizeLookupText(value: string): string {
  return value
    .toLowerCase()
    .replace(/\bkv\b/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function lookupSubstationMva(...values: Array<string | number | boolean | null | undefined>): SubstationMvaRating | undefined {
  const haystack = normalizeLookupText(values.filter(Boolean).join(" "));
  if (!haystack) return undefined;

  let bestMatch: { rating: SubstationMvaRating; score: number } | undefined;

  for (const rating of substationMvaRatings) {
    for (const alias of rating.aliases) {
      const normalizedAlias = normalizeLookupText(alias);
      if (!normalizedAlias || !haystack.includes(normalizedAlias)) continue;
      const score = normalizedAlias.length;
      if (!bestMatch || score > bestMatch.score) bestMatch = { rating, score };
    }
  }

  return bestMatch?.rating;
}

function normalizeSubstationName(value: string): string {
  return value
    .toLowerCase()
    .replace(/\b\d+(?:\.\d+)?\s*kv\b/g, " ")
    .replace(/\b(substation|station|interchange|switching|tap)\b/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function lookupSubstationUpgrade(...values: Array<string | number | boolean | null | undefined>): SubstationUpgradeRecord | undefined {
  const rawHaystack = values.filter(Boolean).join(" ");
  const haystack = normalizeLookupText(rawHaystack);
  const shortHaystack = normalizeSubstationName(rawHaystack);
  if (!haystack) return undefined;

  let bestMatch: { record: SubstationUpgradeRecord; score: number } | undefined;

  for (const record of substationUpgradeRecords) {
    for (const alias of [record.name, ...record.aliases]) {
      const normalizedAlias = normalizeLookupText(alias);
      const shortAlias = normalizeSubstationName(alias);
      const directMatch = normalizedAlias && haystack.includes(normalizedAlias);
      const shortMatch =
        shortAlias.length >= 5 && (shortHaystack.includes(shortAlias) || shortAlias.includes(shortHaystack));
      if (!directMatch && !shortMatch) continue;
      const score = Math.max(normalizedAlias.length, shortAlias.length) + record.lastUpgradeYear / 10000;
      if (!bestMatch || score > bestMatch.score) bestMatch = { record, score };
    }
  }

  return bestMatch?.record;
}

function mvaRatingValue(
  properties: Record<string, string | number | boolean | null> | undefined,
  documentedRating?: SubstationMvaRating,
): { label: string; source: string; type: string } {
  if (documentedRating) {
    return {
      label: documentedRating.mvaLabel,
      source: documentedRating.sourceTitle,
      type: documentedRating.ratingType,
    };
  }

  const taggedRating = formatMva(firstInfrastructureValue(properties, ["rating:mva", "capacity:mva", "transformer:rating"]));
  if (taggedRating !== "Not available in source") {
    return {
      label: taggedRating,
      source: "Mapped OpenInfraMap/OpenStreetMap MVA tag",
      type: "Mapped equipment rating",
    };
  }

  const calculated = calculatedThreePhaseMva(properties);
  if (calculated) return calculated;

  return {
    label: "Not found in checked public sources",
    source: "No matching SIS/FERC/OASIS/planning record or calculable voltage/current tags found",
    type: "Not available",
  };
}

function formatPublicDate(value: string | number | boolean | null | undefined): string {
  if (isUnavailableSentinel(value)) return "Not available in source";
  if (typeof value === "number") {
    if (value <= 0 || isSentinelNumber(value)) return "Not available in source";
    const date = new Date(value);
    if (Number.isFinite(date.getTime())) return date.toISOString().slice(0, 10);
  }
  return cleanInfrastructureValue(value) ?? "Not available in source";
}

function hifldUrl(kind: "line" | "substation", lng: number, lat: number): string {
  const endpoint =
    kind === "line"
      ? "https://services2.arcgis.com/LYMgRMwHfrWWEg3s/arcgis/rest/services/HIFLD_US_Electric_Power_Transmission_Lines/FeatureServer/0/query"
      : "https://services2.arcgis.com/6VIt2tukGNSxkmi6/arcgis/rest/services/DEMO_Substations/FeatureServer/8/query";
  const outFields =
    kind === "line"
      ? "ID,TYPE,STATUS,SOURCE,SOURCEDATE,VAL_METHOD,VAL_DATE,OWNER,VOLTAGE,VOLT_CLASS,INFERRED,SUB_1,SUB_2"
      : "ID,NAME,TYPE,STATUS,SOURCE,SOURCEDATE,VAL_METHOD,VAL_DATE,LINES,MAX_VOLT,MIN_VOLT,MAX_INFER,MIN_INFER";
  const params = new URLSearchParams({
    distance: kind === "line" ? "1500" : "5000",
    f: "json",
    geometry: `${lng},${lat}`,
    geometryType: "esriGeometryPoint",
    inSR: "4326",
    outFields,
    returnGeometry: "false",
    spatialRel: "esriSpatialRelIntersects",
    units: "esriSRUnit_Meter",
    where: "1=1",
  });

  return `${endpoint}?${params.toString()}`;
}

async function fetchHifldAttributes(kind: "line" | "substation", lng: number, lat: number) {
  const response = await fetch(hifldUrl(kind, lng, lat));
  if (!response.ok) return undefined;
  const data = (await response.json()) as { features?: Array<{ attributes?: Record<string, string | number | null> }> };
  return data.features?.[0]?.attributes;
}

function boundsAroundPoint(center: LonLat, radiusMiles: number): [[number, number], [number, number]] {
  const latPad = radiusMiles / 69;
  const lonPad = radiusMiles / Math.max(20, 69 * Math.cos((center.lat * Math.PI) / 180));
  return [
    [center.lon - lonPad, center.lat - latPad],
    [center.lon + lonPad, center.lat + latPad],
  ];
}

function isCoordinate(value: unknown): value is [number, number] {
  return (
    Array.isArray(value) &&
    value.length >= 2 &&
    typeof value[0] === "number" &&
    typeof value[1] === "number" &&
    Number.isFinite(value[0]) &&
    Number.isFinite(value[1])
  );
}

function coordinatesFromUnknownLine(line: unknown): Array<[number, number]> {
  if (!Array.isArray(line)) return [];
  return line.filter(isCoordinate).map(([lon, lat]) => [lon, lat] as [number, number]);
}

async function fetchHifldTransmissionLineStrings(center: LonLat): Promise<Array<Array<[number, number]>>> {
  const bounds = boundsAroundPoint(center, 360);
  const pageSize = 2000;
  const maxPages = 6;
  const lines: Array<Array<[number, number]>> = [];

  for (let page = 0; page < maxPages; page += 1) {
    const params = new URLSearchParams({
      f: "json",
      geometry: `${bounds[0][0]},${bounds[0][1]},${bounds[1][0]},${bounds[1][1]}`,
      geometryType: "esriGeometryEnvelope",
      inSR: "4326",
      orderByFields: "ID",
      outFields: "ID,OWNER,VOLTAGE,STATUS,SUB_1,SUB_2",
      outSR: "4326",
      resultOffset: String(page * pageSize),
      resultRecordCount: String(pageSize),
      returnGeometry: "true",
      spatialRel: "esriSpatialRelIntersects",
      where: "1=1",
    });

    const response = await fetch(`${hifldTransmissionLinesUrl}?${params.toString()}`);
    if (!response.ok) throw new Error("Could not load HIFLD transmission line geometry.");

    const data = (await response.json()) as {
      exceededTransferLimit?: boolean;
      features?: Array<{ geometry?: { paths?: unknown } }>;
    };
    const features = data.features ?? [];

    for (const feature of features) {
      const paths = feature.geometry?.paths;
      if (!Array.isArray(paths)) continue;
      for (const path of paths) {
        const coordinates = coordinatesFromUnknownLine(path);
        if (coordinates.length > 1) lines.push(coordinates);
      }
    }

    if (!data.exceededTransferLimit && features.length < pageSize) break;
  }

  return lines;
}

function lineStringsFromMapFeatures(features: MapLibreFeature[]): Array<Array<[number, number]>> {
  const lines: Array<Array<[number, number]>> = [];

  for (const feature of features) {
    const geometry = feature.geometry;
    if (!geometry) continue;

    if (geometry.type === "LineString" && Array.isArray(geometry.coordinates)) {
      const coordinates = coordinatesFromUnknownLine(geometry.coordinates);
      if (coordinates.length > 1) lines.push(coordinates);
    }

    if (geometry.type === "MultiLineString" && Array.isArray(geometry.coordinates)) {
      for (const line of geometry.coordinates) {
        const coordinates = coordinatesFromUnknownLine(line);
        if (coordinates.length > 1) lines.push(coordinates);
      }
    }
  }

  return lines;
}

type NetworkSegment = {
  a: LonLat;
  aKey: string;
  b: LonLat;
  bKey: string;
  miles: number;
};
type PowerNetwork = {
  adjacency: Map<string, Array<{ miles: number; to: string }>>;
  nodes: Map<string, LonLat>;
  segments: NetworkSegment[];
};

function nodeKey([lon, lat]: [number, number]): string {
  return `${lon.toFixed(5)},${lat.toFixed(5)}`;
}

function addNetworkEdge(
  adjacency: Map<string, Array<{ miles: number; to: string }>>,
  seenEdges: Set<string>,
  from: string,
  to: string,
  miles: number,
) {
  if (!Number.isFinite(miles) || miles <= 0) return;
  const key = from < to ? `${from}|${to}` : `${to}|${from}`;
  if (seenEdges.has(key)) return;
  seenEdges.add(key);
  adjacency.get(from)?.push({ to, miles });
  adjacency.get(to)?.push({ to: from, miles });
}

function addSubstationConnectorEdges(network: PowerNetwork, seenEdges: Set<string>) {
  const bucketSize = 0.01;
  const buckets = new Map<string, string[]>();

  for (const [key, point] of network.nodes) {
    const bucketKey = `${Math.floor(point.lon / bucketSize)},${Math.floor(point.lat / bucketSize)}`;
    const values = buckets.get(bucketKey) ?? [];
    values.push(key);
    buckets.set(bucketKey, values);
  }

  for (const [key, point] of network.nodes) {
    const x = Math.floor(point.lon / bucketSize);
    const y = Math.floor(point.lat / bucketSize);
    for (let dx = -1; dx <= 1; dx += 1) {
      for (let dy = -1; dy <= 1; dy += 1) {
        const candidates = buckets.get(`${x + dx},${y + dy}`) ?? [];
        for (const candidateKey of candidates) {
          if (candidateKey === key) continue;
          const candidate = network.nodes.get(candidateKey);
          if (!candidate) continue;
          const miles = haversineMiles(point, candidate);
          if (miles <= 0.35) addNetworkEdge(network.adjacency, seenEdges, key, candidateKey, miles);
        }
      }
    }
  }
}

function buildPowerNetwork(lineStrings: Array<Array<[number, number]>>): PowerNetwork {
  const adjacency = new Map<string, Array<{ miles: number; to: string }>>();
  const nodes = new Map<string, LonLat>();
  const segments: NetworkSegment[] = [];
  const seenEdges = new Set<string>();

  for (const line of lineStrings) {
    for (let index = 1; index < line.length; index += 1) {
      const previous = line[index - 1];
      const current = line[index];
      if (!isCoordinate(previous) || !isCoordinate(current)) continue;

      const aKey = nodeKey(previous);
      const bKey = nodeKey(current);
      if (aKey === bKey) continue;

      const a = { lat: previous[1], lon: previous[0] };
      const b = { lat: current[1], lon: current[0] };
      const miles = haversineMiles(a, b);
      if (!Number.isFinite(miles) || miles <= 0 || miles > 100) continue;

      if (!adjacency.has(aKey)) adjacency.set(aKey, []);
      if (!adjacency.has(bKey)) adjacency.set(bKey, []);
      if (!nodes.has(aKey)) nodes.set(aKey, a);
      if (!nodes.has(bKey)) nodes.set(bKey, b);
      addNetworkEdge(adjacency, seenEdges, aKey, bKey, miles);
      segments.push({ a, aKey, b, bKey, miles });
    }
  }

  const network = { adjacency, nodes, segments };
  addSubstationConnectorEdges(network, seenEdges);
  return network;
}

type SegmentSnap = {
  distanceMiles: number;
  fraction: number;
  segment: NetworkSegment;
};

function snapPointToSegment(point: LonLat, segment: NetworkSegment): SegmentSnap {
  const referenceLat = ((point.lat + segment.a.lat + segment.b.lat) / 3) * (Math.PI / 180);
  const xScale = 69 * Math.cos(referenceLat);
  const yScale = 69;
  const ax = segment.a.lon * xScale;
  const ay = segment.a.lat * yScale;
  const bx = segment.b.lon * xScale;
  const by = segment.b.lat * yScale;
  const px = point.lon * xScale;
  const py = point.lat * yScale;
  const dx = bx - ax;
  const dy = by - ay;
  const lengthSquared = dx * dx + dy * dy;
  const fraction = lengthSquared === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lengthSquared));
  const closestX = ax + dx * fraction;
  const closestY = ay + dy * fraction;
  const distanceMiles = Math.sqrt((px - closestX) ** 2 + (py - closestY) ** 2);
  return { distanceMiles, fraction, segment };
}

function nearestNetworkSnap(point: LonLat, network: PowerNetwork): SegmentSnap | undefined {
  let best: SegmentSnap | undefined;
  for (const segment of network.segments) {
    const snap = snapPointToSegment(point, segment);
    if (!best || snap.distanceMiles < best.distanceMiles) best = snap;
  }
  return best;
}

class MinHeap {
  private values: Array<{ distance: number; node: string }> = [];

  push(value: { distance: number; node: string }) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  pop(): { distance: number; node: string } | undefined {
    if (this.values.length === 0) return undefined;
    const first = this.values[0];
    const last = this.values.pop();
    if (last && this.values.length > 0) {
      this.values[0] = last;
      this.sinkDown(0);
    }
    return first;
  }

  private bubbleUp(index: number) {
    let currentIndex = index;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      const current = this.values[currentIndex];
      const parent = this.values[parentIndex];
      if (parent.distance <= current.distance) break;
      this.values[currentIndex] = parent;
      this.values[parentIndex] = current;
      currentIndex = parentIndex;
    }
  }

  private sinkDown(index: number) {
    let currentIndex = index;
    while (true) {
      const leftIndex = currentIndex * 2 + 1;
      const rightIndex = currentIndex * 2 + 2;
      let smallestIndex = currentIndex;

      if (leftIndex < this.values.length && this.values[leftIndex].distance < this.values[smallestIndex].distance) {
        smallestIndex = leftIndex;
      }
      if (rightIndex < this.values.length && this.values[rightIndex].distance < this.values[smallestIndex].distance) {
        smallestIndex = rightIndex;
      }
      if (smallestIndex === currentIndex) break;

      const current = this.values[currentIndex];
      this.values[currentIndex] = this.values[smallestIndex];
      this.values[smallestIndex] = current;
      currentIndex = smallestIndex;
    }
  }
}

function addVirtualSnapNode(network: PowerNetwork, snap: SegmentSnap, node: string) {
  const edges = [
    { miles: snap.distanceMiles + snap.fraction * snap.segment.miles, to: snap.segment.aKey },
    { miles: snap.distanceMiles + (1 - snap.fraction) * snap.segment.miles, to: snap.segment.bKey },
  ];
  network.adjacency.set(node, edges);

  for (const edge of edges) {
    network.adjacency.get(edge.to)?.push({ miles: edge.miles, to: node });
  }
}

function dijkstra(adjacency: Map<string, Array<{ miles: number; to: string }>>, start: string): Map<string, number> {
  const distances = new Map<string, number>();
  const heap = new MinHeap();
  distances.set(start, 0);
  heap.push({ distance: 0, node: start });

  while (true) {
    const current = heap.pop();
    if (!current) break;
    if (current.distance > (distances.get(current.node) ?? Infinity)) continue;

    for (const edge of adjacency.get(current.node) ?? []) {
      const nextDistance = current.distance + edge.miles;
      if (nextDistance >= (distances.get(edge.to) ?? Infinity)) continue;
      distances.set(edge.to, nextDistance);
      heap.push({ distance: nextDistance, node: edge.to });
    }
  }

  return distances;
}

function estimateElectricalDistancesFromLines(
  parcelCenter: LonLat,
  projects: readonly Project[],
  lineStrings: Array<Array<[number, number]>>,
  source: string,
): ElectricalDistanceLookup {
  const network = buildPowerNetwork(lineStrings);
  const lookup: ElectricalDistanceLookup = {};

  if (network.segments.length === 0) {
    for (const project of projects) lookup[project.id] = { status: "unavailable" };
    return lookup;
  }

  const parcelSnap = nearestNetworkSnap(parcelCenter, network);
  if (!parcelSnap || parcelSnap.distanceMiles > maxElectricalSnapMiles) {
    for (const project of projects) lookup[project.id] = { status: "unavailable" };
    return lookup;
  }

  addVirtualSnapNode(network, parcelSnap, "__parcel__");
  const distances = dijkstra(network.adjacency, "__parcel__");

  for (const project of projects) {
    const projectPoint = { lat: project.lat, lon: project.lon };
    const projectSnap = nearestNetworkSnap(projectPoint, network);
    if (!projectSnap || projectSnap.distanceMiles > maxElectricalSnapMiles) {
      lookup[project.id] = { status: "unavailable" };
      continue;
    }

    const viaA = (distances.get(projectSnap.segment.aKey) ?? Infinity) + projectSnap.distanceMiles + projectSnap.fraction * projectSnap.segment.miles;
    const viaB =
      (distances.get(projectSnap.segment.bKey) ?? Infinity) + projectSnap.distanceMiles + (1 - projectSnap.fraction) * projectSnap.segment.miles;
    const electricalMiles = Math.min(viaA, viaB);

    lookup[project.id] = Number.isFinite(electricalMiles)
      ? {
          electricalMiles: roundMiles(electricalMiles),
          snapMiles: roundMiles(parcelSnap.distanceMiles + projectSnap.distanceMiles),
          source,
          status: "resolved",
        }
      : { status: "unavailable" };
  }

  return lookup;
}

async function calculateElectricalDistances(
  map: MapLibreMap | null,
  parcelCenter: LonLat,
  projects: readonly Project[],
): Promise<{ lookup: ElectricalDistanceLookup; summary: ElectricalDistanceSummary }> {
  let source = "HIFLD transmission line geometry";
  let lineStrings: Array<Array<[number, number]>> = [];

  try {
    lineStrings = await fetchHifldTransmissionLineStrings(parcelCenter);
  } catch {
    const features = map?.querySourceFeatures?.("power", { sourceLayer: "power_line" }) ?? [];
    lineStrings = lineStringsFromMapFeatures(features);
    source = "visible OpenInfraMap power-line geometry";
  }

  const lookup = estimateElectricalDistancesFromLines(parcelCenter, projects, lineStrings, source);
  const resolved = Object.values(lookup).filter((estimate) => estimate.status === "resolved").length;
  const message =
    resolved > 0
      ? `Electrical path distance resolved for ${resolved} of ${projects.length} active queue projects using ${source}; unresolved rows show straight-line fallback.`
      : "No connected public power-line path could be resolved yet; rows are using straight-line fallback.";

  return {
    lookup,
    summary: {
      message,
      resolved,
      source: resolved > 0 ? source : undefined,
      total: projects.length,
    },
  };
}

function locatorBounds(data: LocatorFeatureCollection): [[number, number], [number, number]] | undefined {
  const coordinates: Array<[number, number]> = [];

  for (const feature of data.features) {
    if (feature.geometry.type === "Point") coordinates.push(feature.geometry.coordinates);
    if (feature.geometry.type === "Polygon") coordinates.push(...feature.geometry.coordinates.flat());
  }

  if (coordinates.length === 0) return undefined;

  const lons = coordinates.map(([lon]) => lon);
  const lats = coordinates.map(([, lat]) => lat);
  const lonPad = Math.max(0.004, (Math.max(...lons) - Math.min(...lons)) * 0.35);
  const latPad = Math.max(0.004, (Math.max(...lats) - Math.min(...lats)) * 0.35);

  return [
    [Math.min(...lons) - lonPad, Math.min(...lats) - latPad],
    [Math.max(...lons) + lonPad, Math.max(...lats) + latPad],
  ];
}

function initialParcelData(): LocatorFeatureCollection {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [interconnectionData.parcel.polygon.map((point) => [point.lon, point.lat])],
        },
        properties: { name: "Parcel" },
      },
    ],
  };
}

function initialParcelCenterData(): LocatorFeatureCollection {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [interconnectionData.parcel.center.lon, interconnectionData.parcel.center.lat],
        },
        properties: { name: "Parcel" },
      },
    ],
  };
}

function parcelPolygonData(data: LocatorFeatureCollection): LocatorFeatureCollection {
  return {
    type: "FeatureCollection",
    features: data.features.filter((feature) => feature.geometry.type === "Polygon"),
  };
}

function parcelCenterData(data: LocatorFeatureCollection): LocatorFeatureCollection {
  const point = data.features.find((feature) => feature.geometry.type === "Point");
  if (point) return { type: "FeatureCollection", features: [point] };

  const bounds = locatorBounds(data);
  if (!bounds) return initialParcelCenterData();

  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [(bounds[0][0] + bounds[1][0]) / 2, (bounds[0][1] + bounds[1][1]) / 2],
        },
        properties: { name: "Parcel" },
      },
    ],
  };
}

function locatorCenterPoint(data: LocatorFeatureCollection): LonLat {
  const center = parcelCenterData(data).features[0]?.geometry;
  if (center?.type === "Point") return { lat: center.coordinates[1], lon: center.coordinates[0] };
  return defaultParcelCenter;
}

function parseCoordinateInput(value: string): LocatorFeatureCollection {
  const numbers = value
    .trim()
    .match(/-?\d+(?:\.\d+)?/g)
    ?.map(Number)
    .filter((number) => Number.isFinite(number));

  if (!numbers || numbers.length < 2) throw new Error("Enter coordinates as lat, lon or lon, lat.");

  const [first, second] = numbers;
  let lat = first;
  let lon = second;

  if (Math.abs(first) > 90 && Math.abs(second) <= 90) {
    lon = first;
    lat = second;
  }

  if (Math.abs(lat) > 90 || Math.abs(lon) > 180) throw new Error("Those coordinates are outside valid lat/lon ranges.");

  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [lon, lat] },
        properties: { name: "Input location" },
      },
    ],
  };
}

function parseKmlText(kmlText: string): LocatorFeatureCollection {
  const parser = new DOMParser();
  const document = parser.parseFromString(kmlText, "application/xml");
  const parseError = document.querySelector("parsererror");
  if (parseError) throw new Error("Could not parse that KML file.");

  const features: LocatorFeatureCollection["features"] = [];
  const coordinateNodes = Array.from(document.getElementsByTagName("coordinates"));

  for (const node of coordinateNodes) {
    const coordinates = (node.textContent ?? "")
      .trim()
      .split(/\s+/)
      .map((tuple) => tuple.split(",").map(Number))
      .filter(([lon, lat]) => Number.isFinite(lon) && Number.isFinite(lat))
      .map(([lon, lat]) => [lon, lat] as [number, number]);

    if (coordinates.length === 1) {
      features.push({
        type: "Feature",
        geometry: { type: "Point", coordinates: coordinates[0] },
        properties: { name: "Uploaded KML point" },
      });
    } else if (coordinates.length > 2) {
      const closed =
        coordinates[0][0] === coordinates[coordinates.length - 1][0] &&
        coordinates[0][1] === coordinates[coordinates.length - 1][1]
          ? coordinates
          : [...coordinates, coordinates[0]];
      features.push({
        type: "Feature",
        geometry: { type: "Polygon", coordinates: [closed] },
        properties: { name: "Uploaded KML area" },
      });
    }
  }

  if (features.length === 0) throw new Error("No point or polygon coordinates were found in that KML/KMZ.");

  return { type: "FeatureCollection", features };
}

async function parseKmlOrKmzFile(file: File): Promise<LocatorFeatureCollection> {
  const lowerName = file.name.toLowerCase();

  if (lowerName.endsWith(".kmz")) {
    const zip = await JSZip.loadAsync(await file.arrayBuffer());
    const kmlEntry = Object.values(zip.files).find((entry) => !entry.dir && entry.name.toLowerCase().endsWith(".kml"));
    if (!kmlEntry) throw new Error("That KMZ did not contain a KML file.");
    return parseKmlText(await kmlEntry.async("text"));
  }

  return parseKmlText(await file.text());
}

function infrastructurePopupHtml(
  layerId: string,
  properties: Record<string, string | number | boolean | null> | undefined,
  hifld?: Record<string, string | number | null>,
): string {
  const isLine = layerId.includes("line");
  const isSubstation = layerId.includes("substation");
  const title = cleanInfrastructureValue(
    isLine
      ? firstInfrastructureValue(properties, ["name", "ref", "operator"])
      : firstInfrastructureValue(properties, ["name", "ref", "operator", "substation"]),
  ) ?? "Not available in source";
  const isGenerator = layerId.includes("plant") || layerId.includes("generator");
  const featureType = isLine ? "Power line" : isGenerator ? "Power plant / generator" : "Substation";
  const hifldVoltage = isLine
    ? cleanInfrastructureValue(hifld?.VOLTAGE)
    : joinedAvailableInfrastructureValues(hifld?.MAX_VOLT, hifld?.MIN_VOLT);
  const displayName = firstAvailableInfrastructureValue(
    isSubstation ? hifld?.NAME : undefined,
    title,
    properties?.name,
    properties?.ref,
    properties?.operator,
    properties?.substation,
  );
  const documentedMva = lookupSubstationMva(
    title,
    properties?.name,
    properties?.ref,
    properties?.substation,
    hifld?.NAME,
    hifld?.ID,
  );
  const documentedUpgrade = lookupSubstationUpgrade(
    title,
    properties?.name,
    properties?.ref,
    properties?.substation,
    hifld?.NAME,
    hifld?.ID,
  );
  const mva = mvaRatingValue(properties, documentedMva);
  const rows = [
    ["Feature", featureType],
    ["Name", displayName],
    ["Voltage", formatKv(hifldVoltage ?? firstInfrastructureValue(properties, ["voltage", "voltage:primary", "voltage:secondary"]))],
    ["Built", formatPublicDate(firstInfrastructureValue(properties, ["start_date", "construction_date", "commissioned", "date"]))],
    [
      "Last upgraded",
      documentedUpgrade
        ? `${documentedUpgrade.lastUpgradeYear} (${documentedUpgrade.status})`
        : "No completed public upgrade record found",
    ],
    ["Upgrade record", documentedUpgrade?.upgradeName ?? "Not available"],
    ["MVA rating", mva.label],
    ["Rating type", mva.type],
    ["Operator", firstAvailableInfrastructureValue(hifld?.OWNER, properties?.operator, properties?.owner)],
    ["Status", firstAvailableInfrastructureValue(hifld?.STATUS, properties?.status)],
  ];

  return `
    <div style="font-size:12px;line-height:1.45;min-width:220px">
      <strong style="display:block;font-size:13px;margin-bottom:6px">${escapeHtml(displayName)}</strong>
      ${rows
        .map(
          ([label, value]) =>
            `<div style="display:grid;grid-template-columns:88px 1fr;gap:8px"><span style="color:#64748b">${escapeHtml(label)}</span><span>${escapeHtml(value)}</span></div>`,
        )
        .join("")}
    </div>
  `;
}

export default function InterconnectionPage() {
  const [mode, setMode] = useState<MapMode>("active");
  const [selectedYear, setSelectedYear] = useState<QueueYear>("all");
  const [selectedId, setSelectedId] = useState<string>(interconnectionData.nearbyActive[0]?.id ?? "");
  const [activeParcelCenter, setActiveParcelCenter] = useState<LonLat>(defaultParcelCenter);
  const [electricalDistances, setElectricalDistances] = useState<ElectricalDistanceLookup>({});
  const [electricalDistanceSummary, setElectricalDistanceSummary] = useState<ElectricalDistanceSummary>(electricalFallbackSummary);
  const yearOptions = useMemo(() => yearsFor(mode, activeParcelCenter, electricalDistances), [activeParcelCenter, electricalDistances, mode]);
  const visibleProjects = useMemo(
    () => projectsFor(mode, selectedYear, activeParcelCenter, electricalDistances),
    [activeParcelCenter, electricalDistances, mode, selectedYear],
  );
  const visibleNearbyProjects = useMemo(
    () => projectsFor("nearby", selectedYear, activeParcelCenter, electricalDistances),
    [activeParcelCenter, electricalDistances, selectedYear],
  );
  const allNearbyProjects = useMemo(
    () => projectsFor("nearby", "all", activeParcelCenter, electricalDistances),
    [activeParcelCenter, electricalDistances],
  );
  const nearbyActiveMw = visibleNearbyProjects.reduce((sum, project) => sum + project.capacityMw, 0);
  const nearestActive = useMemo(
    () =>
      [...interconnectionData.activeProjects].sort(
        (a, b) => distanceSortMiles(a, activeParcelCenter, electricalDistances) - distanceSortMiles(b, activeParcelCenter, electricalDistances),
      )[0],
    [activeParcelCenter, electricalDistances],
  );
  const nearbyByStage = useMemo(() => breakdownByStage(allNearbyProjects), [allNearbyProjects]);
  const nearbyByType = useMemo(() => breakdownMwByType(allNearbyProjects), [allNearbyProjects]);

  const selected = useMemo(
    () =>
      visibleProjects.find((project) => project.id === selectedId) ??
      visibleProjects[0] ??
      interconnectionData.nearbyActive[0],
    [selectedId, visibleProjects],
  );
  const selectedMva = selected ? lookupSubstationMva(selected.poi) : undefined;
  const selectedUpgrade = selected ? lookupSubstationUpgrade(selected.poi) : undefined;
  const selectedGridMetric = selected ? sppStudyGridMetrics[selected.id] : undefined;

  useEffect(() => {
    if (selectedYear !== "all" && !yearOptions.includes(selectedYear)) setSelectedYear("all");
  }, [selectedYear, yearOptions]);

  useEffect(() => {
    if (visibleProjects.length > 0 && !visibleProjects.some((project) => project.id === selectedId)) {
      setSelectedId(visibleProjects[0].id);
    }
  }, [selectedId, visibleProjects]);

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#172026]">
      <section className="border-b border-[#d7d1c5] bg-[#fffaf0] px-6 py-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7b5d2a]">
                SPP queue proximity
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-[#172026] md:text-4xl">
                Parcel 700011666 interconnection congestion view
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#48525a]">
                The default KML parcel is plotted against decoded generation queue points from all four PowerBI report pages.
                Distances use shortest available power-line path from the active parcel, with straight-line fallback when no
                connected public line path can be resolved.
              </p>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-md border border-[#b9aa90] px-4 py-2 text-sm font-semibold text-[#22313a] transition hover:bg-[#f0e7d6]"
              href={interconnectionData.source.reportUrl}
              rel="noreferrer"
              target="_blank"
            >
              Source PowerBI
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-6 py-5 md:grid-cols-4">
        <Metric label="Active queue" value={interconnectionData.stats.activeQueueCount.toString()} detail={`${formatMw(interconnectionData.stats.activeQueueMw)} MW`} />
        <Metric
          label="Nearby active"
          value={`${visibleNearbyProjects.length} (${formatMw(nearbyActiveMw)} MW)`}
          detail={selectedYear === "all" ? "within 300 miles" : `${selectedYear} within 300 miles`}
        />
        <Metric
          label="Nearest active"
          value={nearestActive ? electricalDistanceLabel(nearestActive, activeParcelCenter, electricalDistances) : "None"}
          detail={nearestActive?.id ?? "None"}
        />
        <Metric label="Decoded rows" value={interconnectionData.stats.totalDecodedProjects.toString()} detail="PowerBI queue projects" />
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-6 xl:grid-cols-[1.45fr_0.85fr]">
        <div className="overflow-hidden rounded-lg border border-[#d7d1c5] bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-[#e5ded2] p-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Queue Map</h2>
              <p className="text-xs text-[#66727a]">
                Satellite imagery with OpenInfraMap power lines, substations, plants, the parcel, and SPP queue projects.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <div className="inline-flex rounded-md border border-[#cfc5b6] bg-[#f7f2e9] p-1">
                <button
                  className={`rounded px-3 py-1.5 text-xs font-semibold ${mode === "active" ? "bg-white text-[#172026] shadow-sm" : "text-[#66727a]"}`}
                  onClick={() => setMode("active")}
                  type="button"
                >
                  Active SPP Queue
                </button>
                <button
                  className={`rounded px-3 py-1.5 text-xs font-semibold ${mode === "nearby" ? "bg-white text-[#172026] shadow-sm" : "text-[#66727a]"}`}
                  onClick={() => setMode("nearby")}
                  type="button"
                >
                  Nearby
                </button>
              </div>
              <div className="flex max-w-full flex-wrap justify-end gap-1 rounded-md border border-[#cfc5b6] bg-[#f7f2e9] p-1">
                <button
                  className={`rounded px-2.5 py-1.5 text-xs font-semibold ${selectedYear === "all" ? "bg-white text-[#172026] shadow-sm" : "text-[#66727a]"}`}
                  onClick={() => setSelectedYear("all")}
                  type="button"
                >
                  All
                </button>
                {yearOptions.map((year) => (
                  <button
                    className={`rounded px-2.5 py-1.5 text-xs font-semibold ${selectedYear === year ? "bg-white text-[#172026] shadow-sm" : "text-[#66727a]"}`}
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    type="button"
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <SatelliteInfrastructureMap
            activeParcelCenter={activeParcelCenter}
            electricalDistances={electricalDistances}
            electricalDistanceSummary={electricalDistanceSummary.message}
            projects={visibleProjects}
            selectedId={selected?.id ?? ""}
            setActiveParcelCenter={setActiveParcelCenter}
            setElectricalDistanceSummary={setElectricalDistanceSummary}
            setElectricalDistances={setElectricalDistances}
            setSelectedId={setSelectedId}
          />
        </div>

        <aside className="rounded-lg border border-[#d7d1c5] bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold">Selected Project</h2>
          {selected ? (
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-2xl font-semibold">{selected.id}</p>
                <p className="mt-1 text-sm text-[#66727a]">{selected.poi}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <Info label="Electrical distance" value={electricalDistanceLabel(selected, activeParcelCenter, electricalDistances)} />
                <Info label="Straight-line" value={`${formatMiles(geospatialMilesFromParcel(selected, activeParcelCenter))} mi`} />
                <Info label="Capacity" value={`${formatMw(selected.capacityMw)} MW`} />
                <Info label="Stage" value={selected.queueStage} />
                <Info label="Status" value={selected.status} />
                <Info label="TO" value={selected.transmissionOwner} />
                <Info label="Type" value={selected.generationType} />
                <Info
                  label="POI last upgrade"
                  value={selectedUpgrade ? `${selectedUpgrade.lastUpgradeYear} (${selectedUpgrade.status})` : "No completed public record found"}
                />
                <Info label="POI MVA" value={selectedMva?.mvaLabel ?? "No public rating found"} />
                <Info label="MVA Source" value={selectedMva?.sourceTitle ?? "Checked lookup"} />
                <Info label="SC MVA" value={selectedGridMetric ? formatMw(selectedGridMetric.shortCircuitMva) : "Not in study extract"} />
                <Info label="SCR" value={selectedGridMetric ? formatMw(selectedGridMetric.shortCircuitRatio) : "Not in study extract"} />
              </div>
              <div className="rounded-md bg-[#f6f1e8] p-3 text-xs leading-5 text-[#5b6268]">
                {electricalDistanceSummary.message} The parcel itself can be replaced with a coordinate or uploaded KML/KMZ,
                which updates the active parcel marker and recalculates distances.
              </div>
            </div>
          ) : (
            <p className="mt-3 text-sm text-[#66727a]">No nearby active queue projects were decoded.</p>
          )}
        </aside>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-6 lg:grid-cols-2">
        <Breakdown title="Nearby Active by Stage" items={nearbyByStage} />
        <Breakdown title="Nearby Active MW by Type" items={nearbyByType} suffix=" MW" />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="overflow-hidden rounded-lg border border-[#d7d1c5] bg-white shadow-sm">
          <div className="border-b border-[#e5ded2] p-4">
            <h2 className="text-lg font-semibold">Nearby Active Queue Projects</h2>
            <p className="text-xs text-[#66727a]">
              Sorted by electrical path distance where resolved, otherwise straight-line distance. Radius is 300 miles.
            </p>
            <p className="mt-1 text-xs text-[#66727a]">{electricalDistanceSummary.message}</p>
            <p className="mt-1 text-xs text-[#66727a]">
              SC MVA and SCR are point-of-interconnection grid-strength metrics from SPP study workbooks where available; they are not transformer thermal ratings.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1180px] text-left text-sm">
              <thead className="bg-[#f7f2e9] text-xs uppercase tracking-[0.08em] text-[#5b6268]">
                <tr>
                  <th className="px-3 py-3">GI</th>
                  <th className="px-3 py-3">Electrical mi</th>
                  <th className="px-3 py-3">Straight mi</th>
                  <th className="px-3 py-3">MW</th>
                  <th className="px-3 py-3">Type</th>
                  <th className="px-3 py-3">Stage</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-3 py-3">POI</th>
                  <th className="px-3 py-3">POI upgrade</th>
                  <th className="px-3 py-3">POI MVA</th>
                  <th className="px-3 py-3">SC MVA</th>
                  <th className="px-3 py-3">SCR</th>
                  <th className="px-3 py-3">TO</th>
                  <th className="px-3 py-3">COD</th>
                </tr>
              </thead>
              <tbody>
                {visibleNearbyProjects.map((project) => (
                  <NearbyProjectRow
                    electricalDistances={electricalDistances}
                    key={project.id}
                    parcelCenter={activeParcelCenter}
                    project={project}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}

function Metric({ detail, label, value }: { detail: string; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#d7d1c5] bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7b5d2a]">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-[#172026]">{value}</p>
      <p className="mt-1 text-xs text-[#66727a]">{detail}</p>
    </div>
  );
}

function breakdownByStage(projects: readonly Project[]) {
  const counts = new Map<string, number>();
  for (const project of projects) counts.set(project.queueStage, (counts.get(project.queueStage) ?? 0) + 1);
  return Array.from(counts, ([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
}

function breakdownMwByType(projects: readonly Project[]) {
  const counts = new Map<string, number>();
  for (const project of projects) counts.set(project.generationType, (counts.get(project.generationType) ?? 0) + project.capacityMw);
  return Array.from(counts, ([name, count]) => ({ name, count: roundMiles(count) })).sort((a, b) => b.count - a.count);
}

function NearbyProjectRow({
  electricalDistances,
  parcelCenter,
  project,
}: {
  electricalDistances: ElectricalDistanceLookup;
  parcelCenter: LonLat;
  project: Project;
}) {
  const mva = lookupSubstationMva(project.poi);
  const upgrade = lookupSubstationUpgrade(project.poi);
  const gridMetric = sppStudyGridMetrics[project.id];

  return (
    <tr className="border-t border-[#eee8de] hover:bg-[#fbf8f1]">
      <td className="px-3 py-3 font-semibold text-[#172026]">{project.id}</td>
      <td className="px-3 py-3" title={distanceBasisLabel(project, electricalDistances)}>
        {electricalDistanceLabel(project, parcelCenter, electricalDistances)}
      </td>
      <td className="px-3 py-3">{formatMiles(geospatialMilesFromParcel(project, parcelCenter))}</td>
      <td className="px-3 py-3">{formatMw(project.capacityMw)}</td>
      <td className="px-3 py-3">
        <span className="inline-flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: projectColor(project) }} />
          {project.generationType}
        </span>
      </td>
      <td className="px-3 py-3">
        <span className="rounded px-2 py-1 text-xs font-semibold text-white" style={{ background: stageColor(project.queueStage) }}>
          {project.queueStage}
        </span>
      </td>
      <td className="px-3 py-3">{project.status}</td>
      <td className="max-w-[260px] px-3 py-3 text-[#4b565e]">{project.poi}</td>
      <td className="max-w-[220px] px-3 py-3 text-[#4b565e]">
        {upgrade ? (
          <span title={upgrade.sourceDetail}>{upgrade.lastUpgradeYear} ({upgrade.status})</span>
        ) : (
          "No completed public record found"
        )}
      </td>
      <td className="max-w-[220px] px-3 py-3 text-[#4b565e]">
        {mva ? (
          <span title={`${mva.ratingType}. ${mva.sourceDetail}`}>{mva.mvaLabel}</span>
        ) : (
          "No public rating found"
        )}
      </td>
      <td className="px-3 py-3" title={gridMetric?.sourceTitle}>
        {gridMetric ? formatMw(gridMetric.shortCircuitMva) : "Not in extract"}
      </td>
      <td className="px-3 py-3" title={gridMetric?.sourceTitle}>
        {gridMetric ? formatMw(gridMetric.shortCircuitRatio) : "Not in extract"}
      </td>
      <td className="px-3 py-3">{project.transmissionOwner}</td>
      <td className="px-3 py-3">{project.commercialOperationDate ?? "Pending"}</td>
    </tr>
  );
}

function SatelliteInfrastructureMap({
  activeParcelCenter,
  electricalDistances,
  electricalDistanceSummary,
  projects,
  selectedId,
  setActiveParcelCenter,
  setElectricalDistanceSummary,
  setElectricalDistances,
  setSelectedId,
}: {
  activeParcelCenter: LonLat;
  electricalDistances: ElectricalDistanceLookup;
  electricalDistanceSummary: string;
  projects: readonly Project[];
  selectedId: string;
  setActiveParcelCenter: (value: LonLat) => void;
  setElectricalDistanceSummary: (value: ElectricalDistanceSummary) => void;
  setElectricalDistances: (value: ElectricalDistanceLookup) => void;
  setSelectedId: (value: string) => void;
}) {
  const [coordinateInput, setCoordinateInput] = useState("");
  const [locatorMessage, setLocatorMessage] = useState("Enter coordinates or upload KML/KMZ to make it the active parcel.");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const popupRef = useRef<MapLibrePopup | null>(null);
  const currentParcelBoundsRef = useRef<[[number, number], [number, number]] | undefined>(locatorBounds(initialParcelData()));
  const selectedIdRef = useRef(selectedId);
  const projectsRef = useRef(projects);
  const activeParcelCenterRef = useRef(activeParcelCenter);
  const electricalDistancesRef = useRef(electricalDistances);
  const distanceRequestRef = useRef(0);
  const hifldCacheRef = useRef<Map<string, Record<string, string | number | null> | undefined>>(new Map());
  const hoverKeyRef = useRef("");
  const visibleTypeColors = useMemo(() => {
    const visibleTypes = new Set<string>(projects.map((project) => project.generationType));
    return Object.entries(typeColors).filter(([type]) => visibleTypes.has(type));
  }, [projects]);

  const refreshElectricalDistances = (map: MapLibreMap | null, parcelCenter: LonLat) => {
    const requestId = distanceRequestRef.current + 1;
    distanceRequestRef.current = requestId;
    setElectricalDistances({});
    setElectricalDistanceSummary({
      message: "Calculating electrical path distance from the active parcel...",
      resolved: 0,
      total: interconnectionData.activeProjects.length,
    });

    void calculateElectricalDistances(map, parcelCenter, interconnectionData.activeProjects)
      .then(({ lookup, summary }) => {
        if (distanceRequestRef.current !== requestId) return;
        setElectricalDistances(lookup);
        setElectricalDistanceSummary(summary);
      })
      .catch(() => {
        if (distanceRequestRef.current !== requestId) return;
        const lookup = Object.fromEntries(
          interconnectionData.activeProjects.map((project) => [project.id, { status: "unavailable" as const }]),
        );
        setElectricalDistances(lookup);
        setElectricalDistanceSummary({
          message: "Electrical path distance could not be calculated from public line geometry; showing straight-line fallback.",
          resolved: 0,
          total: interconnectionData.activeProjects.length,
        });
      });
  };

  const applyLocatorData = (data: LocatorFeatureCollection, message: string) => {
    mapRef.current?.getSource("parcel")?.setData?.(parcelPolygonData(data));
    mapRef.current?.getSource("parcel-center")?.setData?.(parcelCenterData(data));
    const bounds = locatorBounds(data);
    const center = locatorCenterPoint(data);
    activeParcelCenterRef.current = center;
    setActiveParcelCenter(center);
    if (bounds) currentParcelBoundsRef.current = bounds;
    if (bounds) mapRef.current?.fitBounds(bounds, { padding: 96, duration: 900 });
    refreshElectricalDistances(mapRef.current, center);
    setLocatorMessage(`${message} This is now the active parcel on the map.`);
  };

  const handleCoordinateSubmit = () => {
    try {
      applyLocatorData(parseCoordinateInput(coordinateInput), "Zoomed to input coordinates.");
    } catch (error) {
      setLocatorMessage(error instanceof Error ? error.message : "Could not parse those coordinates.");
    }
  };

  const handleFileUpload = async (file: File | undefined) => {
    if (!file) return;

    try {
      applyLocatorData(await parseKmlOrKmzFile(file), `Loaded ${file.name} and zoomed to its geometry.`);
    } catch (error) {
      setLocatorMessage(error instanceof Error ? error.message : "Could not parse that file.");
    }
  };

  useEffect(() => {
    selectedIdRef.current = selectedId;
    projectsRef.current = projects;
    activeParcelCenterRef.current = activeParcelCenter;
    electricalDistancesRef.current = electricalDistances;
    const source = mapRef.current?.getSource("queue-projects");
    source?.setData?.(mapDataFor(projects, selectedId, activeParcelCenter, electricalDistances));
  }, [activeParcelCenter, electricalDistances, projects, selectedId]);

  useEffect(() => {
    let cancelled = false;
    let map: MapLibreMap | null = null;
    let zoomButton: HTMLButtonElement | null = null;

    const loadMapLibre = async () => {
      if (!document.querySelector('link[data-maplibre="true"]')) {
        const link = document.createElement("link");
        link.dataset.maplibre = "true";
        link.href = "https://unpkg.com/maplibre-gl@5.10.0/dist/maplibre-gl.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
      }

      if (!window.maplibregl) {
        await new Promise<void>((resolve, reject) => {
          const existing = document.querySelector<HTMLScriptElement>('script[data-maplibre="true"]');
          if (existing) {
            existing.addEventListener("load", () => resolve(), { once: true });
            existing.addEventListener("error", () => reject(new Error("MapLibre failed to load")), { once: true });
            return;
          }

          const script = document.createElement("script");
          script.dataset.maplibre = "true";
          script.src = "https://unpkg.com/maplibre-gl@5.10.0/dist/maplibre-gl.js";
          script.async = true;
          script.addEventListener("load", () => resolve(), { once: true });
          script.addEventListener("error", () => reject(new Error("MapLibre failed to load")), { once: true });
          document.head.appendChild(script);
        });
      }

      if (cancelled || !containerRef.current || !window.maplibregl) return;

      const points = [
        ...interconnectionData.activeProjects.map((project) => [project.lon, project.lat] as [number, number]),
        ...interconnectionData.parcel.polygon.map((point) => [point.lon, point.lat] as [number, number]),
      ];
      const lons = points.map(([lon]) => lon);
      const lats = points.map(([, lat]) => lat);
      const fitBounds: [[number, number], [number, number]] = [
        [Math.min(...lons) - 0.9, Math.min(...lats) - 0.7],
        [Math.max(...lons) + 0.9, Math.max(...lats) + 0.7],
      ];
      const parcelLons = interconnectionData.parcel.polygon.map((point) => point.lon);
      const parcelLats = interconnectionData.parcel.polygon.map((point) => point.lat);
      const parcelBounds: [[number, number], [number, number]] = [
        [Math.min(...parcelLons) - 0.018, Math.min(...parcelLats) - 0.018],
        [Math.max(...parcelLons) + 0.018, Math.max(...parcelLats) + 0.018],
      ];

      map = new window.maplibregl.Map({
        attributionControl: true,
        center: [interconnectionData.parcel.center.lon, interconnectionData.parcel.center.lat],
        container: containerRef.current,
        maxZoom: 18,
        minZoom: 3,
        style: {
          version: 8,
          glyphs: "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
          sources: {
            satellite: {
              type: "raster",
              tiles: [
                "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
              ],
              tileSize: 256,
              attribution: "Imagery © Esri",
            },
            power: {
              type: "vector",
              tiles: ["https://openinframap.org/map/power/{z}/{x}/{y}.pbf"],
              maxzoom: 17,
              attribution:
                'Power infrastructure © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="https://openinframap.org/copyright">OpenInfraMap</a>',
            },
          },
          layers: [
            { id: "satellite", type: "raster", source: "satellite" },
            {
              id: "power-line-casing",
              type: "line",
              source: "power",
              "source-layer": "power_line",
              paint: {
                "line-color": "#111827",
                "line-opacity": 0.72,
                "line-width": ["interpolate", ["linear"], ["zoom"], 4, 1.2, 10, 3.2, 15, 7],
              },
            },
            {
              id: "power-line",
              type: "line",
              source: "power",
              "source-layer": "power_line",
              paint: {
                "line-color": "#00e5ff",
                "line-opacity": 0.92,
                "line-width": ["interpolate", ["linear"], ["zoom"], 4, 0.6, 10, 1.8, 15, 4],
              },
            },
            {
              id: "power-substations",
              type: "fill",
              source: "power",
              "source-layer": "power_substation",
              paint: {
                "fill-color": assetColors.substation,
                "fill-opacity": 0.78,
                "fill-outline-color": "#111827",
              },
            },
            {
              id: "power-substation-points",
              type: "circle",
              source: "power",
              "source-layer": "power_substation_point",
              paint: {
                "circle-color": assetColors.substation,
                "circle-opacity": 1,
                "circle-radius": ["interpolate", ["linear"], ["zoom"], 4, 2.5, 10, 5, 15, 9],
                "circle-stroke-color": "#111827",
                "circle-stroke-width": 2,
              },
            },
            {
              id: "power-plants",
              type: "fill",
              source: "power",
              "source-layer": "power_plant",
              paint: {
                "fill-color": assetColors.generator,
                "fill-opacity": 0.34,
                "fill-outline-color": "#ffffff",
              },
            },
            {
              id: "generators",
              type: "circle",
              source: "power",
              "source-layer": "power_generator",
              paint: {
                "circle-color": assetColors.generator,
                "circle-opacity": 0.82,
                "circle-radius": ["interpolate", ["linear"], ["zoom"], 7, 1.5, 12, 4, 16, 7],
                "circle-stroke-color": "#ffffff",
                "circle-stroke-width": 1,
              },
            },
          ],
        },
        zoom: 6,
      });
      mapRef.current = map;

      map.addControl(new window.maplibregl.NavigationControl({ showCompass: false }), "top-right");
      map.fitBounds(fitBounds, { padding: 42, duration: 0 });

      map.on("load", () => {
        if (!map) return;

        map.addSource("parcel", {
          type: "geojson",
          data: initialParcelData(),
        });
        map.addSource("parcel-center", {
          type: "geojson",
          data: initialParcelCenterData(),
        });
        map.addLayer({
          id: "parcel-fill",
          type: "fill",
          source: "parcel",
          paint: { "fill-color": "#f44336", "fill-opacity": 0.48 },
        });
        map.addLayer({
          id: "parcel-line",
          type: "line",
          source: "parcel",
          paint: { "line-color": "#ffffff", "line-width": 8 },
        });
        map.addLayer({
          id: "parcel-line-red",
          type: "line",
          source: "parcel",
          paint: { "line-color": "#b71c1c", "line-width": 4 },
        });
        map.addLayer({
          id: "parcel-halo",
          type: "circle",
          source: "parcel-center",
          paint: {
            "circle-color": "#ef4444",
            "circle-opacity": 0.24,
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 4, 16, 9, 28, 14, 44],
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": 2,
          },
        });
        map.addLayer({
          id: "parcel-dot",
          type: "circle",
          source: "parcel-center",
          paint: {
            "circle-color": "#b71c1c",
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 4, 6, 9, 9, 14, 12],
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": 3,
          },
        });
        map.addLayer({
          id: "parcel-label",
          type: "symbol",
          source: "parcel-center",
          layout: {
            "text-anchor": "left",
            "text-field": "PARCEL",
            "text-font": ["Noto Sans Regular"],
            "text-offset": [1.2, -0.2],
            "text-size": ["interpolate", ["linear"], ["zoom"], 4, 13, 9, 17, 14, 22],
          },
          paint: {
            "text-color": "#ffffff",
            "text-halo-color": "#b71c1c",
            "text-halo-width": 3,
          },
        });

        map.addSource("queue-projects", {
          type: "geojson",
          data: mapDataFor(
            projectsRef.current,
            selectedIdRef.current,
            activeParcelCenterRef.current,
            electricalDistancesRef.current,
          ),
        });
        map.addLayer({
          id: "queue-project-hit-area",
          type: "circle",
          source: "queue-projects",
          paint: {
            "circle-color": "rgba(255,255,255,0.01)",
            "circle-opacity": 0.01,
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 3, 14, 7, 18, 11, 24],
          },
        });
        map.addLayer({
          id: "queue-projects",
          type: "circle",
          source: "queue-projects",
          paint: {
            "circle-color": ["get", "color"],
            "circle-opacity": ["case", ["get", "nearby"], 0.92, 0.48],
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["sqrt", ["to-number", ["get", "capacityMw"]]],
              5,
              4,
              38,
              12,
            ],
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": 2,
          },
        });
        map.addLayer({
          id: "selected-project",
          type: "circle",
          source: "queue-projects",
          filter: ["==", ["get", "selected"], true],
          paint: {
            "circle-color": "transparent",
            "circle-radius": 16,
            "circle-stroke-color": "#111827",
            "circle-stroke-width": 3,
          },
        });

        map.on("click", "queue-projects", (event) => {
          const projectId = String(event.features?.[0]?.properties?.id ?? "");
          if (!projectId || !window.maplibregl || !map) return;

          setSelectedId(projectId);
          popupRef.current?.remove();
          const props = event.features?.[0]?.properties ?? {};
          const mw = Number(props.capacityMw);
          const capacityLabel = Number.isFinite(mw) && mw > 0 ? `${formatMw(mw)} MW` : "MW not listed";
          const electricalMiles = Number(props.electricalMiles);
          const electricalLabel =
            Number.isFinite(electricalMiles) && electricalMiles > 0
              ? `${formatMiles(electricalMiles)} mi electrical`
              : `${escapeHtml(props.geospatialMiles)} mi straight-line fallback`;
          popupRef.current = new window.maplibregl.Popup({ closeButton: false, offset: 12 })
            .setLngLat(event.lngLat)
            .setHTML(
              `<strong>${escapeHtml(projectId)}</strong><br>${escapeHtml(props.generationType)} | ${escapeHtml(capacityLabel)}<br>POI voltage: ${escapeHtml(formatPoiVoltage(props.poiVoltageKv))}<br>${escapeHtml(props.queueStage)}<br>${electricalLabel} from parcel`,
            )
            .addTo(map);
        });
        map.on("mouseenter", "queue-projects", () => {
          if (map) map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "queue-projects", () => {
          if (map) map.getCanvas().style.cursor = "";
        });

        const infrastructureLayers = [
          "power-line",
          "power-substations",
          "power-substation-points",
          "power-plants",
          "generators",
        ];
        if (!window.maplibregl) return;
        const hoverPopup = new window.maplibregl.Popup({ closeButton: false, closeOnClick: false, offset: 12 });
        for (const layer of infrastructureLayers) {
          map.on("mousemove", layer, (event) => {
            if (!map || !event.features?.[0]) return;
            if (event.point) {
              const nearQueueProject = map.queryRenderedFeatures(
                [
                  [event.point.x - 12, event.point.y - 12],
                  [event.point.x + 12, event.point.y + 12],
                ],
                { layers: ["queue-project-hit-area", "queue-projects"] },
              );
              if (nearQueueProject.length > 0) {
                hoverPopup.remove();
                return;
              }
            }
            map.getCanvas().style.cursor = "help";
            const kind = event.features[0].layer?.id?.includes("line") ? "line" : "substation";
            const key = `${kind}:${event.lngLat.lng.toFixed(4)},${event.lngLat.lat.toFixed(4)}`;
            hoverKeyRef.current = key;
            hoverPopup
              .setLngLat(event.lngLat)
              .setHTML(infrastructurePopupHtml(event.features[0].layer?.id ?? layer, event.features[0].properties))
              .addTo(map);

            if (!hifldCacheRef.current.has(key)) {
              hifldCacheRef.current.set(key, undefined);
              void fetchHifldAttributes(kind, event.lngLat.lng, event.lngLat.lat)
                .then((hifld) => {
                  hifldCacheRef.current.set(key, hifld);
                  if (hoverKeyRef.current !== key || !map) return;
                  hoverPopup
                    .setLngLat(event.lngLat)
                    .setHTML(infrastructurePopupHtml(event.features?.[0]?.layer?.id ?? layer, event.features?.[0]?.properties, hifld))
                    .addTo(map);
                })
                .catch(() => {
                  hifldCacheRef.current.set(key, undefined);
                });
            } else {
              hoverPopup
                .setLngLat(event.lngLat)
                .setHTML(
                  infrastructurePopupHtml(
                    event.features[0].layer?.id ?? layer,
                    event.features[0].properties,
                    hifldCacheRef.current.get(key),
                  ),
                )
                .addTo(map);
            }
          });
          map.on("mouseleave", layer, () => {
            if (map) map.getCanvas().style.cursor = "";
            hoverKeyRef.current = "";
            hoverPopup.remove();
          });
        }

        map.once("idle", () => {
          refreshElectricalDistances(map, activeParcelCenterRef.current);
        });
      });

      zoomButton = document.createElement("button");
      zoomButton.className =
        "absolute right-5 top-5 z-10 rounded-md border border-white/30 bg-black/70 px-3 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-black";
      zoomButton.textContent = "Zoom to parcel";
      zoomButton.type = "button";
      zoomButton.addEventListener("click", () => map?.fitBounds(currentParcelBoundsRef.current ?? parcelBounds, { padding: 88, duration: 800 }));
      containerRef.current.parentElement?.appendChild(zoomButton);
    };

    void loadMapLibre();

    return () => {
      cancelled = true;
      popupRef.current?.remove();
      zoomButton?.remove();
      map?.remove();
      if (mapRef.current === map) mapRef.current = null;
    };
  }, [setSelectedId]);

  return (
    <div>
      <div className="grid gap-3 border-b border-[#e5ded2] bg-[#fbf8f1] p-4 lg:grid-cols-[1fr_auto_1fr] lg:items-end">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7b5d2a]">
            Coordinates
          </span>
          <input
            className="mt-2 w-full rounded-md border border-[#cfc5b6] bg-white px-3 py-2 text-sm text-[#172026] outline-none transition focus:border-[#7b5d2a]"
            onChange={(event) => setCoordinateInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleCoordinateSubmit();
            }}
            placeholder="29.9267, -97.7486"
            type="text"
            value={coordinateInput}
          />
        </label>
        <button
          className="rounded-md border border-[#b9aa90] bg-white px-4 py-2 text-sm font-semibold text-[#22313a] transition hover:bg-[#f0e7d6]"
          onClick={handleCoordinateSubmit}
          type="button"
        >
          Set Parcel
        </button>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7b5d2a]">
            KML / KMZ parcel
          </span>
          <input
            accept=".kml,.kmz,application/vnd.google-earth.kml+xml,application/vnd.google-earth.kmz"
            className="mt-2 w-full rounded-md border border-[#cfc5b6] bg-white px-3 py-2 text-sm text-[#172026] file:mr-3 file:rounded file:border-0 file:bg-[#2f4858] file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
            onChange={(event) => void handleFileUpload(event.target.files?.[0])}
            type="file"
          />
        </label>
        <div className="space-y-1 text-xs leading-5 text-[#66727a] lg:col-span-3">
          <p>{locatorMessage}</p>
          <p>{electricalDistanceSummary}</p>
        </div>
      </div>
      <div className="relative bg-[#111827] p-3">
      <div className="h-[34rem] w-full overflow-hidden rounded-md" ref={containerRef} />
      <div className="pointer-events-none absolute left-5 top-5 z-10 max-w-[17rem] rounded-md border border-white/20 bg-black/65 p-3 text-xs leading-5 text-white shadow-lg">
        <div className="mb-1 font-semibold">Generation Type</div>
        {visibleTypeColors.map(([type, color]) => (
          <div className="flex items-center gap-2" key={type}>
            <span className="h-2.5 w-2.5 rounded-full border border-white/70" style={{ background: color }} />
            <span>{type}</span>
          </div>
        ))}
        <div className="mb-1 mt-3 font-semibold">Map Assets</div>
        <div className="flex items-center gap-2">
          <span className="h-0.5 w-5 rounded-full" style={{ background: assetColors.powerLine }} />
          <span>Power line</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm border border-black" style={{ background: assetColors.substation }} />
          <span>Substation</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-sm border border-white" style={{ background: assetColors.generator }} />
          <span>Power plant / generator</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full border-2 border-white" style={{ background: assetColors.parcel }} />
          <span>Parcel</span>
        </div>
      </div>
    </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-[#e5ded2] bg-[#fbf8f1] p-3">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[#7b5d2a]">{label}</p>
      <p className="mt-1 font-semibold text-[#172026]">{value}</p>
    </div>
  );
}

function Breakdown({ items, suffix = "", title }: { items: readonly { name: string; count: number }[]; suffix?: string; title: string }) {
  const max = Math.max(...items.map((item) => item.count), 1);

  return (
    <div className="rounded-lg border border-[#d7d1c5] bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div key={item.name}>
            <div className="mb-1 flex items-center justify-between gap-3 text-sm">
              <span className="font-medium">{item.name}</span>
              <span className="text-[#66727a]">
                {formatMw(item.count)}
                {suffix}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[#ece5da]">
              <div className="h-full rounded-full bg-[#2f4858]" style={{ width: `${Math.max(5, (item.count / max) * 100)}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
