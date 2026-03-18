import { useState } from 'react';
import ProductModal from './ProductModal';
import { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    color: string;
    icon: LucideIcon;
  };
}

function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const Icon = product.icon;

  return (
    <>
      <div
        className="relative h-full overflow-hidden cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowModal(true)}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 md:group-hover:scale-110"
          style={{ backgroundImage: `url(${product.image})` }}
        />

        <div
          className={`absolute inset-0 bg-gradient-to-br ${product.color} transition-opacity duration-500 ${
            isHovered ? 'md:opacity-80' : 'opacity-0'
          }`}
        />

        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 p-4 ${
            isHovered ? 'md:opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative mb-3 md:mb-4 animate-float">
            <Icon className="w-10 md:w-12 h-10 md:h-12 text-white" strokeWidth={1.5} />
          </div>

          <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wider mb-3 md:mb-4 transform transition-transform duration-500 group-hover:scale-110 text-center">
            {product.name}
          </h3>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 md:px-8 py-2 border-2 border-white text-white text-xs font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            KNOW MORE
          </button>
        </div>

        <div className="absolute bottom-6 md:bottom-8 left-4 md:left-8 hidden md:block">
          <div className="flex gap-2 items-end">
            <div className={`w-0.5 h-24 bg-white transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}></div>
          </div>
        </div>

        <div className="absolute bottom-6 md:bottom-8 right-4 md:right-8 hidden md:block">
          <div className={`flex gap-1 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="w-12 h-0.5 bg-white"></div>
            <div className="w-12 h-0.5 bg-white"></div>
            <div className="w-12 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>

      {showModal && <ProductModal product={product} onClose={() => setShowModal(false)} />}
    </>
  );
}

export default ProductCard;
