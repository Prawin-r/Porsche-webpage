import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ModelsSection from "./components/ModelsSection";
import ThreeDCar from "./components/ThreeDCar";
import AboutPage from "./components/Aboutpage";
import ContactPage from "./components/Contactpage";
import LegacyStatsSection from "./components/LegacyStatsSection";

function App() {
  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans scroll-smooth scroll-pt-20">
      <Navbar />

      {/* Hero Section */}
      <div id="home">
        <Hero />
      </div>

      {/* Models Section with scroll animation */}
      <div data-aos="fade-up">
        <ModelsSection />
      </div>

      {/* 3D Car Section with scroll animation */}
      <div data-aos="zoom-in">
        <ThreeDCar />
      </div>

      {/* About Section with scroll animation */}
      <div id="about">
        <AboutPage />
      </div>
      <LegacyStatsSection />

      {/* Contact Section with scroll animation */}
      <div id="contact" data-aos="fade-up">
        <ContactPage />
      </div>

      <Footer />
    </div>
  );
}

export default App;
