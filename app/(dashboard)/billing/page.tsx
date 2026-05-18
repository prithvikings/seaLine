"use client";
import {
  CreditCard,
  Receipt,
  Download,
  Zap,
  Bot,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function BillingUsagePage() {
  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto pt-2">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight">
          Billing & Usage
        </h1>
        <p className="text-sm text-zinc-500 mt-1">
          Monitor your AI operation costs, workflow limits, and subscription
          details.
        </p>
      </div>

      {/* Trial Status / Upgrade Banner */}
      <div className="relative overflow-hidden rounded-[2rem] bg-purple-50 border border-purple-100 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl font-bold text-zinc-900">
              Sealine Pro Trial
            </span>
            <span className="px-2.5 py-1 bg-purple-200 text-purple-800 text-[10px] font-bold uppercase tracking-widest rounded-lg">
              12 Days Left
            </span>
          </div>
          <p className="text-sm text-zinc-600 max-w-lg leading-relaxed">
            You are currently on a trial of the Enterprise tier. Upgrade your
            workspace to maintain uninterrupted access to automated AI voice
            agents and legal routing workflows.
          </p>
        </div>
        <div className="relative z-10 shrink-0">
          <button className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl text-sm font-semibold hover:bg-purple-700 transition-colors shadow-sm">
            Upgrade to Enterprise <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        {/* Decorative background element */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-200/50 rounded-full blur-3xl" />
      </div>

      {/* Usage Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* AI Voice Agent Usage */}
        <div className="bg-[#F9F9F8] rounded-[2rem] p-6 border border-zinc-100/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-[#1A5C54]" />
              <h3 className="text-sm font-semibold text-zinc-900">
                AI Voice Minutes
              </h3>
            </div>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              Resets in 12 days
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-end justify-between">
              <span className="text-3xl font-light text-zinc-900 tracking-tight">
                4,250
              </span>
              <span className="text-sm font-medium text-zinc-500 mb-1">
                / 5,000 mins
              </span>
            </div>
            <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
              <div className="w-[85%] h-full bg-[#1A5C54] rounded-full" />
            </div>
            <p className="text-xs text-zinc-500 pt-1">
              85% of your included synthetic voice generation used.
            </p>
          </div>
        </div>

        {/* Active Workflows Usage */}
        <div className="bg-[#F9F9F8] rounded-[2rem] p-6 border border-zinc-100/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-600" />
              <h3 className="text-sm font-semibold text-zinc-900">
                Active Workflows
              </h3>
            </div>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              Pro Limit
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-end justify-between">
              <span className="text-3xl font-light text-zinc-900 tracking-tight">
                247
              </span>
              <span className="text-sm font-medium text-zinc-500 mb-1">
                / 500 active
              </span>
            </div>
            <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
              <div className="w-[49%] h-full bg-orange-500 rounded-full" />
            </div>
            <p className="text-xs text-zinc-500 pt-1">
              49% of automated escalation paths deployed.
            </p>
          </div>
        </div>

        {/* Portfolio Accounts Analyzed */}
        <div className="bg-[#F9F9F8] rounded-[2rem] p-6 border border-zinc-100/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-zinc-700" />
              <h3 className="text-sm font-semibold text-zinc-900">
                Accounts Processed
              </h3>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-end justify-between">
              <span className="text-3xl font-light text-zinc-900 tracking-tight">
                12.4k
              </span>
              <span className="text-sm font-medium text-zinc-500 mb-1">
                / 50k accounts
              </span>
            </div>
            <div className="h-2 bg-zinc-200 rounded-full overflow-hidden">
              <div className="w-[24%] h-full bg-zinc-800 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Payment & Invoices Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Payment Method */}
        <div className="md:col-span-1 bg-[#F9F9F8] rounded-[2rem] p-6 border border-zinc-100/50 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-zinc-700" />
            <h3 className="text-sm font-semibold text-zinc-900">
              Payment Method
            </h3>
          </div>

          <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm flex items-center gap-4">
            <div className="w-10 h-6 bg-zinc-100 rounded flex items-center justify-center border border-zinc-200">
              {/* Faux Visa Logo */}
              <span className="text-[10px] font-black text-blue-800 italic">
                VISA
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-zinc-900">
                •••• 4242
              </span>
              <span className="text-xs text-zinc-500">Expires 12/28</span>
            </div>
          </div>

          <button className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors text-left">
            Update billing details
          </button>
        </div>

        {/* Invoice History */}
        <div className="md:col-span-2 bg-[#F9F9F8] rounded-[2rem] p-6 border border-zinc-100/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Receipt className="w-5 h-5 text-zinc-700" />
              <h3 className="text-sm font-semibold text-zinc-900">
                Billing History
              </h3>
            </div>
            <button className="text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-colors">
              View All
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <InvoiceRow
              date="May 01, 2026"
              amount="$0.00"
              status="Trial Active"
            />
            <InvoiceRow
              date="Apr 01, 2026"
              amount="$0.00"
              status="Trial Active"
            />
            <div className="p-4 rounded-xl border border-dashed border-zinc-300 bg-transparent flex items-center justify-center text-sm text-zinc-500 mt-2">
              No prior charges on this account.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for Invoice Rows
function InvoiceRow({
  date,
  amount,
  status,
}: {
  date: string;
  amount: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-zinc-200">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
          <Receipt className="w-3.5 h-3.5 text-zinc-500" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-zinc-900">{date}</span>
          <span className="text-xs text-zinc-500">{status}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-mono font-medium text-zinc-700">
          {amount}
        </span>
        <button className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors">
          <Download className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
