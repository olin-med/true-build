import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
  whatsappMessage: string;
}

interface ServicesSectionProps {
  highlightedService: string | null;
}

export default function ServicesSection({ highlightedService }: ServicesSectionProps) {
  const services: Service[] = [
    {
      id: 'home-inspections',
      title: 'Home Inspections',
      image: '/Inspection.jpeg',
      description: 'Ensure your home is up to code with professional inspections.',
      whatsappMessage: 'Hello, I am interested in getting a quote for Home Inspections.'
    },
    {
      id: 'painting',
      title: 'Painting',
      image: '/Painting.jpeg',
      description: 'High-quality painting services for both interior and exterior.',
      whatsappMessage: 'Hello, I would like to get a quote for your Painting services.'
    },
    {
      id: 'drywall',
      title: 'Drywall',
      image: '/Drywall.jpeg',
      description: 'Expert indoor and outdoor drywall installation and repair services.',
      whatsappMessage: 'Hello, I am looking for a quote for Drywall services.'
    },
    {
      id: 'flooring',
      title: 'Flooring',
      image: '/Flooring.jpeg',
      description: 'Beautiful and durable flooring options for your home.',
      whatsappMessage: 'Hi, I would like to get a quote for Flooring services.'
    },
    {
      id: 'kitchen-bathroom',
      title: 'Kitchen and Bathroom',
      image: '/Kitchen.jpeg',
      description: 'Remodel your kitchen and bathroom with expert design and craftsmanship.',
      whatsappMessage: 'Hello, I am interested in a quote for Kitchen and Bathroom remodeling.'
    },
    {
      id: 'roofing',
      title: 'Roofing',
      image: '/Inspection.jpeg',
      description: 'Reliable roofing services to protect your home from the elements.',
      whatsappMessage: 'Hello, I would like to get a quote for Roofing services.'
    },
    {
      id: 'driveways',
      title: 'Driveways',
      image: '/Driveway.jpeg',
      description: 'Sturdy and beautiful driveway construction and repair.',
      whatsappMessage: 'Hello, I am interested in a quote for Driveways construction or repair.'
    },
    {
      id: 'pool-resurfacing',
      title: 'Pool Resurfacing',
      image: '/Piscina.jpeg',
      description: 'Keep your pool in top shape with our resurfacing services.',
      whatsappMessage: 'Hi, I would like to get a quote for Pool Resurfacing services.'
    },
    {
      id: 'leak-detection-repair',
      title: 'Leak Detection and Repair',
      image: '/Leak.jpeg',
      description: 'Quick and efficient leak detection and repair services.',
      whatsappMessage: 'Hello, I am looking for a quote for Leak Detection and Repair services.'
    },
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

  const handleWhatsAppRedirect = (message: string) => {
    const phoneNumber = '14073600307'; // Substitua pelo número correto no formato internacional
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="py-8 md:py-12 bg-gradient-to-b from-transparent to-black/90 mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#fff6ed] mb-6 sm:mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className={`shadow-lg overflow-hidden transition-transform duration-1000 ${
                activeService === service.id ? 'shadow-2xl scale-105' : ''
              }`}
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{service.title}</h3>
              <img src={service.image} alt={service.title} className="w-full h-40 sm:h-48 object-cover" />
              <div className="py-2 sm:py-4">
                
                <p className="text-white text-sm font-bold sm:text-base mb-4">{service.description}</p>
              </div>
              <div className="flex justify-center px-4 pb-4">
                <button
                  className="bg-green-500 text-white text-sm sm:text-base font-semibold py-2 px-4 hover:bg-green-600 transition-colors duration-300 flex items-center"
                  onClick={() => handleWhatsAppRedirect(service.whatsappMessage)}
                >
                  Request a Quote
                  <FaWhatsapp size={20} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
