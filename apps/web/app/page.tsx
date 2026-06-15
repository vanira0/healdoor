import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HealthcareIntro } from "@/components/home/HealthcareIntro";
import { ServiceCategoriesGrid } from "@/components/home/ServiceCategoriesGrid";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { HighestSellingProducts } from "@/components/home/HighestSellingProducts";
import { RentOrBuySection } from "@/components/home/RentOrBuySection";
import { ExpertDoctors } from "@/components/home/ExpertDoctors";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { OurStorySection } from "@/components/home/OurStorySection";
import { BlogsSection } from "@/components/home/BlogsSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LocationSection } from "@/components/home/LocationSection";
import { CookieBanner } from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />
        <HealthcareIntro />
        <ServiceCategoriesGrid />
        <TrustBadges />
        <ProblemsSection />
        <HighestSellingProducts />
        <RentOrBuySection />
        <ExpertDoctors />
        <TestimonialsSection />
        <BeforeAfterSection />
        <OurStorySection />
        <BlogsSection />
        <HowItWorks />
        <LocationSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
