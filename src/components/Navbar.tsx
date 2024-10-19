import { useState } from 'react';

interface NavbarProps {
  onServiceSelect: (serviceId: string) => void;
}

export default function Navbar({ onServiceSelect }: NavbarProps) {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const handleServiceClick = (serviceId: string) => {
    setIsServicesDropdownOpen(false);
    onServiceSelect(serviceId); // Call the function to select the service
  };

  return (
    <div className="flex flex-row justify-between items-center bg-[#C1DDF3] py-2 px-8 relative z-10">
      <img src="/Logo.png" alt="" className="w-24" />
      <ul className="flex space-x-8 font-medium text-[#304F8C]">
        <li
          className="relative cursor-pointer"
          onMouseEnter={() => setIsServicesDropdownOpen(true)}
          
        >
          Services
          {isServicesDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-96 bg-[#C1DDF3] text-[#304F8C] border border-[#304F8C] rounded shadow-lg z-20 p-4 grid grid-cols-2 gap-4"
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <div>
                <li className="px-4 py-2 font-bold text-blue-900">General Services</li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer" onClick={() => handleServiceClick('home-inspections')}>
                  Home Inspections
                </li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer" onClick={() => handleServiceClick('painting')}>
                  Painting
                </li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer" onClick={() => handleServiceClick('drywall')}>
                  Drywall
                </li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer" onClick={() => handleServiceClick('flooring')}>
                  Flooring
                </li>
                <li className="px-4 py-2 font-bold text-blue-900">Interior Projects</li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer" onClick={() => handleServiceClick('kitchen-bathroom')}>
                  Kitchen and Bathroom
                </li>
              </div>
              <div>
                <li className="px-4 py-2 font-bold text-blue-900">Exterior Projects</li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer" onClick={() => handleServiceClick('roofing')}>
                  Roofing
                </li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer" onClick={() => handleServiceClick('driveways')}>
                  Driveways
                </li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer" onClick={() => handleServiceClick('pool-resurfacing')}>
                  Pool Resurfacing
                </li>
                <li className="px-4 py-2 font-bold text-blue-900">Special Services</li>
                <li className="px-4 py-2 hover:bg-[#92a8b8] cursor-pointer" onClick={() => handleServiceClick('leak-detection-repair')}>
                  Leak Detection and Repair
                </li>
              </div>
            </ul>
          )}
        </li>
        <li className="cursor-pointer">Gallery</li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Testimonials</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}
