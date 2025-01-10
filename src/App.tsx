import { useState } from 'react';
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import ServicesSection from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  const [highlightedService, setHighlightedService] = useState<string | null>(null);

  return (
    <div
      className="
        relative
        w-full
        min-h-screen
        bg-fixed
        bg-[url('/image.png')]
        bg-no-repeat
        bg-cover
      "
    >
      {/* Fixed Navbar */}
      <Navbar
        onServiceSelect={setHighlightedService}
        
      />

      {/* Translucent overlay on top of the background */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main content container; add top padding so content sits below the navbar */}
      <div className="relative z-10 pt-20">
        <MainContent />
        <ServicesSection highlightedService={highlightedService} />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
