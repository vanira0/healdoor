import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Blog } from "@healdoor/types";
import { getMediaUrl, getMediaAlt } from "@healdoor/utils";

const defaultBlogs = [
  {
    title: "How to Choose the Right Oxygen Concentrator for Home Use",
    publish_date: "2024-05-20",
    slug: "choose-oxygen-concentrator",
    featured_image: null,
  },
  {
    title: "Home Recovery After Surgery: Essential Tips for Faster Healing",
    publish_date: "2024-05-15",
    slug: "home-recovery-surgery",
    featured_image: null,
  },
  {
    title: "Benefits of Using a Hospital Bed at Home for Patient Comfort",
    publish_date: "2024-05-10",
    slug: "hospital-bed-at-home",
    featured_image: null,
  },
  {
    title: "Nebulizer Therapy: Uses, Benefits & How It Works",
    publish_date: "2024-05-05",
    slug: "nebulizer-therapy",
    featured_image: null,
  },
];

const fallbackImages = [
  "/images/service-oxygen.png",
  "/images/service-physio.png",
  "/images/service-icu.png",
  "/images/service-medical.png",
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return {
    month: d.toLocaleString("en-US", { month: "short" }),
    day: d.getDate().toString().padStart(2, "0"),
    year: d.getFullYear().toString(),
  };
}

interface BlogsSectionProps {
  heading?: string | null;
  description?: string | null;
  blogs?: Blog[];
}

export function BlogsSection({
  heading = "Health & Wellness Blogs",
  description = "Tips, guides and insights to help you live a healthier life.",
  blogs,
}: BlogsSectionProps) {
  const data = blogs && blogs.length > 0 ? blogs : defaultBlogs;

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((blog, index) => {
            const imageUrl =
              getMediaUrl((blog as Blog).featured_image as Parameters<typeof getMediaUrl>[0]) ||
              fallbackImages[index] ||
              "/images/service-medical.png";
            const date = formatDate(
              (blog as Blog).publish_date || blog.publish_date || "2024-05-01"
            );
            const slug =
              (blog as Blog).slug || blog.slug || "#";

            return (
              <Link
                key={(blog as Blog).id || blog.slug || index}
                href={`/blogs/${slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-border/30 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={
                      getMediaAlt((blog as Blog).featured_image as Parameters<typeof getMediaAlt>[0]) ||
                      blog.title
                    }
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Date badge */}
                  <div className="absolute top-3 left-3">
                    <div className="bg-teal text-white rounded-lg overflow-hidden shadow-md text-center w-12">
                      <div className="text-[10px] font-bold bg-teal-dark py-0.5 uppercase">
                        {date.month}
                      </div>
                      <div className="text-lg font-bold leading-tight py-0.5">
                        {date.day}
                      </div>
                      <div className="text-[9px] opacity-80 pb-0.5">
                        {date.year}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="text-sm font-semibold text-text-dark leading-snug line-clamp-2 group-hover:text-teal transition-colors">
                    {blog.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange group-hover:text-orange-hover transition-colors">
                    Read More
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-teal text-teal font-semibold rounded-full hover:bg-teal hover:text-white transition-all"
          >
            Explore More Blogs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
