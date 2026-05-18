"use client";
import {
  LayoutDashboard,
  Users,
  BrainCircuit,
  GitMerge,
  UploadCloud,
  MessageSquare,
  Settings,
  LogOut,
  HelpCircle,
  Gift,
  UserPlus,
} from "lucide-react";
import { NavItem } from "@/components/atomic/NavItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-[#F3F4F1] flex flex-col h-screen py-6 shrink-0">
      {/* Brand Header */}
      <div className="px-6 mb-8 flex items-center gap-2">
        <span className="text-xl font-bold text-zinc-900 tracking-tight">
          Sealine
        </span>
        <span className="text-[10px] font-bold px-2 py-0.5 bg-purple-100 text-purple-700 rounded-md uppercase tracking-wider">
          Pro Trial
        </span>
      </div>

      {/* Main Navigation Group */}
      <div className="flex-1 px-3 space-y-1 overflow-y-auto">
        <NavItem
          href="/dashboard"
          label="Overview"
          icon={LayoutDashboard}
          isActive={pathname === "/dashboard"}
        />
        <NavItem
          href="/insights"
          label="AI Insights"
          icon={BrainCircuit}
          isActive={pathname === "/insights"}
          badgeCount="New!"
        />
        <NavItem
          href="/borrowers"
          label="Borrowers"
          icon={Users}
          isActive={pathname === "/borrowers"}
        />
        <NavItem
          href="/workflows"
          label="Workflows"
          icon={GitMerge}
          isActive={pathname === "/workflows"}
        />
        <NavItem
          href="/communications"
          label="Communications"
          icon={MessageSquare}
          isActive={pathname === "/communications"}
        />
        <NavItem
          href="/upload"
          label="Data Upload"
          icon={UploadCloud}
          isActive={pathname === "/upload"}
        />
      </div>

      {/* Bottom Group (Trial, Invite, Settings) */}
      <div className="px-4 mt-auto space-y-4">
        {/* Trial Card */}
        <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100">
          <h4 className="text-sm font-semibold text-zinc-900">
            Enterprise Trial ends in{" "}
            <span className="text-purple-600">12 days</span>
          </h4>
          <p className="text-xs text-zinc-500 mt-1 mb-3">
            Upgrade to Sealine Pro to keep unlimited AI workflow automation.
          </p>
          <button className="w-full py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
            Upgrade to Pro
          </button>
        </div>

        <div className="space-y-1">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-200/50 rounded-lg transition-colors"
          >
            <UserPlus className="w-4 h-4" /> Invite team members
          </Link>
          <Link
            href="/billing"
            className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-200/50 rounded-lg transition-colors"
          >
            <Gift className="w-4 h-4" /> Billing & Usage
          </Link>
          <Link
            href="/settings"
            className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-200/50 rounded-lg transition-colors"
          >
            <Settings className="w-4 h-4" /> Organization Settings
          </Link>
          <Link
            href="/supportdocs"
            className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-200/50 rounded-lg transition-colors"
          >
            <HelpCircle className="w-4 h-4" /> Support & Docs
          </Link>
        </div>
      </div>
    </aside>
  );
};
