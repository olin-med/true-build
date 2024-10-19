export default function MainContent() {
    return (
      <div className="bg-[#C1DDF3] text-[#304F8C] px-8 py-12 max-w-4xl mx-auto flex items-center">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-6">True Build</h1>
          <p className="text-lg leading-relaxed">
            True Build was founded after years of witnessing construction companies building and renovating without any quality control of materials or adhering to recognized building practices enforced by building code appliance.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            We are a Construction Services Company who strive to provide the best services available to our clients, with respected customer satisfaction being our main focus. Our foundation is guided by strong core values and led by credentialed industry experts.
          </p>
        </div>
  
        {/* Image Section */}
        <div className="ml-8">
          <img
            src="/TioLee.jpeg"  // Replace with your actual image path
            alt="About True Build"
            className="w-96 h-96 object-cover rounded-full border-2 border-[#304F8C]"
          />
        </div>
      </div>
    );
  }
  