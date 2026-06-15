import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceNavTabs } from "@/components/ServiceNavTabs";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { PhysioServicesGrid } from "@/components/physio/PhysioServicesGrid";

export const metadata: Metadata = {
  title:
    "Physiotherapy Services — Physio at Home & Clinic | HealDoor Delhi NCR",
  description:
    "Professional physiotherapy services at home and in clinic. Certified BPT/MPT physiotherapists, physiotherapy equipment, and AI-powered solutions. Book now in Delhi NCR.",
  keywords:
    "Physiotherapy at Home Delhi, Physio at Home, Best Physiotherapist Delhi, Clinic Physiotherapy, Physiotherapy Equipment, Home Physiotherapy Services",
};

export default function PhysiotherapyPage() {
  return (
    <>
      <Navbar />
      <ServiceNavTabs />
      <Breadcrumbs
        items={[
          { label: "Services", href: "#" },
          { label: "Physio Services" },
        ]}
      />
      <PageHeader
        title="Physiotherapy Services"
        subtitle="Professional physiotherapy care at your home and in clinic"
      />
      <main>
        <PhysioServicesGrid />
      </main>
      <Footer />
    </>
  );
}
