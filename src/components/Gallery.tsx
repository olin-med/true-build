import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing the icons

export default function CarouselGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const items = [
    { id: 1, src: '/Piscina4.png', alt: 'Image 1' },
    { id: 2, src: '/Piscina2.jpeg', alt: 'Image 2' },
    { id: 3, src: '/Piscina3.jpeg', alt: 'Image 3' },
  ];

  const totalSlides = items.length;

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  return (
    <div className="relative w-full mt-44 h-screen">
      <div className="absolute inset-0 overflow-hidden">
        {/* Carousel Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Carousel Items */}
          {items.map((item) => (
            <div key={item.id} className="min-w-full flex-shrink-0 h-full">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow (Minimalistic Style with React Icons) */}
        <button
          onClick={goToPreviousSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white p-1 text-3xl z-10"
        >
          <FiChevronLeft />
        </button>

        {/* Right Arrow (Minimalistic Style with React Icons) */}
        <button
          onClick={goToNextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-1 text-3xl z-10"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
