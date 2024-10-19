export default function ServicesSection() {
    const services = [
      { id: 1, title: 'Home Inspections', image: '/Inspection.jpeg', description: 'Ensure your home is up to code with professional inspections.' },
      { id: 2, title: 'Painting', image: '/Inspection.jpeg', description: 'High-quality painting services for both interior and exterior.' },
      { id: 3, title: 'Drywall', image: '/Drywall.jpeg', description: 'Expert indoor and outdoor drywall installation and repair services.' },
      { id: 4, title: 'Flooring', image: '/Flooring.jpeg', description: 'Beautiful and durable flooring options for your home.' },
      { id: 5, title: 'Kitchen and Bathroom', image: '/Kitchen.jpeg', description: 'Remodel your kitchen and bathroom with expert design and craftsmanship.' },
      { id: 6, title: 'Roofing', image: '/Inspection.jpeg', description: 'Reliable roofing services to protect your home from the elements.' },
      { id: 7, title: 'Driveways', image: '/Driveway.jpeg', description: 'Sturdy and beautiful driveway construction and repair.' },
      { id: 8, title: 'Pool Resurfacing', image: '/Piscina.jpeg', description: 'Keep your pool in top shape with our resurfacing services.' },
      { id: 9, title: 'Leak Detection and Repair', image: '/Inspection.jpeg', description: 'Quick and efficient leak detection and repair services.' },
    ];
  
    return (
      <div className="py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#C1DDF3] mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-[#C1DDF3] shadow-lg overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="px-6 py-2">
                  <h3 className="text-xl font-semibold text-[#304F8C] mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  {/* Botão "Request a Quote" com cor verde e alinhado à direita */}
                  
                </div>
                <div className="flex justify-end">
                    <button
                      className="bg-green-500 text-white font-semibold py-2 px-4 hover:bg-green-600 transition-colors duration-300"
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
  