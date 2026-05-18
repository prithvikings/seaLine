//components/atomic/WorkflowNode.tsx
"use client";
import { cn } from "@/lib/utils";
import { Bot, Phone, AlertTriangle, ArrowRight, Clock } from "lucide-react";

export type NodeType = "trigger" | "action" | "condition" | "wait";
export type NodeStatus = "active" | "draft" | "error";

interface WorkflowNodeProps {
  type: NodeType;
  title: string;
  description: string;
  status?: NodeStatus;
  selected?: boolean;
}

export const WorkflowNode = ({
  type,
  title,
  description,
  status = "active",
  selected = false,
}: WorkflowNodeProps) => {
  // Enterprise styling mapping
  const typeConfig = {
    trigger: {
      icon: ArrowRight,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    action: { icon: Bot, color: "text-blue-400", bg: "bg-blue-500/10" },
    condition: {
      icon: AlertTriangle,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
    },
    wait: { icon: Clock, color: "text-zinc-400", bg: "bg-zinc-500/10" },
  };

  const Icon = typeConfig[type].icon;

  return (
    <div
      className={cn(
        "relative w-64 rounded-lg border bg-[#09090B] shadow-sm transition-all",
        selected
          ? "border-blue-500 ring-1 ring-blue-500/50"
          : "border-zinc-800 hover:border-zinc-700",
        "cursor-pointer group",
      )}
    >
      {/* Top Connection Port */}
      {type !== "trigger" && (
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border border-zinc-700 rounded-full group-hover:border-blue-400 transition-colors" />
      )}

      <div className="p-3">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className={cn("p-1.5 rounded-md", typeConfig[type].bg)}>
              <Icon className={cn("w-3.5 h-3.5", typeConfig[type].color)} />
            </div>
            <span className="text-[10px] font-bold tracking-wider text-zinc-500 uppercase">
              {type}
            </span>
          </div>
          {/* Status Indicator */}
          <div
            className={cn(
              "w-2 h-2 rounded-full",
              status === "active"
                ? "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                : status === "error"
                  ? "bg-rose-500"
                  : "bg-zinc-600",
            )}
          />
        </div>

        <h4 className="text-sm font-medium text-zinc-100 tracking-tight">
          {title}
        </h4>
        <p className="text-[11px] text-zinc-500 mt-1 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Bottom Connection Port */}
      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border border-zinc-700 rounded-full group-hover:border-blue-400 transition-colors" />
    </div>
  );
};
