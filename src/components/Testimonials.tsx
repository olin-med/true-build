import { AiFillStar } from "react-icons/ai";

export default function Testimonials() {
  return (
    <div id="testimonials" className="flex flex-col bg-black/90 items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#fff6ed] mb-6 sm:mb-8">
        Testimonials
      </h2>
      <div className="flex flex-col sm:flex-row gap-y-8 w-full px-4">
        <div className=" text-white p-8 sm:p-12 w-full flex flex-col items-center">
          {/* Text Section */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Luciana Neto
            </h1>
            <div className="flex justify-center sm:justify-start mb-4">
              {/* Star Icons */}
              {[...Array(5)].map((_, index) => (
                <AiFillStar key={index} color="#FFB800" size={24} />
              ))}
            </div>
            <p className="text-base sm:text-lg text-justify leading-relaxed">
              Great experience, resurfaced my pool with diamond bright. Best
              quote and awesome service. Crew worked very clean and tidy.
              Installation was surprisingly quick and looks fantastic “like a
              brand new pool now!” We also took the LED package to modernize our
              in-pool lighting. Totally satisfied. Would highly recommend.
            </p>
          </div>
        </div>
        <div className="text-white p-8 sm:p-12 w-full flex flex-col items-center">
          {/* Text Section */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Artem VA
            </h1>
            <div className="flex justify-center sm:justify-start mb-4">
              {/* Star Icons */}
              {[...Array(5)].map((_, index) => (
                <AiFillStar key={index} color="#FFB800" size={24} />
              ))}
            </div>
            <p className="text-base sm:text-lg text-justify leading-relaxed">
              Great job, True Build installed a new bathroom and kitchen. Prices
              were excellent compared to the other guys. Service was quick and
              the quality was paramount!! Definitely, would recommend this
              company. 5 Stars.
            </p>
          </div>
        </div>
      </div>
      <a
        href="https://www.facebook.com/profile.php?id=100095209029942&sk=reviews"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 px-6 py-3 mb-20 bg-[#304F8C] text-[#fff6ed] font-bold hover:text-[#2b4374] hover:bg-[#fff6ed] transition-colors"
      >
        Add Your Review
      </a>
    </div>
  );
}
