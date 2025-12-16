import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import '../styles/Header.css';

interface HeaderProps {
  onRestaurantClick: () => void;
  onPiscineClick: () => void;
  onNewsClick: () => void;
  onBoutiqueClick: () => void;
  onPrixClick: () => void;
  onExchangeRatesClick: () => void;
  onCareerClick: () => void;
  onMapClick: () => void;
}

type Page = 'home' | 'restaurant' | 'piscine' | 'news' | 'boutique' | 'prix' | 'exchangeRates'| 'career';

interface HeaderWithPageProps extends HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Header({
  onRestaurantClick,
  onPiscineClick,
  onNewsClick,
  onBoutiqueClick,
  onPrixClick,
  onExchangeRatesClick,
  onCareerClick,
  onMapClick,
  currentPage,
  setCurrentPage
}: HeaderWithPageProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement | null>(null);

  // Ombre du header au scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fermer dropdown si click en dehors
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
    closeAll();
  };

  const goToSectionFromAnyPage = (id: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home'); // revenir à la page Home
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    closeAll();
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">

            {/* LOGO */}
            <div className="logo">
              <img
                src="/src/assets/logo.webp"
                alt="Africa Petroleum"
                className="logo-img"
              />
              <div className="logo-text">
                <span className="logo-name">AFRICA PETROLEUM</span>
                <span className="logo-tagline">Carburants & Services</span>
              </div>
            </div>

            {/* HAMBURGER */}
            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => {
                setIsMobileMenuOpen(prev => !prev);
                setIsServicesOpen(false);
              }}
            >
              <span />
              <span />
              <span />
            </button>

            {/* NAV */}
            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
              <button
                className="nav-link"
                onClick={() => goToSectionFromAnyPage('accueil')}
              >
                Accueil
              </button>

              <button
                className="nav-link"
                onClick={() => goToSectionFromAnyPage('apropos')}
              >
                A propos
              </button>

              <button className="nav-link" onClick={() => { onNewsClick(); closeAll(); }}>
                Actualités
              </button>

              {/* SERVICES DROPDOWN */}
              <div className="nav-dropdown" ref={servicesRef}>
                <button
                  className="nav-link nav-dropdown-toggle"
                  onClick={() => setIsServicesOpen(prev => !prev)}
                >
                  Services
                  <ChevronDown size={16} className={`dropdown-arrow ${isServicesOpen ? 'rotated' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="nav-dropdown-menu">
                    <button className="dropdown-item" onClick={() => { onRestaurantClick(); closeAll(); }}>
                      Restaurant
                    </button>
                    <button className="dropdown-item" onClick={() => { onPiscineClick(); closeAll(); }}>
                      Piscine
                    </button>
                    <button className="dropdown-item" onClick={() => { onBoutiqueClick(); closeAll(); }}>
                      Boutique
                    </button>
                    <button className="dropdown-item" onClick={() => { onPrixClick(); closeAll(); }}>
                      Prix carburant
                    </button>
                    <button className="dropdown-item" onClick={() => { onExchangeRatesClick(); closeAll(); }}>
                      Taux de change
                    </button>
                  </div>
                )}
              </div>

                
              <button className="nav-link" onClick={() => { onCareerClick(); closeAll(); }}>
                offres d'emploi
              </button>

              <button className="nav-link nav-link-cta" onClick={() => { onMapClick(); closeAll(); }}>
                Nos stations
              </button>

              <button
                className="nav-link nav-link-cta outline"
                onClick={() => goToSectionFromAnyPage('contact')}
              >
                Contact
              </button>

            </nav>
          </div>
        </div>
      </header>

      {/* OVERLAY MOBILE */}
      {isMobileMenuOpen && <div className="mobile-overlay" onClick={closeAll} />}
    </>
  );
}
