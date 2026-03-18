import { useState } from 'react';

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage?: string;
}

function Navigation({ onNavigate, currentPage = 'home' }: NavigationProps) {
  const tabs = ['home', 'about', 'services', 'contact us'];

  return (
    <nav className="absolute bottom-12 sm:bottom-16 md:bottom-24 left-0 right-0 px-4">
      <div className="flex justify-center items-center gap-3 xs:gap-4 sm:gap-6 md:gap-12 lg:gap-16 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onNavigate(tab)}
            className="relative group"
          >
            <span className={`text-white text-xs xs:text-sm md:text-lg lg:text-xl uppercase tracking-wider md:tracking-widest transition-all duration-300 ${
              currentPage === tab ? 'text-sm xs:text-base md:text-xl lg:text-2xl' : 'hover:text-gray-300'
            }`}>
              {tab}
            </span>
            {currentPage === tab && (
              <div className="absolute -bottom-2 md:-bottom-3 left-0 right-0 h-0.5 bg-white animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
