export default function MainContent() {
  return (
    <div className="bg-[#C1DDF3] text-[#304F8C] px-4 sm:px-8 py-8 sm:py-12 max-w-4xl mx-auto flex flex-col sm:flex-row items-center">
      {/* Text Section */}
      <div className="flex-1 mb-8 sm:mb-0 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">True Build</h1>
        <p className="text-base sm:text-lg leading-relaxed">
          True Build was founded after years of witnessing construction companies building and renovating without any quality control of materials or adhering to recognized building practices enforced by building code appliance.
        </p>
        <p className="mt-4 text-base sm:text-lg leading-relaxed">
          We are a Construction Services Company who strive to provide the best services available to our clients, with respected customer satisfaction being our main focus. Our foundation is guided by strong core values and led by credentialed industry experts.
        </p>
      </div>

      {/* Image Section */}
      <div className="sm:ml-8 flex justify-center">
        <img
          src="/TioLee.jpeg"  // Replace with your actual image path
          alt="About True Build"
          className="w-48 h-48 sm:w-96 sm:h-96 object-cover rounded-full border-2 border-[#304F8C]"
        />
      </div>
    </div>
  );
}
