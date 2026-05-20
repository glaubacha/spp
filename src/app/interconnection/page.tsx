"use client";

import { type Dispatch, type SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import JSZip from "jszip";
import { interconnectionData } from "@/data/interconnection-data";
import {
  interconnectionFyiProjects,
  interconnectionFyiSource,
  type InterconnectionFyiProject,
} from "@/data/interconnection-fyi-projects";
import { networkUpgradeCostsByCluster, networkUpgradeCostsByProject, type NetworkUpgradeProjectCost } from "@/data/network-upgrade-costs";
import { sppStudyGridMetrics } from "@/data/spp-study-grid-metrics";
import { substationMvaRatings, type SubstationMvaRating } from "@/data/substation-mva-ratings";
import { substationUpgradeRecords, type SubstationUpgradeRecord } from "@/data/substation-upgrade-years";

type Project = (typeof interconnectionData.activeProjects)[number];
type MapMode = "active" | "nearby";
type QueueYear = "all" | string;
type LonLat = { lon: number; lat: number };
type NearbyProjectFilters = {
  codFrom: string;
  codTo: string;
  electricalMax: string;
  electricalMin: string;
  straightMax: string;
  straightMin: string;
};
type ElectricalDistanceEstimate = {
  electricalMiles?: number;
  electricalMilesExact?: number;
  linePathMiles?: number;
  parcelSnapMiles?: number;
  projectSnapMiles?: number;
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
  easeTo?: (options?: Record<string, unknown>) => void;
  fitBounds: (bounds: [[number, number], [number, number]], options?: Record<string, unknown>) => void;
  getCanvas: () => HTMLCanvasElement;
  getLayer: (id: string) => unknown;
  getZoom?: () => number;
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
  existingPlant: "#f8fafc",
  parcel: "#b71c1c",
  powerLine: "#00e5ff",
  substation: "#39ff14",
};

const existingPowerPlants = {
  count: 15528,
  dataUrl: "/data/powerplantsinfo-plants.geojson",
  sourceName: "PowerPlantsInfo.org",
  sourceUrl: "https://www.powerplantsinfo.org/",
  sourceUpdated: "2026-04-26",
};

const existingPowerPlantSourceId = "existing-power-plant-source";
const existingPowerPlantLayerIds = [
  "existing-power-plant-clusters",
  "existing-power-plant-cluster-count",
  "existing-power-plant-hit-area",
  "existing-power-plants",
];

const existingPlantFuelColors = {
  biomass: "#84cc16",
  coal: "#64748b",
  cluster: "#334155",
  gas: "#fb7185",
  geothermal: "#c084fc",
  hydro: "#38bdf8",
  nuclear: "#f472b6",
  other: "#f8fafc",
  petroleum: "#f97316",
  solar: "#ffd166",
  storage: "#a78bfa",
  wasteHeat: "#2dd4bf",
  wind: "#38d996",
} as const;

const existingPlantFuelLegend = [
  { color: existingPlantFuelColors.solar, label: "Existing solar" },
  { color: existingPlantFuelColors.wind, label: "Existing wind" },
  { color: existingPlantFuelColors.hydro, label: "Existing hydro" },
  { color: existingPlantFuelColors.storage, label: "Existing storage" },
  { color: existingPlantFuelColors.gas, label: "Existing gas" },
  { color: existingPlantFuelColors.petroleum, label: "Existing oil/petroleum" },
  { color: existingPlantFuelColors.coal, label: "Existing coal" },
  { color: existingPlantFuelColors.nuclear, label: "Existing nuclear" },
  { color: existingPlantFuelColors.biomass, label: "Existing biomass/waste" },
  { color: existingPlantFuelColors.geothermal, label: "Existing geothermal" },
  { color: existingPlantFuelColors.wasteHeat, label: "Existing waste heat" },
  { color: existingPlantFuelColors.cluster, label: "Existing plant cluster" },
  { color: existingPlantFuelColors.other, label: "Other existing plants" },
];

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
const interconnectionFyiProjectLookup: Record<string, InterconnectionFyiProject> = interconnectionFyiProjects;
const emptyNearbyProjectFilters: NearbyProjectFilters = {
  codFrom: "",
  codTo: "",
  electricalMax: "",
  electricalMin: "",
  straightMax: "",
  straightMin: "",
};

function formatMw(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
}

function formatUsd(value: number | null | undefined): string {
  if (value === null || value === undefined) return "Not available";
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: value >= 1_000_000 ? 1 : 0,
    notation: value >= 1_000_000 ? "compact" : "standard",
    style: "currency",
  }).format(value);
}

function formatUsdPerKw(value: number | null | undefined): string {
  if (value === null || value === undefined) return "Not available";
  return `$${new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value)}/kW`;
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

function geospatialMilesExactFromParcel(project: Project, parcelCenter: LonLat): number {
  return haversineMiles(parcelCenter, { lat: project.lat, lon: project.lon });
}

function geospatialMilesFromParcel(project: Project, parcelCenter: LonLat): number {
  return roundMiles(geospatialMilesExactFromParcel(project, parcelCenter));
}

function electricalMilesForProject(project: Project, lookup: ElectricalDistanceLookup): number | undefined {
  const value = lookup[project.id]?.electricalMilesExact ?? lookup[project.id]?.electricalMiles;
  return Number.isFinite(value) ? value : undefined;
}

function distanceSortMiles(project: Project, parcelCenter: LonLat, lookup: ElectricalDistanceLookup): number {
  return electricalMilesForProject(project, lookup) ?? geospatialMilesExactFromParcel(project, parcelCenter);
}

function electricalDistanceLabel(project: Project, parcelCenter: LonLat, lookup: ElectricalDistanceLookup): string {
  const electricalMiles = electricalMilesForProject(project, lookup);
  if (electricalMiles !== undefined) return `${formatMiles(roundMiles(electricalMiles))} mi`;
  if (Object.keys(lookup).length === 0) return "Calculating...";
  return `No path; ${formatMiles(geospatialMilesFromParcel(project, parcelCenter))} mi straight-line`;
}

function distanceBasisLabel(project: Project, lookup: ElectricalDistanceLookup): string {
  const estimate = lookup[project.id];
  if (estimate?.status === "resolved" && estimate.source) {
    const details = [
      estimate.source,
      estimate.linePathMiles !== undefined ? `public-line path: ${formatMiles(estimate.linePathMiles)} mi` : undefined,
      estimate.projectSnapMiles !== undefined ? `project-to-line snap: ${formatMiles(estimate.projectSnapMiles)} mi` : undefined,
      estimate.parcelSnapMiles !== undefined ? `parcel-to-line snap: ${formatMiles(estimate.parcelSnapMiles)} mi` : undefined,
    ].filter(Boolean);
    return details.join("; ");
  }
  if (Object.keys(lookup).length === 0) return "Calculating network path";
  return "Straight-line fallback";
}

function linePathDistanceLabel(project: Project, lookup: ElectricalDistanceLookup): string {
  const value = lookup[project.id]?.linePathMiles;
  return typeof value === "number" && Number.isFinite(value) ? `${formatMiles(value)} mi` : "Not resolved";
}

function projectSnapDistanceLabel(project: Project, lookup: ElectricalDistanceLookup): string {
  const value = lookup[project.id]?.projectSnapMiles;
  return typeof value === "number" && Number.isFinite(value) ? `${formatMiles(value)} mi` : "Not resolved";
}

function formatPoiVoltage(value: string | number | boolean | null | undefined): string {
  if (isUnavailableSentinel(value)) return "Not listed";
  const numeric = numericValuesFrom(value)[0];
  if (!Number.isFinite(numeric) || numeric <= 0 || isSentinelNumber(numeric)) return "Not listed";
  return `${new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(numeric)} kV`;
}

function networkUpgradeCostFor(project: Pick<Project, "id">): NetworkUpgradeProjectCost | undefined {
  return networkUpgradeCostsByProject[project.id];
}

function networkUpgradeCostLabel(cost: NetworkUpgradeProjectCost | undefined): string {
  if (!cost) return "No SPP cost record found";
  if (cost.allocatedCostUsd === null) return cost.costUnavailableReason ?? "Not available in SPP workbook";
  return formatUsd(cost.allocatedCostUsd);
}

function networkUpgradeCostPerKwLabel(cost: NetworkUpgradeProjectCost | undefined): string {
  if (!cost) return "Not found";
  if (cost.costPerKw === null) return cost.costUnavailableReason ?? "Not available";
  return formatUsdPerKw(cost.costPerKw);
}

function networkUpgradeCostTitle(cost: NetworkUpgradeProjectCost | undefined): string | undefined {
  if (!cost) return undefined;
  const topUpgrades = cost.topUpgrades
    .map((upgrade) => `${upgrade.costUsd === null ? "TBD" : formatUsd(upgrade.costUsd)} - ${upgrade.name}`)
    .join("\n");
  return [cost.sourceDetail, topUpgrades].filter(Boolean).join("\n");
}

function interconnectionFyiFor(project: Pick<Project, "id">): InterconnectionFyiProject | undefined {
  return interconnectionFyiProjectLookup[project.id];
}

function sourceDateLabel(value: string | null | undefined): string {
  return value ?? "Not listed";
}

function interconnectionFyiStatusLabel(record: InterconnectionFyiProject | undefined, fallback: string): string {
  return record?.status ?? fallback;
}

function targetCommercialOperationDateLabel(record: InterconnectionFyiProject | undefined, project: Project): string {
  return record?.targetCommercialOperationDate ?? project.commercialOperationDate ?? "Pending";
}

function targetCommercialOperationDateValue(record: InterconnectionFyiProject | undefined, project: Project): string | undefined {
  return record?.targetCommercialOperationDate ?? project.commercialOperationDate ?? undefined;
}

function ownerEntityLabel(record: InterconnectionFyiProject | undefined): string {
  if (!record) return "No Interconnection.fyi record";
  return record.owner ?? "Not public on Interconnection.fyi";
}

function withdrawnDateLabel(record: InterconnectionFyiProject | undefined): string {
  if (!record) return "Not listed";
  if (record.withdrawnDate) return record.withdrawnDate;
  return record.status === "Withdrawn" ? "Not listed" : "Not withdrawn";
}

function projectColor(project: Project) {
  return typeColors[project.generationType] ?? typeColors.Unknown;
}

function generationTypeLabel(type: string): string {
  return type === "Battery/Storage" ? "BESS" : type;
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

function numberFilterValue(value: string): number | undefined {
  if (!value.trim()) return undefined;
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : undefined;
}

function dateFilterValue(value: string): number | undefined {
  if (!value.trim()) return undefined;
  const date = new Date(`${value}T00:00:00Z`);
  const time = date.getTime();
  return Number.isFinite(time) ? time : undefined;
}

function dateValue(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const date = new Date(`${value}T00:00:00Z`);
  const time = date.getTime();
  return Number.isFinite(time) ? time : undefined;
}

function withinNumberRange(value: number, minValue: string, maxValue: string): boolean {
  const min = numberFilterValue(minValue);
  const max = numberFilterValue(maxValue);
  if (min !== undefined && value < min) return false;
  if (max !== undefined && value > max) return false;
  return true;
}

function withinDateRange(value: string | undefined, fromValue: string, toValue: string): boolean {
  const from = dateFilterValue(fromValue);
  const to = dateFilterValue(toValue);
  if (from === undefined && to === undefined) return true;

  const time = dateValue(value);
  if (time === undefined) return false;
  if (from !== undefined && time < from) return false;
  if (to !== undefined && time > to) return false;
  return true;
}

function hasNearbyProjectFilters(filters: NearbyProjectFilters): boolean {
  return Object.values(filters).some((value) => value.trim() !== "");
}

function nearbyProjectMatchesFilters(
  project: Project,
  filters: NearbyProjectFilters,
  parcelCenter: LonLat,
  lookup: ElectricalDistanceLookup,
): boolean {
  const interconnectionFyi = interconnectionFyiFor(project);
  const electricalMiles = distanceSortMiles(project, parcelCenter, lookup);
  const straightMiles = geospatialMilesExactFromParcel(project, parcelCenter);
  const targetCod = targetCommercialOperationDateValue(interconnectionFyi, project);

  return (
    withinNumberRange(electricalMiles, filters.electricalMin, filters.electricalMax) &&
    withinNumberRange(straightMiles, filters.straightMin, filters.straightMax) &&
    withinDateRange(targetCod, filters.codFrom, filters.codTo)
  );
}

function mapDataFor(
  projectSet: readonly Project[],
  selectedId: string,
  parcelCenter: LonLat,
  lookup: ElectricalDistanceLookup,
): GeoJsonFeatureCollection {
  return {
    type: "FeatureCollection",
    features: projectSet.map((project) => {
      const interconnectionFyi = interconnectionFyiFor(project);

      return {
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
          fyiSourceUrl: interconnectionFyi?.sourceUrl ?? "",
          fyiStatus: interconnectionFyiStatusLabel(interconnectionFyi, project.status),
          geospatialMiles: geospatialMilesFromParcel(project, parcelCenter),
          generationType: generationTypeLabel(project.generationType),
          linePathMiles: lookup[project.id]?.linePathMiles ?? "",
          nearby: distanceSortMiles(project, parcelCenter, lookup) <= 300,
          ownerEntity: interconnectionFyi?.owner ?? "",
          poi: project.poi,
          poiVoltageKv: project.poiVoltageKv ?? project.poi,
          projectSnapMiles: lookup[project.id]?.projectSnapMiles ?? "",
          queueDate: interconnectionFyi?.queueDate ?? "",
          queueStage: project.queueStage,
          selected: project.id === selectedId,
          status: project.status,
          targetCommercialOperationDate: targetCommercialOperationDateLabel(interconnectionFyi, project),
          transmissionOwner: project.transmissionOwner,
          withdrawnDate: interconnectionFyi?.withdrawnDate ?? "",
        },
      };
    }),
  };
}

function existingPlantNumberLabel(value: string | number | boolean | null | undefined, suffix = ""): string {
  const numeric = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(numeric)) return "Not listed";
  return `${new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(numeric)}${suffix}`;
}

function existingPlantPopupHtml(properties: Record<string, string | number | boolean | null> | undefined): string {
  const name = firstAvailableInfrastructureValue(properties?.name);
  const fuel = firstAvailableInfrastructureValue(properties?.fuel);
  const technology = firstAvailableInfrastructureValue(properties?.technologies);
  const capacity = existingPlantNumberLabel(properties?.capacityMw, " MW");
  const owner = firstAvailableInfrastructureValue(properties?.owner);
  const location = [properties?.county, properties?.state].map(cleanInfrastructureValue).filter(Boolean).join(", ");
  const year = firstAvailableInfrastructureValue(properties?.operatingYear);
  const status = firstAvailableInfrastructureValue(properties?.status);
  const gridRegion = firstAvailableInfrastructureValue(properties?.gridRegion);
  const slug = cleanInfrastructureValue(properties?.slug);
  const sourceLink = slug
    ? `<br><a href="https://www.powerplantsinfo.org/plant/${escapeHtml(slug)}" target="_blank" rel="noreferrer">Open PowerPlantsInfo record</a>`
    : "";

  return [
    `<strong>${escapeHtml(name)}</strong>`,
    `Existing power plant | ${escapeHtml(fuel)} | ${escapeHtml(capacity)}`,
    location ? escapeHtml(location) : undefined,
    `Plant type: ${escapeHtml(fuel)}`,
    `Technology: ${escapeHtml(technology)}`,
    `Owner: ${escapeHtml(owner)}`,
    `Build/operating year: ${escapeHtml(year)}`,
    `Status: ${escapeHtml(status)}`,
    `Grid region: ${escapeHtml(gridRegion)}`,
    `Source: ${escapeHtml(existingPowerPlants.sourceName)} (${escapeHtml(existingPowerPlants.sourceUpdated)})${sourceLink}`,
  ]
    .filter(Boolean)
    .join("<br>");
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
    const linePathMiles = electricalMiles - parcelSnap.distanceMiles - projectSnap.distanceMiles;

    lookup[project.id] = Number.isFinite(electricalMiles)
      ? {
          electricalMiles: roundMiles(electricalMiles),
          electricalMilesExact: electricalMiles,
          linePathMiles: roundMiles(Math.max(0, linePathMiles)),
          parcelSnapMiles: roundMiles(parcelSnap.distanceMiles),
          projectSnapMiles: roundMiles(projectSnap.distanceMiles),
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
  const featureType = isLine ? "Power line" : "Substation";
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
  const [nearbyProjectFilters, setNearbyProjectFilters] = useState<NearbyProjectFilters>(emptyNearbyProjectFilters);
  const yearOptions = useMemo(() => yearsFor(mode, activeParcelCenter, electricalDistances), [activeParcelCenter, electricalDistances, mode]);
  const visibleProjects = useMemo(
    () => projectsFor(mode, selectedYear, activeParcelCenter, electricalDistances),
    [activeParcelCenter, electricalDistances, mode, selectedYear],
  );
  const visibleNearbyProjects = useMemo(
    () => projectsFor("nearby", selectedYear, activeParcelCenter, electricalDistances),
    [activeParcelCenter, electricalDistances, selectedYear],
  );
  const filteredNearbyProjects = useMemo(
    () =>
      visibleNearbyProjects.filter((project) =>
        nearbyProjectMatchesFilters(project, nearbyProjectFilters, activeParcelCenter, electricalDistances),
      ),
    [activeParcelCenter, electricalDistances, nearbyProjectFilters, visibleNearbyProjects],
  );
  const allNearbyProjects = useMemo(
    () => projectsFor("nearby", "all", activeParcelCenter, electricalDistances),
    [activeParcelCenter, electricalDistances],
  );
  const nearbyActiveMw = visibleNearbyProjects.reduce((sum, project) => sum + project.capacityMw, 0);
  const nearbyNetworkCostSummary = useMemo(() => summarizeNetworkUpgradeCosts(visibleNearbyProjects), [visibleNearbyProjects]);
  const nearbyNetworkClusterSummaries = useMemo(() => networkUpgradeClusterSummaries(visibleNearbyProjects), [visibleNearbyProjects]);
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
  const selectedInterconnectionFyi = selected ? interconnectionFyiFor(selected) : undefined;
  const selectedNetworkCost = selected ? networkUpgradeCostFor(selected) : undefined;

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

      <section className="mx-auto grid max-w-7xl gap-4 px-6 py-5 md:grid-cols-2 xl:grid-cols-5">
        <Metric label="Active SPP Queue" value={interconnectionData.stats.activeQueueCount.toString()} detail={`${formatMw(interconnectionData.stats.activeQueueMw)} MW`} />
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
        <Metric
          label="Nearby est. NU cost"
          value={formatUsd(nearbyNetworkCostSummary.knownCostUsd)}
          detail={`${nearbyNetworkCostSummary.knownCount}/${visibleNearbyProjects.length} source-backed${nearbyNetworkCostSummary.tbdCount ? `, ${nearbyNetworkCostSummary.tbdCount} TBD` : ""}`}
        />
      </section>

      <section className="mx-auto max-w-7xl space-y-5 px-6 pb-6">
        <div className="overflow-hidden rounded-lg border border-[#d7d1c5] bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-[#e5ded2] p-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold">Queue Map</h2>
              <p className="text-xs text-[#66727a]">
                Satellite imagery with OpenInfraMap grid assets, PowerPlantsInfo existing plants, the parcel, and SPP queue projects.
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
              <div className="flex max-w-full flex-wrap items-center justify-end gap-1 rounded-md border border-[#cfc5b6] bg-[#f7f2e9] p-1">
                <span className="px-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#7b5d2a]">COD Year</span>
                <button
                  className={`rounded px-2.5 py-1.5 text-xs font-semibold ${selectedYear === "all" ? "bg-white text-[#172026] shadow-sm" : "text-[#66727a]"}`}
                  onClick={() => setSelectedYear("all")}
                  type="button"
                >
                  All CODs
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
              <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-2xl font-semibold">{selected.id}</p>
                  <p className="mt-1 text-sm text-[#66727a]">{selected.poi}</p>
                </div>
                {selectedInterconnectionFyi ? (
                  <a className="mt-2 inline-block text-xs font-semibold text-[#246b8f] underline-offset-2 hover:underline" href={selectedInterconnectionFyi.sourceUrl} rel="noreferrer" target="_blank">
                    Open Interconnection.fyi record
                  </a>
                ) : null}
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-4 xl:grid-cols-5">
                <Info label="Electrical est." value={electricalDistanceLabel(selected, activeParcelCenter, electricalDistances)} />
                <Info label="Public-line path" value={linePathDistanceLabel(selected, electricalDistances)} />
                <Info label="Project-line snap" value={projectSnapDistanceLabel(selected, electricalDistances)} />
                <Info label="Straight-line" value={`${formatMiles(geospatialMilesFromParcel(selected, activeParcelCenter))} mi`} />
                <Info label="Capacity" value={`${formatMw(selected.capacityMw)} MW`} />
                <Info label="Stage" value={selected.queueStage} />
                <Info label="Est. NU cost" value={networkUpgradeCostLabel(selectedNetworkCost)} />
                <Info label="Est. NU $/kW" value={networkUpgradeCostPerKwLabel(selectedNetworkCost)} />
                <Info label="Status" value={interconnectionFyiStatusLabel(selectedInterconnectionFyi, selected.status)} />
                <Info label="Queue date" value={sourceDateLabel(selectedInterconnectionFyi?.queueDate)} />
                <Info label="Target COD" value={targetCommercialOperationDateLabel(selectedInterconnectionFyi, selected)} />
                <Info label="Owner/entity" value={ownerEntityLabel(selectedInterconnectionFyi)} />
                <Info label="Withdrawn date" value={withdrawnDateLabel(selectedInterconnectionFyi)} />
                <Info label="TO" value={selected.transmissionOwner} />
                <Info label="Type" value={generationTypeLabel(selected.generationType)} />
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
                <div className="font-semibold text-[#172026]">Network upgrade cost source</div>
                {selectedNetworkCost ? (
                  <>
                    <a className="text-[#246b8f] underline-offset-2 hover:underline" href={selectedNetworkCost.sourceUrl} rel="noreferrer" target="_blank">
                      {selectedNetworkCost.sourceTitle}
                    </a>
                    <div className="mt-1">{selectedNetworkCost.sourceDetail}</div>
                    {selectedNetworkCost.topUpgrades.length > 0 ? (
                      <div className="mt-2">
                        Top driver: {selectedNetworkCost.topUpgrades[0].costUsd === null ? "TBD" : formatUsd(selectedNetworkCost.topUpgrades[0].costUsd)} -{" "}
                        {selectedNetworkCost.topUpgrades[0].name}
                      </div>
                    ) : null}
                  </>
                ) : (
                  "No matching SPP study workbook cost record found for this queue position."
                )}
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

      <section className="mx-auto max-w-7xl px-6 pb-6">
        <ClusterNetworkUpgradeCosts summaries={nearbyNetworkClusterSummaries} />
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
              Sorted by exact electrical estimate where resolved, otherwise exact straight-line distance. Radius is 300 miles.
            </p>
            <p className="mt-1 text-xs text-[#66727a]">{electricalDistanceSummary.message}</p>
            <p className="mt-1 text-xs text-[#66727a]">
              SC MVA and SCR are point-of-interconnection grid-strength metrics from SPP study workbooks where available; they are not transformer thermal ratings.
            </p>
            <p className="mt-1 text-xs text-[#66727a]">
              Electrical estimates include public-line path plus snap-to-line distances. Estimated NU cost is the SPP assigned network-upgrade/interconnection cost for that queue request from the latest matched study workbook.
            </p>
            <p className="mt-1 text-xs text-[#66727a]">
              Queue date, target COD, status, and withdrawn date are joined from public {interconnectionFyiSource.name} project records. Owner/entity uses the public Interconnecting Entity field when available.
            </p>
          </div>
          <NearbyProjectFilterControls
            filters={nearbyProjectFilters}
            filteredCount={filteredNearbyProjects.length}
            setFilters={setNearbyProjectFilters}
            totalCount={visibleNearbyProjects.length}
          />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1780px] text-left text-sm">
              <thead className="bg-[#f7f2e9] text-xs uppercase tracking-[0.08em] text-[#5b6268]">
                <tr>
                  <th className="px-3 py-3">GI</th>
                  <th className="px-3 py-3">Electrical est. mi</th>
                  <th className="px-3 py-3">Project-line snap</th>
                  <th className="px-3 py-3">Straight mi</th>
                  <th className="px-3 py-3">MW</th>
                  <th className="px-3 py-3">Type</th>
                  <th className="px-3 py-3">Stage</th>
                  <th className="px-3 py-3">Est. NU cost</th>
                  <th className="px-3 py-3">Est. NU $/kW</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-3 py-3">Queue date</th>
                  <th className="px-3 py-3">Target COD</th>
                  <th className="px-3 py-3">Owner/entity</th>
                  <th className="px-3 py-3">Withdrawn</th>
                  <th className="px-3 py-3">POI</th>
                  <th className="px-3 py-3">POI upgrade</th>
                  <th className="px-3 py-3">POI MVA</th>
                  <th className="px-3 py-3">SC MVA</th>
                  <th className="px-3 py-3">SCR</th>
                  <th className="px-3 py-3">TO</th>
                </tr>
              </thead>
              <tbody>
                {filteredNearbyProjects.length > 0 ? (
                  filteredNearbyProjects.map((project) => (
                    <NearbyProjectRow
                      electricalDistances={electricalDistances}
                      key={project.id}
                      parcelCenter={activeParcelCenter}
                      project={project}
                    />
                  ))
                ) : (
                  <tr className="border-t border-[#eee8de]">
                    <td className="px-3 py-8 text-center text-sm text-[#66727a]" colSpan={20}>
                      No nearby active queue projects match the current filters.
                    </td>
                  </tr>
                )}
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

function NearbyProjectFilterControls({
  filters,
  filteredCount,
  setFilters,
  totalCount,
}: {
  filters: NearbyProjectFilters;
  filteredCount: number;
  setFilters: Dispatch<SetStateAction<NearbyProjectFilters>>;
  totalCount: number;
}) {
  const active = hasNearbyProjectFilters(filters);
  const updateFilter = (key: keyof NearbyProjectFilters, value: string) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  return (
    <div className="border-b border-[#e5ded2] bg-[#fffdf8] p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <FilterInput
            label="Electrical mi min"
            onChange={(value) => updateFilter("electricalMin", value)}
            placeholder="0"
            value={filters.electricalMin}
          />
          <FilterInput
            label="Electrical mi max"
            onChange={(value) => updateFilter("electricalMax", value)}
            placeholder="300"
            value={filters.electricalMax}
          />
          <FilterInput
            label="Straight mi min"
            onChange={(value) => updateFilter("straightMin", value)}
            placeholder="0"
            value={filters.straightMin}
          />
          <FilterInput
            label="Straight mi max"
            onChange={(value) => updateFilter("straightMax", value)}
            placeholder="300"
            value={filters.straightMax}
          />
          <FilterInput
            label="COD from"
            onChange={(value) => updateFilter("codFrom", value)}
            type="date"
            value={filters.codFrom}
          />
          <FilterInput
            label="COD to"
            onChange={(value) => updateFilter("codTo", value)}
            type="date"
            value={filters.codTo}
          />
        </div>
        <div className="flex items-center justify-between gap-3 lg:flex-col lg:items-end">
          <p className="whitespace-nowrap text-xs font-semibold text-[#4b565e]">
            Showing {filteredCount} of {totalCount}
          </p>
          <button
            className="rounded-md border border-[#c8bda9] px-3 py-2 text-xs font-semibold text-[#22313a] transition hover:bg-[#f0e7d6] disabled:cursor-not-allowed disabled:opacity-45"
            disabled={!active}
            onClick={() => setFilters(emptyNearbyProjectFilters)}
            type="button"
          >
            Clear filters
          </button>
        </div>
      </div>
    </div>
  );
}

function FilterInput({
  label,
  onChange,
  placeholder,
  type = "number",
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "date" | "number";
  value: string;
}) {
  return (
    <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#5b6268]">
      <span>{label}</span>
      <input
        className="mt-1 w-full rounded-md border border-[#cfc5b6] bg-white px-2.5 py-2 text-sm font-medium normal-case tracking-normal text-[#172026] outline-none transition focus:border-[#7b5d2a] focus:ring-2 focus:ring-[#eadcc1]"
        inputMode={type === "number" ? "decimal" : undefined}
        min={type === "number" ? "0" : undefined}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        step={type === "number" ? "0.1" : undefined}
        type={type}
        value={value}
      />
    </label>
  );
}

function ClusterNetworkUpgradeCosts({ summaries }: { summaries: ReturnType<typeof networkUpgradeClusterSummaries> }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#d7d1c5] bg-white shadow-sm">
      <div className="border-b border-[#e5ded2] p-4">
        <h2 className="text-lg font-semibold">Estimated Network Upgrade Costs by Queue Cluster</h2>
        <p className="mt-1 text-xs leading-5 text-[#66727a]">
          Source-backed SPP study workbook totals, plus summed assigned upgrade costs for the nearby projects currently in view.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] text-left text-sm">
          <thead className="bg-[#f7f2e9] text-xs uppercase tracking-[0.08em] text-[#5b6268]">
            <tr>
              <th className="px-3 py-3">Cluster</th>
              <th className="px-3 py-3">SPP total NU estimate</th>
              <th className="px-3 py-3">Cluster MW</th>
              <th className="px-3 py-3">Median $/kW</th>
              <th className="px-3 py-3">Nearby assigned NU</th>
              <th className="px-3 py-3">Coverage</th>
              <th className="px-3 py-3">Source</th>
            </tr>
          </thead>
          <tbody>
            {summaries.map((summary) => (
              <tr className="border-t border-[#eee8de]" key={summary.stage}>
                <td className="px-3 py-3 font-semibold text-[#172026]">{summary.stage}</td>
                <td className="px-3 py-3">{formatUsd(summary.clusterCost?.totalNetworkUpgradeCostUsd)}</td>
                <td className="px-3 py-3">{summary.clusterCost?.clusterMw ? `${formatMw(summary.clusterCost.clusterMw)} MW` : "Not available"}</td>
                <td className="px-3 py-3">{formatUsdPerKw(summary.clusterCost?.medianCostPerKw)}</td>
                <td className="px-3 py-3">{formatUsd(summary.allocatedCostUsd)}</td>
                <td className="px-3 py-3 text-[#4b565e]">
                  {summary.knownCount}/{summary.projectCount} costed
                  {summary.tbdCount ? `, ${summary.tbdCount} TBD` : ""}
                  {summary.missingCount ? `, ${summary.missingCount} missing` : ""}
                </td>
                <td className="max-w-[280px] px-3 py-3 text-[#4b565e]">
                  {summary.clusterCost ? (
                    <a className="text-[#246b8f] underline-offset-2 hover:underline" href={summary.clusterCost.sourceUrl} rel="noreferrer" target="_blank" title={summary.clusterCost.sourceDetail}>
                      {summary.clusterCost.posted}
                    </a>
                  ) : (
                    "No SPP source matched"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
  for (const project of projects) {
    const label = generationTypeLabel(project.generationType);
    counts.set(label, (counts.get(label) ?? 0) + project.capacityMw);
  }
  return Array.from(counts, ([name, count]) => ({ name, count: roundMiles(count) })).sort((a, b) => b.count - a.count);
}

function summarizeNetworkUpgradeCosts(projects: readonly Project[]) {
  let knownCostUsd = 0;
  let knownCount = 0;
  let tbdCount = 0;
  let missingCount = 0;

  for (const project of projects) {
    const cost = networkUpgradeCostFor(project);
    if (!cost) {
      missingCount += 1;
    } else if (cost.allocatedCostUsd === null) {
      tbdCount += 1;
    } else {
      knownCostUsd += cost.allocatedCostUsd;
      knownCount += 1;
    }
  }

  return { knownCostUsd, knownCount, missingCount, tbdCount };
}

function networkUpgradeClusterSummaries(projects: readonly Project[]) {
  const summaries = new Map<
    string,
    {
      allocatedCostUsd: number;
      knownCount: number;
      missingCount: number;
      projectCount: number;
      stage: string;
      tbdCount: number;
    }
  >();

  for (const project of projects) {
    const summary =
      summaries.get(project.queueStage) ??
      {
        allocatedCostUsd: 0,
        knownCount: 0,
        missingCount: 0,
        projectCount: 0,
        stage: project.queueStage,
        tbdCount: 0,
      };
    const cost = networkUpgradeCostFor(project);
    summary.projectCount += 1;
    if (!cost) {
      summary.missingCount += 1;
    } else if (cost.allocatedCostUsd === null) {
      summary.tbdCount += 1;
    } else {
      summary.allocatedCostUsd += cost.allocatedCostUsd;
      summary.knownCount += 1;
    }
    summaries.set(project.queueStage, summary);
  }

  return Array.from(summaries.values())
    .map((summary) => ({ ...summary, clusterCost: networkUpgradeCostsByCluster[summary.stage] }))
    .sort((a, b) => (b.clusterCost?.totalNetworkUpgradeCostUsd ?? 0) - (a.clusterCost?.totalNetworkUpgradeCostUsd ?? 0));
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
  const interconnectionFyi = interconnectionFyiFor(project);
  const networkCost = networkUpgradeCostFor(project);

  return (
    <tr className="border-t border-[#eee8de] hover:bg-[#fbf8f1]">
      <td className="px-3 py-3 font-semibold text-[#172026]">{project.id}</td>
      <td className="px-3 py-3" title={distanceBasisLabel(project, electricalDistances)}>
        {electricalDistanceLabel(project, parcelCenter, electricalDistances)}
      </td>
      <td className="px-3 py-3" title="Distance from queue point to nearest mapped public transmission line used by the electrical estimate.">
        {projectSnapDistanceLabel(project, electricalDistances)}
      </td>
      <td className="px-3 py-3">{formatMiles(geospatialMilesFromParcel(project, parcelCenter))}</td>
      <td className="px-3 py-3">{formatMw(project.capacityMw)}</td>
      <td className="px-3 py-3">
        <span className="inline-flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: projectColor(project) }} />
          {generationTypeLabel(project.generationType)}
        </span>
      </td>
      <td className="px-3 py-3">
        <span className="rounded px-2 py-1 text-xs font-semibold text-white" style={{ background: stageColor(project.queueStage) }}>
          {project.queueStage}
        </span>
      </td>
      <td className="px-3 py-3" title={networkUpgradeCostTitle(networkCost)}>
        {networkUpgradeCostLabel(networkCost)}
      </td>
      <td className="px-3 py-3" title={networkCost?.sourceTitle}>
        {networkUpgradeCostPerKwLabel(networkCost)}
      </td>
      <td className="px-3 py-3">{interconnectionFyiStatusLabel(interconnectionFyi, project.status)}</td>
      <td className="px-3 py-3">{sourceDateLabel(interconnectionFyi?.queueDate)}</td>
      <td className="px-3 py-3">{targetCommercialOperationDateLabel(interconnectionFyi, project)}</td>
      <td className="max-w-[220px] px-3 py-3 text-[#4b565e]" title={interconnectionFyi ? `${interconnectionFyi.ownerSourceField} from ${interconnectionFyiSource.name}` : undefined}>
        {ownerEntityLabel(interconnectionFyi)}
      </td>
      <td className="px-3 py-3">{withdrawnDateLabel(interconnectionFyi)}</td>
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
  const [showExistingPlants, setShowExistingPlants] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const popupRef = useRef<MapLibrePopup | null>(null);
  const currentParcelBoundsRef = useRef<[[number, number], [number, number]] | undefined>(locatorBounds(initialParcelData()));
  const showExistingPlantsRef = useRef(showExistingPlants);
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
    showExistingPlantsRef.current = showExistingPlants;
    const map = mapRef.current;
    if (!map) return;
    const visibility = showExistingPlants ? "visible" : "none";
    for (const layerId of existingPowerPlantLayerIds) {
      if (map.getLayer(layerId)) map.setLayoutProperty(layerId, "visibility", visibility);
    }
  }, [showExistingPlants]);

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

        map.addSource(existingPowerPlantSourceId, {
          type: "geojson",
          data: existingPowerPlants.dataUrl,
          cluster: true,
          clusterMaxZoom: 5,
          clusterRadius: 44,
          attribution: `Existing power plants © <a href="${existingPowerPlants.sourceUrl}">${existingPowerPlants.sourceName}</a>`,
        });
        map.addLayer({
          id: "existing-power-plant-clusters",
          type: "circle",
          source: existingPowerPlantSourceId,
          filter: ["has", "point_count"],
          layout: { visibility: showExistingPlantsRef.current ? "visible" : "none" },
          paint: {
            "circle-color": existingPlantFuelColors.cluster,
            "circle-opacity": 0.88,
            "circle-radius": ["step", ["get", "point_count"], 15, 50, 21, 200, 28, 1000, 36],
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": 2,
          },
        });
        map.addLayer({
          id: "existing-power-plant-cluster-count",
          type: "symbol",
          source: existingPowerPlantSourceId,
          filter: ["has", "point_count"],
          layout: {
            visibility: showExistingPlantsRef.current ? "visible" : "none",
            "text-field": ["get", "point_count_abbreviated"],
            "text-font": ["Noto Sans Regular"],
            "text-size": 12,
          },
          paint: {
            "text-color": "#ffffff",
            "text-halo-color": "#111827",
            "text-halo-width": 1,
          },
        });
        map.addLayer({
          id: "existing-power-plant-hit-area",
          type: "circle",
          source: existingPowerPlantSourceId,
          filter: ["!", ["has", "point_count"]],
          layout: { visibility: showExistingPlantsRef.current ? "visible" : "none" },
          paint: {
            "circle-color": "rgba(255,255,255,0.01)",
            "circle-opacity": 0.01,
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 10, 9, 14, 13, 20],
          },
        });
        map.addLayer({
          id: "existing-power-plants",
          type: "circle",
          source: existingPowerPlantSourceId,
          filter: ["!", ["has", "point_count"]],
          layout: { visibility: showExistingPlantsRef.current ? "visible" : "none" },
          paint: {
            "circle-color": [
              "match",
              ["get", "fuelCode"],
              "WND",
              existingPlantFuelColors.wind,
              "SUN",
              existingPlantFuelColors.solar,
              "WAT",
              existingPlantFuelColors.hydro,
              "MWH",
              existingPlantFuelColors.storage,
              ["BIT", "LIG", "RC", "SUB", "WC"],
              existingPlantFuelColors.coal,
              ["NG", "OG", "BFG", "SGC"],
              existingPlantFuelColors.gas,
              ["DFO", "JF", "KER", "PC", "RFO", "WO"],
              existingPlantFuelColors.petroleum,
              "NUC",
              existingPlantFuelColors.nuclear,
              ["AB", "BLQ", "LFG", "MSW", "OBG", "OBL", "OBS", "SLW", "WDL", "WDS"],
              existingPlantFuelColors.biomass,
              "GEO",
              existingPlantFuelColors.geothermal,
              "WH",
              existingPlantFuelColors.wasteHeat,
              existingPlantFuelColors.other,
            ],
            "circle-opacity": 0.9,
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["sqrt", ["to-number", ["get", "capacityMw"]]],
              1,
              3,
              25,
              6,
              85,
              12,
            ],
            "circle-stroke-color": "#111827",
            "circle-stroke-width": 2,
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
          const networkCost = networkUpgradeCostsByProject[projectId];
          const electricalMiles = Number(props.electricalMiles);
          const geospatialMiles = Number(props.geospatialMiles);
          const projectSnapMiles = Number(props.projectSnapMiles);
          const electricalLabel =
            Number.isFinite(electricalMiles) && electricalMiles > 0
              ? `${formatMiles(roundMiles(electricalMiles))} mi electrical est.`
              : `${escapeHtml(props.geospatialMiles)} mi straight-line fallback`;
          const straightLabel = Number.isFinite(geospatialMiles) ? `${formatMiles(geospatialMiles)} mi straight-line` : "";
          const snapLabel = Number.isFinite(projectSnapMiles) ? `${formatMiles(projectSnapMiles)} mi project-line snap` : "";
          const sourceUrl = String(props.fyiSourceUrl ?? "");
          const sourceLink = sourceUrl
            ? `<br><a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">Open Interconnection.fyi record</a>`
            : "";
          const withdrawnLine = props.withdrawnDate ? `<br>Withdrawn date: ${escapeHtml(props.withdrawnDate)}` : "";
          popupRef.current = new window.maplibregl.Popup({ closeButton: false, offset: 12 })
            .setLngLat(event.lngLat)
            .setHTML(
              `<strong>${escapeHtml(projectId)}</strong><br>${escapeHtml(props.generationType)} | ${escapeHtml(capacityLabel)}<br>Status: ${escapeHtml(props.fyiStatus ?? props.status)}<br>Queue date: ${escapeHtml(props.queueDate || "Not listed")}<br>Target COD: ${escapeHtml(props.targetCommercialOperationDate || "Pending")}<br>Owner/entity: ${escapeHtml(props.ownerEntity || "Not public on Interconnection.fyi")}${withdrawnLine}<br>POI voltage: ${escapeHtml(formatPoiVoltage(props.poiVoltageKv))}<br>Est. NU cost: ${escapeHtml(networkUpgradeCostLabel(networkCost))}<br>${escapeHtml(props.queueStage)}<br>${escapeHtml(electricalLabel)} from parcel${straightLabel ? `<br>${escapeHtml(straightLabel)}` : ""}${snapLabel ? `<br>${escapeHtml(snapLabel)}` : ""}${sourceLink}`,
            )
            .addTo(map);
        });
        map.on("mouseenter", "queue-projects", () => {
          if (map) map.getCanvas().style.cursor = "pointer";
        });
        map.on("mouseleave", "queue-projects", () => {
          if (map) map.getCanvas().style.cursor = "";
        });

        map.on("click", "existing-power-plant-clusters", (event) => {
          if (!map) return;
          map.easeTo?.({
            center: [event.lngLat.lng, event.lngLat.lat],
            duration: 550,
            zoom: Math.min(12, (map.getZoom?.() ?? 6) + 2),
          });
        });
        map.on("mouseenter", "existing-power-plant-clusters", () => {
          if (map) map.getCanvas().style.cursor = "zoom-in";
        });
        map.on("mouseleave", "existing-power-plant-clusters", () => {
          if (map) map.getCanvas().style.cursor = "";
        });

        const maplibregl = window.maplibregl;
        if (!maplibregl) return;
        const plantHoverPopup = new maplibregl.Popup({ closeButton: false, closeOnClick: false, offset: 12 });
        const existingPlantFeatureAt = (event: MapLibreEvent): MapLibreFeature | undefined => {
          if (!map || !event.point) return event.features?.[0];
          const nearbyPlants = map.queryRenderedFeatures(
            [
              [event.point.x - 16, event.point.y - 16],
              [event.point.x + 16, event.point.y + 16],
            ],
            { layers: ["existing-power-plants", "existing-power-plant-hit-area"] },
          );
          return nearbyPlants.find((feature) => feature.properties?.plantId) ?? event.features?.[0];
        };
        const showExistingPlantPopup = (event: MapLibreEvent, closeOnClick = false) => {
          if (!map || !event.features?.[0]) return;
          if (event.point) {
            const nearQueueProject = map.queryRenderedFeatures(
              [
                [event.point.x - 10, event.point.y - 10],
                [event.point.x + 10, event.point.y + 10],
              ],
              { layers: ["queue-project-hit-area", "queue-projects"] },
            );
            if (nearQueueProject.length > 0) {
              plantHoverPopup.remove();
              return;
            }
          }

          const plantFeature = existingPlantFeatureAt(event);
          if (!plantFeature?.properties) return;
          const popup = closeOnClick
            ? new maplibregl.Popup({ closeButton: true, offset: 12 })
            : plantHoverPopup;
          popup
            .setLngLat(event.lngLat)
            .setHTML(existingPlantPopupHtml(plantFeature.properties))
            .addTo(map);
          if (closeOnClick) {
            popupRef.current?.remove();
            popupRef.current = popup;
          }
        };

        map.on("mousemove", "existing-power-plant-hit-area", (event) => {
          if (!map) return;
          map.getCanvas().style.cursor = "help";
          showExistingPlantPopup(event);
        });
        map.on("mouseleave", "existing-power-plant-hit-area", () => {
          if (map) map.getCanvas().style.cursor = "";
          plantHoverPopup.remove();
        });
        map.on("click", "existing-power-plants", (event) => {
          showExistingPlantPopup(event, true);
        });

        const infrastructureLayers = [
          "power-line",
          "power-substations",
          "power-substation-points",
        ];
        const hoverPopup = new maplibregl.Popup({ closeButton: false, closeOnClick: false, offset: 12 });
        for (const layer of infrastructureLayers) {
          map.on("mousemove", layer, (event) => {
            if (!map || !event.features?.[0]) return;
            if (event.point) {
              const nearbyInteractivePoint = map.queryRenderedFeatures(
                [
                  [event.point.x - 12, event.point.y - 12],
                  [event.point.x + 12, event.point.y + 12],
                ],
                { layers: ["queue-project-hit-area", "queue-projects"] },
              );
              if (nearbyInteractivePoint.length > 0) {
                hoverPopup.remove();
                return;
              }
              const nearbyExistingPlant = map.queryRenderedFeatures(
                [
                  [event.point.x - 16, event.point.y - 16],
                  [event.point.x + 16, event.point.y + 16],
                ],
                { layers: ["existing-power-plants", "existing-power-plant-hit-area"] },
              );
              const plantFeature = nearbyExistingPlant.find((feature) => feature.properties?.plantId);
              if (plantFeature?.properties) {
                hoverPopup.remove();
                map.getCanvas().style.cursor = "help";
                plantHoverPopup
                  .setLngLat(event.lngLat)
                  .setHTML(existingPlantPopupHtml(plantFeature.properties))
                  .addTo(map);
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
        <div className="absolute right-5 top-16 z-10 rounded-md border border-white/25 bg-black/70 px-3 py-2 text-xs text-white shadow-lg">
          <label className="flex items-center gap-2">
            <input
              checked={showExistingPlants}
              className="h-4 w-4 accent-[#f8fafc]"
              onChange={(event) => setShowExistingPlants(event.target.checked)}
              type="checkbox"
            />
            <span className="font-semibold">Existing plants</span>
            <span className="text-white/70">15,528</span>
          </label>
        </div>
        <div className="pointer-events-none absolute left-3 top-3 z-10 max-w-[17rem] rounded border border-white/20 bg-black/65 p-2 text-[0.65rem] leading-4 text-white shadow-lg">
          <div className="mb-0.5 font-semibold">SPP Queue Projects</div>
          {visibleTypeColors.map(([type, color]) => (
            <div className="flex items-center gap-1.5" key={type}>
              <span className="h-2 w-2 rounded-full border border-white/70" style={{ background: color }} />
              <span>{generationTypeLabel(type)}</span>
            </div>
          ))}
          <div className="mb-0.5 mt-2 font-semibold">Existing Plants</div>
          <div className="grid grid-cols-2 gap-x-2">
            {existingPlantFuelLegend.map((item) => (
              <div className="flex items-center gap-1.5" key={item.label}>
                <span className="h-2 w-2 rounded-full border border-[#111827]" style={{ background: item.color }} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mb-0.5 mt-2 font-semibold">Map Assets</div>
          <div className="flex items-center gap-1.5">
            <span className="h-0.5 w-4 rounded-full" style={{ background: assetColors.powerLine }} />
            <span>Power line</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm border border-black" style={{ background: assetColors.substation }} />
            <span>Substation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full border border-white" style={{ background: assetColors.parcel }} />
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
      <p className="mt-1 break-words text-sm font-semibold leading-5 text-[#172026]">{value}</p>
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
