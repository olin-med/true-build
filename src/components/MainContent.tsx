export default function MainContent() {
  return (
    <div className=" text-white mt-20 font-bold">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Image Section (Left) */}
        <div className="w-full sm:w-1/2 flex justify-center mb-8 sm:mb-0">
          <img
            src="/main.jpeg" // Replace with your actual image path
            alt="About True Build"
            className="w-full max-w-md h-auto object-cover rounded-full border-2 border-[#304F8C]"
          />
        </div>

        {/* Text Section (Right) */}
        <div className="w-full sm:w-1/2 text-7xl text-center sm:text-left px-4">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            True Build
          </h1>
          <p className="text-base text-justify sm:text-lg leading-relaxed">
            True Build was founded after years of witnessing construction companies
            building and renovating without any quality control of materials or adhering
            to recognized building practices enforced by building code appliance.
          </p>
          <p className="mt-4 text-base text-justify sm:text-lg leading-relaxed">
            We are a Construction Services Company who strive to provide the best
            services available to our clients, with respected customer satisfaction
            being our main focus. Our foundation is guided by strong core values
            and led by credentialed industry experts.
          </p>
        </div>
      </div>
    </div>
  );
}
