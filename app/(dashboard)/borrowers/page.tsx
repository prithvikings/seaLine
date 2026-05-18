"use client";
import {
  Search,
  Filter,
  Download,
  MoreHorizontal,
  AlertCircle,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function BorrowersPage() {
  return (
    <div className="flex flex-col h-full pt-2">
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
            Borrowers
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Manage and monitor high-risk accounts and AI workflows.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors shadow-sm">
            <Filter className="w-4 h-4" /> Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors shadow-sm">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="px-5 py-2 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm">
            Run Batch AI Analysis
          </button>
        </div>
      </div>

      {/* Search & Quick Filters */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search by name, ID, or phone..."
            className="w-full bg-white border border-zinc-200 rounded-xl pl-9 pr-4 py-2.5 text-sm font-medium text-zinc-900 outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 shadow-sm transition-all"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar">
          <FilterPill label="High Risk" active />
          <FilterPill label="Missed EMI" />
          <FilterPill label="Escalated" />
          <FilterPill label="Promise to Pay" />
          <FilterPill label="Fraud Suspicion" />
        </div>
      </div>

      {/* Main Table Workspace */}
      <div className="flex-1 bg-white border border-zinc-100 rounded-[2rem] shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#F9F9F8] border-b border-zinc-100 text-xs font-bold text-zinc-500 uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4 font-bold">Borrower Details</th>
                <th className="px-6 py-4 font-bold">Loan Info</th>
                <th className="px-6 py-4 font-bold">Status (DPD)</th>
                <th className="px-6 py-4 font-bold">Risk Intel</th>
                <th className="px-6 py-4 font-bold">AI Action</th>
                <th className="px-6 py-4 font-bold text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              <BorrowerRow
                name="Marcus Vance"
                id="ACC-89211"
                amount="$14,250"
                dpd={42}
                risk="Critical"
                sentiment="Evasive"
                probability={12}
                action="Legal Routing"
              />
              <BorrowerRow
                name="Sarah Jenkins"
                id="ACC-77291"
                amount="$8,400"
                dpd={5}
                risk="Medium"
                sentiment="Promise to Pay"
                probability={85}
                action="Monitor"
              />
              <BorrowerRow
                name="David Chen"
                id="ACC-99203"
                amount="$32,000"
                dpd={18}
                risk="High"
                sentiment="Unresponsive"
                probability={44}
                action="Deploy AI Voice"
              />
              <BorrowerRow
                name="Elena Rodriguez"
                id="ACC-44109"
                amount="$5,120"
                dpd={2}
                risk="Low"
                sentiment="Cooperative"
                probability={92}
                action="Send SMS Reminder"
              />
              <BorrowerRow
                name="James Wilson"
                id="ACC-11029"
                amount="$19,800"
                dpd={65}
                risk="Critical"
                sentiment="Hostile"
                probability={4}
                action="Human Escalation"
              />
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="mt-auto px-6 py-4 border-t border-zinc-100 bg-[#F9F9F8] flex items-center justify-between">
          <span className="text-xs text-zinc-500 font-medium">
            Showing 1 to 5 of 1,248 accounts
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs font-medium text-zinc-600 hover:bg-zinc-50 transition-colors shadow-sm disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-zinc-200 bg-white text-xs font-medium text-zinc-600 hover:bg-zinc-50 transition-colors shadow-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function FilterPill({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={cn(
        "px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors border",
        active
          ? "bg-zinc-900 text-white border-zinc-900 shadow-sm"
          : "bg-white text-zinc-600 border-zinc-200 hover:bg-zinc-50 shadow-sm",
      )}
    >
      {label}
    </button>
  );
}

interface BorrowerRowProps {
  name: string;
  id: string;
  amount: string;
  dpd: number;
  risk: "Low" | "Medium" | "High" | "Critical";
  sentiment: string;
  probability: number;
  action: string;
}

function BorrowerRow({
  name,
  id,
  amount,
  dpd,
  risk,
  sentiment,
  probability,
  action,
}: BorrowerRowProps) {
  // Styling logic based on risk and DPD
  const getRiskStyles = (level: string) => {
    switch (level) {
      case "Critical":
        return "bg-rose-50 text-rose-700 border-rose-100";
      case "High":
        return "bg-orange-50 text-orange-700 border-orange-100";
      case "Medium":
        return "bg-amber-50 text-amber-700 border-amber-100";
      default:
        return "bg-teal-50 text-[#1A5C54] border-teal-100";
    }
  };

  const getDpdIcon = (days: number) => {
    if (days > 30) return <AlertCircle className="w-3.5 h-3.5 text-rose-500" />;
    if (days > 0) return <Clock className="w-3.5 h-3.5 text-amber-500" />;
    return <CheckCircle2 className="w-3.5 h-3.5 text-[#1A5C54]" />;
  };

  return (
    <tr className="hover:bg-zinc-50/50 transition-colors cursor-pointer group">
      <td className="px-6 py-4">
        <div className="flex flex-col">
          <span className="font-semibold text-zinc-900">{name}</span>
          <span className="text-[11px] font-mono text-zinc-500 mt-0.5">
            {id}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col">
          <span className="font-semibold text-zinc-700">{amount}</span>
          <span className="text-[11px] text-zinc-500 mt-0.5">
            Principal Balance
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          {getDpdIcon(dpd)}
          <span
            className={cn(
              "font-semibold text-sm",
              dpd > 30
                ? "text-rose-600"
                : dpd > 0
                  ? "text-amber-600"
                  : "text-zinc-700",
            )}
          >
            {dpd} Days
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col gap-2 items-start">
          <span
            className={cn(
              "px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest border",
              getRiskStyles(risk),
            )}
          >
            {risk}
          </span>
          <span className="text-[11px] font-medium text-zinc-500 flex items-center gap-1">
            {probability}% Prob.
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col gap-1.5 items-start">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1A5C54]">
            <Sparkles className="w-3.5 h-3.5" />
            {action}
          </div>
          <span className="text-[10px] text-zinc-500">
            Sentiment: {sentiment}
          </span>
        </div>
      </td>
      <td className="px-6 py-4 text-right">
        <button className="p-2 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}
