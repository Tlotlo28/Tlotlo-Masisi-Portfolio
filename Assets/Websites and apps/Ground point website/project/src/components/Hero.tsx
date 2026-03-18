import { Facebook, Twitter, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import GeometricShapes from './GeometricShapes';

interface HeroProps {
  onNavigate: (page: string) => void;
}

function Hero({ onNavigate }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          filter: 'brightness(0.5)',
        }}
      />

      <GeometricShapes />

      <div className="relative z-10 h-full flex flex-col">
        <div className="absolute top-4 md:top-8 left-4 md:left-8">
          <div className="w-8 md:w-10 h-8 md:h-10 border-2 border-white rotate-45 flex items-center justify-center">
            <div className="w-2 h-2 bg-white"></div>
          </div>
        </div>

        <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="w-16 md:w-24 h-16 md:h-24 border-2 border-white rotate-45 flex items-center justify-center">
              <span className="text-white text-xs md:text-sm font-bold -rotate-45">LOGO</span>
            </div>
            <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
              <div className="w-8 md:w-12 h-0.5 bg-white"></div>
              <div className="w-8 md:w-12 h-0.5 bg-white"></div>
              <div className="w-8 md:w-12 h-0.5 bg-white"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-4 md:top-8 right-4 md:right-8 hidden md:flex gap-2 md:gap-4">
          <a href="#" className="w-8 md:w-10 h-8 md:h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <Facebook className="w-4 md:w-5 h-4 md:h-5 text-black" />
          </a>
          <a href="#" className="w-8 md:w-10 h-8 md:h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <Twitter className="w-4 md:w-5 h-4 md:h-5 text-black" />
          </a>
          <a href="#" className="w-8 md:w-10 h-8 md:h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <Instagram className="w-4 md:w-5 h-4 md:h-5 text-black" />
          </a>
        </div>

        <div className="flex-1 flex items-center justify-center px-4">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wider leading-tight">
              GROUND <span className="font-light">POINT</span>
            </h1>
          </div>
        </div>

        <Navigation onNavigate={onNavigate} currentPage="home" />
      </div>

      <div className="absolute bottom-6 md:bottom-8 right-4 md:right-8 hidden md:block">
        <div className="flex gap-4 items-end">
          <div className="w-0.5 h-32 bg-white"></div>
          <div className="flex gap-1">
            <div className="w-12 h-0.5 bg-white"></div>
            <div className="w-12 h-0.5 bg-white"></div>
            <div className="w-12 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
