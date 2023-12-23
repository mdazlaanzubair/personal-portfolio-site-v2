import SideDrawer from "./components/common/SideDrawer";
import AboutSection from "./components/view-port/about-section/AboutSection";
import Footer from "./components/view-port/footer-section/Footer";
import Navbar from "./components/view-port/header-section/Navbar";
import HeroSection from "./components/view-port/hero-section/HeroSection";
import { DrawerProvider } from "./context/DrawerContext";

export default function Home() {
  return (
    <main className="m-0 p-0 min-w-full min-h-screen overflow-hidden">
      <div className="container relative mx-auto min-h-[20vh]">
        <DrawerProvider>
          <Navbar />
          <SideDrawer />
        </DrawerProvider>
        <div
          id="view-port"
          className="container my-auto max-h-[25.6rem] md:max-h-[25.6rem] lg:max-h-[31rem] 2xl:max-h-[59rem] overflow-y-scroll scroll-smooth"
        >
          <HeroSection />
          <AboutSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
