"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Wind,
  BedDouble,
  Microscope,
  Accessibility,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

const serviceTabs = [
  {
    title: "Physio at Home",
    href: "/physiotherapy",
    icon: Activity,
  },
  {
    title: "Oxygen Equipment at Home",
    href: "/oxygen-equipment",
    icon: Wind,
  },
  {
    title: "ICU at Home",
    href: "/icu-at-home",
    icon: BedDouble,
  },
  {
    title: "Investigation at Home",
    href: "/investigations-at-home",
    icon: Microscope,
  },
  {
    title: "Wheelchair, Walkers & Crutches",
    href: "/wheelchairs-walkers-crutches",
    icon: Accessibility,
  },
  {
    title: "Other Medical Equipments",
    href: "/other-medical-equipments",
    icon: Stethoscope,
  },
];

export function ServiceNavTabs() {
  const pathname = usePathname();

  return (
    <div className="bg-section-alt-bg border-b border-border/50">
      <div className="container py-3">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
          {serviceTabs.map((tab) => {
            const isActive = pathname.startsWith(tab.href);
            const Icon = tab.icon;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all whitespace-nowrap min-w-[200px] ${
                  isActive
                    ? "bg-white border-teal/30 shadow-md"
                    : "bg-white/60 border-transparent hover:bg-white hover:shadow-sm"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-teal text-white"
                      : "bg-teal-light text-teal group-hover:bg-teal group-hover:text-white"
                  } transition-colors`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span
                  className={`text-xs font-medium leading-tight ${
                    isActive ? "text-text-dark" : "text-text-body"
                  }`}
                >
                  {tab.title}
                </span>
                <div
                  className={`ml-auto w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-teal text-white"
                      : "bg-teal-light text-teal group-hover:bg-teal group-hover:text-white"
                  } transition-colors`}
                >
                  <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
