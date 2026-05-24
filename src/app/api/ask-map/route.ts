export const runtime = "nodejs";

type MapQuestionProject = {
  id: string;
  label: string;
  fuelType: string;
  status: string;
  mw: number | null;
  codYear: number | string | null;
  codDate: string | null;
  queueStage?: string;
  owner?: string;
  poi?: string;
  state?: string;
  county?: string;
  distanceMi?: number | null;
  electricalDistanceMi?: number | null;
};

type MapQuestionRequest = {
  datasetName?: string;
  question?: string;
  projects?: MapQuestionProject[];
  totalProjectCount?: number;
  currentFilters?: Record<string, string | number | boolean | null>;
  sourceNotes?: string;
};

type MapQuestionResult = {
  answer: string;
  action: "answer" | "highlight" | "filter" | "zoom";
  confidence: "high" | "medium" | "low";
  filters: {
    codYear: string | null;
    status: string | null;
    fuelType: string | null;
    owner: string | null;
    poi: string | null;
    state: string | null;
    county: string | null;
    minMw: number | null;
    maxMw: number | null;
    radiusMiles: number | null;
  };
  highlightProjectIds: string[];
  tableProjectIds: string[];
  caveats: string[];
};

const responseSchema = {
  type: "object",
  additionalProperties: false,
  required: ["answer", "action", "confidence", "filters", "highlightProjectIds", "tableProjectIds", "caveats"],
  properties: {
    answer: {
      type: "string",
      description: "A concise grounded answer using only the supplied map data.",
    },
    action: {
      type: "string",
      enum: ["answer", "highlight", "filter", "zoom"],
      description: "The safest UI action implied by the question.",
    },
    confidence: {
      type: "string",
      enum: ["high", "medium", "low"],
    },
    filters: {
      type: "object",
      additionalProperties: false,
      required: [
        "codYear",
        "status",
        "fuelType",
        "owner",
        "poi",
        "state",
        "county",
        "minMw",
        "maxMw",
        "radiusMiles",
      ],
      properties: {
        codYear: { type: ["string", "null"] },
        status: { type: ["string", "null"] },
        fuelType: { type: ["string", "null"] },
        owner: { type: ["string", "null"] },
        poi: { type: ["string", "null"] },
        state: { type: ["string", "null"] },
        county: { type: ["string", "null"] },
        minMw: { type: ["number", "null"] },
        maxMw: { type: ["number", "null"] },
        radiusMiles: { type: ["number", "null"] },
      },
    },
    highlightProjectIds: {
      type: "array",
      items: { type: "string" },
      description: "Project ids from the supplied rows that should be emphasized on the map.",
    },
    tableProjectIds: {
      type: "array",
      items: { type: "string" },
      description: "Project ids from the supplied rows that best answer the user question.",
    },
    caveats: {
      type: "array",
      items: { type: "string" },
    },
  },
} as const;

const emptyFilters: MapQuestionResult["filters"] = {
  codYear: null,
  status: null,
  fuelType: null,
  owner: null,
  poi: null,
  state: null,
  county: null,
  minMw: null,
  maxMw: null,
  radiusMiles: null,
};

function normalizeText(value: unknown) {
  return String(value ?? "").toLowerCase();
}

function roundedMw(value: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value);
}

function projectDistance(project: MapQuestionProject) {
  return project.electricalDistanceMi ?? project.distanceMi ?? null;
}

function detectFuel(question: string) {
  if (/\bsolar|pv|photovoltaic\b/.test(question)) return "solar";
  if (/\bwind\b/.test(question)) return "wind";
  if (/\bbess|battery|storage\b/.test(question)) return "bess";
  if (/\bgas|thermal\b/.test(question)) return "gas";
  if (/\bhybrid\b/.test(question)) return "hybrid";
  if (/\bnuclear\b/.test(question)) return "nuclear";
  if (/\bhydro\b/.test(question)) return "hydro";
  return null;
}

function detectRadius(question: string) {
  const match = question.match(/(?:within|under|less than|inside|<)\s*(\d+(?:\.\d+)?)\s*(?:mi|mile|miles)\b/);
  return match ? Number(match[1]) : null;
}

function detectMinMw(question: string) {
  const match = question.match(/(?:over|above|greater than|at least|>=|>)\s*(\d+(?:\.\d+)?)\s*(?:mw|megawatt|megawatts)\b/);
  return match ? Number(match[1]) : null;
}

function detectMaxMw(question: string) {
  const match = question.match(/(?:under|below|less than|at most|<=|<)\s*(\d+(?:\.\d+)?)\s*(?:mw|megawatt|megawatts)\b/);
  return match ? Number(match[1]) : null;
}

function deterministicAnswer(request: MapQuestionRequest): MapQuestionResult {
  const question = normalizeText(request.question);
  const projects = Array.isArray(request.projects) ? request.projects : [];
  const codYear = question.match(/\b(20\d{2})\b/)?.[1] ?? null;
  const status = /\bwithdrawn\b/.test(question)
    ? "Withdrawn"
    : /\bdone|complete|completed|in service\b/.test(question)
      ? "Done"
      : /\bactive\b/.test(question)
        ? "Active"
        : null;
  const fuel = detectFuel(question);
  const radiusMiles = detectRadius(question);
  const minMw = detectMinMw(question);
  const maxMw = detectMaxMw(question);

  const matches = projects.filter((project) => {
    const distance = projectDistance(project);
    const projectFuel = normalizeText(project.fuelType);
    const projectStatus = normalizeText(project.status);
    if (codYear && String(project.codYear ?? "") !== codYear) return false;
    if (status && !projectStatus.includes(status.toLowerCase())) return false;
    if (fuel && !projectFuel.includes(fuel)) return false;
    if (radiusMiles !== null && (distance === null || distance > radiusMiles)) return false;
    if (minMw !== null && (project.mw === null || project.mw < minMw)) return false;
    if (maxMw !== null && (project.mw === null || project.mw > maxMw)) return false;
    return true;
  });

  const sorted = [...matches].sort((a, b) => {
    const aDistance = projectDistance(a) ?? Number.POSITIVE_INFINITY;
    const bDistance = projectDistance(b) ?? Number.POSITIVE_INFINITY;
    return aDistance - bDistance;
  });
  const totalMw = sorted.reduce((sum, project) => sum + (project.mw ?? 0), 0);
  const topIds = sorted.slice(0, 25).map((project) => project.id);
  const topLabels = sorted
    .slice(0, 5)
    .map((project) => `${project.label} (${project.mw ?? "unknown"} MW)`)
    .join(", ");

  const qualifiers = [
    status,
    fuel ? fuel.toUpperCase() : null,
    codYear ? `COD ${codYear}` : null,
    radiusMiles !== null ? `within ${radiusMiles} miles` : null,
    minMw !== null ? `over ${minMw} MW` : null,
    maxMw !== null ? `under ${maxMw} MW` : null,
  ].filter(Boolean);

  return {
    answer:
      sorted.length === 0
        ? `I did not find matching projects in the rows currently available to the map${qualifiers.length ? ` for ${qualifiers.join(", ")}` : ""}.`
        : `I found ${sorted.length} matching project${sorted.length === 1 ? "" : "s"}${qualifiers.length ? ` for ${qualifiers.join(", ")}` : ""}, totaling ${roundedMw(totalMw)} MW. Closest/top matches: ${topLabels}.`,
    action: sorted.length > 0 ? "highlight" : "answer",
    confidence: "medium",
    filters: {
      ...emptyFilters,
      codYear,
      status,
      fuelType: fuel,
      minMw,
      maxMw,
      radiusMiles,
    },
    highlightProjectIds: topIds,
    tableProjectIds: topIds,
    caveats: [
      "This deterministic fallback handles common fuel, year, MW, status, and radius questions. Add OPENAI_API_KEY for broader natural-language interpretation.",
    ],
  };
}

function parseOutputText(payload: Record<string, unknown>) {
  if (typeof payload.output_text === "string") return payload.output_text;
  const output = Array.isArray(payload.output) ? payload.output : [];
  for (const item of output) {
    const content = typeof item === "object" && item ? (item as { content?: unknown }).content : undefined;
    if (!Array.isArray(content)) continue;
    for (const part of content) {
      if (typeof part === "object" && part && typeof (part as { text?: unknown }).text === "string") {
        return (part as { text: string }).text;
      }
    }
  }
  return "";
}

export async function POST(request: Request) {
  const body = (await request.json()) as MapQuestionRequest;
  const projects = Array.isArray(body.projects) ? body.projects.slice(0, 500) : [];
  const safeBody: MapQuestionRequest = {
    ...body,
    projects,
    question: String(body.question || "").slice(0, 600),
  };

  if (!safeBody.question?.trim()) {
    return Response.json({ error: "Question is required." }, { status: 400 });
  }

  if (!process.env.OPENAI_API_KEY) {
    return Response.json(deterministicAnswer(safeBody));
  }

  const system = [
    "You are an interconnection map question interpreter.",
    "Answer using only the supplied project rows, aggregate counts, current filters, and source notes.",
    "Do not invent owners, voltages, upgrade costs, distances, dates, or projects.",
    "If the provided rows are insufficient, say what cannot be determined and set confidence to low.",
    "When a question asks to show, find, filter, compare, rank, or zoom, return project IDs that exist in the supplied rows.",
    "Prefer concise answers suitable for a map UI.",
  ].join(" ");

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      input: [
        { role: "system", content: system },
        {
          role: "user",
          content: JSON.stringify({
            datasetName: safeBody.datasetName,
            question: safeBody.question,
            totalProjectCount: safeBody.totalProjectCount,
            currentFilters: safeBody.currentFilters,
            sourceNotes: safeBody.sourceNotes,
            projects,
          }),
        },
      ],
      text: {
        format: {
          type: "json_schema",
          name: "map_question_answer",
          strict: true,
          schema: responseSchema,
        },
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return Response.json(
      {
        ...deterministicAnswer(safeBody),
        caveats: [
          "OpenAI request failed, so this answer used the deterministic fallback.",
          errorText.slice(0, 240),
        ],
      },
      { status: 200 },
    );
  }

  const payload = (await response.json()) as Record<string, unknown>;
  const outputText = parseOutputText(payload);
  try {
    return Response.json(JSON.parse(outputText) as MapQuestionResult);
  } catch {
    return Response.json({
      ...deterministicAnswer(safeBody),
      caveats: ["The model response could not be parsed, so this answer used the deterministic fallback."],
    });
  }
}
