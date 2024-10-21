import { useState, useEffect } from 'react';

interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
}

interface ServicesSectionProps {
  highlightedService: string | null;
}

export default function ServicesSection({ highlightedService }: ServicesSectionProps) {
  const services: Service[] = [
    { id: 'home-inspections', title: 'Home Inspections', image: '/Inspection.jpeg', description: 'Ensure your home is up to code with professional inspections.' },
    { id: 'painting', title: 'Painting', image: '/Inspection.jpeg', description: 'High-quality painting services for both interior and exterior.' },
    { id: 'drywall', title: 'Drywall', image: '/Drywall.jpeg', description: 'Expert indoor and outdoor drywall installation and repair services.' },
    { id: 'flooring', title: 'Flooring', image: '/Flooring.jpeg', description: 'Beautiful and durable flooring options for your home.' },
    { id: 'kitchen-bathroom', title: 'Kitchen and Bathroom', image: '/Kitchen.jpeg', description: 'Remodel your kitchen and bathroom with expert design and craftsmanship.' },
    { id: 'roofing', title: 'Roofing', image: '/Inspection.jpeg', description: 'Reliable roofing services to protect your home from the elements.' },
    { id: 'driveways', title: 'Driveways', image: '/Driveway.jpeg', description: 'Sturdy and beautiful driveway construction and repair.' },
    { id: 'pool-resurfacing', title: 'Pool Resurfacing', image: '/Piscina.jpeg', description: 'Keep your pool in top shape with our resurfacing services.' },
    { id: 'leak-detection-repair', title: 'Leak Detection and Repair', image: '/Leak.jpeg', description: 'Quick and efficient leak detection and repair services.' },
  ];

  const [activeService, setActiveService] = useState<string | null>(null);

  useEffect(() => {
    if (highlightedService) {
      const serviceElement = document.getElementById(highlightedService);
      if (serviceElement) {
        serviceElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setActiveService(highlightedService);
        setTimeout(() => setActiveService(null), 10000); // Remove highlight after 10 seconds
      }
    }
  }, [highlightedService]);

  return (
    <div className="py-8 md:py-12 mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#C1DDF3] mb-6 sm:mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className={`bg-[#C1DDF3] shadow-lg overflow-hidden transition-transform duration-1000 ${
                activeService === service.id ? 'shadow-2xl scale-105' : ''
              }`}
            >
              <img src={service.image} alt={service.title} className="w-full h-40 sm:h-48 object-cover" />
              <div className="px-4 sm:px-6 py-2 sm:py-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[#304F8C] mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base mb-4">{service.description}</p>
              </div>
              <div className="flex justify-end px-4 pb-4">
                <button
                  className="bg-green-500 text-white text-sm sm:text-base font-semibold py-2 px-4 hover:bg-green-600 transition-colors duration-300"
                  onClick={() => alert(`Request a quote for ${service.title}`)}
                >
                  Request a Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
