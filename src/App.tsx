import { useState } from 'react';
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import ServicesSection from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  const [highlightedService, setHighlightedService] = useState<string | null>(null);
  
  return (
    <div className="w-full h-full">
      <Navbar onServiceSelect={setHighlightedService} />
      <div className="w-full h-full p-4 sm:p-8 md:p-16 bg-[#304F8C]">
        {/* Main content section */}
        <MainContent />
        
        {/* Services section with highlighted service logic */}
        <ServicesSection highlightedService={highlightedService} />

        {/* Testimonials section */}
        <Testimonials />
        
      </div>
      <Footer />
    </div>
  );
}
