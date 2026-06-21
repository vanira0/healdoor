import { Award, Stethoscope } from "lucide-react";
import Image from "next/image";
import type { DoctorProfile } from "@healdoor/types";
import { getMediaUrl, getMediaAlt } from "@healdoor/utils";

const defaultDoctors: DoctorProfile[] = [
  {
    name: "Dr. Rahul Verma",
    qualification: "MBBS, MD (Pulmonology)",
    experience: "4+ Years Experience",
    badge: undefined,
  },
  {
    name: "Dr. Shubham Mangla",
    qualification: "MBBS (MAMC)",
    experience: "5+ Years Experience",
    badge: "FOUNDER",
  },
  {
    name: "Dr. Priya Sharma",
    qualification: "MBBS, MD (General Medicine)",
    experience: "4+ Years Experience",
    badge: undefined,
  },
];

const fallbackImages = [
  "/images/doctor-rahul.png",
  "/images/doctor-shubham.png",
  "/images/doctor-priya.png",
];

interface ExpertDoctorsProps {
  heading?: string | null;
  description?: string | null;
  doctors?: DoctorProfile[];
}

export function ExpertDoctors({
  heading = "Our Expert Doctors",
  description = "Experienced professionals dedicated to your health and well-being.",
  doctors,
}: ExpertDoctorsProps) {
  const data = doctors && doctors.length > 0 ? doctors : defaultDoctors;

  return (
    <section className="section-padding bg-section-alt-bg">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-dark mb-3">
            {heading}
          </h2>
          <p className="text-base text-text-body max-w-xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto items-end">
          {data.map((doctor, index) => {
            const isHighlighted = !!doctor.badge;
            const imageUrl =
              getMediaUrl(doctor.image as Parameters<typeof getMediaUrl>[0]) ||
              fallbackImages[index] ||
              "/images/service-physio.png";
            const initials = doctor.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2);

            return (
              <div
                key={doctor.id || doctor.name}
                className={`bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 relative ${
                  isHighlighted
                    ? "border-2 border-teal ring-4 ring-teal/10 scale-105 z-10"
                    : "border border-border/30"
                }`}
              >
                {doctor.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-orange text-white text-[10px] font-bold rounded-full shadow-sm uppercase tracking-widest">
                    <Award className="h-3 w-3" />
                    {doctor.badge}
                  </div>
                )}

                {/* Photo */}
                <div className="w-24 h-24 rounded-full mx-auto mb-4 relative overflow-hidden bg-gradient-to-br from-teal to-teal-dark shadow-md">
                  {doctor.image ? (
                    <Image
                      src={imageUrl}
                      alt={getMediaAlt(doctor.image as Parameters<typeof getMediaAlt>[0]) || doctor.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-xl font-bold text-white">
                        {initials}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="font-heading text-lg font-bold text-text-dark mb-1">
                  {doctor.name}
                </h3>
                <p className="text-sm text-teal font-medium mb-2">
                  {doctor.qualification}
                </p>
                <div className="flex items-center justify-center gap-1.5 text-xs text-text-muted">
                  <Stethoscope className="h-3.5 w-3.5 text-teal" />
                  {doctor.experience}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
