import { Star, Play, BadgeCheck } from "lucide-react";
import Image from "next/image";
import type { Testimonial } from "@healdoor/types";
import { getMediaUrl } from "@healdoor/utils";

const defaultVideoTestimonials: Partial<Testimonial>[] = [
  {
    type: "video",
    name: "Neha Pandey",
    handle: "@neha.pandey",
    testimonial:
      "The oxygen concentrator from HealDoor has been a life saver for my father.",
    isVerified: true,
  },
  {
    type: "video",
    name: "Rohit Sharma",
    handle: "@rohit.sharma",
    testimonial:
      "Very reliable service and genuine support. Highly recommended!",
    isVerified: true,
  },
  {
    type: "video",
    name: "Kavya",
    handle: "@kavya_03",
    testimonial:
      "Post surgery recovery was so much easier with their equipment at home.",
    isVerified: false,
  },
  {
    type: "video",
    name: "Ankit Verma",
    handle: "@ankitverma",
    testimonial:
      "Great experience! On-time delivery and excellent customer care.",
    isVerified: false,
  },
];

const defaultWrittenTestimonials: Partial<Testimonial>[] = [
  {
    type: "written",
    name: "Anjali Mehta",
    timeAgo: "2 weeks ago",
    rating: 5,
    testimonial:
      "Excellent service and very professional team. They delivered the equipment the same day and guided us very well. Truly reliable!",
  },
  {
    type: "written",
    name: "Vikram Singh",
    timeAgo: "1 month ago",
    rating: 5,
    testimonial:
      "HealDoor made my recovery journey so much easier. The equipment quality is top-notch and the support team is always available.",
  },
];

const videoFallbackImages = [
  "/images/service-oxygen.png",
  "/images/service-physio.png",
  "/images/service-icu.png",
  "/images/service-medical.png",
];

interface TestimonialsSectionProps {
  heading?: string | null;
  description?: string | null;
  testimonials?: Testimonial[];
}

export function TestimonialsSection({
  heading = "Testimonials",
  description = "Real stories from real people who chose HealDoor.",
  testimonials,
}: TestimonialsSectionProps) {
  const videoTestimonials =
    testimonials && testimonials.length > 0
      ? testimonials.filter((t) => t.type === "video")
      : defaultVideoTestimonials;

  const writtenTestimonials =
    testimonials && testimonials.length > 0
      ? testimonials.filter((t) => t.type === "written")
      : defaultWrittenTestimonials;

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-dark mb-3">
            {heading}
          </h2>
          <p className="text-base text-text-body max-w-xl mx-auto">
            {description}
          </p>
        </div>

        {/* Video testimonials */}
        {videoTestimonials.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {videoTestimonials.map((t, index) => {
              const thumbUrl =
                getMediaUrl(t.image as Parameters<typeof getMediaUrl>[0]) ||
                videoFallbackImages[index] ||
                "/images/service-medical.png";

              return (
                <div
                  key={(t as Testimonial).id || t.handle || index}
                  className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer"
                >
                  <Image
                    src={thumbUrl}
                    alt={`Video testimonial from ${t.handle || t.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Share/reel icon */}
                  <div className="absolute top-3 right-3">
                    <div className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-xs text-white/90 leading-relaxed line-clamp-3 mb-2">
                      &ldquo;{t.testimonial}&rdquo;
                    </p>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-white/70 font-medium">
                        {t.handle}
                      </span>
                      {t.isVerified && (
                        <BadgeCheck className="h-3.5 w-3.5 text-blue-400 fill-blue-400" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Written testimonials */}
        {writtenTestimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {writtenTestimonials.map((t, index) => {
              const initials = (t.name || "")
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2);

              return (
                <div
                  key={(t as Testimonial).id || t.name || index}
                  className="bg-section-alt-bg rounded-2xl p-6 border border-border/30 relative"
                >
                  {/* Orange quote */}
                  <div className="text-orange text-4xl font-serif leading-none mb-3">
                    &ldquo;&rdquo;
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-white">
                        {initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-text-dark">
                        {t.name}
                      </h4>
                      <p className="text-xs text-text-muted">{t.timeAgo}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`h-3.5 w-3.5 ${
                          s <= (t.rating || 5)
                            ? "text-gold fill-gold"
                            : "text-gray-200 fill-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-text-body leading-relaxed">
                    {t.testimonial}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
