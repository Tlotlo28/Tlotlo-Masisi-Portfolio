import { Truck, Shield, RotateCcw, Headphones } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Truck,
      title: 'FAST SHIPPING',
      description: 'We ship worldwide with premium packaging. Track your order in real-time and receive your clothes within 5-7 business days.',
    },
    {
      icon: Shield,
      title: 'QUALITY GUARANTEE',
      description: 'Every piece is inspected for quality. We stand behind our products with a 100% satisfaction guarantee.',
    },
    {
      icon: RotateCcw,
      title: 'EASY RETURNS',
      description: 'Not happy with your purchase? Return it within 30 days for a full refund. No questions asked.',
    },
    {
      icon: Headphones,
      title: '24/7 SUPPORT',
      description: 'Our customer service team is always ready to help. Contact us anytime via chat, email, or phone.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <button onClick={() => onNavigate('home')} className="mb-12 text-gray-400 hover:text-white transition-colors">
          ← BACK HOME
        </button>
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-8">OUR SERVICES</h1>
          <div className="w-12 h-1 bg-gradient-to-r from-white to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <Icon className="w-16 h-16 mb-6 text-white group-hover:text-gray-300 transition-colors" />
                <h3 className="text-2xl font-bold mb-4 tracking-wide">{service.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-12 rounded-lg mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-wide">CUSTOM ORDERS</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Want something unique? We offer custom design services for bulk orders and special projects. Whether you're looking to create a limited edition collection or customize your own pieces, our design team is ready to bring your vision to life.
          </p>
          <button className="px-8 py-3 bg-white text-black font-bold tracking-widest hover:bg-gray-200 transition-colors">
            GET IN TOUCH
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className="h-96 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=800)',
            }}
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">WHY CHOOSE US</h2>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start">
                <span className="text-white mr-4 font-bold">•</span>
                <span>Authentic urban designs crafted with passion</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-4 font-bold">•</span>
                <span>Premium materials that last for years</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-4 font-bold">•</span>
                <span>Sustainable manufacturing practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-4 font-bold">•</span>
                <span>Fastest shipping in the industry</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-4 font-bold">•</span>
                <span>Exclusive drops and limited editions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
