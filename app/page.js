import AboutSection from "@/components/view-port/about-section/AboutSection";
import ContactSection from "@/components/view-port/contact-section/ContactSection";
import Footer from "@/components/view-port/footer-section/Footer";
import Navbar from "@/components/view-port/header-section/Navbar";
import HeroSection from "@/components/view-port/hero-section/HeroSection";
import ProjectsSection from "@/components/view-port/projects-section/ProjectsSection";
import HireMe from "@/components/view-port/section-divider/call-to-action/HireMe";
import KnowMe from "@/components/view-port/section-divider/call-to-action/KnowMe";
import ProjectDiscussion from "@/components/view-port/section-divider/call-to-action/ProjectDiscussion";
import LogoSlider from "@/components/view-port/section-divider/logo-slider/LogoSlider";
import ServicesSection from "@/components/view-port/services-section/ServicesSection";

export default function Home() {
  return (
    <main className="m-0 min-w-full min-h-screen overflow-hidden">
      <div
        id="view-port"
        className="relative mx-auto max-h-screen overflow-y-scroll scroll-smooth"
      >
        <Navbar />
        <HeroSection />
        <LogoSlider />
        <AboutSection />
        <KnowMe />
        <ServicesSection />
        <HireMe />
        <ProjectsSection />
        <ProjectDiscussion />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
