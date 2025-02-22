import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  onServiceSelect: (serviceId: string) => void;
}

export default function Navbar({ onServiceSelect }: NavbarProps) {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleServiceClick = (serviceId: string) => {
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
    onServiceSelect(serviceId);
  };

  // Smooth-scroll to the #about-us section
  const handleAboutUs = () => {
    const aboutUsSection = document.getElementById('about-us');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Close dropdowns/menus if open
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };
  const handleFooter = () => {
    const footerSection = document.getElementById('footer');
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Close dropdowns/menus if open
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex items-center fixed top-0 left-0 w-full z-50 py-2 px-8 bg-gradient-to-b from-black/90 to-transparent">
      {/* Left: Main Logo */}
      <img src="/Logo.png" alt="Logo" className="w-24" />

      {/* Middle: The two images grouped together with minimal spacing */}
      <div className="flex items-center space-x-2 ml-4">
        <img src="/ABC_National_ABC-1_web.png" alt="ABC Logo" className="w-20" />
        <img src="/seal.png" alt="Seal Logo" className="w-16" />
      </div>

      {/* Hamburger Icon for mobile, pushed to the right */}
      <div className="sm:hidden ml-auto">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-[#304F8C] focus:outline-none"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Menu (also right-aligned) */}
      <ul className="hidden sm:flex space-x-8 font-semibold text-white ml-auto">
        <li
          className="relative hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
          onMouseEnter={() => setIsServicesDropdownOpen(true)}
        >
          Services
          {isServicesDropdownOpen && (
            <ul
              className="absolute left-0 mt-2 w-96 bg-black/80 text-white rounded border shadow-lg z-20 p-4 grid grid-cols-2 gap-4"
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <div>
                <li className="px-4 py-2 font-bold text-[#2970b1]">General Services</li>
                <li
                  className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                  onClick={() => handleServiceClick('home-inspections')}
                >
                  Home Inspections
                </li>
                <li
                  className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                  onClick={() => handleServiceClick('painting')}
                >
                  Painting
                </li>
                <li
                  className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                  onClick={() => handleServiceClick('drywall')}
                >
                  Drywall
                </li>
                <li
                  className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                  onClick={() => handleServiceClick('flooring')}
                >
                  Flooring
                </li>
                <li className="px-4 py-2 font-bold text-[#2970b1]">Interior Projects</li>
                <li
                  className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                  onClick={() => handleServiceClick('kitchen-bathroom')}
                >
                  Kitchen and Bathroom
                </li>
              </div>
              <div>
                <li className="px-4 py-2 font-bold text-[#2970b1]">Exterior Projects</li>
                <li
                  className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                  onClick={() => handleServiceClick('roofing')}
                >
                  Roofing
                </li>
                <li
                  className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                  onClick={() => handleServiceClick('driveways')}
                >
                  Driveways
                </li>
                <li
                  className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                  onClick={() => handleServiceClick('pool-resurfacing')}
                >
                  Pool Resurfacing
                </li>
                <li className="px-4 py-2 font-bold text-[#2970b1]">Special Services</li>
                <li
                  className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                  onClick={() => handleServiceClick('leak-detection-repair')}
                >
                  Leak Detection and Repair
                </li>
              </div>
            </ul>
          )}
        </li>

        {/* About Us -> calls handleAboutUs */}
        <li
          className="hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
          onClick={handleAboutUs}
        >
          About Us
        </li>

        <li
          className="hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
          onClick={() => handleServiceClick('testimonials')}
        >
          Testimonials
        </li>
        <li className="hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
        onClick={handleFooter}
        >
          Contact Us
        </li>
      </ul>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <ul className="absolute top-full left-0 right-0 bg-black/80 text-[#2970b1] font-medium p-4 flex flex-col space-y-4 sm:hidden z-10">
          <li
            className="hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
            onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
          >
            Services
          </li>
          {isServicesDropdownOpen && (
            <ul className="bg-black/80 p-4 space-y-2">
              <li className="px-4 py-2 font-bold text-white">General Services</li>
              <li
                className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                onClick={() => handleServiceClick('home-inspections')}
              >
                Home Inspections
              </li>
              <li
                className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                onClick={() => handleServiceClick('painting')}
              >
                Painting
              </li>
              <li
                className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                onClick={() => handleServiceClick('drywall')}
              >
                Drywall
              </li>
              <li
                className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                onClick={() => handleServiceClick('flooring')}
              >
                Flooring
              </li>
              <li className="px-4 py-2 font-bold text-blue-900">Interior Projects</li>
              <li
                className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                onClick={() => handleServiceClick('kitchen-bathroom')}
              >
                Kitchen and Bathroom
              </li>
              <li className="px-4 py-2 font-bold text-blue-900">Exterior Projects</li>
              <li
                className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                onClick={() => handleServiceClick('roofing')}
              >
                Roofing
              </li>
              <li
                className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                onClick={() => handleServiceClick('driveways')}
              >
                Driveways
              </li>
              <li
                className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                onClick={() => handleServiceClick('pool-resurfacing')}
              >
                Pool Resurfacing
              </li>
              <li className="px-4 py-2 font-bold text-blue-900">Special Services</li>
              <li
                className="px-4 py-2 hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
                onClick={() => handleServiceClick('leak-detection-repair')}
              >
                Leak Detection and Repair
              </li>
            </ul>
          )}

          {/* Mobile About Us -> calls handleAboutUs */}
          <li
            className="hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
            onClick={handleAboutUs}
          >
            About Us
          </li>

          <li
            className="hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
            onClick={() => handleServiceClick('testimonials')}
          >
            Testimonials
          </li>
          <li
            className="hover:bg-[#2970b1] hover:text-[#fff6ed] cursor-pointer"
            onClick={handleFooter}
          >
            Contact Us
          </li>
        </ul>
      )}
    </div>
  );
}
