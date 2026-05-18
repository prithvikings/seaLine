//components/composite/WorkflowBuilder.tsx
"use client";
import { Play, Plus, Save, Settings2 } from "lucide-react";
import { WorkflowNode } from "@/components/atomic/WorkflowNode";

export default function WorkflowBuilder() {
  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] rounded-xl border border-zinc-800 bg-[#09090B] overflow-hidden">
      
      {/* Builder Toolbar */}
      <div className="h-12 border-b border-zinc-800 flex items-center justify-between px-4 bg-zinc-950/50">
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-medium text-zinc-100">High-Risk EMI Escalation</h2>
          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-medium text-zinc-400 uppercase tracking-widest">
            Draft
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors">
            <Save className="w-3.5 h-3.5" /> Save
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-100 text-zinc-900 text-xs font-semibold hover:bg-white transition-colors shadow-sm">
            <Play className="w-3.5 h-3.5 fill-current" /> Deploy Workflow
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        
        {/* Canvas Area (Using a CSS dot-grid pattern for the background) */}
        <div className="flex-1 relative overflow-hidden bg-[#09090B] bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px]">
          
          {/* Example Nodes positioned statically for mockup purposes */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8">
            <WorkflowNode 
              type="trigger"
              title="EMI Missed + Risk High"
              description="Triggers when a borrower misses payment by 3 days and risk score > 75."
            />
            {/* Conceptual SVG Connection Line */}
            <div className="w-px h-8 bg-zinc-700 absolute top-[88px] left-1/2 -translate-x-1/2" />
            
            <WorkflowNode 
              type="action"
              title="AI Negotiator Call"
              description="Deploy Lyria voice agent to negotiate payment window extension."
              selected={true}
            />
             <div className="w-px h-8 bg-zinc-700 absolute top-[196px] left-1/2 -translate-x-1/2" />

            <WorkflowNode 
              type="condition"
              title="Commitment Secured?"
              description="Awaits positive sentiment extraction from call transcript."
            />
          </div>

          {/* Floating Action Button */}
          <button className="absolute bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/20 transition-all">
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Configuration Sidebar (Contextual menu for the selected node) */}
        <div className="w-80 border-l border-zinc-800 bg-zinc-950 p-4 overflow-y-auto">
          <div className="flex items-center gap-2 mb-6">
            <Settings2 className="w-4 h-4 text-zinc-400" />
            <h3 className="text-sm font-semibold text-zinc-100">Node Configuration</h3>
          </div>

          <div className="space-y-4">
            {/* Field: Name */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Action Name</label>
              <input 
                type="text" 
                defaultValue="AI Negotiator Call"
                className="w-full bg-[#09090B] border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Field: Agent Selection */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Agent Model</label>
              <select className="w-full bg-[#09090B] border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-blue-500 appearance-none">
                <option>Empathetic Negotiator (v2.1)</option>
                <option>Firm Collection Agent (v1.4)</option>
              </select>
            </div>

            {/* Field: Parameters */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Max Concession (Days)</label>
              <div className="flex items-center gap-2 bg-[#09090B] border border-zinc-800 rounded-md px-3 py-2">
                <input 
                  type="number" 
                  defaultValue={5}
                  className="w-full bg-transparent text-sm text-zinc-100 focus:outline-none"
                />
                <span className="text-xs text-zinc-500">Days</span>
              </div>
              <p className="text-[10px] text-zinc-600">Maximum extension the AI can offer without human approval.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}