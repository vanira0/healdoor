import { Award } from "lucide-react";

const doctors = [
  {
    name: "Dr. Rahul Verma",
    qualification: "MBBS, MD (Pulmonology)",
    experience: "4+ Years Experience",
    badge: null,
    initials: "RV",
  },
  {
    name: "Dr. Shubham Mangla",
    qualification: "MBBS (MAMC)",
    experience: "5+ Years Experience",
    badge: "FOUNDER",
    initials: "SM",
  },
  {
    name: "Dr. Priya Sharma",
    qualification: "MBBS, MD (General Medicine)",
    experience: "4+ Years Experience",
    badge: null,
    initials: "PS",
  },
];

export function ExpertDoctors() {
  return (
    <section className="section-padding bg-section-alt-bg">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-dark mb-3">
            Our Expert Doctors
          </h2>
          <p className="text-base text-text-body max-w-xl mx-auto">
            Experienced professionals dedicated to your health and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border/30 relative"
            >
              {doctor.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 bg-orange text-white text-[10px] font-bold rounded-full shadow-sm uppercase tracking-widest">
                  <Award className="h-3 w-3" />
                  {doctor.badge}
                </div>
              )}

              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-xl font-bold text-white">
                  {doctor.initials}
                </span>
              </div>

              <h3 className="font-heading text-lg font-bold text-text-dark mb-1">
                {doctor.name}
              </h3>
              <p className="text-sm text-teal font-medium mb-1">
                {doctor.qualification}
              </p>
              <p className="text-xs text-text-muted">
                {doctor.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
