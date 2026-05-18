//components/atomic/BehavioralMetric.tsx
"use client";
import { cn } from "@/lib/utils";

interface BehavioralMetricProps {
  label: string;
  value: string;
  intensity: "low" | "medium" | "high" | "volatile";
}

export const BehavioralMetric = ({
  label,
  value,
  intensity,
}: BehavioralMetricProps) => {
  const intensityColors = {
    low: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    medium: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    high: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    volatile:
      "text-rose-400 bg-rose-500/10 border-rose-500/20 shadow-[0_0_8px_rgba(244,63,94,0.05)]",
  };

  return (
    <div className="flex items-center justify-between p-2.5 rounded border border-zinc-800 bg-zinc-950/50">
      <span className="text-[11px] font-medium text-zinc-400 tracking-tight">
        {label}
      </span>
      <div
        className={cn(
          "flex items-center gap-1.5 px-2 py-0.5 rounded border text-[11px] font-mono font-medium uppercase",
          intensityColors[intensity],
        )}
      >
        {value}
      </div>
    </div>
  );
};
