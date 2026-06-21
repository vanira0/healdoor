import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    id: 1,
    videoUrl: "/videos/testimonial-1.mp4", // Mock MP4 URL
    igUrl: "https://www.instagram.com/p/mock-post-1/",
  },
  {
    id: 2,
    videoUrl: "/videos/testimonial-2.mp4", // Mock MP4 URL
    igUrl: "https://www.instagram.com/p/mock-post-2/",
  },
  {
    id: 3,
    videoUrl: "/videos/testimonial-3.mp4", // Mock MP4 URL
    igUrl: "https://www.instagram.com/p/mock-post-3/",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[var(--trust-bg)]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold tracking-tight mb-4 text-foreground">What Our Patients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories of recovery and care from families who trusted HealDoor for their loved ones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden border-0 shadow-lg rounded-2xl bg-black">
              <CardContent className="p-0 relative aspect-[9/16]">
                {/* Mock Video element, waiting for actual MP4 URLs */}
                <div className="absolute inset-0 flex items-center justify-center text-white/50 bg-gray-800">
                  <p className="text-sm">Video Player Placeholder</p>
                </div>
                <video
                  src={testimonial.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                
                <a
                  href={testimonial.igUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur transition-colors flex items-center justify-center"
                  aria-label="View on Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
