"use client";
import { Building, Shield, Webhook, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  return (
    <div className="flex flex-col md:flex-row h-full gap-8 pt-2">
      {/* Settings Navigation */}
      <div className="w-full md:w-56 flex flex-col gap-1 shrink-0">
        <h2 className="text-xl font-semibold text-zinc-900 mb-4 px-2">
          Settings
        </h2>
        {[
          { icon: Building, label: "Organization", active: true },
          { icon: Shield, label: "Compliance & Risk", active: false },
          { icon: Users, label: "Team Access", active: false },
          { icon: Webhook, label: "API & Integrations", active: false },
        ].map((nav, i) => (
          <button
            key={i}
            className={cn(
              "flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-left",
              nav.active
                ? "bg-zinc-100 text-zinc-900 font-semibold"
                : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900",
            )}
          >
            <nav.icon
              className={cn(
                "w-4 h-4",
                nav.active ? "text-zinc-900" : "text-zinc-400",
              )}
            />
            {nav.label}
          </button>
        ))}
      </div>

      {/* Settings Workspace */}
      <div className="flex-1 max-w-3xl space-y-10 md:pl-6 md:border-l border-zinc-100">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 tracking-tight">
            Organization Configuration
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Manage your lending institution details and global AI defaults.
          </p>
        </div>

        <div className="space-y-8">
          {/* Section: Profile */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-100 pb-3">
              Profile
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Institution Name
                </label>
                <input
                  type="text"
                  defaultValue="Sealine Financial"
                  className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-900 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Legal Identifier (LEI)
                </label>
                <input
                  type="text"
                  defaultValue="549300O897ZC5ONC6R92"
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm font-mono text-zinc-500 outline-none cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
          </div>

          {/* Section: AI Global Limits */}
          <div className="space-y-5">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-100 pb-3">
              AI Global Constraints
            </h3>

            <div className="flex items-center justify-between p-5 rounded-2xl border border-zinc-100 bg-[#F9F9F8]">
              <div className="pr-4">
                <span className="text-sm font-semibold text-zinc-900 block">
                  Maximum Auto-Extension Window
                </span>
                <span className="text-xs text-zinc-500 block mt-1 leading-relaxed">
                  The maximum days an AI agent can defer a payment without human
                  approval.
                </span>
              </div>
              <div className="relative shrink-0">
                <select className="bg-white border border-zinc-200 text-sm font-medium text-zinc-900 rounded-xl pl-4 pr-10 py-2.5 outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 appearance-none shadow-sm">
                  <option>7 Days</option>
                  <option>14 Days</option>
                  <option>30 Days</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-2 h-2 border-b-2 border-r-2 border-zinc-400 rotate-45" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-5 rounded-2xl border border-zinc-100 bg-[#F9F9F8]">
              <div className="pr-4">
                <span className="text-sm font-semibold text-zinc-900 block">
                  Require Human Review for Escalation
                </span>
                <span className="text-xs text-zinc-500 block mt-1 leading-relaxed">
                  Interrupt AI workflows before automatically sending accounts
                  to legal routing.
                </span>
              </div>
              {/* Custom Toggle matching target aesthetic */}
              <div className="w-11 h-6 rounded-full bg-[#1A5C54] relative cursor-pointer shrink-0 shadow-inner">
                <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-white shadow-sm transition-all" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-100 flex justify-end">
          <button className="px-6 py-2.5 bg-zinc-900 text-white rounded-xl text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-sm">
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
