import { Phone, MessageSquare, Truck, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Call, WhatsApp, or book online",
    icon: Phone,
  },
  {
    number: "02",
    title: "Confirm Service",
    description: "We understand your requirements",
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Professional Arrives",
    description: "Our expert comes to your home",
    icon: Truck,
  },
  {
    number: "04",
    title: "Receive Care",
    description: "Safe and professional treatment",
    icon: HeartHandshake,
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-dark mb-3">
            How It Works
          </h2>
          <p className="text-base text-text-body max-w-xl mx-auto">
            Simple 4-step process to get care at home
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative text-center group">
                {/* Connector line (not on last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[calc(100%-20%)] h-[2px] border-t-2 border-dashed border-teal/30" />
                )}

                {/* Step circle */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal to-teal-dark shadow-lg mb-4 group-hover:shadow-xl transition-shadow">
                  <Icon className="h-8 w-8 text-white" />
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-orange text-white text-xs font-bold flex items-center justify-center shadow-sm">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold text-text-dark mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-text-muted">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
