import { HeartPulse } from "lucide-react";

export function HealthcareIntro() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-light-bg mb-4">
          <HeartPulse className="h-7 w-7 text-teal" />
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-dark mb-3">
          Healthcare at your doorstep
        </h2>
        <p className="text-base sm:text-lg text-text-body max-w-xl mx-auto">
          Professional care and medical services delivered safely at your home.
        </p>
      </div>
    </section>
  );
}
