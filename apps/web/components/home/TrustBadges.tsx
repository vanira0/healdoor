import {
  UserCheck,
  Users,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const badges = [
  {
    icon: UserCheck,
    title: "Certified Doctors",
    description: "Experienced and verified healthcare professionals",
  },
  {
    icon: Users,
    title: "1000+ Patients",
    description: "Trusted by thousands of happy patients",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here for you, anytime, anywhere",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    description: "Quality care with safety and hygiene assured",
  },
];

export function TrustBadges() {
  return (
    <section className="py-10 bg-teal-light border-y border-teal/10">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                  <Icon className="h-6 w-6 text-teal" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-text-dark">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
