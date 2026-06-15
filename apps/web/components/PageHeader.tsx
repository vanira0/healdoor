interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-white py-10 lg:py-14">
      <div className="container text-center">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-dark mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-text-body max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
