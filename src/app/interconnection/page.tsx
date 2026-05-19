"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import JSZip from "jszip";
import { interconnectionData } from "@/data/interconnection-data";
import { sppStudyGridMetrics } from "@/data/spp-study-grid-metrics";
import { substationMvaRatings, type SubstationMvaRating } from "@/data/substation-mva-ratings";

type Project = (typeof interconnectionData.activeProjects)[number];
type MapMode = "active" | "nearby";
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
  Solar: "#ee7b51",
  Thermal: "#23395d",
  Wind: "#42a579",
  Unknown: "#718096",
};

const stageColors = ["#2f4858", "#e4572e", "#17bebb", "#ffc914", "#6a4c93", "#76b041"];

function formatMw(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
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

function mapDataFor(mode: MapMode, selectedId: string): GeoJsonFeatureCollection {
  const projectSet = mode === "nearby" ? interconnectionData.nearbyActive : interconnectionData.activeProjects;

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
        distanceMiles: project.distanceMiles,
        generationType: project.generationType,
        nearby: project.distanceMiles <= 300,
        poi: project.poi,
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

function firstInfrastructureValue(
  properties: Record<string, string | number | boolean | null> | undefined,
  keys: string[],
): string {
  if (!properties) return "Not available in source";

  for (const key of keys) {
    const value = properties[key];
    if (value !== undefined && value !== null && String(value).trim() !== "") return String(value);
  }

  return "Not available in source";
}

function formatKv(value: string | number | boolean | null | undefined): string {
  if (value === undefined || value === null || value === "") return "Not available in source";

  const raw = String(value);
  const values = raw
    .split(/[;,/|]+/)
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const numeric = Number(part.replace(/[^\d.-]/g, ""));
      if (!Number.isFinite(numeric)) return part;
      const kv = numeric > 1000 ? numeric / 1000 : numeric;
      return `${new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(kv)} kV`;
    });

  return values.length > 0 ? values.join(" / ") : "Not available in source";
}

function formatMva(value: string | number | boolean | null | undefined): string {
  if (value === undefined || value === null || value === "") return "Not available in source";
  const cleaned = String(value).replace(/[^\d.-]/g, "");
  if (!cleaned) return "Not available in source";
  const numeric = Number(cleaned);
  if (!Number.isFinite(numeric)) return String(value);
  return `${new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(numeric)} MVA`;
}

function firstNumericValue(
  properties: Record<string, string | number | boolean | null> | undefined,
  keys: string[],
): { key: string; value: number } | undefined {
  if (!properties) return undefined;

  for (const key of keys) {
    const raw = properties[key];
    if (raw === undefined || raw === null || raw === "") continue;
    const numeric = Number(String(raw).split(/[;,/|]+/)[0]?.replace(/[^\d.-]/g, ""));
    if (Number.isFinite(numeric) && numeric > 0) return { key, value: numeric };
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
  if (value === undefined || value === null || value === "") return "Not available in source";
  if (typeof value === "number") {
    const date = new Date(value);
    if (Number.isFinite(date.getTime())) return date.toISOString().slice(0, 10);
  }
  return String(value);
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
  const title = isLine
    ? firstInfrastructureValue(properties, ["name", "ref", "operator"])
    : firstInfrastructureValue(properties, ["name", "ref", "operator", "substation"]);
  const featureType = isLine ? "Power line" : layerId.includes("plant") ? "Power plant" : "Substation / grid asset";
  const hifldVoltage = isLine
    ? hifld?.VOLTAGE
    : hifld?.MAX_VOLT
      ? `${hifld.MAX_VOLT}${hifld.MIN_VOLT && hifld.MIN_VOLT !== hifld.MAX_VOLT ? ` / ${hifld.MIN_VOLT}` : ""}`
      : undefined;
  const documentedMva = lookupSubstationMva(
    title,
    properties?.name,
    properties?.ref,
    properties?.substation,
    hifld?.NAME,
    hifld?.ID,
  );
  const mva = mvaRatingValue(properties, documentedMva);
  const sourceNote = hifld
    ? "Sources checked: OpenInfraMap/OpenStreetMap, HIFLD public FeatureServer, public SIS/FERC/OASIS/planning records, and calculated three-phase MVA when voltage and current tags exist."
    : "Sources checked: OpenInfraMap/OpenStreetMap, public SIS/FERC/OASIS/planning records, and calculated three-phase MVA when voltage and current tags exist. Hover pause checks HIFLD public FeatureServer when available.";
  const rows = [
    ["Feature", featureType],
    ["Name", isSubstation && hifld?.NAME ? hifld.NAME : title],
    ["Voltage", formatKv(hifldVoltage ?? firstInfrastructureValue(properties, ["voltage", "voltage:primary", "voltage:secondary"]))],
    ["Built", formatPublicDate(firstInfrastructureValue(properties, ["start_date", "construction_date", "commissioned", "date"]))],
    ["Last upgraded", "Not available in checked public sources"],
    ["MVA rating", mva.label],
    ["MVA source", mva.source],
    ["Rating type", mva.type],
    ["Operator", hifld?.OWNER ?? firstInfrastructureValue(properties, ["operator", "owner"])],
    ["Status", hifld?.STATUS ?? firstInfrastructureValue(properties, ["status"])],
    ["HIFLD source date", formatPublicDate(hifld?.SOURCEDATE)],
  ];

  return `
    <div style="font-size:12px;line-height:1.45;min-width:220px">
      <strong style="display:block;font-size:13px;margin-bottom:6px">${escapeHtml(title)}</strong>
      ${rows
        .map(
          ([label, value]) =>
            `<div style="display:grid;grid-template-columns:88px 1fr;gap:8px"><span style="color:#64748b">${escapeHtml(label)}</span><span>${escapeHtml(value)}</span></div>`,
        )
        .join("")}
      <div style="border-top:1px solid #e5e7eb;color:#64748b;margin-top:7px;padding-top:6px">${escapeHtml(sourceNote)}</div>
    </div>
  `;
}

export default function InterconnectionPage() {
  const [mode, setMode] = useState<MapMode>("active");
  const [selectedId, setSelectedId] = useState<string>(interconnectionData.nearbyActive[0]?.id ?? "");
  const nearbyActiveMw = interconnectionData.nearbyActive.reduce((sum, project) => sum + project.capacityMw, 0);

  const selected = useMemo(
    () =>
      interconnectionData.activeProjects.find((project) => project.id === selectedId) ??
      interconnectionData.nearbyActive[0],
    [selectedId],
  );
  const selectedMva = selected ? lookupSubstationMva(selected.poi) : undefined;
  const selectedGridMetric = selected ? sppStudyGridMetrics[selected.id] : undefined;

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
                The nearest active visible SPP queue project is {interconnectionData.stats.nearestActiveMiles} miles away.
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
          value={`${interconnectionData.stats.nearbyActiveCount300mi} (${formatMw(nearbyActiveMw)} MW)`}
          detail="within 300 miles"
        />
        <Metric label="Nearest active" value={`${interconnectionData.stats.nearestActiveMiles} mi`} detail={interconnectionData.nearbyActive[0]?.id ?? "None"} />
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
          </div>

          <SatelliteInfrastructureMap
            mode={mode}
            selectedId={selected?.id ?? ""}
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
                <Info label="Distance" value={`${selected.distanceMiles} mi`} />
                <Info label="Capacity" value={`${formatMw(selected.capacityMw)} MW`} />
                <Info label="Stage" value={selected.queueStage} />
                <Info label="Status" value={selected.status} />
                <Info label="TO" value={selected.transmissionOwner} />
                <Info label="Type" value={selected.generationType} />
                <Info label="POI MVA" value={selectedMva?.mvaLabel ?? "No public rating found"} />
                <Info label="MVA Source" value={selectedMva?.sourceTitle ?? "Checked lookup"} />
                <Info label="SC MVA" value={selectedGridMetric ? formatMw(selectedGridMetric.shortCircuitMva) : "Not in study extract"} />
                <Info label="SCR" value={selectedGridMetric ? formatMw(selectedGridMetric.shortCircuitRatio) : "Not in study extract"} />
              </div>
              <div className="rounded-md bg-[#f6f1e8] p-3 text-xs leading-5 text-[#5b6268]">
                Queue-stage concentration within 300 miles is mostly DISIS clusters, especially DISIS-2024-001.
                The parcel itself can be replaced with a coordinate or uploaded KML/KMZ, which updates the active parcel marker.
              </div>
            </div>
          ) : (
            <p className="mt-3 text-sm text-[#66727a]">No nearby active queue projects were decoded.</p>
          )}
        </aside>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-6 lg:grid-cols-2">
        <Breakdown title="Nearby Active by Stage" items={interconnectionData.stats.nearbyActiveByStage} />
        <Breakdown title="Nearby Active MW by Type" items={interconnectionData.stats.nearbyActiveByType.map((item) => ({ name: item.name, count: item.mw }))} suffix=" MW" />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="overflow-hidden rounded-lg border border-[#d7d1c5] bg-white shadow-sm">
          <div className="border-b border-[#e5ded2] p-4">
            <h2 className="text-lg font-semibold">Nearby Active Queue Projects</h2>
            <p className="text-xs text-[#66727a]">Sorted by distance from the active parcel center. Radius is 300 miles.</p>
            <p className="mt-1 text-xs text-[#66727a]">
              SC MVA and SCR are point-of-interconnection grid-strength metrics from SPP study workbooks where available; they are not transformer thermal ratings.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] text-left text-sm">
              <thead className="bg-[#f7f2e9] text-xs uppercase tracking-[0.08em] text-[#5b6268]">
                <tr>
                  <th className="px-3 py-3">GI</th>
                  <th className="px-3 py-3">Miles</th>
                  <th className="px-3 py-3">MW</th>
                  <th className="px-3 py-3">Type</th>
                  <th className="px-3 py-3">Stage</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-3 py-3">POI</th>
                  <th className="px-3 py-3">POI MVA</th>
                  <th className="px-3 py-3">SC MVA</th>
                  <th className="px-3 py-3">SCR</th>
                  <th className="px-3 py-3">TO</th>
                  <th className="px-3 py-3">COD</th>
                </tr>
              </thead>
              <tbody>
                {interconnectionData.nearbyActive.map((project) => (
                  <NearbyProjectRow key={project.id} project={project} />
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

function NearbyProjectRow({ project }: { project: Project }) {
  const mva = lookupSubstationMva(project.poi);
  const gridMetric = sppStudyGridMetrics[project.id];

  return (
    <tr className="border-t border-[#eee8de] hover:bg-[#fbf8f1]">
      <td className="px-3 py-3 font-semibold text-[#172026]">{project.id}</td>
      <td className="px-3 py-3">{project.distanceMiles}</td>
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
  mode,
  selectedId,
  setSelectedId,
}: {
  mode: MapMode;
  selectedId: string;
  setSelectedId: (value: string) => void;
}) {
  const [coordinateInput, setCoordinateInput] = useState("");
  const [locatorMessage, setLocatorMessage] = useState("Enter coordinates or upload KML/KMZ to make it the active parcel.");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const popupRef = useRef<MapLibrePopup | null>(null);
  const currentParcelBoundsRef = useRef<[[number, number], [number, number]] | undefined>(locatorBounds(initialParcelData()));
  const selectedIdRef = useRef(selectedId);
  const hifldCacheRef = useRef<Map<string, Record<string, string | number | null> | undefined>>(new Map());
  const hoverKeyRef = useRef("");

  const applyLocatorData = (data: LocatorFeatureCollection, message: string) => {
    mapRef.current?.getSource("parcel")?.setData?.(parcelPolygonData(data));
    mapRef.current?.getSource("parcel-center")?.setData?.(parcelCenterData(data));
    const bounds = locatorBounds(data);
    if (bounds) currentParcelBoundsRef.current = bounds;
    if (bounds) mapRef.current?.fitBounds(bounds, { padding: 96, duration: 900 });
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
    const source = mapRef.current?.getSource("queue-projects");
    source?.setData?.(mapDataFor(mode, selectedId));
  }, [mode, selectedId]);

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
                "fill-color": "#ffcc00",
                "fill-opacity": 0.46,
                "fill-outline-color": "#111827",
              },
            },
            {
              id: "power-substation-points",
              type: "circle",
              source: "power",
              "source-layer": "power_substation_point",
              paint: {
                "circle-color": "#ffcc00",
                "circle-opacity": 0.94,
                "circle-radius": ["interpolate", ["linear"], ["zoom"], 4, 2.5, 10, 5, 15, 9],
                "circle-stroke-color": "#111827",
                "circle-stroke-width": 1,
              },
            },
            {
              id: "power-plants",
              type: "fill",
              source: "power",
              "source-layer": "power_plant",
              paint: {
                "fill-color": "#ff7a00",
                "fill-opacity": 0.35,
                "fill-outline-color": "#ffd166",
              },
            },
            {
              id: "generators",
              type: "circle",
              source: "power",
              "source-layer": "power_generator",
              paint: {
                "circle-color": "#ff7a00",
                "circle-opacity": 0.74,
                "circle-radius": ["interpolate", ["linear"], ["zoom"], 7, 1.5, 12, 4, 16, 7],
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
          data: mapDataFor(mode, selectedIdRef.current),
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
            "circle-stroke-width": 1.2,
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
          popupRef.current = new window.maplibregl.Popup({ closeButton: false, offset: 12 })
            .setLngLat(event.lngLat)
            .setHTML(
              `<strong>${escapeHtml(projectId)}</strong><br>${escapeHtml(props.generationType)} | ${escapeHtml(props.capacityMw)} MW<br>${escapeHtml(props.queueStage)}<br>${escapeHtml(props.distanceMiles)} mi from parcel`,
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
  }, [mode, setSelectedId]);

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
        <p className="text-xs leading-5 text-[#66727a] lg:col-span-3">{locatorMessage}</p>
      </div>
      <div className="relative bg-[#111827] p-3">
      <div className="h-[34rem] w-full overflow-hidden rounded-md" ref={containerRef} />
      <div className="pointer-events-none absolute bottom-5 left-5 max-w-[22rem] rounded-md border border-white/20 bg-black/60 p-3 text-xs leading-5 text-white shadow-lg">
        <div className="font-semibold">Map layers</div>
        <div>Satellite imagery: Esri World Imagery</div>
        <div>Grid overlay: OpenInfraMap power lines, substations, generators, plants</div>
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
