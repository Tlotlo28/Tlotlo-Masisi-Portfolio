interface FooterProps {
  onNavigate: (page: string) => void;
}

function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-black py-8 sm:py-12 md:py-16 border-t border-gray-800 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8 justify-center md:justify-start">
            <button onClick={() => onNavigate('home')} className="text-white text-xs sm:text-sm md:text-lg uppercase tracking-widest hover:text-gray-400 transition-colors text-center sm:text-left">
              HOME
            </button>
            <button onClick={() => onNavigate('about')} className="text-white text-xs sm:text-sm md:text-lg uppercase tracking-widest hover:text-gray-400 transition-colors text-center sm:text-left">
              ABOUT
            </button>
            <button onClick={() => onNavigate('services')} className="text-white text-xs sm:text-sm md:text-lg uppercase tracking-widest hover:text-gray-400 transition-colors text-center sm:text-left">
              SERVICES
            </button>
            <button onClick={() => onNavigate('contact us')} className="text-white text-xs sm:text-sm md:text-lg uppercase tracking-widest hover:text-gray-400 transition-colors text-center sm:text-left">
              CONTACT US
            </button>
          </div>

          <div className="relative flex justify-center order-first md:order-none">
            <div className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-2 border-white rotate-45 flex items-center justify-center hover:scale-110 transition-transform">
              <span className="text-white text-xs font-bold -rotate-45">LOGO</span>
            </div>
          </div>

          <div className="text-white text-xs md:text-sm uppercase tracking-wider text-center md:text-right">
            COPYWRITE....
          </div>
        </div>

        <div className="absolute top-0 left-4 md:left-8 hidden md:block">
          <div className="w-10 h-10 border-2 border-white rotate-45 opacity-20"></div>
        </div>

        <div className="absolute bottom-0 right-4 md:right-8 hidden md:block">
          <div className="w-10 h-10 border-2 border-white rotate-45 opacity-20"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
