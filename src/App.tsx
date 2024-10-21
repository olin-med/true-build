import { useState } from 'react';
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import MainContent from "./components/MainContent";
import ServicesSection from "./components/Services";
import Footer from "./components/Footer";

export default function App() {
  const [highlightedService, setHighlightedService] = useState<string | null>(null);
  
  return (
    <div className="w-full h-full">
      <Navbar onServiceSelect={setHighlightedService} />
      <div className="w-full h-full p-4 sm:p-8 md:p-16 bg-[#568DC3]">
        {/* Main content section */}
        <MainContent />
        
        {/* Services section with highlighted service logic */}
        <ServicesSection highlightedService={highlightedService} />
        
      </div>
      <Footer />
    </div>
  );
}
