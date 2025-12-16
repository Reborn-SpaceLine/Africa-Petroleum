import { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FuelPrices from './components/FuelPrices';
import Services from './components/Services';
import ExchangeRates from './components/ExchangeRates';
import About from './components/About';
import Contact from './components/Contact';
import Piscine from './components/Piscine';
import Restaurant from './components/Restaurant';
import News from './components/News';
import Career from './components/Career';
import Boutique from './components/Boutique';

type Page =
  | 'home'
  | 'restaurant'
  | 'piscine'
  | 'news'
  | 'prix'
  | 'career'
  | 'boutique'
  | 'exchangeRates';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <About />
            <Services />
            <Contact />
          </>
        );
      case 'restaurant':
        return <Restaurant />;
      case 'piscine':
        return <Piscine />;
      case 'news':
        return <News />;
      case 'boutique':
        return <Boutique />;
      case 'exchangeRates':
        return <ExchangeRates />;    
      case 'prix':
        return <FuelPrices />;
      case 'career':
        return <Career />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="app">
      <Header
        currentPage={currentPage}       
        setCurrentPage={setCurrentPage}
        onRestaurantClick={() => setCurrentPage('restaurant')}
        onPiscineClick={() => setCurrentPage('piscine')}
        onNewsClick={() => setCurrentPage('news')}
        onCareerClick={() => setCurrentPage('career')}
        onBoutiqueClick={() => setCurrentPage('boutique')}
        onPrixClick={() => setCurrentPage('prix')}
        onExchangeRatesClick={() => setCurrentPage('exchangeRates')}
        onMapClick={() => setCurrentPage('home')}
      />

      <main>{renderPage()}</main>

      <Footer />

      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Retour au haut"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
