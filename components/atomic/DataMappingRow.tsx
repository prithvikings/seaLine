//components/atomic/DataMappingRow.tsx
"use client";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { AiConfidenceBadge } from "./AiConfidenceBadge";

interface DataMappingRowProps {
  csvHeader: string;
  sampleData: string;
  targetField: string;
  confidenceScore?: number;
  isRequired?: boolean;
}

export const DataMappingRow = ({
  csvHeader,
  sampleData,
  targetField,
  confidenceScore,
  isRequired,
}: DataMappingRowProps) => {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr_auto] items-center gap-4 py-3 border-b border-zinc-800/50 hover:bg-zinc-900/20 transition-colors px-4">
      {/* CSV Source Column */}
      <div className="flex flex-col">
        <span className="text-xs font-mono text-zinc-300">{csvHeader}</span>
        <span className="text-[11px] text-zinc-500 truncate max-w-[200px]">
          e.g., {sampleData}
        </span>
      </div>

      {/* Directional Indicator */}
      <ArrowRight className="w-4 h-4 text-zinc-600" />

      {/* Destination System Field Select */}
      <div className="relative">
        <select
          defaultValue={targetField}
          className="w-full bg-[#09090B] border border-zinc-700 rounded-md py-1.5 pl-3 pr-8 text-xs text-zinc-100 font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none shadow-sm"
        >
          <option value="unmapped">-- Ignore Column --</option>
          <option value="borrower_name">Borrower Full Name</option>
          <option value="loan_amount">Total Loan Amount</option>
          <option value="days_overdue">Days Overdue (DPD)</option>
          <option value="contact_number">Primary Contact</option>
          <option value="risk_tier">External Risk Tier</option>
        </select>
        {isRequired && (
          <span className="absolute -top-2 -right-2 text-[10px] text-rose-400 bg-[#09090B] px-1 font-medium">
            Req
          </span>
        )}
      </div>

      {/* Validation / AI Status */}
      <div className="flex items-center justify-end w-24">
        {confidenceScore ? (
          <AiConfidenceBadge score={confidenceScore} />
        ) : (
          <div className="flex items-center gap-1 text-[10px] text-zinc-500">
            <AlertCircle className="w-3 h-3" /> Manual
          </div>
        )}
      </div>
    </div>
  );
};
