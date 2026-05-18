//components/composite/ActivityFeedItem.tsx
import { AlertCircle, CheckCircle2, Phone, Sparkles } from "lucide-react";

type EventType = "escalation" | "resolved" | "contact" | "ai_action";

export const ActivityFeedItem = ({
  type,
  message,
  time,
}: {
  type: EventType;
  message: string;
  time: string;
}) => {
  const icons = {
    escalation: <AlertCircle className="w-4 h-4 text-rose-400" />,
    resolved: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    contact: <Phone className="w-4 h-4 text-zinc-400" />,
    ai_action: <Sparkles className="w-4 h-4 text-cyan-400" />,
  };

  return (
    <div className="flex items-start gap-3 py-3 border-b border-zinc-800/50 last:border-0 group">
      <div className="mt-0.5 p-1.5 rounded-md bg-zinc-900 border border-zinc-800">
        {icons[type]}
      </div>
      <div className="flex flex-col flex-1">
        <p className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">
          {message}
        </p>
        <span className="text-[11px] text-zinc-600 mt-1">{time}</span>
      </div>
    </div>
  );
};
