import { useState } from 'react';
import Navbar from "./components/Navbar"
import Gallery from "./components/Gallery"
import MainContent from "./components/MainContent"
import ServicesSection from "./components/Services"
import Footer from "./components/Footer"

export default function App() {
  const [highlightedService, setHighlightedService] = useState<string | null>(null);
  return (
    <div>
      <Navbar onServiceSelect={setHighlightedService} />
      <div className="h-full w-full p-24 bg-[#568DC3]">
        
        <MainContent />
        <ServicesSection highlightedService={highlightedService} />
        <Gallery />
      </div>
      <Footer />
    </div>
  )
}