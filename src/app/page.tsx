import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/portfolio/about-section";
import { ApplicationsSection } from "@/components/portfolio/applications-section";
import { CaseStudiesSection } from "@/components/portfolio/case-studies-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ExpertiseSection } from "@/components/portfolio/expertise-section";
import { HeroSection } from "@/components/portfolio/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <ApplicationsSection />
      <CaseStudiesSection />
      <ExpertiseSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
