import {
  UserCheck,
  Users,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import type { TrustBadgeItem } from "@healdoor/types";

const IconMap: Record<string, React.ElementType> = {
  UserCheck,
  Users,
  Headphones,
  ShieldCheck,
};

const defaultBadges: TrustBadgeItem[] = [
  {
    icon: "UserCheck",
    title: "Certified Doctors",
    description: "Experienced and verified healthcare professionals",
  },
  {
    icon: "Users",
    title: "1000+ Patients",
    description: "Trusted by thousands of happy patients",
  },
  {
    icon: "Headphones",
    title: "24/7 Support",
    description: "Always here for you, anytime, anywhere",
  },
  {
    icon: "ShieldCheck",
    title: "Safe & Reliable",
    description: "Quality care with safety and hygiene assured",
  },
];

interface TrustBadgesProps {
  badges?: TrustBadgeItem[];
}

export function TrustBadges({ badges }: TrustBadgesProps) {
  const data = badges && badges.length > 0 ? badges : defaultBadges;

  return (
    <section className="py-8 bg-white border-y border-border/30">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.map((badge) => {
            const iconName = badge.icon || "ShieldCheck";
            const Icon = IconMap[iconName] || ShieldCheck;

            return (
              <div
                key={badge.id || badge.title}
                className="flex items-center gap-3 lg:gap-4"
              >
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-teal" />
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-text-dark">
                    {badge.title}
                  </h3>
                  {badge.description && (
                    <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                      {badge.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
