import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCards } from "@/components/ServiceCards";
import { Testimonials } from "@/components/Testimonials";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <ServiceCards />
        <Testimonials />
        <section className="py-20 bg-background">
          <div className="container">
            <EnquiryForm />
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
