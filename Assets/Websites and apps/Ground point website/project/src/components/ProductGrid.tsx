import ProductCard from './ProductCard';
import { Shirt, ShoppingBag, Zap, Crown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'URBAN HOODIE',
    image: 'https://images.pexels.com/photos/7148439/pexels-photo-7148439.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-pink-900 to-purple-900',
    icon: Shirt,
  },
  {
    id: 2,
    name: 'STREET WEAR',
    image: 'https://images.pexels.com/photos/5560269/pexels-photo-5560269.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-red-700 to-pink-700',
    icon: ShoppingBag,
  },
  {
    id: 3,
    name: 'DARK COLLECTION',
    image: 'https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-slate-800 to-cyan-900',
    icon: Zap,
  },
  {
    id: 4,
    name: 'GOLD EDITION',
    image: 'https://images.pexels.com/photos/7148419/pexels-photo-7148419.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-yellow-700 to-orange-800',
    icon: Crown,
  },
];

function ProductGrid() {
  return (
    <div className="relative py-8 md:py-12 lg:py-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-7xl mx-auto h-auto md:h-[800px]">
        {/* Left Column - 2 stacked images */}
        <div className="grid grid-rows-2 gap-3 sm:gap-4">
          <div className="h-64 sm:h-80 md:h-full">
            <ProductCard key={products[0].id} product={products[0]} />
          </div>
          <div className="h-64 sm:h-80 md:h-full">
            <ProductCard key={products[1].id} product={products[1]} />
          </div>
        </div>

        {/* Center Column - 1 tall image */}
        <div className="h-64 sm:h-80 md:h-full sm:col-span-2 md:col-span-1">
          <ProductCard key={products[2].id} product={products[2]} />
        </div>

        {/* Right Column - 3 stacked images */}
        <div className="grid grid-rows-3 gap-3 sm:gap-4 sm:col-span-2 md:col-span-1">
          <div className="h-64 sm:h-80 md:h-full">
            <ProductCard key={products[3].id} product={products[3]} />
          </div>
          <div className="h-64 sm:h-80 md:h-full">
            <ProductCard key={products[0].id} product={products[0]} />
          </div>
          <div className="h-64 sm:h-80 md:h-full">
            <ProductCard key={products[1].id} product={products[1]} />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 sm:mt-8 md:mt-12">
        <button className="px-6 sm:px-8 md:px-16 py-2 sm:py-3 md:py-4 bg-white text-black text-xs sm:text-sm md:text-lg font-bold tracking-widest hover:bg-gray-200 transition-colors">
          SEE MORE
        </button>
      </div>

      <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 hidden lg:block">
        <div className="w-64 h-0.5 bg-white opacity-30"></div>
      </div>
    </div>
  );
}

export default ProductGrid;
