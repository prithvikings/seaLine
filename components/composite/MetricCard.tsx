//components/composite/MetricCard.tsx
"use client";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  trend: number;
  isPositive: boolean;
  aiInsight?: string;
}

export const MetricCard = ({
  title,
  value,
  trend,
  isPositive,
  aiInsight,
}: MetricCardProps) => {
  return (
    <div className="flex flex-col p-5 rounded-lg bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
      <h3 className="text-sm font-medium text-zinc-400 mb-2">{title}</h3>
      <div className="flex items-end justify-between mb-4">
        <span className="text-2xl font-semibold text-zinc-50 tracking-tight">
          {value}
        </span>
        <div
          className={cn(
            "flex items-center text-xs font-medium",
            isPositive ? "text-emerald-400" : "text-rose-400",
          )}
        >
          {isPositive ? (
            <ArrowUpRight className="w-3 h-3 mr-1" />
          ) : (
            <ArrowDownRight className="w-3 h-3 mr-1" />
          )}
          {trend}%
        </div>
      </div>
      {aiInsight && (
        <div className="mt-auto pt-3 border-t border-zinc-800/50 flex items-start gap-2">
          <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
          <p className="text-[11px] text-zinc-500 leading-tight">{aiInsight}</p>
        </div>
      )}
    </div>
  );
};
