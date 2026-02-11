import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WorkSection } from "@/components/WorkSection";
import { AboutSection } from "@/components/AboutSection";
import { HowIWorkSection } from "@/components/HowIWorkSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header variant="light" />
      <main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <HowIWorkSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
