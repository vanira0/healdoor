import { MapPin, Navigation } from "lucide-react";

export function LocationSection() {
  return (
    <section className="section-padding bg-section-alt-bg">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-dark mb-3">
            Our Location
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {/* Address card */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-teal" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-text-dark mb-1">
                  HealDoor Healthcare
                </h3>
                <p className="text-base text-text-body leading-relaxed">
                  160, Rajdhani Enclave, Parking Pitampura,
                  <br />
                  Delhi - 110034
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=160+Rajdhani+Enclave+Pitampura+Delhi+110034"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-white font-semibold rounded-full hover:bg-teal-dark transition-colors shadow-md"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border/30 aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9!2d77.1440!3d28.6983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQxJzUzLjkiTiA3N8KwMDgnMzguNCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HealDoor Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
