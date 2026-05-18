//components/atomic/RiskBadge.tsx
import { cn } from "@/lib/utils";

type RiskLevel = "low" | "medium" | "high" | "critical";

export const RiskBadge = ({ level }: { level: RiskLevel }) => {
  const styles = {
    low: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    medium: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    high: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    critical:
      "bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.1)]",
  };

  return (
    <span
      className={cn(
        "px-2 py-0.5 rounded border text-[11px] font-semibold tracking-wider uppercase",
        styles[level],
      )}
    >
      {level}
    </span>
  );
};
