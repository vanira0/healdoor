import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const physioServices = [
  {
    title: "Physio at Home",
    description:
      "Get expert physiotherapy sessions in the comfort of your home.",
    image: "/images/physio-home.png",
    href: "/physiotherapy/at-home",
  },
  {
    title: "Physio at Clinic",
    description:
      "Visit our clinic for advanced physiotherapy treatments and rehabilitation.",
    image: "/images/physio-clinic.png",
    href: "/physiotherapy/at-clinic",
  },
  {
    title: "Physio Equipments",
    description:
      "Explore a wide range of physiotherapy equipment for home and clinical use.",
    image: "/images/physio-equipment.png",
    href: "/physiotherapy/equipments",
  },
  {
    title: "Physio AI",
    description:
      "AI-powered physiotherapy solutions for personalized care and faster recovery.",
    image: "/images/physio-ai.png",
    href: "#",
    upcoming: true,
  },
];

export function PhysioServicesGrid() {
  return (
    <section className="section-padding-sm bg-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {physioServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group relative block rounded-2xl overflow-hidden h-[280px] sm:h-[320px] shadow-md hover:shadow-xl transition-all hover:-translate-y-1 ${
                service.upcoming ? "pointer-events-auto" : ""
              }`}
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

              {/* Upcoming badge */}
              {service.upcoming && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-orange text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-sm">
                  Coming Soon
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-3 line-clamp-2">
                  {service.description}
                </p>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                    service.upcoming
                      ? "bg-white/20 text-white/50"
                      : "bg-teal text-white group-hover:bg-orange"
                  }`}
                >
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
