"use client";

import { useMemo, useState } from "react";

export type MapQuestionProject = {
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

export type MapQuestionResult = {
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

type AskMapPanelProps = {
  datasetName: string;
  projects: MapQuestionProject[];
  totalProjectCount: number;
  currentFilters?: Record<string, string | number | boolean | null>;
  sourceNotes?: string;
  theme?: "dark" | "light";
  onApply?: (result: MapQuestionResult) => void;
};

const examples = [
  "Show active solar projects within 100 miles",
  "How many MW of BESS are near this parcel?",
  "Which COD 2028 projects are closest?",
  "Highlight withdrawn projects over 100 MW",
];

function aggregateProjects(projects: MapQuestionProject[]) {
  const byFuel: Record<string, { count: number; mw: number }> = {};
  const byStatus: Record<string, { count: number; mw: number }> = {};
  const byOwner: Record<string, { count: number; mw: number }> = {};

  for (const project of projects) {
    for (const [bucket, key] of [
      [byFuel, project.fuelType || "Not listed"],
      [byStatus, project.status || "Not listed"],
      [byOwner, project.owner || "Not listed"],
    ] as const) {
      bucket[key] ||= { count: 0, mw: 0 };
      bucket[key].count += 1;
      bucket[key].mw += project.mw ?? 0;
    }
  }

  return { byFuel, byOwner, byStatus };
}

function formatCount(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export function AskMapPanel({
  currentFilters = {},
  datasetName,
  onApply,
  projects,
  sourceNotes,
  theme = "dark",
  totalProjectCount,
}: AskMapPanelProps) {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState<MapQuestionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const aggregates = useMemo(() => aggregateProjects(projects), [projects]);
  const dark = theme === "dark";

  async function askMap(nextQuestion = question) {
    const trimmed = nextQuestion.trim();
    if (!trimmed) return;
    setQuestion(trimmed);
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/ask-map", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          aggregates,
          currentFilters,
          datasetName,
          projects: projects.slice(0, 500),
          question: trimmed,
          sourceNotes,
          totalProjectCount,
        }),
      });
      if (!response.ok) throw new Error(`Ask map failed (${response.status})`);
      const payload = (await response.json()) as MapQuestionResult;
      setResult(payload);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not ask the map.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className={
        dark
          ? "rounded-lg border border-cyan-300/20 bg-slate-950/80 p-4 text-slate-100 shadow-xl"
          : "rounded-lg border border-[#d7d1c5] bg-white p-4 text-[#172026] shadow-sm"
      }
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div
            className={
              dark
                ? "text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200"
                : "text-xs font-semibold uppercase tracking-[0.14em] text-[#7b5d2a]"
            }
          >
            Ask the map
          </div>
          <h2 className="mt-1 text-lg font-semibold">Natural-language map questions</h2>
          <p className={dark ? "mt-1 text-sm text-slate-300" : "mt-1 text-sm text-[#66727a]"}>
            Ask about visible projects, MW totals, COD years, owners, POIs, statuses, and distance from the active parcel.
          </p>
        </div>
        <div className={dark ? "text-xs text-slate-400" : "text-xs text-[#66727a]"}>
          Using {formatCount(projects.length)} rows from the current map context
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 md:flex-row">
        <input
          className={
            dark
              ? "min-w-0 flex-1 rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white outline-none ring-cyan-300/40 placeholder:text-slate-500 focus:ring-2"
              : "min-w-0 flex-1 rounded-md border border-[#cfc5b6] bg-[#fffaf0] px-3 py-2 text-sm outline-none ring-[#b68d3d]/30 placeholder:text-[#8a8175] focus:ring-2"
          }
          placeholder="Example: show active BESS projects over 100 MW within 150 miles"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") void askMap();
          }}
        />
        <button
          className={
            dark
              ? "rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
              : "rounded-md bg-[#22313a] px-4 py-2 text-sm font-semibold text-white hover:bg-[#32434d] disabled:cursor-not-allowed disabled:opacity-60"
          }
          disabled={loading}
          onClick={() => void askMap()}
          type="button"
        >
          {loading ? "Asking..." : "Ask"}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {examples.map((example) => (
          <button
            className={
              dark
                ? "rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-slate-300 hover:bg-white/10"
                : "rounded-md border border-[#d7d1c5] px-2.5 py-1.5 text-xs text-[#48525a] hover:bg-[#f7f2e9]"
            }
            key={example}
            onClick={() => void askMap(example)}
            type="button"
          >
            {example}
          </button>
        ))}
      </div>

      {error ? <div className="mt-3 rounded-md bg-red-500/10 p-3 text-sm text-red-200">{error}</div> : null}

      {result ? (
        <div
          className={
            dark
              ? "mt-4 rounded-md border border-white/10 bg-slate-900/80 p-3"
              : "mt-4 rounded-md border border-[#e5ded2] bg-[#fffaf0] p-3"
          }
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <p className={dark ? "text-sm leading-6 text-slate-100" : "text-sm leading-6 text-[#22313a]"}>
              {result.answer}
            </p>
            {onApply ? (
              <button
                className={
                  dark
                    ? "shrink-0 rounded-md border border-cyan-300/40 px-3 py-1.5 text-xs font-semibold text-cyan-100 hover:bg-cyan-300/10"
                    : "shrink-0 rounded-md border border-[#b9aa90] px-3 py-1.5 text-xs font-semibold text-[#22313a] hover:bg-[#f0e7d6]"
                }
                onClick={() => onApply(result)}
                type="button"
              >
                Apply to map
              </button>
            ) : null}
          </div>
          <div className={dark ? "mt-2 text-xs text-slate-400" : "mt-2 text-xs text-[#66727a]"}>
            Confidence: {result.confidence}. Action: {result.action}. Matching IDs:{" "}
            {result.tableProjectIds.length ? result.tableProjectIds.slice(0, 10).join(", ") : "none"}
          </div>
          {result.caveats.length ? (
            <ul className={dark ? "mt-2 list-disc pl-5 text-xs text-slate-400" : "mt-2 list-disc pl-5 text-xs text-[#66727a]"}>
              {result.caveats.map((caveat) => (
                <li key={caveat}>{caveat}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
