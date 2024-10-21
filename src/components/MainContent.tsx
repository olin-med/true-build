export default function MainContent() {
  return (
    <div className="bg-[#fff6ed] text-[#304F8C] px-4 py-8 sm:py-12 w-full mx-auto flex flex-col sm:flex-row items-center">
      {/* Text Section */}
      <div className="flex-1 mb-8 sm:mb-0 text-center sm:text-left px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">True Build</h1>
        <p className="text-base sm:text-lg leading-relaxed">
          True Build was founded after years of witnessing construction companies building and renovating without any quality control of materials or adhering to recognized building practices enforced by building code appliance.
        </p>
        <p className="mt-4 text-base sm:text-lg leading-relaxed">
          We are a Construction Services Company who strive to provide the best services available to our clients, with respected customer satisfaction being our main focus. Our foundation is guided by strong core values and led by credentialed industry experts.
        </p>
      </div>

      {/* Image Section */}
      <div className="sm:ml-8 flex justify-center w-full sm:w-auto px-4 sm:px-0">
        <img
          src="/TioLee.jpeg"  // Replace with your actual image path
          alt="About True Build"
          className="w-full max-w-xs sm:w-96 h-auto object-cover rounded-full border-2 border-[#304F8C]"
        />
      </div>
    </div>
  );
}
