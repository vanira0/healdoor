import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Physiotherapy at Home",
    image: "/images/service-physio.png",
    href: "/physiotherapy",
  },
  {
    title: "Oxygen Equipment at Home",
    image: "/images/service-oxygen.png",
    href: "/oxygen-equipment",
  },
  {
    title: "ICU at Home",
    image: "/images/service-icu.png",
    href: "/icu-at-home",
  },
  {
    title: "Investigations at Home",
    image: "/images/service-investigation.png",
    href: "/investigations-at-home",
  },
  {
    title: "Wheelchair, Walkers & Crutches",
    image: "/images/service-wheelchair.png",
    href: "/wheelchairs-walkers-crutches",
  },
  {
    title: "Other Medical Equipments",
    image: "/images/service-medical.png",
    href: "/other-medical-equipments",
  },
];

export function ServiceCategoriesGrid() {
  return (
    <section id="services" className="section-padding bg-section-alt-bg">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative block rounded-2xl overflow-hidden h-[220px] sm:h-[260px] shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <h3 className="font-heading text-lg font-bold text-white leading-tight max-w-[75%]">
                  {service.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center shrink-0 group-hover:bg-orange transition-colors shadow-lg">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
