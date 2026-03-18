import { X, Plus, Minus, Truck } from 'lucide-react';
import { useState } from 'react';

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    image: string;
  };
  onClose: () => void;
}

const productDetails: Record<number, {
  price: number;
  stock: number;
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
}> = {
  1: {
    price: 1299.99,
    stock: 12,
    description: 'Premium urban hoodie crafted from 100% organic cotton. Features bold geometric prints and reinforced stitching for durability.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Gray', 'Charcoal'],
    rating: 4.8,
    reviews: 324,
  },
  2: {
    price: 1499.99,
    stock: 8,
    description: 'Street wear collection designed for the modern urban individual. Mix and match pieces that work together or standalone.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Red'],
    rating: 4.9,
    reviews: 218,
  },
  3: {
    price: 1699.99,
    stock: 5,
    description: 'Exclusive dark collection with moody tones and premium fabric. Limited edition piece for the true enthusiasts.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Deep Blue', 'Charcoal'],
    rating: 4.7,
    reviews: 156,
  },
  4: {
    price: 1899.99,
    stock: 15,
    description: 'Gold edition featuring signature branding and premium construction. Perfect for making a statement.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black & Gold', 'Gold', 'Tan'],
    rating: 5.0,
    reviews: 412,
  },
};

function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(0);

  const details = productDetails[product.id] || {
    price: 0,
    stock: 0,
    description: '',
    sizes: [],
    colors: [],
    rating: 0,
    reviews: 0,
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', { product: product.name, quantity, size: selectedSize, color: details.colors[selectedColor] });
    alert(`${quantity}x ${product.name} added to cart!`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 text-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg">
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 flex justify-between items-center p-6">
          <h2 className="text-2xl font-bold tracking-wide">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div
            className="h-96 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${product.image})` }}
          />

          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-gray-400">({details.reviews} reviews)</span>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">R {details.price.toFixed(2)}</div>
                <div className={`text-lg font-semibold ${details.stock > 10 ? 'text-green-400' : details.stock > 0 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {details.stock > 0 ? `${details.stock} in stock` : 'Out of stock'}
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {details.description}
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold tracking-widest mb-3">SIZE</label>
                  <div className="flex gap-2 flex-wrap">
                    {details.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 font-bold tracking-wide border-2 transition-all ${
                          selectedSize === size
                            ? 'bg-white text-black border-white'
                            : 'bg-transparent text-white border-gray-600 hover:border-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold tracking-widest mb-3">COLOR</label>
                  <div className="flex gap-3 flex-wrap">
                    {details.colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(idx)}
                        className={`px-4 py-2 font-bold tracking-wide border-2 transition-all ${
                          selectedColor === idx
                            ? 'bg-white text-black border-white'
                            : 'bg-gray-800 text-white border-gray-600 hover:border-white'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold tracking-widest mb-3">QUANTITY</label>
                  <div className="flex items-center border border-gray-600 w-fit">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-800 transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="px-6 font-bold text-lg">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(details.stock, quantity + 1))}
                      className="p-2 hover:bg-gray-800 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={details.stock === 0}
                className="w-full bg-white text-black font-bold py-3 tracking-widest hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ADD TO CART
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-800 text-white font-bold py-3 tracking-widest hover:bg-gray-700 transition-colors"
              >
                CLOSE
              </button>
              <div className="flex items-center justify-center text-gray-400 gap-2 pt-2">
                <Truck className="w-5 h-5" />
                <span>Free shipping on orders over R1500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
