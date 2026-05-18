"use client";
import {
  Play,
  Plus,
  Save,
  Settings2,
  ArrowRight,
  Bot,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function WorkflowBuilderPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-2rem)] rounded-[2rem] border border-zinc-100 bg-white overflow-hidden shadow-sm mt-2">
      {/* Builder Toolbar */}
      <div className="h-16 border-b border-zinc-100 flex items-center justify-between px-6 bg-white shrink-0">
        <div className="flex items-center gap-3">
          <h2 className="text-base font-semibold text-zinc-900">
            High-Risk EMI Escalation
          </h2>
          <span className="px-2.5 py-1 rounded-lg bg-orange-50 border border-orange-100 text-[10px] font-bold text-orange-700 uppercase tracking-widest">
            Draft
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors">
            <Save className="w-4 h-4" /> Save
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1A5C54] text-white text-sm font-semibold hover:bg-[#13423c] transition-colors shadow-sm">
            <Play className="w-4 h-4 fill-current" /> Deploy Workflow
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Canvas Area (Clean white with subtle gray dot grid) */}
        <div className="flex-1 relative overflow-hidden bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          {/* Static Nodes for layout mockup */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-10">
            <LightWorkflowNode
              type="trigger"
              title="EMI Missed + Risk High"
              description="Triggers when a borrower misses payment by 3 days and risk score > 75."
            />

            {/* Connection Line */}
            <div className="w-0.5 h-10 bg-zinc-200 absolute top-[104px] left-1/2 -translate-x-1/2" />

            <LightWorkflowNode
              type="action"
              title="AI Negotiator Call"
              description="Deploy AI voice agent to negotiate payment window extension."
              selected={true}
            />

            {/* Connection Line */}
            <div className="w-0.5 h-10 bg-zinc-200 absolute top-[248px] left-1/2 -translate-x-1/2" />

            <LightWorkflowNode
              type="condition"
              title="Commitment Secured?"
              description="Awaits positive sentiment extraction from call transcript."
            />
          </div>

          {/* Floating Action Button */}
          <button className="absolute bottom-8 right-8 p-4 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 shadow-xl shadow-zinc-900/10 transition-all active:scale-95">
            <Plus className="w-6 h-6" />
          </button>
        </div>

        {/* Configuration Sidebar (Contextual menu for the selected node) */}
        <div className="w-80 border-l border-zinc-100 bg-[#F9F9F8] p-6 overflow-y-auto shrink-0">
          <div className="flex items-center gap-2 mb-8">
            <Settings2 className="w-5 h-5 text-zinc-700" />
            <h3 className="text-base font-semibold text-zinc-900">
              Node Configuration
            </h3>
          </div>

          <div className="space-y-6">
            {/* Field: Name */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                Action Name
              </label>
              <input
                type="text"
                defaultValue="AI Negotiator Call"
                className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all shadow-sm"
              />
            </div>

            {/* Field: Agent Selection */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                Agent Model
              </label>
              <div className="relative">
                <select className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-900 focus:outline-none focus:border-zinc-400 appearance-none shadow-sm">
                  <option>Empathetic Negotiator (v2.1)</option>
                  <option>Firm Collection Agent (v1.4)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-2 h-2 border-b-2 border-r-2 border-zinc-400 rotate-45" />
                </div>
              </div>
            </div>

            {/* Field: Parameters */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                Max Concession (Days)
              </label>
              <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-xl px-4 py-2.5 shadow-sm">
                <input
                  type="number"
                  defaultValue={5}
                  className="w-full bg-transparent text-sm font-medium text-zinc-900 focus:outline-none"
                />
                <span className="text-xs font-bold text-zinc-400">Days</span>
              </div>
              <p className="text-[10px] text-zinc-500 pt-1 leading-relaxed">
                Maximum extension the AI can offer without requiring human
                approval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Light Node Component
type NodeType = "trigger" | "action" | "condition" | "wait";

interface LightWorkflowNodeProps {
  type: NodeType;
  title: string;
  description: string;
  selected?: boolean;
}

function LightWorkflowNode({
  type,
  title,
  description,
  selected = false,
}: LightWorkflowNodeProps) {
  const typeConfig = {
    trigger: {
      icon: ArrowRight,
      color: "text-emerald-700",
      bg: "bg-emerald-50",
    },
    action: { icon: Bot, color: "text-[#1A5C54]", bg: "bg-teal-50" },
    condition: {
      icon: AlertTriangle,
      color: "text-orange-700",
      bg: "bg-orange-50",
    },
    wait: { icon: Clock, color: "text-zinc-700", bg: "bg-zinc-100" },
  };

  const Icon = typeConfig[type].icon;

  return (
    <div
      className={cn(
        "relative w-72 rounded-[1.5rem] bg-white shadow-sm transition-all p-5",
        selected
          ? "border-2 border-[#1A5C54] shadow-md shadow-teal-900/5 ring-4 ring-teal-50"
          : "border border-zinc-200 hover:border-zinc-300",
        "cursor-pointer group z-10",
      )}
    >
      {/* Top Connection Port */}
      {type !== "trigger" && (
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-zinc-300 rounded-full group-hover:border-zinc-500 transition-colors z-20" />
      )}

      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className={cn("p-2 rounded-xl", typeConfig[type].bg)}>
            <Icon className={cn("w-4 h-4", typeConfig[type].color)} />
          </div>
          <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
            {type}
          </span>
        </div>
      </div>

      <h4 className="text-sm font-semibold text-zinc-900 tracking-tight">
        {title}
      </h4>
      <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed line-clamp-2">
        {description}
      </p>

      {/* Bottom Connection Port */}
      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-zinc-300 rounded-full group-hover:border-zinc-500 transition-colors z-20" />
    </div>
  );
}
