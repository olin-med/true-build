import Navbar from "./components/Navbar"
import Gallery from "./components/Gallery"
import MainContent from "./components/MainContent"
import ServicesSection from "./components/Services"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="h-full w-full p-24 bg-[#568DC3]">
        
        <MainContent />
        <ServicesSection />
        <Gallery />
      </div>
      <Footer />
    </div>
  )
}