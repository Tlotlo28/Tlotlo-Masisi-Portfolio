interface AboutProps {
  onNavigate: (page: string) => void;
}

function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <button onClick={() => onNavigate('home')} className="mb-12 text-gray-400 hover:text-white transition-colors">
          ← BACK HOME
        </button>
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-8">ABOUT US</h1>
          <div className="w-12 h-1 bg-gradient-to-r from-white to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div
            className="h-96 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800)',
            }}
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">OUR STORY</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Ground Point started from the streets with a simple mission: to create authentic urban clothing that tells a story. We believe in the power of design that speaks volumes without saying a word.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Every piece in our collection is carefully crafted to blend urban aesthetics with premium quality. We're not just selling clothes; we're building a movement that celebrates individuality, creativity, and street culture.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="text-5xl font-bold mb-4">100%</div>
            <h3 className="text-xl font-bold mb-3 tracking-wide">AUTHENTIC</h3>
            <p className="text-gray-400">All our designs are original and inspired by real street culture.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="text-5xl font-bold mb-4">PREMIUM</div>
            <h3 className="text-xl font-bold mb-3 tracking-wide">QUALITY</h3>
            <p className="text-gray-400">We use only the finest materials for durability and comfort.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors">
            <div className="text-5xl font-bold mb-4">GLOBAL</div>
            <h3 className="text-xl font-bold mb-3 tracking-wide">COMMUNITY</h3>
            <p className="text-gray-400">We're building a worldwide movement of urban fashion lovers.</p>
          </div>
        </div>

        <div className="bg-gray-900 p-12 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">OUR VISION</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            To become the leading urban fashion brand that empowers individuals to express themselves through authentic, high-quality streetwear. We envision a world where fashion is a form of rebellion and self-expression, and where every piece tells a unique story.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
