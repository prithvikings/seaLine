"use client";
import {
  FileText,
  ChevronRight,
  Database,
  ArrowRight,
  Sparkles,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function UploadCenterPage() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-6 pt-2">
      {/* Header & Stepper */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-100 pb-6 gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
            Data Onboarding
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Import and map borrower portfolio data into the intelligence core.
          </p>
        </div>

        {/* Minimal Stepper aligned with target aesthetic */}
        <div className="flex items-center gap-2 text-xs font-medium">
          <span className="text-zinc-400">Upload</span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-300" />
          <span className="text-zinc-400">Analyzing</span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-300" />
          <span className="text-zinc-900 px-3 py-1.5 bg-[#E6E6E1] rounded-xl font-semibold">
            Schema Mapping
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-300" />
          <span className="text-zinc-400">Import</span>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-2">
        {/* Left Column: Data Mapping Workspace */}
        <div className="lg:col-span-2 flex flex-col bg-[#F9F9F8] rounded-[2rem] p-6 shadow-sm border border-zinc-100/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-zinc-700" />
              <h2 className="text-base font-semibold text-zinc-900">
                Map Columns
              </h2>
            </div>
            <span className="text-xs font-medium text-zinc-500 bg-zinc-200/60 px-2.5 py-1 rounded-lg">
              12 columns detected
            </span>
          </div>

          {/* Table Headers */}
          <div className="grid grid-cols-[1fr_auto_1fr_auto] items-center gap-4 px-4 py-2 border-b border-zinc-200 text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
            <span>Source File (CSV)</span>
            <span className="w-4"></span>
            <span>System Field</span>
            <span className="text-right pr-4">AI Match</span>
          </div>

          {/* Mapping Rows - Styled contextually for light mode */}
          <div className="flex flex-col gap-1 overflow-y-auto max-h-[460px] pr-1">
            <LightMappingRow
              csvHeader="first_last_name"
              sampleData="John Doe"
              targetField="borrower_name"
              confidenceScore={98}
              isRequired={true}
            />
            <LightMappingRow
              csvHeader="loan_bal_outstanding"
              sampleData="15400.50"
              targetField="loan_amount"
              confidenceScore={89}
              isRequired={true}
            />
            <LightMappingRow
              csvHeader="days_past_due_dpd"
              sampleData="45"
              targetField="days_overdue"
              confidenceScore={92}
            />
            <LightMappingRow
              csvHeader="customer_phone_pri"
              sampleData="+1 (555) 019-2834"
              targetField="contact_number"
              confidenceScore={76}
            />
            <LightMappingRow
              csvHeader="internal_notes_q3"
              sampleData="Customer requested extension..."
              targetField="unmapped"
            />
          </div>
        </div>

        {/* Right Column: Sidebar Panels */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          {/* File Intelligence Card */}
          <div className="bg-[#F9F9F8] rounded-[2rem] p-6 border border-zinc-100/50 flex flex-col gap-5">
            <h3 className="text-sm font-semibold text-zinc-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-zinc-700" />
              File Intelligence
            </h3>

            <div className="space-y-4 border-t border-zinc-200/60 pt-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                  File Name
                </span>
                <p className="text-xs font-mono text-zinc-700 truncate bg-white p-2 rounded-xl border border-zinc-100">
                  Q3_delinquency_batch_v2.csv
                </p>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                  Rows Detected
                </span>
                <p className="text-lg font-semibold text-zinc-900">
                  4,281 records
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-200/60">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2 block">
                  AI Pre-Analysis
                </span>
                <ul className="space-y-2.5 text-xs text-zinc-600">
                  <li className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-zinc-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>
                      Detected high concentration of{" "}
                      <strong className="text-zinc-900 font-semibold">
                        60+ DPD
                      </strong>{" "}
                      accounts in regional clusters.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-zinc-100">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1A5C54] mt-1.5 shrink-0" />
                    <span>
                      All core required schema fields successfully identified.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Call Button */}
          <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-sm lg:mt-A">
            Confirm & Import Data <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Inline Row Component rewritten safely for the target light aesthetic
interface LightMappingRowProps {
  csvHeader: string;
  sampleData: string;
  targetField: string;
  confidenceScore?: number;
  isRequired?: boolean;
}

function LightMappingRow({
  csvHeader,
  sampleData,
  targetField,
  confidenceScore,
  isRequired,
}: LightMappingRowProps) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr_auto] items-center gap-4 py-3 border-b border-zinc-200/60 last:border-0 hover:bg-white/40 px-3 rounded-xl transition-colors">
      {/* CSV Source Column */}
      <div className="flex flex-col min-w-0">
        <span className="text-xs font-mono font-semibold text-zinc-800 truncate">
          {csvHeader}
        </span>
        <span className="text-[11px] text-zinc-500 truncate max-w-[180px] mt-0.5">
          e.g., {sampleData}
        </span>
      </div>

      {/* Directional Indicator */}
      <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />

      {/* Destination System Field Select */}
      <div className="relative">
        <select
          defaultValue={targetField}
          className="w-full bg-white border border-zinc-200 rounded-xl py-2 pl-3 pr-8 text-xs font-medium text-zinc-800 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 appearance-none shadow-sm"
        >
          <option value="unmapped">-- Ignore Column --</option>
          <option value="borrower_name">Borrower Full Name</option>
          <option value="loan_amount">Total Loan Amount</option>
          <option value="days_overdue">Days Overdue (DPD)</option>
          <option value="contact_number">Primary Contact</option>
          <option value="risk_tier">External Risk Tier</option>
        </select>
        {isRequired && (
          <span className="absolute -top-1.5 -right-1 text-[9px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-100">
            REQ
          </span>
        )}
      </div>

      {/* Validation / AI Status */}
      <div className="flex items-center justify-end w-24 pr-1">
        {confidenceScore ? (
          <div
            className={cn(
              "flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold tracking-wide border",
              confidenceScore > 85
                ? "bg-teal-50 text-[#1A5C54] border-teal-100"
                : "bg-amber-50 text-amber-700 border-amber-100",
            )}
          >
            <Sparkles className="w-2.5 h-2.5" />
            {confidenceScore}%
          </div>
        ) : (
          <div className="flex items-center gap-1 text-[10px] font-medium text-zinc-400">
            <AlertCircle className="w-3 h-3" /> Manual
          </div>
        )}
      </div>
    </div>
  );
}
