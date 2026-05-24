"use client";

import JSZip from "jszip";
import { useEffect, useMemo, useRef, useState } from "react";

import { AskMapPanel, type MapQuestionResult } from "@/app/_components/AskMapPanel";

type MisoPoint = {
  lat: number;
  lon: number;
};

type MisoParcel = {
  name: string;
  center: MisoPoint;
  polygon: MisoPoint[];
};

type MisoQueueProject = {
  id: string;
  projectNumber: string;
  status: string;
  queueDate: string | null;
  withdrawnDate: string | null;
  doneDate: string | null;
  giaExecutedDate: string | null;
  targetCod: string | null;
  codYear: number | null;
  negotiatedInServiceDate: string | null;
  mw: number | null;
  summerMw: number | null;
  winterMw: number | null;
  dp1ErisMw: number | null;
  dp1NrisMw: number | null;
  dp2ErisMw: number | null;
  dp2NrisMw: number | null;
  fuelType: string;
  rawFuelType: string;
  facilityType: string;
  transmissionOwner: string;
  county: string;
  state: string;
  studyCycle: string;
  studyGroup: string;
  studyPhase: string;
  serviceType: string;
  poiName: string;
  sisPhase1: string;
  postGIAStatus: string;
  coordinates: MisoPoint | null;
  coordinateSource: string;
};

type MisoCountySummary = {
  state: string;
  county: string;
  activeProjects: number;
  activeMw: number;
  fuelTypes: string[];
};

type MisoInterconnectionData = {
  generatedAt: string;
  parcel: MisoParcel;
  source: {
    queueApi: string;
    generatorInterconnection: string;
    currentQueueMap: string;
    poiAnalysisMap: string;
    powerBiReports: string[];
    countyGazetteer: string;
    positionNote: string;
  };
  stats: {
    totalQueueProjects: number;
    activeProjects: number;
    mappedActiveProjects: number;
    activeMw: number;
    statusCounts: Record<string, number>;
    activeFuelCounts: Record<string, number>;
    codYears: number[];
    studyCycles: string[];
  };
  countySummaries: MisoCountySummary[];
  projects: MisoQueueProject[];
};

type ProjectWithDistance = MisoQueueProject & {
  distanceMi: number;
};

type SortKey =
  | "distanceMi"
  | "mw"
  | "targetCod"
  | "codYear"
  | "projectNumber";

type Filters = {
  project: string;
  fuel: string;
  owner: string;
  poi: string;
  mw: string;
  distance: string;
  cod: string;
};

type MapLibrePopup = {
  setLngLat: (lngLat: unknown) => MapLibrePopup;
  setHTML: (html: string) => MapLibrePopup;
  addTo: (map: MapLibreMap) => MapLibrePopup;
  remove: () => void;
};

type MapLibreMap = {
  addControl: (control: unknown, position?: string) => void;
  addLayer: (layer: Record<string, unknown>, before?: string) => void;
  addSource: (id: string, source: Record<string, unknown>) => void;
  fitBounds: (bounds: [[number, number], [number, number]], options?: Record<string, unknown>) => void;
  flyTo: (options: Record<string, unknown>) => void;
  getCanvas: () => HTMLCanvasElement;
  getLayer: (id: string) => unknown;
  getSource: (id: string) => { setData?: (data: GeoJsonFeatureCollection) => void } | undefined;
  off: (event: string, layer: string, handler: (event: MapEvent) => void) => void;
  on: {
    (event: string, handler: () => void): void;
    (event: string, layer: string, handler: (event: MapEvent) => void): void;
  };
  remove: () => void;
};

type MapEvent = {
  features?: Array<{
    properties?: Record<string, string | number | null>;
  }>;
  lngLat: unknown;
};

type MapLibreGlobal = {
  Map: new (options: Record<string, unknown>) => MapLibreMap;
  NavigationControl: new (options?: Record<string, unknown>) => unknown;
  Popup: new (options?: Record<string, unknown>) => MapLibrePopup;
};

type GeoJsonFeature = {
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
  properties: Record<string, string | number | null>;
};

type GeoJsonFeatureCollection = {
  type: "FeatureCollection";
  features: GeoJsonFeature[];
};

const STATUS_OPTIONS = ["Active", "All statuses", "Withdrawn", "Done", "Pending Transfer"];

const DEFAULT_PARCEL: MisoParcel = {
  name: "Initial map center",
  center: {
    lat: 36.517954963740614,
    lon: -101.32600777783057,
  },
  polygon: [
    { lat: 36.52231697890971, lon: -101.33140247075276 },
    { lat: 36.52229965119858, lon: -101.32242224372439 },
    { lat: 36.51504719573376, lon: -101.32239911412972 },
    { lat: 36.51504737294341, lon: -101.32243414250591 },
    { lat: 36.51506361991761, lon: -101.33138091804008 },
    { lat: 36.52231697890971, lon: -101.33140247075276 },
  ],
};

const MISO_SOURCE: MisoInterconnectionData["source"] = {
  queueApi: "https://www.misoenergy.org/api/giqueue/getprojects",
  generatorInterconnection:
    "https://www.misoenergy.org/planning/resource-utilization/generator-interconnection/",
  currentQueueMap: "https://cloud.cartovista.com/miso/ferc/current-queue-map",
  poiAnalysisMap: "https://cloud.cartovista.com/miso/ferc/poi-analysis-map",
  powerBiReports: [
    "https://app.powerbigov.us/view?r=eyJrIjoiYzlkYTBiYmMtMjFhYS00YTgyLTk5NTQtNzdlMjNhOTVjMzFjIiwidCI6IjYwNDA5MTViLTlkZmYtNGQ0Ny1iYjM1LThhYzljOWE1ZGMxOCJ9",
    "https://app.powerbigov.us/view?r=eyJrIjoiN2ZiODM2ZGUtZjRkYy00ZTk1LTkzNDgtZjViMDExMWMwMjQxIiwidCI6IjYwNDA5MTViLTlkZmYtNGQ0Ny1iYjM1LThhYzljOWE1ZGMxOCJ9",
  ],
  countyGazetteer:
    "https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2025_Gazetteer/2025_Gaz_counties_national.zip",
  positionNote:
    "MISO's public API provides queue rows but not raw map coordinates. The CartoVista current queue map exposes Latitude/Longitude columns in metadata, but direct feature extraction is protected. Mapped project locations here use public county centroids when the row includes county/state, with a small deterministic display offset to separate overlapping projects.",
};

const EMPTY_STATS: MisoInterconnectionData["stats"] = {
  totalQueueProjects: 0,
  activeProjects: 0,
  mappedActiveProjects: 0,
  activeMw: 0,
  statusCounts: {},
  activeFuelCounts: {},
  codYears: [],
  studyCycles: [],
};

const FUEL_COLORS: Record<string, string> = {
  Solar: "#facc15",
  Wind: "#22c55e",
  BESS: "#38bdf8",
  Hybrid: "#a78bfa",
  Gas: "#fb7185",
  Nuclear: "#f97316",
  Hydro: "#0ea5e9",
  Diesel: "#f59e0b",
  Biomass: "#84cc16",
  "Waste Heat Recovery": "#d97706",
  "Compressed Air Storage": "#2dd4bf",
  "Not listed": "#cbd5e1",
};

const STATUS_STROKES: Record<string, string> = {
  Active: "#ffffff",
  Withdrawn: "#fb923c",
  Done: "#34d399",
  "Pending Transfer": "#c084fc",
  "LEGACY: Done": "#86efac",
};

const DEFAULT_FILTERS: Filters = {
  project: "",
  fuel: "",
  owner: "",
  poi: "",
  mw: "",
  distance: "",
  cod: "",
};

function formatNumber(value: number | null | undefined, digits = 0) {
  if (value === null || value === undefined || Number.isNaN(value)) return "Not listed";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);
}

function formatMw(value: number | null | undefined) {
  if (value === null || value === undefined || Number.isNaN(value)) return "Not listed";
  return `${formatNumber(value, value % 1 === 0 ? 0 : 1)} MW`;
}

function formatDate(value: string | null | undefined) {
  if (!value) return "Not listed";
  const [year, month, day] = value.split("-");
  if (!year || !month || !day) return value;
  return `${month}/${day}/${year}`;
}

function formatDistance(value: number | null | undefined) {
  if (value === null || value === undefined || !Number.isFinite(value)) return "Set load";
  return `${formatNumber(value, 1)} mi`;
}

function escapeHtml(value: string | number | null | undefined) {
  return String(value ?? "Not listed")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function haversineMiles(a: MisoPoint, b: MisoPoint) {
  const earthRadiusMiles = 3958.7613;
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
  const dLat = toRadians(b.lat - a.lat);
  const dLon = toRadians(b.lon - a.lon);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * earthRadiusMiles * Math.asin(Math.min(1, Math.sqrt(h)));
}

function centroid(points: MisoPoint[]) {
  if (!points.length) return DEFAULT_PARCEL.center;
  const sum = points.reduce(
    (acc, point) => ({
      lat: acc.lat + point.lat,
      lon: acc.lon + point.lon,
    }),
    { lat: 0, lon: 0 },
  );
  return {
    lat: sum.lat / points.length,
    lon: sum.lon / points.length,
  };
}

function makePointParcel(name: string, center: MisoPoint): MisoParcel {
  const latPad = 0.015;
  const lonPad = 0.015 / Math.max(Math.cos((center.lat * Math.PI) / 180), 0.35);
  return {
    name,
    center,
    polygon: [
      { lat: center.lat + latPad, lon: center.lon - lonPad },
      { lat: center.lat + latPad, lon: center.lon + lonPad },
      { lat: center.lat - latPad, lon: center.lon + lonPad },
      { lat: center.lat - latPad, lon: center.lon - lonPad },
      { lat: center.lat + latPad, lon: center.lon - lonPad },
    ],
  };
}

function parseCoordinateInput(value: string): MisoPoint | null {
  const parts = value
    .trim()
    .split(/[,\s]+/)
    .map((part) => Number(part))
    .filter((part) => Number.isFinite(part));
  if (parts.length < 2) return null;
  const [first, second] = parts;
  if (Math.abs(first) <= 90 && Math.abs(second) <= 180) {
    return { lat: first, lon: second };
  }
  if (Math.abs(second) <= 90 && Math.abs(first) <= 180) {
    return { lat: second, lon: first };
  }
  return null;
}

function parseKmlCoordinates(kml: string): MisoPoint[] {
  const doc = new DOMParser().parseFromString(kml, "application/xml");
  const coordinateNodes = Array.from(doc.querySelectorAll("coordinates"));
  const coordinateSets = coordinateNodes
    .map((node) =>
      (node.textContent || "")
        .trim()
        .split(/\s+/)
        .map((pair) => {
          const [lon, lat] = pair.split(",").map((part) => Number(part));
          return Number.isFinite(lat) && Number.isFinite(lon) ? { lat, lon } : null;
        })
        .filter((point): point is MisoPoint => Boolean(point)),
    )
    .filter((points) => points.length > 0);

  const polygon = coordinateSets.find((points) => points.length >= 3) || coordinateSets[0] || [];
  if (!polygon.length) return [];
  const first = polygon[0];
  const last = polygon[polygon.length - 1];
  if (first.lat !== last.lat || first.lon !== last.lon) {
    return [...polygon, first];
  }
  return polygon;
}

function parcelToFeature(parcel: MisoParcel | null): GeoJsonFeatureCollection {
  if (!parcel) {
    return {
      type: "FeatureCollection",
      features: [],
    };
  }
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [parcel.polygon.map((point) => [point.lon, point.lat])],
        },
        properties: {
          name: parcel.name,
        },
      },
    ],
  };
}

function projectsToFeatures(projects: ProjectWithDistance[]): GeoJsonFeatureCollection {
  return {
    type: "FeatureCollection",
    features: projects
      .filter((project) => project.coordinates)
      .map((project) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [project.coordinates!.lon, project.coordinates!.lat],
        },
        properties: {
          id: project.id,
          projectNumber: project.projectNumber,
          fuelType: project.fuelType,
          status: project.status,
          mw: project.mw,
          poiName: project.poiName || "Not listed",
          transmissionOwner: project.transmissionOwner || "Not listed",
          targetCod: project.targetCod || "Not listed",
          codYear: project.codYear,
          distanceMi: Number.isFinite(project.distanceMi) ? Number(project.distanceMi.toFixed(1)) : null,
        },
      })),
  };
}

function highlightedProjectsToFeatures(
  projects: ProjectWithDistance[],
  highlightIds: string[],
): GeoJsonFeatureCollection {
  const highlightSet = new Set(highlightIds);
  return {
    type: "FeatureCollection",
    features: projects
      .filter((project) => project.coordinates && highlightSet.has(project.id))
      .map((project) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [project.coordinates!.lon, project.coordinates!.lat],
        },
        properties: {
          id: project.id,
          projectNumber: project.projectNumber,
        },
      })),
  };
}

function popupHtml(project: ProjectWithDistance) {
  return `
    <div style="font-family: Aptos, Segoe UI, sans-serif; min-width: 260px; color: #0f172a;">
      <div style="font-size: 13px; font-weight: 800; margin-bottom: 6px;">${escapeHtml(project.projectNumber)} ${escapeHtml(project.fuelType)}</div>
      <div style="display: grid; gap: 3px; font-size: 12px;">
        <div><strong>MW:</strong> ${escapeHtml(formatMw(project.mw))}</div>
        <div><strong>Status:</strong> ${escapeHtml(project.status)}</div>
        <div><strong>COD target:</strong> ${escapeHtml(formatDate(project.targetCod))}</div>
        <div><strong>Queue date:</strong> ${escapeHtml(formatDate(project.queueDate))}</div>
        <div><strong>Withdrawn date:</strong> ${escapeHtml(formatDate(project.withdrawnDate))}</div>
        <div><strong>POI:</strong> ${escapeHtml(project.poiName || "Not listed")}</div>
        <div><strong>Transmission owner:</strong> ${escapeHtml(project.transmissionOwner || "Not listed")}</div>
        <div><strong>Study:</strong> ${escapeHtml([project.studyCycle, project.studyGroup, project.studyPhase].filter(Boolean).join(" / ") || "Not listed")}</div>
        <div><strong>County/state:</strong> ${escapeHtml([project.county, project.state].filter(Boolean).join(", ") || "Not listed")}</div>
        <div><strong>Straight-line distance:</strong> ${escapeHtml(formatDistance(project.distanceMi))}</div>
        <div style="color:#475569; line-height:1.25; margin-top:4px;"><strong>Map position:</strong> ${escapeHtml(project.coordinateSource)}</div>
      </div>
    </div>
  `;
}

function fuelColorExpression() {
  return [
    "match",
    ["get", "fuelType"],
    ...Object.entries(FUEL_COLORS).flatMap(([fuel, color]) => [fuel, color]),
    "#cbd5e1",
  ];
}

function statusStrokeExpression() {
  return [
    "match",
    ["get", "status"],
    ...Object.entries(STATUS_STROKES).flatMap(([status, color]) => [status, color]),
    "#ffffff",
  ];
}

function stringMatches(value: string | null | undefined, filter: string) {
  if (!filter.trim()) return true;
  return String(value || "").toLowerCase().includes(filter.trim().toLowerCase());
}

function numericFilterMatches(value: number | null | undefined, filter: string) {
  const trimmed = filter.trim();
  if (!trimmed) return true;
  const comparison = trimmed.match(/^(<=|>=|<|>|=)?\s*(\d+(?:\.\d+)?)$/);
  if (!comparison) return String(value ?? "").includes(trimmed);
  const operator = comparison[1] || "=";
  const target = Number(comparison[2]);
  const current = value ?? Number.NaN;
  if (!Number.isFinite(current)) return false;
  if (operator === "<") return current < target;
  if (operator === "<=") return current <= target;
  if (operator === ">") return current > target;
  if (operator === ">=") return current >= target;
  return current === target;
}

function fitBoundsFor(map: MapLibreMap, parcel: MisoParcel | null, projects: ProjectWithDistance[]) {
  const points = [
    ...(parcel ? parcel.polygon.map((point) => [point.lon, point.lat] as [number, number]) : []),
    ...projects
      .filter((project) => project.coordinates)
      .slice(0, 80)
      .map((project) => [project.coordinates!.lon, project.coordinates!.lat] as [number, number]),
  ];
  if (points.length < 2) {
    const center = parcel?.center ?? DEFAULT_PARCEL.center;
    map.flyTo({ center: [center.lon, center.lat], zoom: 5 });
    return;
  }
  const lons = points.map((point) => point[0]);
  const lats = points.map((point) => point[1]);
  map.fitBounds(
    [
      [Math.min(...lons), Math.min(...lats)],
      [Math.max(...lons), Math.max(...lats)],
    ],
    { padding: 64, maxZoom: 8.5, duration: 700 },
  );
}

function loadMapLibre() {
  const existingGlobal = (window as Window & { maplibregl?: MapLibreGlobal }).maplibregl;
  if (existingGlobal) return Promise.resolve(existingGlobal);
  return new Promise<MapLibreGlobal>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-maplibre="true"]',
    );
    const existingLink = document.querySelector<HTMLLinkElement>('link[data-maplibre="true"]');

    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css";
      link.dataset.maplibre = "true";
      document.head.appendChild(link);
    }

    if (existingScript) {
      existingScript.addEventListener("load", () =>
        resolve((window as Window & { maplibregl?: MapLibreGlobal }).maplibregl!),
      );
      existingScript.addEventListener("error", () => reject(new Error("MapLibre failed to load")));
      return;
    }

    const script = document.createElement("script");
    script.src = "https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js";
    script.async = true;
    script.dataset.maplibre = "true";
    script.onload = () =>
      resolve((window as Window & { maplibregl?: MapLibreGlobal }).maplibregl!);
    script.onerror = () => reject(new Error("MapLibre failed to load"));
    document.head.appendChild(script);
  });
}

function MisoMap({
  projects,
  parcel,
  selectedProject,
  onHoverProject,
  legendItems,
  highlightProjectIds,
}: {
  projects: ProjectWithDistance[];
  parcel: MisoParcel | null;
  selectedProject: ProjectWithDistance | null;
  onHoverProject: (project: ProjectWithDistance | null) => void;
  legendItems: Array<[string, string]>;
  highlightProjectIds: string[];
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const popupRef = useRef<MapLibrePopup | null>(null);
  const projectsRef = useRef<ProjectWithDistance[]>(projects);
  const parcelRef = useRef(parcel);

  useEffect(() => {
    projectsRef.current = projects;
    parcelRef.current = parcel;
  }, [projects, parcel]);

  useEffect(() => {
    let disposed = false;

    loadMapLibre().then((maplibregl) => {
      if (disposed || !containerRef.current) return;
      const mapCenter = parcel?.center ?? DEFAULT_PARCEL.center;
      const map = new maplibregl.Map({
        container: containerRef.current,
        center: [mapCenter.lon, mapCenter.lat],
        zoom: 5,
        attributionControl: true,
        style: {
          version: 8,
          sources: {
            satellite: {
              type: "raster",
              tiles: [
                "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
              ],
              tileSize: 256,
              attribution:
                "Tiles (C) Esri, Maxar, Earthstar Geographics, and the GIS User Community",
            },
          },
          layers: [
            {
              id: "satellite",
              type: "raster",
              source: "satellite",
            },
          ],
        },
      });

      mapRef.current = map;
      popupRef.current = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        maxWidth: "360px",
      });
      map.addControl(new maplibregl.NavigationControl({ showCompass: true }), "top-right");

      map.on("load", () => {
        if (disposed) return;
        map.addSource("parcel", {
          type: "geojson",
          data: parcelToFeature(parcelRef.current),
        });
        map.addLayer({
          id: "parcel-fill",
          type: "fill",
          source: "parcel",
          paint: {
            "fill-color": "#ef4444",
            "fill-opacity": 0.3,
          },
        });
        map.addLayer({
          id: "parcel-line",
          type: "line",
          source: "parcel",
          paint: {
            "line-color": "#ffffff",
            "line-width": 5,
          },
        });
        map.addLayer({
          id: "parcel-line-red",
          type: "line",
          source: "parcel",
          paint: {
            "line-color": "#ef4444",
            "line-width": 3,
          },
        });

        map.addSource("queue-projects", {
          type: "geojson",
          data: projectsToFeatures(projectsRef.current),
        });
        map.addSource("highlighted-projects", {
          type: "geojson",
          data: highlightedProjectsToFeatures(projectsRef.current, highlightProjectIds),
        });
        map.addLayer({
          id: "queue-project-hit",
          type: "circle",
          source: "queue-projects",
          paint: {
            "circle-radius": 18,
            "circle-color": "#ffffff",
            "circle-opacity": 0,
          },
        });
        map.addLayer({
          id: "queue-projects",
          type: "circle",
          source: "queue-projects",
          paint: {
            "circle-color": fuelColorExpression(),
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["coalesce", ["get", "mw"], 0],
              0,
              5,
              100,
              8,
              400,
              12,
              900,
              17,
            ],
            "circle-stroke-color": statusStrokeExpression(),
            "circle-stroke-width": 2.5,
            "circle-opacity": [
              "case",
              ["==", ["get", "status"], "Active"],
              0.95,
              0.58,
            ],
          },
        });
        map.addLayer({
          id: "queue-project-labels",
          type: "symbol",
          source: "queue-projects",
          minzoom: 6,
          layout: {
            "text-field": ["get", "projectNumber"],
            "text-size": 10,
            "text-offset": [0, 1.35],
            "text-anchor": "top",
            "text-allow-overlap": false,
          },
          paint: {
            "text-color": "#ffffff",
            "text-halo-color": "#020617",
            "text-halo-width": 1.5,
          },
        });
        map.addLayer({
          id: "highlighted-project-rings",
          type: "circle",
          source: "highlighted-projects",
          paint: {
            "circle-color": "rgba(0,0,0,0)",
            "circle-radius": 24,
            "circle-stroke-color": "#f97316",
            "circle-stroke-width": 5,
            "circle-opacity": 0.95,
          },
        });

        const hoverHandler = (event: MapEvent) => {
          const id = event.features?.[0]?.properties?.id;
          const project = projectsRef.current.find((candidate) => candidate.id === id) || null;
          if (!project || !popupRef.current) return;
          map.getCanvas().style.cursor = "pointer";
          popupRef.current.setLngLat(event.lngLat).setHTML(popupHtml(project)).addTo(map);
          onHoverProject(project);
        };
        const leaveHandler = () => {
          map.getCanvas().style.cursor = "";
          popupRef.current?.remove();
          onHoverProject(null);
        };

        map.on("mousemove", "queue-project-hit", hoverHandler);
        map.on("mouseleave", "queue-project-hit", leaveHandler);
        fitBoundsFor(map, parcelRef.current, projectsRef.current);
      });
    });

    return () => {
      disposed = true;
      popupRef.current?.remove();
      mapRef.current?.remove();
      mapRef.current = null;
      popupRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    map.getSource("queue-projects")?.setData?.(projectsToFeatures(projects));
    map.getSource("highlighted-projects")?.setData?.(
      highlightedProjectsToFeatures(projects, highlightProjectIds),
    );
    map.getSource("parcel")?.setData?.(parcelToFeature(parcel));
    fitBoundsFor(map, parcel, projects);
  }, [highlightProjectIds, projects, parcel]);

  return (
    <div className="relative min-h-[720px] overflow-hidden rounded-lg border border-white/15 bg-slate-950 shadow-2xl">
      <div ref={containerRef} className="absolute inset-0" />
      <div className="absolute left-3 top-3 max-w-[230px] rounded-md border border-slate-200/25 bg-slate-950/88 p-2 text-[0.68rem] leading-tight text-slate-100 shadow-xl backdrop-blur">
        <div className="mb-1.5 font-semibold">Map key</div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          {legendItems.map(([fuel, color]) => (
            <div key={fuel} className="flex items-center gap-1.5">
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full border border-white/80"
                style={{ backgroundColor: color }}
              />
              <span className="truncate">{fuel}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 border-t border-white/15 pt-1.5 text-[0.62rem] text-slate-300">
          White ring = active. Orange ring = withdrawn. Green ring = done.
        </div>
      </div>
      {selectedProject ? (
        <div className="absolute bottom-3 left-3 max-w-sm rounded-md border border-white/15 bg-slate-950/90 p-3 text-xs text-slate-100 shadow-xl backdrop-blur">
          <div className="font-semibold">
            {selectedProject.projectNumber} ({formatMw(selectedProject.mw)})
          </div>
          <div className="mt-1 text-slate-300">
            {selectedProject.fuelType} near{" "}
            {[selectedProject.county, selectedProject.state].filter(Boolean).join(", ") ||
              "location not listed"}
            {parcel ? ` - ${formatNumber(selectedProject.distanceMi, 1)} straight-line mi from load` : " - set a load location for distance."}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function MisoInterconnectionPage() {
  const [data, setData] = useState<MisoInterconnectionData | null>(null);
  const [loadError, setLoadError] = useState("");
  const [parcel, setParcel] = useState<MisoParcel | null>(null);
  const [coordinateInput, setCoordinateInput] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [selectedStatus, setSelectedStatus] = useState("Active");
  const [hoveredProject, setHoveredProject] = useState<ProjectWithDistance | null>(null);
  const [askHighlightIds, setAskHighlightIds] = useState<string[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>("distanceMi");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const stats = data?.stats ?? EMPTY_STATS;
  const source = data?.source ?? MISO_SOURCE;
  const projects = data?.projects ?? [];
  const countySummaries = data?.countySummaries ?? [];

  useEffect(() => {
    let cancelled = false;
    fetch("/data/miso-interconnection-data.json")
      .then((response) => {
        if (!response.ok) throw new Error(`MISO data request failed (${response.status})`);
        return response.json() as Promise<MisoInterconnectionData>;
      })
      .then((payload) => {
        if (!cancelled) {
          setData(payload);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setLoadError(error instanceof Error ? error.message : "MISO data failed to load.");
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const mappedProjects = useMemo<ProjectWithDistance[]>(() => {
    return projects
      .filter((project) => project.coordinates)
      .filter((project) =>
        selectedStatus === "All statuses" ? true : project.status === selectedStatus,
      )
      .filter((project) => (selectedYear === "all" ? true : project.codYear === selectedYear))
      .map((project) => ({
        ...project,
        distanceMi: parcel ? haversineMiles(parcel.center, project.coordinates!) : Number.POSITIVE_INFINITY,
      }))
      .sort((a, b) => a.distanceMi - b.distanceMi);
  }, [parcel, projects, selectedStatus, selectedYear]);

  const allMappedActive = useMemo<ProjectWithDistance[]>(() => {
    return projects
      .filter((project) => project.status === "Active" && project.coordinates)
      .map((project) => ({
        ...project,
        distanceMi: parcel ? haversineMiles(parcel.center, project.coordinates!) : Number.POSITIVE_INFINITY,
      }))
      .sort((a, b) => a.distanceMi - b.distanceMi);
  }, [parcel, projects]);

  const nearbyProjects = useMemo(() => {
    const filtered = mappedProjects.filter(
      (project) =>
        stringMatches(project.projectNumber, filters.project) &&
        stringMatches(project.fuelType, filters.fuel) &&
        stringMatches(project.transmissionOwner, filters.owner) &&
        stringMatches(project.poiName, filters.poi) &&
        numericFilterMatches(project.mw, filters.mw) &&
        numericFilterMatches(project.distanceMi, filters.distance) &&
        stringMatches(project.targetCod || String(project.codYear || ""), filters.cod),
    );

    return [...filtered].sort((a, b) => {
      let aValue: string | number = "";
      let bValue: string | number = "";
      if (sortKey === "distanceMi") {
        aValue = a.distanceMi;
        bValue = b.distanceMi;
      } else if (sortKey === "mw") {
        aValue = a.mw ?? -1;
        bValue = b.mw ?? -1;
      } else if (sortKey === "targetCod") {
        aValue = a.targetCod || "";
        bValue = b.targetCod || "";
      } else if (sortKey === "codYear") {
        aValue = a.codYear ?? 0;
        bValue = b.codYear ?? 0;
      } else {
        aValue = a.projectNumber;
        bValue = b.projectNumber;
      }
      const comparison =
        typeof aValue === "number" && typeof bValue === "number"
          ? aValue - bValue
          : String(aValue).localeCompare(String(bValue));
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [filters, mappedProjects, sortDirection, sortKey]);

  const legendItems = useMemo<Array<[string, string]>>(() => {
    const fuels = new Set(mappedProjects.map((project) => project.fuelType));
    return Object.entries(FUEL_COLORS).filter(([fuel]) => fuels.has(fuel));
  }, [mappedProjects]);

  const mapProjects = useMemo(() => mappedProjects.slice(0, 1500), [mappedProjects]);
  const nearestActive = parcel ? allMappedActive[0] || null : null;
  const activeTopTwentyTwoMw = allMappedActive
    .slice(0, 22)
    .reduce((sum, project) => sum + (project.mw || 0), 0);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDirection((direction) => (direction === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection(key === "projectNumber" ? "asc" : "asc");
    }
  }

  function updateFilter(key: keyof Filters, value: string) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  function applyMapQuestion(result: MapQuestionResult) {
    setAskHighlightIds(result.highlightProjectIds);
    setFilters((current) => ({
      ...current,
      cod: result.filters.codYear ?? current.cod,
      distance:
        result.filters.radiusMiles !== null ? `<${result.filters.radiusMiles}` : current.distance,
      fuel: result.filters.fuelType ?? current.fuel,
      mw:
        result.filters.minMw !== null
          ? `>${result.filters.minMw}`
          : result.filters.maxMw !== null
            ? `<${result.filters.maxMw}`
            : current.mw,
      owner: result.filters.owner ?? current.owner,
      poi: result.filters.poi ?? current.poi,
    }));
    if (result.filters.codYear) {
      const year = Number(result.filters.codYear);
      if (Number.isFinite(year) && stats.codYears.includes(year)) setSelectedYear(year);
    }
    if (result.filters.status) {
      const status = STATUS_OPTIONS.find(
        (option) => option.toLowerCase() === result.filters.status?.toLowerCase(),
      );
      if (status) setSelectedStatus(status);
    }
  }

  function applyCoordinateInput() {
    const point = parseCoordinateInput(coordinateInput);
    if (!point) {
      setUploadMessage("Enter coordinates as latitude, longitude.");
      return;
    }
    setParcel(makePointParcel("Input coordinates", point));
    setUploadMessage(`Parcel set to ${point.lat.toFixed(6)}, ${point.lon.toFixed(6)}.`);
  }

  async function handleFileUpload(file: File | null) {
    if (!file) return;
    try {
      const lowerName = file.name.toLowerCase();
      let kml = "";
      if (lowerName.endsWith(".kmz")) {
        const zip = await JSZip.loadAsync(file);
        const kmlFile = Object.values(zip.files).find((entry) =>
          entry.name.toLowerCase().endsWith(".kml"),
        );
        if (!kmlFile) throw new Error("No KML file found inside KMZ.");
        kml = await kmlFile.async("text");
      } else {
        kml = await file.text();
      }
      const polygon = parseKmlCoordinates(kml);
      if (!polygon.length) throw new Error("No usable coordinates found.");
      setParcel({
        name: file.name,
        polygon,
        center: centroid(polygon),
      });
      setUploadMessage(`${file.name} loaded and set as the active load location.`);
    } catch (error) {
      setUploadMessage(error instanceof Error ? error.message : "Could not read that file.");
    }
  }

  const metricCards = [
    {
      label: "Active MISO Queue",
      value: data ? formatNumber(stats.activeProjects) : "Loading",
      detail: data ? `${formatNumber(stats.activeMw, 1)} MW` : "Fetching public queue data",
    },
    {
      label: "Mapped Active",
      value: data ? formatNumber(stats.mappedActiveProjects) : "Loading",
      detail: "county or state-derived map positions",
    },
    {
      label: "Nearest Active",
      value: nearestActive
        ? `${nearestActive.projectNumber} (${formatMw(nearestActive.mw)})`
        : parcel
          ? "Not available"
          : "Set load",
      detail: nearestActive
        ? `${formatNumber(nearestActive.distanceMi, 1)} straight-line mi`
        : parcel
          ? "No mapped active projects"
          : "enter coordinates or KML/KMZ",
    },
    {
      label: "Nearest 22 Active",
      value: parcel ? `${formatNumber(activeTopTwentyTwoMw, 1)} MW` : "Set load",
      detail: parcel ? "sum of the 22 closest mapped active positions" : "enter coordinates or KML/KMZ",
    },
  ];

  return (
    <main className="min-h-screen bg-[#071317] px-4 py-5 text-slate-100 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1800px]">
        <header className="mb-5 flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
              MISO generation interconnection
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal text-white md:text-4xl">
              MISO generation + load matching
            </h1>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">
              Active and historical MISO generator interconnection projects from the public
              queue, ready to match against user-entered load coordinates or KML/KMZ geometry with COD year filters, status filters,
              project hover details, and sortable nearby queue positions.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <a
              className="rounded-md border border-cyan-300/40 px-3 py-2 text-cyan-100 hover:bg-cyan-300/10"
              href="/interconnection"
            >
              SPP view
            </a>
            <a
              className="rounded-md border border-white/15 px-3 py-2 text-slate-200 hover:bg-white/10"
              href={source.generatorInterconnection}
              rel="noreferrer"
              target="_blank"
            >
              MISO source
            </a>
            <a
              className="rounded-md border border-white/15 px-3 py-2 text-slate-200 hover:bg-white/10"
              href={source.currentQueueMap}
              rel="noreferrer"
              target="_blank"
            >
              Current queue map
            </a>
          </div>
        </header>

        <section className="mb-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {metricCards.map((card) => (
            <div key={card.label} className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
              <div className="text-xs uppercase tracking-[0.14em] text-slate-400">{card.label}</div>
              <div className="mt-2 text-2xl font-semibold text-white">{card.value}</div>
              <div className="mt-1 text-sm text-slate-300">{card.detail}</div>
            </div>
          ))}
        </section>

        <section className="mb-5 grid gap-4 rounded-lg border border-white/10 bg-slate-900/70 p-4 xl:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Input coordinates
            </label>
            <div className="mt-2 flex gap-2">
              <input
                className="min-w-0 flex-1 rounded-md border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white outline-none ring-cyan-300/40 placeholder:text-slate-500 focus:ring-2"
                placeholder="36.517955, -101.326008"
                value={coordinateInput}
                onChange={(event) => setCoordinateInput(event.target.value)}
              />
              <button
                className="rounded-md bg-cyan-300 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-200"
                onClick={applyCoordinateInput}
                type="button"
              >
                Zoom
              </button>
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              KML / KMZ load area
            </label>
            <input
              accept=".kml,.kmz"
              className="mt-2 block w-full text-sm text-slate-200 file:mr-3 file:rounded-md file:border-0 file:bg-white/10 file:px-3 file:py-2 file:text-sm file:text-white hover:file:bg-white/15"
              type="file"
              onChange={(event) => handleFileUpload(event.target.files?.[0] || null)}
            />
          </div>
          <div className="text-sm text-slate-300">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Active load location
            </div>
            <div className="mt-2 font-semibold text-white">{parcel?.name ?? "No load location set"}</div>
            <div>
              {parcel ? `${parcel.center.lat.toFixed(6)}, ${parcel.center.lon.toFixed(6)}` : "Enter coordinates or upload KML/KMZ"}
            </div>
            <div className="mt-1 text-xs text-cyan-100">{uploadMessage || "No load location set."}</div>
          </div>
        </section>

        <section className="mb-5 rounded-lg border border-white/10 bg-slate-900/70 p-4">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                COD Year
              </div>
              <div className="mt-2 flex max-w-full gap-2 overflow-x-auto pb-1">
                <button
                  className={`rounded-md border px-3 py-2 text-sm ${
                    selectedYear === "all"
                      ? "border-cyan-300 bg-cyan-300 text-slate-950"
                      : "border-white/15 text-slate-200 hover:bg-white/10"
                  }`}
                  onClick={() => setSelectedYear("all")}
                  type="button"
                >
                  All CODs
                </button>
                {stats.codYears.map((year) => (
                  <button
                    key={year}
                    className={`rounded-md border px-3 py-2 text-sm ${
                      selectedYear === year
                        ? "border-cyan-300 bg-cyan-300 text-slate-950"
                        : "border-white/15 text-slate-200 hover:bg-white/10"
                    }`}
                    onClick={() => setSelectedYear(year)}
                    type="button"
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                Queue status
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {STATUS_OPTIONS.map((status) => (
                  <button
                    key={status}
                    className={`rounded-md border px-3 py-2 text-sm ${
                      selectedStatus === status
                        ? "border-cyan-300 bg-cyan-300 text-slate-950"
                        : "border-white/15 text-slate-200 hover:bg-white/10"
                    }`}
                    onClick={() => setSelectedStatus(status)}
                    type="button"
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <AskMapPanel
            currentFilters={{
              activeLocationSet: Boolean(parcel),
              codYear: selectedYear === "all" ? null : selectedYear,
              status: selectedStatus,
            }}
            datasetName="MISO generation interconnection queue"
            onApply={applyMapQuestion}
            projects={mappedProjects.map((project) => ({
              codDate: project.targetCod,
              codYear: project.codYear,
              county: project.county,
              distanceMi: parcel ? project.distanceMi : null,
              fuelType: project.fuelType,
              id: project.id,
              label: project.projectNumber,
              mw: project.mw,
              owner: project.transmissionOwner || "Not listed",
              poi: project.poiName || "Not listed",
              queueStage: [project.studyCycle, project.studyGroup, project.studyPhase]
                .filter(Boolean)
                .join(" / "),
              state: project.state,
              status: project.status,
            }))}
            sourceNotes={`${source.positionNote} Distances are only available after a load location is set.`}
            theme="dark"
            totalProjectCount={stats.totalQueueProjects}
          />
        </section>

        <section className="mb-5">
          <MisoMap
            highlightProjectIds={askHighlightIds}
            legendItems={legendItems}
            parcel={parcel}
            projects={mapProjects}
            selectedProject={hoveredProject}
            onHoverProject={setHoveredProject}
          />
          <div className="mt-3 rounded-lg border border-white/10 bg-slate-900/70 p-4 text-sm leading-6 text-slate-300">
            <div className="font-semibold text-white">Selected project explanation</div>
            <p className="mt-1">
              Hover a generation project to see MW capacity, status, queue date, withdrawn date
              when applicable, COD target, study cycle, POI, transmission owner, and distance from
              the active load location. Distances on this MISO page are straight-line distances because
              public MISO queue rows do not include a line-following network path.
            </p>
            <p className="mt-2 text-xs text-slate-400">{source.positionNote}</p>
          </div>
        </section>

        <section className="mb-5 grid gap-4 xl:grid-cols-[1fr_1fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
            <div className="text-sm font-semibold text-white">Project density by county</div>
            <div className="mt-3 max-h-[300px] overflow-auto">
              <table className="w-full text-left text-xs">
                <thead className="sticky top-0 bg-slate-950 text-slate-400">
                  <tr>
                    <th className="px-2 py-2">County</th>
                    <th className="px-2 py-2">Active projects</th>
                    <th className="px-2 py-2">Active MW</th>
                    <th className="px-2 py-2">Types</th>
                  </tr>
                </thead>
                <tbody>
                  {countySummaries.slice(0, 30).map((summary) => (
                    <tr key={`${summary.state}-${summary.county}`} className="border-t border-white/10">
                      <td className="px-2 py-2 text-white">
                        {summary.county}, {summary.state}
                      </td>
                      <td className="px-2 py-2">{summary.activeProjects}</td>
                      <td className="px-2 py-2">{formatNumber(summary.activeMw, 1)}</td>
                      <td className="px-2 py-2 text-slate-300">{summary.fuelTypes.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
            <div className="text-sm font-semibold text-white">Source coverage</div>
            <div className="mt-3 grid gap-3 text-sm text-slate-300">
              <div>
                <span className="text-white">{formatNumber(stats.totalQueueProjects)}</span>{" "}
                total queue rows from MISO, including{" "}
                <span className="text-white">{formatNumber(stats.activeProjects)}</span>{" "}
                active rows.
              </div>
              <div>
                The map uses official queue attributes and public Census county centroids where
                MISO does not expose raw point coordinates through the downloadable queue API.
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <a className="rounded-md border border-white/15 px-2 py-1 hover:bg-white/10" href={source.queueApi} rel="noreferrer" target="_blank">
                  Queue API
                </a>
                <a className="rounded-md border border-white/15 px-2 py-1 hover:bg-white/10" href={source.poiAnalysisMap} rel="noreferrer" target="_blank">
                  POI analysis
                </a>
                {source.powerBiReports.map((href, index) => (
                  <a key={href} className="rounded-md border border-white/15 px-2 py-1 hover:bg-white/10" href={href} rel="noreferrer" target="_blank">
                    PowerBI {index + 1}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-slate-900/70 p-4">
          <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                {parcel ? "Nearby queue projects" : "Mapped queue projects"}
              </div>
              <h2 className="mt-1 text-xl font-semibold text-white">
                {formatNumber(nearbyProjects.length)} mapped projects in current filters
              </h2>
            </div>
            <button
              className="w-fit rounded-md border border-white/15 px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
              onClick={() => setFilters(DEFAULT_FILTERS)}
              type="button"
            >
              Clear filters
            </button>
          </div>
          <div className="overflow-auto">
            <table className="min-w-[1180px] w-full text-left text-xs">
              <thead className="sticky top-0 z-10 bg-slate-950 text-slate-300">
                <tr>
                  <th className="px-2 py-2">
                    <button className="font-semibold" onClick={() => toggleSort("projectNumber")} type="button">
                      Project
                    </button>
                  </th>
                  <th className="px-2 py-2">Fuel</th>
                  <th className="px-2 py-2">Status</th>
                  <th className="px-2 py-2">
                    <button className="font-semibold" onClick={() => toggleSort("mw")} type="button">
                      MW
                    </button>
                  </th>
                  <th className="px-2 py-2">
                    <button className="font-semibold" onClick={() => toggleSort("distanceMi")} type="button">
                      Straight mi
                    </button>
                  </th>
                  <th className="px-2 py-2">
                    <button className="font-semibold" onClick={() => toggleSort("codYear")} type="button">
                      COD Year
                    </button>
                  </th>
                  <th className="px-2 py-2">
                    <button className="font-semibold" onClick={() => toggleSort("targetCod")} type="button">
                      COD
                    </button>
                  </th>
                  <th className="px-2 py-2">POI</th>
                  <th className="px-2 py-2">Transmission owner</th>
                  <th className="px-2 py-2">Study</th>
                  <th className="px-2 py-2">Queue date</th>
                  <th className="px-2 py-2">Withdrawn</th>
                </tr>
                <tr className="border-t border-white/10">
                  <th className="px-2 pb-2">
                    <input className="w-full rounded border border-white/10 bg-slate-900 px-2 py-1" value={filters.project} onChange={(event) => updateFilter("project", event.target.value)} placeholder="Filter" />
                  </th>
                  <th className="px-2 pb-2">
                    <input className="w-full rounded border border-white/10 bg-slate-900 px-2 py-1" value={filters.fuel} onChange={(event) => updateFilter("fuel", event.target.value)} placeholder="Filter" />
                  </th>
                  <th />
                  <th className="px-2 pb-2">
                    <input className="w-full rounded border border-white/10 bg-slate-900 px-2 py-1" value={filters.mw} onChange={(event) => updateFilter("mw", event.target.value)} placeholder=">100" />
                  </th>
                  <th className="px-2 pb-2">
                    <input className="w-full rounded border border-white/10 bg-slate-900 px-2 py-1" value={filters.distance} onChange={(event) => updateFilter("distance", event.target.value)} placeholder="<250" />
                  </th>
                  <th />
                  <th className="px-2 pb-2">
                    <input className="w-full rounded border border-white/10 bg-slate-900 px-2 py-1" value={filters.cod} onChange={(event) => updateFilter("cod", event.target.value)} placeholder="2028" />
                  </th>
                  <th className="px-2 pb-2">
                    <input className="w-full rounded border border-white/10 bg-slate-900 px-2 py-1" value={filters.poi} onChange={(event) => updateFilter("poi", event.target.value)} placeholder="Filter" />
                  </th>
                  <th className="px-2 pb-2">
                    <input className="w-full rounded border border-white/10 bg-slate-900 px-2 py-1" value={filters.owner} onChange={(event) => updateFilter("owner", event.target.value)} placeholder="Filter" />
                  </th>
                  <th />
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                {nearbyProjects.slice(0, 250).map((project) => (
                  <tr
                    key={project.id}
                    className="border-t border-white/10 text-slate-300 hover:bg-white/[0.06]"
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <td className="px-2 py-2 font-semibold text-white">{project.projectNumber}</td>
                    <td className="px-2 py-2">
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className="h-2.5 w-2.5 rounded-full border border-white/60"
                          style={{ backgroundColor: FUEL_COLORS[project.fuelType] || FUEL_COLORS["Not listed"] }}
                        />
                        {project.fuelType}
                      </span>
                    </td>
                    <td className="px-2 py-2">{project.status}</td>
                    <td className="px-2 py-2">{formatMw(project.mw)}</td>
                    <td className="px-2 py-2">{parcel ? formatNumber(project.distanceMi, 1) : "Set load"}</td>
                    <td className="px-2 py-2">{project.codYear || "Not listed"}</td>
                    <td className="px-2 py-2">{formatDate(project.targetCod)}</td>
                    <td className="px-2 py-2">{project.poiName || "Not listed"}</td>
                    <td className="px-2 py-2">{project.transmissionOwner || "Not listed"}</td>
                    <td className="px-2 py-2">
                      {[project.studyCycle, project.studyGroup, project.studyPhase]
                        .filter(Boolean)
                        .join(" / ") || "Not listed"}
                    </td>
                    <td className="px-2 py-2">{formatDate(project.queueDate)}</td>
                    <td className="px-2 py-2">{formatDate(project.withdrawnDate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
