import { useState } from 'react';

export default function Navbar() {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center bg-[#C1DDF3] py-2 px-8 relative z-10">
      {/* Logo */}
      <img src="/Logo.png" alt="" className="w-24" />
      {/* Navigation Menu */}
      <ul className="flex space-x-8 font-medium text-[#304F8C]">
        {/* Services Dropdown */}
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setIsServicesDropdownOpen(true)}
          
        >
          Services
          {/* Dropdown menu */}
          {isServicesDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-96 bg-[#C1DDF3] text-[#304F8C] border border-[#304F8C] rounded shadow-lg z-20 p-4 grid grid-cols-2 gap-4"
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              {/* Coluna 1 */}
              <div>
                <li className="px-4 py-2 font-bold text-blue-900">General Services</li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer">
                  <a href="/home-inspections">Home Inspections</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer">
                  <a href="/painting">Painting</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer">
                  <a href="/drywall">Drywall</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer">
                  <a href="/flooring">Flooring</a>
                </li>
                <li className="px-4 py-2 font-bold text-blue-900">Interior Projects</li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer">
                  <a href="/kitchen-bathroom">Kitchen and Bathroom</a>
                </li>
              </div>

              {/* Coluna 2 */}
              <div>
                <li className="px-4 py-2 font-bold text-blue-900">Exterior Projects</li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer">
                  <a href="/roofing">Roofing</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer">
                  <a href="/driveways">Driveways</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer">
                  <a href="/pool-screen-installation">Pool Screen Installation</a>
                </li>
                <li className="px-4 py-2 font-bold text-blue-900">Special Services</li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer">
                  <a href="/pool-resurfacing">Pool Resurfacing</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer">
                  <a href="/leak-detection-repair">Leak Detection and Repair</a>
                </li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer">
                  <a href="/stone-cladding">Stone Cladding</a>
                </li>
              </div>
            </ul>
          )}
        </li>
        {/* Outros Itens do Menu */}
        <li className="cursor-pointer">Gallery</li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Testimonials</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}
