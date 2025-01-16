export default function AboutUs() {
  return (
    <div id="about-us" className="flex flex-col bg-black/90 items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#fff6ed] mb-6 sm:mb-8">
        About True Build
      </h2>

      <div className="flex flex-col sm:flex-row gap-y-8 w-full px-4">
        <div className="text-white p-8 sm:p-12 w-full flex flex-col items-center">
          {/* Text Section */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-base sm:text-lg text-justify leading-relaxed">
              True Build was founded after years of witnessing construction
              companies building and renovating without any quality control of
              materials or adhering to recognized building practices enforced by
              building code appliance.
            </p>
            <p className="mt-4 text-base sm:text-lg text-justify leading-relaxed">
              We are a Construction Services Company who strive to provide the
              best services available to our clients, with respected customer
              satisfaction being our main focus. Our foundation is guided by
              strong core values and led by credentialed industry experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
