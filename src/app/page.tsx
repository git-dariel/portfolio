import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/portfolio/about-section";
import { ArchitectureSection } from "@/components/portfolio/architecture-section";
import { CaseStudiesSection } from "@/components/portfolio/case-studies-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ExpertiseSection } from "@/components/portfolio/expertise-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { SpecializationsSection } from "@/components/portfolio/specializations-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />
      <HeroSection />
      <CaseStudiesSection />
      <ArchitectureSection />
      <ExpertiseSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
