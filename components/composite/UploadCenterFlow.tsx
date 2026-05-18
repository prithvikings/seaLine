//components/composite/uploadCenterFlow.tsx
"use client";
import {
  UploadCloud,
  FileText,
  ChevronRight,
  Loader2,
  Database,
} from "lucide-react";
import { DataMappingRow } from "@/components/atomic/DataMappingRow";

export default function UploadCenterFlow() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header & Stepper */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-xl font-semibold text-zinc-100 tracking-tight">
            Data Onboarding
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Import and map borrower portfolio data.
          </p>
        </div>

        {/* Minimal Enterprise Stepper */}
        <div className="flex items-center gap-2 text-xs font-medium">
          <span className="text-zinc-500">1. Upload</span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-700" />
          <span className="text-zinc-500">2. Analyzing</span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-700" />
          <span className="text-zinc-100 px-2 py-1 bg-zinc-900 rounded-md border border-zinc-700">
            3. Schema Mapping
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-700" />
          <span className="text-zinc-600">4. Import</span>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Data Mapping Table (Takes up 2 columns) */}
        <div className="lg:col-span-2 flex flex-col rounded-xl border border-zinc-800 bg-[#09090B] overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-950/50">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-zinc-400" />
              <h2 className="text-sm font-semibold text-zinc-100">
                Map Columns
              </h2>
            </div>
            <span className="text-[11px] text-zinc-400">
              12 columns detected
            </span>
          </div>

          <div className="flex flex-col overflow-y-auto max-h-[500px]">
            {/* Table Headers */}
            <div className="grid grid-cols-[1fr_auto_1fr_auto] items-center gap-4 px-4 py-2 border-b border-zinc-800 bg-zinc-900/30 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
              <span>Source File (CSV)</span>
              <span className="w-4"></span>
              <span>System Field</span>
              <span className="text-right w-24">AI Match</span>
            </div>

            {/* Mapping Rows */}
            <DataMappingRow
              csvHeader="first_last_name"
              sampleData="John Doe"
              targetField="borrower_name"
              confidenceScore={98}
              isRequired={true}
            />
            <DataMappingRow
              csvHeader="loan_bal_outstanding"
              sampleData="15400.50"
              targetField="loan_amount"
              confidenceScore={89}
              isRequired={true}
            />
            <DataMappingRow
              csvHeader="days_past_due_dpd"
              sampleData="45"
              targetField="days_overdue"
              confidenceScore={92}
            />
            <DataMappingRow
              csvHeader="customer_phone_pri"
              sampleData="+1 (555) 019-2834"
              targetField="contact_number"
              confidenceScore={76}
            />
            <DataMappingRow
              csvHeader="internal_notes_q3"
              sampleData="Customer requested extension..."
              targetField="unmapped"
            />
          </div>
        </div>

        {/* Right Column: AI Portfolio Summary Sidebar */}
        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <h3 className="text-sm font-semibold text-zinc-100 mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              File Intelligence
            </h3>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
                  File Name
                </span>
                <p className="text-xs font-mono text-zinc-300">
                  Q3_delinquency_batch_v2.csv
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
                  Rows Detected
                </span>
                <p className="text-sm font-medium text-zinc-100">
                  4,281 records
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80">
                <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-2 block">
                  AI Pre-Analysis
                </span>
                <ul className="space-y-2 text-[11px] text-zinc-400">
                  <li className="flex items-start gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1 shrink-0" />
                    <span>
                      Detected high concentration of 60+ DPD accounts.
                    </span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 shrink-0" />
                    <span>All required schema fields successfully mapped.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Area */}
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-100 text-zinc-900 text-sm font-semibold hover:bg-white transition-colors shadow-sm mt-auto">
            Confirm & Import Data <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
