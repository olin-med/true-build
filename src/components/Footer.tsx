import { FaFacebookF, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Importando ícones

export default function Footer() {
  return (
    <footer className="bg-[#C1DDF3] text-[#304F8C] py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Seção de Licença */}
        <div className="mb-4 md:mb-0">
          <p>© 2024 True Build Construction. All rights reserved. License #12345678</p>
        </div>

        {/* Seção de Endereço */}
        <div className="mb-4 md:mb-0">
          <p className="flex items-center">
            <span className="mr-2">📍</span> Clermont, FL, United States, 34714
          </p>
        </div>

        {/* Links de Redes Sociais */}
        <div className="flex space-x-4">
          
          <a
            href="https://www.facebook.com/profile.php?id=100095209029942&sk=about" // Insira seu link do Facebook aqui
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebookF size={24} />
          </a>

          

          {/* Link para WhatsApp */}
          <a
            href="https://wa.me/14073600307?text=Hello%20there!%20I'm%20interested%20in%20your%20services."  // Insira o número do WhatsApp aqui no formato internacional
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors duration-300"
          >
            <FaWhatsapp size={24} />
          </a>
          {/* Link para Facebook */}
          <a
            href="mailto:truebuildfl@gmail.com" 
            className='text-white hover:text-red-700'>
            <FaEnvelope size={24} />
          </a>
          <a>
            truebuildfl@gmail.com
          </a>
          {/* Link para Facebook */}
        </div>
      </div>
    </footer>
  );
}
