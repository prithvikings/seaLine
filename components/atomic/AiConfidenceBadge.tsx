//components/atomic/AiConfidenceBadge.tsx

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export const AiConfidenceBadge = ({ score }: { score: number }) => {
  const isHigh = score > 85;
  const isMedium = score > 60 && score <= 85;

  return (
    <div
      className={cn(
        "flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium tracking-wide border",
        isHigh
          ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
          : isMedium
            ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
            : "bg-zinc-800/50 text-zinc-400 border-zinc-700",
      )}
    >
      <Sparkles className="w-2.5 h-2.5" />
      {score}% Match
    </div>
  );
};
