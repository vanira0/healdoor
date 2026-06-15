"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Check } from "lucide-react";

const slides = [
  {
    id: 1,
    badge: "LIMITED PERIOD OFFER",
    heading: "Flat 20% OFF on All Oxygen Concentrators",
    bullets: [
      "High Quality & Reliable",
      "Fast Delivery at Home",
      "Trusted by Thousands",
    ],
    cta: "Shop Now",
    ctaHref: "/oxygen-equipment",
    image: "/images/hero-banner.png",
    qualityBadge: { line1: "BEST QUALITY", line2: "BEST PRICE" },
  },
  {
    id: 2,
    badge: "NEW SERVICE",
    heading: "Expert Physiotherapy At Your Doorstep",
    bullets: [
      "Certified BPT/MPT Therapists",
      "Personalized Treatment Plans",
      "Flexible Scheduling",
    ],
    cta: "Book Now",
    ctaHref: "/physiotherapy",
    image: "/images/service-physio.png",
    qualityBadge: { line1: "TRUSTED", line2: "EXPERTS" },
  },
  {
    id: 3,
    badge: "SAME DAY DELIVERY",
    heading: "ICU Setup At Home With Expert Support",
    bullets: [
      "24/7 Medical Support",
      "Hospital-Grade Equipment",
      "Professional Nursing Staff",
    ],
    cta: "Learn More",
    ctaHref: "/icu-at-home",
    image: "/images/service-icu.png",
    qualityBadge: { line1: "24/7", line2: "SUPPORT" },
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[hsl(170,65%,30%)] via-[hsl(180,55%,35%)] to-[hsl(200,70%,35%)] min-h-[480px] lg:min-h-[540px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt=""
          fill
          className="object-cover opacity-30 transition-all duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(170,65%,22%)]/90 via-[hsl(170,65%,28%)]/70 to-transparent" />
      </div>

      <div className="container relative z-10 flex items-center min-h-[480px] lg:min-h-[540px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full py-12">
          {/* Left content */}
          <div className="space-y-6 text-white">
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest uppercase bg-orange rounded-full text-white animate-fade-in">
              {slide.badge}
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold tracking-tight leading-[1.1] animate-fade-in-up max-w-lg">
              {slide.heading}
            </h1>

            <ul className="space-y-2">
              {slide.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2.5 text-sm sm:text-base text-white/90"
                >
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <a
              href={slide.ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange text-white font-semibold rounded-full shadow-lg hover:bg-orange-hover hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              {slide.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right — Quality Badge */}
          <div className="hidden lg:flex justify-end">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[hsl(43,80%,55%)] to-[hsl(35,90%,45%)] flex flex-col items-center justify-center shadow-2xl border-4 border-white/20 animate-fade-in">
                <span className="text-xs font-bold tracking-widest text-white/80 uppercase">
                  {slide.qualityBadge.line1}
                </span>
                <span className="text-lg font-extrabold text-white mt-0.5">
                  {slide.qualityBadge.line2}
                </span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl -z-10 scale-150" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-colors z-20 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 transition-colors z-20 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              i === current
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
