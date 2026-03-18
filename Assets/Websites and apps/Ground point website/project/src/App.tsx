import { useState } from 'react';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-black">
      {currentPage === 'home' && (
        <>
          <Hero onNavigate={setCurrentPage} />
          <ProductGrid />
        </>
      )}
      {currentPage === 'about' && <About onNavigate={setCurrentPage} />}
      {currentPage === 'services' && <Services onNavigate={setCurrentPage} />}
      {currentPage === 'contact us' && <Contact onNavigate={setCurrentPage} />}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
