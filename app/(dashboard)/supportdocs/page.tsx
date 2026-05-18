"use client";
import {
  Search,
  BookOpen,
  FileCode,
  ShieldCheck,
  Zap,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SupportDocsPage() {
  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto pt-2 h-full">
      {/* Header & Hero Search */}
      <div className="bg-[#F9F9F8] rounded-[2rem] p-8 md:p-12 border border-zinc-100 flex flex-col items-center text-center">
        <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-3">
          How can we help you?
        </h1>
        <p className="text-sm text-zinc-500 mb-8 max-w-md">
          Search our knowledge base for workflow configurations, API
          documentation, and compliance guidelines.
        </p>

        <div className="relative w-full max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Search for 'Automated Escalation' or 'API Keys'..."
            className="w-full bg-white border border-zinc-200 rounded-2xl pl-12 pr-6 py-4 text-sm font-medium text-zinc-900 outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 shadow-sm transition-all"
          />
        </div>
      </div>

      {/* Documentation Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DocCategoryCard
          icon={<Zap className="w-5 h-5 text-[#1A5C54]" />}
          title="AI Workflow Automation"
          description="Learn how to configure triggers, set AI negotiation limits, and manage escalation routing."
          articles={[
            "Creating your first workflow",
            "Understanding AI negotiation parameters",
            "Setting up SMS triggers",
          ]}
        />

        <DocCategoryCard
          icon={<FileCode className="w-5 h-5 text-purple-600" />}
          title="API & Integrations"
          description="Technical documentation for connecting Sealine to your Loan Origination System (LOS)."
          articles={[
            "Authentication & API Keys",
            "Webhooks for status updates",
            "Rate limits and quotas",
          ]}
        />

        <DocCategoryCard
          icon={<BookOpen className="w-5 h-5 text-orange-600" />}
          title="Data Onboarding"
          description="Guides on formatting CSVs, mapping schemas, and handling large portfolio uploads."
          articles={[
            "Supported CSV formats",
            "Troubleshooting schema errors",
            "Automated daily SFTP sync",
          ]}
        />

        <DocCategoryCard
          icon={<ShieldCheck className="w-5 h-5 text-blue-600" />}
          title="Compliance & Security"
          description="Information on data retention, audit logging, and regulatory compliance standards."
          articles={[
            "SOC2 and ISO27001 compliance",
            "Exporting audit logs",
            "Managing team access roles",
          ]}
        />
      </div>

      {/* Bottom Section: Support & Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
        {/* Premium Support Card */}
        <div className="md:col-span-2 bg-[#F9F9F8] rounded-[2rem] p-8 border border-zinc-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="w-5 h-5 text-zinc-900" />
              <h3 className="text-lg font-semibold text-zinc-900">
                Enterprise Support
              </h3>
            </div>
            <p className="text-sm text-zinc-500 max-w-sm">
              Your current Pro Trial includes 24/7 priority support. Open a
              ticket and our technical team will respond within 1 hour.
            </p>
          </div>
          <button className="shrink-0 px-6 py-3 bg-zinc-900 text-white rounded-xl text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-sm flex items-center gap-2">
            Open Support Ticket <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* System Status Card */}
        <div className="md:col-span-1 bg-[#F9F9F8] rounded-[2rem] p-8 border border-zinc-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-zinc-900">
                System Status
              </h3>
              <Activity className="w-4 h-4 text-[#1A5C54]" />
            </div>
            <p className="text-xs text-zinc-500">
              All core systems and AI voice agents are fully operational.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between pt-4 border-t border-zinc-200/60">
            <span className="text-[10px] font-bold text-[#1A5C54] bg-teal-50 border border-teal-100 px-2 py-1 rounded-md uppercase tracking-widest">
              100% Uptime
            </span>
            <a
              href="#"
              className="text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-colors flex items-center gap-1"
            >
              Status Page <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Component for the Category Cards
function DocCategoryCard({
  icon,
  title,
  description,
  articles,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  articles: string[];
}) {
  return (
    <div className="bg-white rounded-[2rem] p-6 border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all group flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2.5 bg-[#F9F9F8] rounded-xl border border-zinc-100 group-hover:bg-white transition-colors">
          {icon}
        </div>
        <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
      </div>
      <p className="text-sm text-zinc-500 mb-6 flex-1">{description}</p>

      <div className="space-y-3 pt-4 border-t border-zinc-100">
        {articles.map((article, i) => (
          <a
            key={i}
            href="#"
            className="text-sm font-medium text-zinc-600 hover:text-[#1A5C54] transition-colors flex items-center gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-zinc-300" />
            {article}
          </a>
        ))}
        <a
          href="#"
          className="text-xs font-bold text-[#1A5C54] hover:text-[#13423c] transition-colors flex items-center gap-1 pt-2 uppercase tracking-wide"
        >
          View all articles <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
