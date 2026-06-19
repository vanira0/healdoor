interface HealthcareIntroProps {
  heading?: string | null;
  description?: string | null;
}

export function HealthcareIntro({
  heading = "Healthcare at your doorstep",
  description = "Professional care and medical services delivered safely at your home.",
}: HealthcareIntroProps) {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container text-center">
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-dark mb-3">
          {heading}
        </h2>
        <p className="text-base sm:text-lg text-text-body max-w-xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
