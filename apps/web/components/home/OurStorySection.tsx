import {
  GraduationCap,
  Briefcase,
  BadgeCheck,
} from "lucide-react";
import Image from "next/image";
import type { TeamMember, LexicalContent } from "@healdoor/types";
import { getMediaUrl, getMediaAlt } from "@healdoor/utils";
import { LexicalSerializer } from "@/components/renderer/LexicalSerializer";

const defaultTeam: TeamMember[] = [
  {
    name: "Dr. Shubham Mangla",
    role: "Founder",
    badges: [{ label: "Certified Doctor" }, { label: "Healthcare Professional" }],
    education: [
      { text: "MBBS — MAMC" },
      { text: "PLAB Cleared" },
      { text: "GMC Registered (UK)" },
      { text: "RCUK ALS Certified" },
      { text: "MRCP (Written) Cleared" },
    ],
    experience: [
      { text: "1 yr Internship — LNJP Hospital" },
      { text: "4 months — Babaji Hospital" },
      { text: "1 yr 2 months — Maharaja Agrasen" },
      { text: "Hospital (incl. 8 months ICU)" },
      { text: "3 months — RBTB Hospital" },
      { text: "1 month — Lynwood GP Centre (UK)" },
    ],
  },
  {
    name: "Lavanya Mangla",
    role: "Co-Founder & Manager",
    badges: [],
    education: [
      { text: "BBA — Vivekananda Institute of Professional Studies" },
    ],
    experience: [
      { text: "Manager — Sales, Marketing & BD, Mangla Plast House" },
      { text: "Founder Member — Film-Making Society, VIPS" },
      { text: "Volunteer — Robin Hood Army" },
      { text: "Volunteer — Narayan Seva Sansthan" },
    ],
  },
];

const defaultNarrativeText = [
  "HealDoor was founded with a simple but powerful realization. During clinical practice, Dr. Shubham Mangla observed that many patients, especially after hospital discharge, required continued medical care at home. However, most hospitals do not provide structured post-discharge support.",
  "This experience highlighted a major problem — there was no single, reliable, and easy-to-book online platform where patients could access professional home healthcare services like physiotherapy or oxygen support.",
  "HealDoor was built with the vision of making quality healthcare accessible at home, ensuring patients receive the care they need in the comfort and safety of their homes, while also reducing the burden on families.",
];

interface OurStorySectionProps {
  heading?: string | null;
  narrative?: LexicalContent | null;
  team?: TeamMember[];
}

export function OurStorySection({
  heading = "Our Story",
  narrative,
  team,
}: OurStorySectionProps) {
  const data = team && team.length > 0 ? team : defaultTeam;

  return (
    <section id="our-story" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-dark mb-3">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Narrative */}
          <div className="space-y-4 text-base text-text-body leading-relaxed">
            {narrative ? (
              <LexicalSerializer content={narrative} />
            ) : (
              defaultNarrativeText.map((text, i) => <p key={i}>{text}</p>)
            )}
          </div>

          {/* Team cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.map((member) => {
              const imageUrl = getMediaUrl(member.image as Parameters<typeof getMediaUrl>[0]);
              const initials = member.name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 2);

              return (
                <div
                  key={member.id || member.name}
                  className="bg-section-alt-bg rounded-2xl p-5 border border-border/30"
                >
                  {/* Photo + Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0 bg-gradient-to-br from-teal to-teal-dark shadow-md">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={getMediaAlt(member.image as Parameters<typeof getMediaAlt>[0]) || member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-lg font-bold text-white">
                            {initials}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-text-dark">
                        {member.name}
                      </h3>
                      <p className="text-sm text-teal font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Badges */}
                  {member.badges && member.badges.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {member.badges.map((badge, i) => (
                        <span
                          key={badge.id || i}
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-teal/10 text-teal text-[10px] font-medium rounded-full"
                        >
                          <BadgeCheck className="h-2.5 w-2.5" />
                          {badge.label}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Education */}
                  {member.education && member.education.length > 0 && (
                    <div className="mb-3">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <GraduationCap className="h-3.5 w-3.5 text-teal" />
                        <span className="text-[10px] font-bold text-text-dark uppercase tracking-wider">
                          Education
                        </span>
                      </div>
                      <ul className="space-y-0.5 pl-5">
                        {member.education.map((edu, i) => (
                          <li
                            key={edu.id || i}
                            className="text-[11px] text-text-body list-disc"
                          >
                            {edu.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Experience */}
                  {member.experience && member.experience.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Briefcase className="h-3.5 w-3.5 text-teal" />
                        <span className="text-[10px] font-bold text-text-dark uppercase tracking-wider">
                          Experience
                        </span>
                      </div>
                      <ul className="space-y-0.5 pl-5">
                        {member.experience.map((exp, i) => (
                          <li
                            key={exp.id || i}
                            className="text-[11px] text-text-body list-disc"
                          >
                            {exp.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
