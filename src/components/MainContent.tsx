export default function MainContent() {
  return (
    <div className="text-white mt-20 font-bold">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        
        {/* Left Circle + Image */}
        <div className="w-full sm:w-1/3 flex justify-center mb-8 sm:mb-0">
          <div
            className="w-96 h-96 rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)'
            }}
          >
            <a href="https://abcflorida.com/">
              <img
                src="/ABC_National_ABC-1_web.png"
                alt="About True Build"
                className="w-64 h-64 object-contain mb-4 cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* Middle Circle + Image (15% larger) */}
        <div className="w-full sm:w-1/3 flex justify-center mb-8 sm:mb-0">
          <div
            className="w-96 h-96 rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)'
            }}
          >
            <a href="/logo-page">
              <img
                src="/Logo_e.png"
                alt="About True Build"
                className="w-96 h-96 object-contain rounded-full cursor-pointer"
                style={{ transform: 'scale(1.20)' }} // 15% bigger
              />
            </a>
          </div>
        </div>

        {/* Right Circle + Image */}
        <div className="w-full sm:w-1/3 flex justify-center mb-8 sm:mb-0">
          <div
            className="w-96 h-96 rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)'
            }}
          >
            <a href="https://www.nachi.org/productseals.htm">
              <img
                src="/seal.png"
                alt="About True Build"
                className="w-60 h-60 object-contain mt-4 cursor-pointer"
              />
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
}
