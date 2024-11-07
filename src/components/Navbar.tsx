import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for hamburger and close buttons

interface NavbarProps {
  onServiceSelect: (serviceId: string) => void;
}

export default function Navbar({ onServiceSelect }: NavbarProps) {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleServiceClick = (serviceId: string) => {
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false); // Close mobile menu after selection
    onServiceSelect(serviceId); // Call the function to select the service
  };

  return (
    <div className="flex flex-row justify-between items-center bg-[#fff6ed] py-2 px-8 relative z-10">
      <img src="/Logo.png" alt="Logo" className="w-24" />

      {/* Hamburger Icon for mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-[#304F8C] focus:outline-none"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />} {/* Toggle menu icon */}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex space-x-8 font-medium text-[#304F8C]">
        <li
          className="relative hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer"
          onMouseEnter={() => setIsServicesDropdownOpen(true)}
          
        >
          Services
          {isServicesDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-96 bg-[#fff6ed] text-[#304F8C] border border-[#304F8C] rounded shadow-lg z-20 p-4 grid grid-cols-2 gap-4"
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <div>
                <li className="px-4 py-2 font-bold text-blue-900">General Services</li>
                <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('home-inspections')}>
                  Home Inspections
                </li>
                <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('painting')}>
                  Painting
                </li>
                <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('drywall')}>
                  Drywall
                </li>
                <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('flooring')}>
                  Flooring
                </li>
                <li className="px-4 py-2 font-bold text-blue-900">Interior Projects</li>
                <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('kitchen-bathroom')}>
                  Kitchen and Bathroom
                </li>
              </div>
              <div>
                <li className="px-4 py-2 font-bold text-blue-900">Exterior Projects</li>
                <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('roofing')}>
                  Roofing
                </li>
                <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('driveways')}>
                  Driveways
                </li>
                <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('pool-resurfacing')}>
                  Pool Resurfacing
                </li>
                <li className="px-4 py-2 font-bold text-blue-900">Special Services</li>
                <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('leak-detection-repair')}>
                  Leak Detection and Repair
                </li>
              </div>
            </ul>
          )}
        </li>
        <li className="hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer">Gallery</li>
        <li className="hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer">About Us</li>
        <li className="hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('testimonials')}>
          Testimonials
        </li>
        <li className="hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer">Contact</li>
      </ul>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <ul className="absolute top-full left-0 right-0 bg-[#fff6ed] text-[#304F8C] font-medium p-4 flex flex-col space-y-4 sm:hidden z-10">
          <li className="hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}>
            Services
          </li>
          {isServicesDropdownOpen && (
            <ul className="bg-[#fff6ed] p-4 space-y-2">
              <li className="px-4 py-2 font-bold text-[#304F8C]">General Services</li>
              <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('home-inspections')}>
                Home Inspections
              </li>
              <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('painting')}>
                Painting
              </li>
              <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('drywall')}>
                Drywall
              </li>
              <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('flooring')}>
                Flooring
              </li>
              <li className="px-4 py-2 font-bold text-blue-900">Interior Projects</li>
              <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('kitchen-bathroom')}>
                Kitchen and Bathroom
              </li>
              <li className="px-4 py-2 font-bold text-blue-900">Exterior Projects</li>
              <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('roofing')}>
                Roofing
              </li>
              <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('driveways')}>
                Driveways
              </li>
              <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('pool-resurfacing')}>
                Pool Resurfacing
              </li>
              <li className="px-4 py-2 font-bold text-blue-900">Special Services</li>
              <li className="px-4 py-2 hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('leak-detection-repair')}>
                Leak Detection and Repair
              </li>
            </ul>
          )}
          <li className="hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer">Gallery</li>
          <li className="hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer">About Us</li>
          <li className="hover:bg-[#304F8C] hover:text-[#fff6ed] cursor-pointer" onClick={() => handleServiceClick('testimonials')}>
            Testimonials
          </li>
        </ul>
      )}
    </div>
  );
}
