"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
  badgeCount?: string | number;
}

export const NavItem = ({
  href,
  label,
  icon: Icon,
  isActive,
  badgeCount,
}: NavItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-between px-3 py-2.5 rounded-lg transition-all group",
        isActive
          ? "bg-[#E6E6E1] text-zinc-900 font-semibold"
          : "text-zinc-700 hover:bg-zinc-200/50",
      )}
    >
      <div className="flex items-center gap-3">
        <Icon
          className={cn(
            "w-4 h-4",
            isActive
              ? "text-zinc-900"
              : "text-zinc-500 group-hover:text-zinc-700",
          )}
        />
        <span className="text-sm tracking-tight">{label}</span>
      </div>

      {badgeCount && (
        <span className="px-2 py-0.5 rounded-md bg-orange-200 text-orange-800 text-[10px] font-bold tracking-wide">
          {badgeCount}
        </span>
      )}
    </Link>
  );
};
