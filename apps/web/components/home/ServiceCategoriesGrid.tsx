import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceCategoryItem } from "@healdoor/types";
import { getMediaUrl, getMediaAlt } from "@healdoor/utils";

const defaultServices: ServiceCategoryItem[] = [
  {
    title: "Physiotherapy at Home",
    image: null,
    href: "/physiotherapy",
  },
  {
    title: "Oxygen Equipment at Home",
    image: null,
    href: "/oxygen-equipment",
  },
  {
    title: "ICU at Home",
    image: null,
    href: "/icu-at-home",
  },
  {
    title: "Investigations at Home",
    subtitle: "X-ray, ECG, Blood Investigations",
    image: null,
    href: "/investigations-at-home",
  },
  {
    title: "Wheelchair, Walkers and Crutches",
    image: null,
    href: "/wheelchairs-walkers-crutches",
  },
  {
    title: "Other Medical Equipments",
    image: null,
    href: "/other-medical-equipments",
  },
];

const fallbackImages = [
  "/images/service-physio.png",
  "/images/service-oxygen.png",
  "/images/service-icu.png",
  "/images/service-investigation.png",
  "/images/service-wheelchair.png",
  "/images/service-medical.png",
];

interface ServiceCategoriesGridProps {
  services?: ServiceCategoryItem[];
}

export function ServiceCategoriesGrid({ services }: ServiceCategoriesGridProps) {
  const data = services && services.length > 0 ? services : defaultServices;

  return (
    <section id="services" className="section-padding bg-section-alt-bg">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((service, index) => {
            const imageUrl =
              getMediaUrl(service.image as Parameters<typeof getMediaUrl>[0]) || fallbackImages[index] || "/images/service-medical.png";

            return (
              <Link
                key={service.id || service.title}
                href={service.href}
                className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-border/40 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                {/* Image thumbnail */}
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative bg-section-alt-bg">
                  <Image
                    src={imageUrl}
                    alt={getMediaAlt(service.image as Parameters<typeof getMediaAlt>[0]) || service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-sm sm:text-base font-bold text-text-dark leading-tight">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-xs text-text-muted mt-1 leading-relaxed">
                      {service.subtitle}
                    </p>
                  )}
                </div>

                {/* Arrow */}
                <div className="w-9 h-9 rounded-full bg-teal text-white flex items-center justify-center shrink-0 group-hover:bg-orange transition-colors shadow-sm">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
