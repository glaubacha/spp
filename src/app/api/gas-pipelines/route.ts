import { NextResponse } from "next/server";

type LonLat = { lat: number; lon: number };
type ArcGisFeature = {
  attributes?: Record<string, string | number | null>;
  geometry?: { paths?: unknown };
};
type PipelineSource = {
  category: "Hazardous liquid / HGL" | "Natural gas";
  endpoint: string;
  fields: string;
  geometryUnits: "feet" | "meters";
  idField: string;
  maxPages: number;
  operatorField: string;
  pipelineNameField?: string;
  sourceName: string;
  typeField: string;
};

const naturalGasSource: PipelineSource = {
  category: "Natural gas",
  endpoint: "https://arcgis.netl.doe.gov/server/rest/services/Hosted/Natural_Gas_Pipelines/FeatureServer/10/query",
  fields: "objectid,typepipe,operator,shape__len,shape_leng",
  geometryUnits: "meters",
  idField: "objectid",
  maxPages: 4,
  operatorField: "operator",
  sourceName: "HIFLD / NETL Natural Gas Pipelines",
  typeField: "typepipe",
};

const hazardousLiquidSource: PipelineSource = {
  category: "Hazardous liquid / HGL",
  endpoint:
    "https://services5.arcgis.com/HDRa0B57OVrv2E1q/ArcGIS/rest/services/Hydrocarbon_Gas_Liquid_Pipelines/FeatureServer/0/query",
  fields: "OBJECTID,Opername,Pipename,Shape__Len,Shape_Leng",
  geometryUnits: "meters",
  idField: "OBJECTID",
  maxPages: 2,
  operatorField: "Opername",
  pipelineNameField: "Pipename",
  sourceName: "Public hydrocarbon gas liquid pipeline layer",
  typeField: "Pipename",
};

const pageSize = 2000;

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

function distanceMilesToLineCoordinates(point: LonLat, coordinates: Array<[number, number]>): number {
  let best = Infinity;

  for (let index = 1; index < coordinates.length; index += 1) {
    const previous = coordinates[index - 1];
    const current = coordinates[index];
    if (!isCoordinate(previous) || !isCoordinate(current)) continue;

    const a = { lat: previous[1], lon: previous[0] };
    const b = { lat: current[1], lon: current[0] };
    const referenceLat = ((point.lat + a.lat + b.lat) / 3) * (Math.PI / 180);
    const xScale = 69 * Math.cos(referenceLat);
    const yScale = 69;
    const ax = a.lon * xScale;
    const ay = a.lat * yScale;
    const bx = b.lon * xScale;
    const by = b.lat * yScale;
    const px = point.lon * xScale;
    const py = point.lat * yScale;
    const dx = bx - ax;
    const dy = by - ay;
    const lengthSquared = dx * dx + dy * dy;
    const fraction = lengthSquared === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lengthSquared));
    const closestX = ax + dx * fraction;
    const closestY = ay + dy * fraction;
    const distanceMiles = Math.sqrt((px - closestX) ** 2 + (py - closestY) ** 2);
    if (distanceMiles < best) best = distanceMiles;
  }

  return best;
}

function lineLengthMiles(coordinates: Array<[number, number]>): number {
  let length = 0;
  for (let index = 1; index < coordinates.length; index += 1) {
    const previous = coordinates[index - 1];
    const current = coordinates[index];
    if (!isCoordinate(previous) || !isCoordinate(current)) continue;
    length += haversineMiles({ lat: previous[1], lon: previous[0] }, { lat: current[1], lon: current[0] });
  }
  return length;
}

function compactCoordinate([lon, lat]: [number, number]): [number, number] {
  return [Number(lon.toFixed(5)), Number(lat.toFixed(5))];
}

function screeningPath(coordinates: Array<[number, number]>): Array<[number, number]> {
  const maxPoints = 90;
  if (coordinates.length <= maxPoints) return coordinates.map(compactCoordinate);

  const step = Math.ceil(coordinates.length / maxPoints);
  const simplified = coordinates.filter((_, index) => index === 0 || index === coordinates.length - 1 || index % step === 0);
  return simplified.map(compactCoordinate);
}

function cleanValue(value: string | number | null | undefined): string {
  if (value === null || value === undefined) return "Not available in source";
  const cleaned = String(value).trim();
  return cleaned || "Not available in source";
}

function roundMiles(value: number): number {
  return Math.round(value * 10) / 10;
}

async function fetchPipelineSource(source: PipelineSource, center: LonLat, radiusMiles: number) {
  const features = [];
  const seen = new Set<string>();

  for (let page = 0; page < source.maxPages; page += 1) {
    const params = new URLSearchParams({
      distance: String(Math.round(radiusMiles * 1609.344)),
      f: "json",
      geometry: `${center.lon},${center.lat}`,
      geometryType: "esriGeometryPoint",
      inSR: "4326",
      orderByFields: source.idField,
      outFields: source.fields,
      outSR: "4326",
      resultOffset: String(page * pageSize),
      resultRecordCount: String(pageSize),
      returnGeometry: "true",
      spatialRel: "esriSpatialRelIntersects",
      units: "esriSRUnit_Meter",
      where: "1=1",
    });
    const response = await fetch(`${source.endpoint}?${params.toString()}`, { next: { revalidate: 3600 } });
    if (!response.ok) throw new Error(`Could not load ${source.sourceName}`);
    const data = (await response.json()) as { exceededTransferLimit?: boolean; features?: ArcGisFeature[] };
    const arcgisFeatures = data.features ?? [];

    for (const feature of arcgisFeatures) {
      const attributes = feature.attributes ?? {};
      const id = `${source.category}:${cleanValue(attributes[source.idField])}`;
      if (seen.has(id)) continue;
      const paths = Array.isArray(feature.geometry?.paths) ? feature.geometry?.paths ?? [] : [];
      const coordinates = paths.map(coordinatesFromUnknownLine).filter((path) => path.length > 1);
      if (coordinates.length === 0) continue;
      seen.add(id);

      const distanceMiles = coordinates.reduce(
        (best, path) => Math.min(best, distanceMilesToLineCoordinates(center, path)),
        Infinity,
      );
      const lengthMiles = coordinates.reduce((sum, path) => sum + lineLengthMiles(path), 0);
      const displayCoordinates = coordinates.map(screeningPath);

      features.push({
        type: "Feature",
        geometry:
          displayCoordinates.length === 1
            ? { type: "LineString", coordinates: displayCoordinates[0] }
            : { type: "MultiLineString", coordinates: displayCoordinates },
        properties: {
          category: source.category,
          distanceMiles: Number.isFinite(distanceMiles) ? roundMiles(distanceMiles) : null,
          lineLengthMiles: Number.isFinite(lengthMiles) && lengthMiles > 0 ? roundMiles(lengthMiles) : null,
          objectid: id,
          operator: cleanValue(attributes[source.operatorField]),
          pipelineName: source.pipelineNameField ? cleanValue(attributes[source.pipelineNameField]) : "Not available in source",
          sourceName: source.sourceName,
          sourceUnits: source.geometryUnits,
          typepipe: cleanValue(attributes[source.typeField]),
        },
      });
    }

    if (!data.exceededTransferLimit && arcgisFeatures.length < pageSize) break;
  }

  return features;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const lat = Number(url.searchParams.get("lat"));
  const lon = Number(url.searchParams.get("lon"));
  const requestedRadius = Number(url.searchParams.get("radiusMiles"));
  const radiusMiles = Number.isFinite(requestedRadius) ? Math.max(1, Math.min(300, requestedRadius)) : 300;

  if (!Number.isFinite(lat) || !Number.isFinite(lon) || Math.abs(lat) > 90 || Math.abs(lon) > 180) {
    return NextResponse.json({ error: "Valid lat and lon query parameters are required." }, { status: 400 });
  }

  const center = { lat, lon };
  const [naturalGas, hazardousLiquid] = await Promise.all([
    fetchPipelineSource(naturalGasSource, center, radiusMiles),
    fetchPipelineSource(hazardousLiquidSource, center, radiusMiles),
  ]);
  const features = [...naturalGas, ...hazardousLiquid].sort(
    (a, b) => Number(a.properties.distanceMiles ?? Infinity) - Number(b.properties.distanceMiles ?? Infinity),
  );

  return NextResponse.json({
    type: "FeatureCollection",
    features,
    properties: {
      highLevelScreen: "Use NPMS Public Viewer first for gas transmission and hazardous-liquid pipeline screening.",
      radiusMiles,
      warning:
        "Pipeline layers are for high-level screening only and must not be used to identify exact pipeline locations or as a substitute for One Call or operator coordination.",
    },
  });
}
