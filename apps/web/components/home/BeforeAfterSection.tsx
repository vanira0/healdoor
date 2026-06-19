"use client";

import { useState } from "react";
import { User, Calendar, HeartPulse, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { BeforeAfterStory } from "@healdoor/types";
import { getMediaUrl, getMediaAlt } from "@healdoor/utils";

const defaultStories: BeforeAfterStory[] = [
  {
    patientName: "Mr. Suresh Kumar",
    age: 62,
    condition: "COPD",
    quote:
      "After consistent oxygen therapy and regular support from HealDoor, my breathing improved dramatically. I can now spend quality time with my family and live independently.",
    fullStoryLink: "#",
  },
];

interface BeforeAfterSectionProps {
  heading?: string | null;
  description?: string | null;
  stories?: BeforeAfterStory[];
}

export function BeforeAfterSection({
  heading = "Before vs After – Real Results",
  description = "See the difference HealDoor care can make.",
  stories,
}: BeforeAfterSectionProps) {
  const data = stories && stories.length > 0 ? stories : defaultStories;
  const [current, setCurrent] = useState(0);
  const story = data[current];

  const beforeUrl =
    getMediaUrl(story.beforeImage as Parameters<typeof getMediaUrl>[0]) || "/images/service-icu.png";
  const afterUrl =
    getMediaUrl(story.afterImage as Parameters<typeof getMediaUrl>[0]) || "/images/service-physio.png";
  const patientUrl =
    getMediaUrl(story.patientImage as Parameters<typeof getMediaUrl>[0]) || null;

  const next = () => setCurrent((prev) => (prev + 1) % data.length);
  const prev = () => setCurrent((prev) => (prev - 1 + data.length) % data.length);

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {/* Left — Before & After images */}
          <div className="flex items-center gap-4">
            {/* Before */}
            <div className="relative flex-1 rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
              <Image
                src={beforeUrl}
                alt={
                  getMediaAlt(story.beforeImage as Parameters<typeof getMediaAlt>[0]) ||
                  "Before HealDoor care"
                }
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="px-3 py-1 bg-orange/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                  Before
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center shrink-0 shadow-md">
              <ArrowRight className="h-4 w-4" />
            </div>

            {/* After */}
            <div className="relative flex-1 rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
              <Image
                src={afterUrl}
                alt={
                  getMediaAlt(story.afterImage as Parameters<typeof getMediaAlt>[0]) ||
                  "After HealDoor care"
                }
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="px-3 py-1 bg-teal/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                  After
                </span>
              </div>
            </div>
          </div>

          {/* Right — Patient details */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-border/30">
            <div className="flex items-start gap-4 mb-5">
              {/* Patient image or icon */}
              {patientUrl ? (
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 relative">
                  <Image
                    src={patientUrl}
                    alt={story.patientName}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 rounded-full bg-teal-light flex items-center justify-center shrink-0">
                  <User className="h-6 w-6 text-teal" />
                </div>
              )}
              <div>
                <h3 className="font-heading text-lg font-bold text-text-dark">
                  {story.patientName}
                </h3>
                <div className="flex items-center gap-4 mt-1">
                  {story.age && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-teal" />
                      <span className="text-sm text-text-body">
                        Age: {story.age}
                      </span>
                    </div>
                  )}
                  {story.condition && (
                    <div className="flex items-center gap-1.5">
                      <HeartPulse className="h-3.5 w-3.5 text-teal" />
                      <span className="text-sm text-text-body">
                        Condition: {story.condition}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quote */}
            {story.quote && (
              <div className="mb-4">
                <div className="text-orange text-3xl font-serif leading-none mb-2">
                  &ldquo;&ldquo;
                </div>
                <p className="text-sm text-text-body leading-relaxed">
                  {story.quote}
                </p>
              </div>
            )}

            <a
              href={story.fullStoryLink || "#"}
              className="inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
            >
              Read Full Story
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Navigation for multiple stories */}
        {data.length > 1 && (
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:shadow-md transition-all cursor-pointer"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-4 w-4 text-text-body" />
            </button>
            <div className="flex items-center gap-1.5">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === current
                      ? "w-6 bg-teal"
                      : "w-2 bg-teal/30 hover:bg-teal/50"
                  }`}
                  aria-label={`Story ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:shadow-md transition-all cursor-pointer"
              aria-label="Next story"
            >
              <ChevronRight className="h-4 w-4 text-text-body" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
