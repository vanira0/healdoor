"use client";

import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import type { Product } from "@healdoor/types";
import { getMediaUrl, getMediaAlt } from "@healdoor/utils";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3 w-3 ${
            star <= Math.floor(rating)
              ? "text-gold fill-gold"
              : star <= rating
                ? "text-gold fill-gold/50"
                : "text-gray-200 fill-gray-200"
          }`}
        />
      ))}
      <span className="text-xs text-text-muted ml-1">({rating})</span>
    </div>
  );
}

interface HighestSellingProductsProps {
  heading?: string | null;
  description?: string | null;
  products?: Product[];
}

export function HighestSellingProducts({
  heading = "Highest Selling Products",
  description = "Trusted by thousands of customers across India.",
  products,
}: HighestSellingProductsProps) {
  // Fallback products when CMS data is not available
  const defaultProducts: Partial<Product>[] = [
    { name: "Oxygen Concentrator", rentPrice: 1499, rating: 4.8, slug: "oxygen-concentrator" },
    { name: "BiPAP Machine", rentPrice: 1999, rating: 4.7, slug: "bipap-machine" },
    { name: "Suction Machine", rentPrice: 999, rating: 4.6, slug: "suction-machine" },
    { name: "Hospital Bed (Manual)", rentPrice: 1799, rating: 4.7, slug: "hospital-bed" },
    { name: "Wheelchair", rentPrice: 499, rating: 4.8, slug: "wheelchair" },
    { name: "Walker (Folding)", rentPrice: 299, rating: 4.5, slug: "walker" },
    { name: "Patient Monitor", rentPrice: 1299, rating: 4.5, slug: "patient-monitor" },
    { name: "Nebulizer Machine", rentPrice: 499, rating: 4.6, slug: "nebulizer" },
  ];

  const fallbackImages = [
    "/images/service-oxygen.png",
    "/images/service-medical.png",
    "/images/service-icu.png",
    "/images/service-icu.png",
    "/images/service-wheelchair.png",
    "/images/service-wheelchair.png",
    "/images/service-medical.png",
    "/images/service-medical.png",
  ];

  const data = products && products.length > 0 ? products : defaultProducts;

  return (
    <section className="section-padding bg-section-alt-bg">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-dark mb-3">
            {heading}
          </h2>
          {description && (
            <p className="text-base text-text-body max-w-xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((product, index) => {
            const imageUrl =
              getMediaUrl((product as Product).image as Parameters<typeof getMediaUrl>[0]) ||
              fallbackImages[index] ||
              "/images/service-medical.png";

            return (
              <div
                key={(product as Product).id || product.slug || index}
                className="bg-white rounded-xl border border-border/50 overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 group"
              >
                {/* Image */}
                <div className="aspect-square bg-section-alt-bg relative overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={
                      getMediaAlt((product as Product).image as Parameters<typeof getMediaAlt>[0]) ||
                      product.name || ""
                    }
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-3 space-y-1.5">
                  <h3 className="text-sm font-semibold text-text-dark line-clamp-1">
                    {product.name}
                  </h3>
                  <StarRating rating={product.rating || 4.5} />
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-bold text-teal">
                      ₹{(product.rentPrice || 0).toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs text-text-muted">/month</span>
                  </div>
                  <button className="w-8 h-8 rounded-lg bg-teal text-white flex items-center justify-center hover:bg-teal-dark transition-colors cursor-pointer ml-auto">
                    <ShoppingCart className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
