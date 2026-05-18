//components/atomic/AiStatusIndicator.tsx
"use client";
import { motion } from "motion/react";

export const AiStatusIndicator = ({
  status = "active",
}: {
  status?: "active" | "idle" | "processing";
}) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800">
      <motion.div
        animate={{ scale: status === "processing" ? [1, 1.5, 1] : 1 }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className={`w-2 h-2 rounded-full ${
          status === "active"
            ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.4)]"
            : status === "processing"
              ? "bg-blue-500"
              : "bg-zinc-600"
        }`}
      />
      <span className="text-xs font-medium text-zinc-300 tracking-tight">
        {status === "active"
          ? "System Live"
          : status === "processing"
            ? "AI Analyzing..."
            : "Idle"}
      </span>
    </div>
  );
};
