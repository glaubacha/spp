"use client";

type MarketToggleProps = {
  active: "spp" | "miso";
  theme?: "light" | "dark";
};

const markets = [
  { id: "spp", href: "/interconnection", label: "SPP" },
  { id: "miso", href: "/miso-interconnection", label: "MISO" },
] as const;

export function MarketToggle({ active, theme = "light" }: MarketToggleProps) {
  const dark = theme === "dark";

  return (
    <div
      aria-label="Select interconnection market"
      className={
        dark
          ? "inline-flex rounded-md border border-white/15 bg-slate-950/80 p-1"
          : "inline-flex rounded-md border border-[#cfc5b6] bg-[#f7f2e9] p-1"
      }
      role="group"
    >
      {markets.map((market) => {
        const selected = active === market.id;
        return (
          <a
            aria-current={selected ? "page" : undefined}
            className={
              selected
                ? dark
                  ? "rounded px-4 py-2 text-sm font-semibold bg-cyan-300 text-slate-950 shadow-sm"
                  : "rounded px-4 py-2 text-sm font-semibold bg-white text-[#172026] shadow-sm"
                : dark
                  ? "rounded px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                  : "rounded px-4 py-2 text-sm font-semibold text-[#66727a] transition hover:bg-white/70 hover:text-[#172026]"
            }
            href={market.href}
            key={market.id}
          >
            {market.label}
          </a>
        );
      })}
    </div>
  );
}
