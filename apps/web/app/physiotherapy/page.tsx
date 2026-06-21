import type { Metadata } from "next";
import { getPageBySlug } from "@healdoor/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceNavTabs } from "@/components/ServiceNavTabs";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { PageRenderer } from "@/components/renderer/PageRenderer";
import { PhysioServicesGrid } from "@/components/physio/PhysioServicesGrid";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("physiotherapy");
  return {
    title:
      page?.seo?.meta_title ||
      page?.title ||
      "Physiotherapy Services — Physio at Home & Clinic | HealDoor Delhi NCR",
    description:
      page?.seo?.meta_description ||
      "Professional physiotherapy services at home and in clinic. Certified BPT/MPT physiotherapists, physiotherapy equipment, and AI-powered solutions. Book now in Delhi NCR.",
    keywords:
      "Physiotherapy at Home Delhi, Physio at Home, Best Physiotherapist Delhi, Clinic Physiotherapy, Physiotherapy Equipment, Home Physiotherapy Services",
  };
}

export default async function PhysiotherapyPage() {
  const page = await getPageBySlug("physiotherapy");

  return (
    <>
      <Navbar />
      <ServiceNavTabs />
      <main className="flex-1">
        {page ? (
          <PageRenderer blocks={page.page_builder ?? []} />
        ) : (
          <>
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
            <PhysioServicesGrid />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
