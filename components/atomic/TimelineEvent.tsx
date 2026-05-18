//components/atomic/TimelineEvent.tsx
import { cn } from "@/lib/utils";
import {
  Clock,
  Phone,
  AlertCircle,
  FileText,
  CheckCircle2,
} from "lucide-react";

export type EventIconType = "call" | "missed" | "ai_insight" | "payment";

interface TimelineEventProps {
  type: EventIconType;
  title: string;
  timestamp: string;
  meta?: string;
  isLast?: boolean;
}

export const TimelineEvent = ({
  type,
  title,
  timestamp,
  meta,
  isLast = false,
}: TimelineEventProps) => {
  const eventConfig = {
    call: {
      icon: Phone,
      color: "text-zinc-400",
      bg: "bg-zinc-900 border-zinc-800",
    },
    missed: {
      icon: AlertCircle,
      color: "text-rose-400",
      bg: "bg-rose-500/10 border-rose-500/20",
    },
    ai_insight: {
      icon: FileText,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    payment: {
      icon: CheckCircle2,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
  };

  const Config = eventConfig[type];

  return (
    <div className="flex gap-4 relative">
      {/* Timeline spine line */}
      {!isLast && (
        <div className="absolute top-7 left-3.5 -bottom-4 w-px bg-zinc-800" />
      )}

      {/* Icon node */}
      <div
        className={cn(
          "w-7 h-7 rounded-md border flex items-center justify-center shrink-0 z-10",
          Config.bg,
        )}
      >
        <Config.icon className="w-3.5 h-3.5" />
      </div>

      {/* Content */}
      <div className="flex flex-col pb-4 border-b border-zinc-900 w-full">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-medium text-zinc-200">{title}</span>
          <span className="text-[10px] font-mono text-zinc-500 whitespace-nowrap">
            {timestamp}
          </span>
        </div>
        {meta && (
          <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed bg-zinc-950 p-2 rounded border border-zinc-900 font-mono">
            {meta}
          </p>
        )}
      </div>
    </div>
  );
};
