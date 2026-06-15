import { Wind, Building2, HeartPulse, Activity } from "lucide-react";

const problems = [
  {
    icon: Wind,
    title: "Breathing difficulty at Home",
  },
  {
    icon: Building2,
    title: "Frequent Hospital visits",
  },
  {
    icon: HeartPulse,
    title: "Post surgery recovery pain",
  },
  {
    icon: Activity,
    title: "Low oxygen levels",
  },
];

export function ProblemsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-dark mb-3">
            Are you facing these Problems ?
          </h2>
          <p className="text-base text-text-body max-w-xl mx-auto">
            We are here to help you with the best care and support at your
            doorstep.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-section-alt-bg hover:bg-orange-light-bg transition-colors group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                  <Icon className="h-8 w-8 text-orange" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-text-dark leading-tight">
                  {problem.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
