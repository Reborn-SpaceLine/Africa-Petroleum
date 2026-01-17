import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import logoImage from '../assets/logo.webp';
import '../styles/portrait/Header.css';

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

type Page = 'home' | 'restaurant' | 'piscine' | 'news' | 'boutique' | 'prix' | 'exchangeRates' | 'career' | 'map';

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

  const closeAll = useCallback(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, []);

  /**
   * Naviguer vers une section depuis n'importe quelle page
   * @param id - L'ID de la section à atteindre
   */
  const goToSectionFromAnyPage = (id: string) => {
    // Si on n'est pas sur la page d'accueil, on y retourne d'abord
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Mettre à jour l'URL avec le hash de la section
      setTimeout(() => {
        window.location.hash = id;
        scrollToSection(id);
      }, 300);
    } else {
      // Si on est déjà sur la page d'accueil, scroller directement
      // Mettre à jour l'URL avec le hash de la section
      window.location.hash = id;
      scrollToSection(id);
    }
    closeAll();
  };

  /**
   * Scroller vers une section spécifique
   * @param id - L'ID de la section
   */
  const scrollToSection = (id: string) => {
    // Essayer plusieurs fois si l'élément n'est pas encore disponible
    let attempts = 0;
    const maxAttempts = 10;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        // Calculer la position en tenant compte du header fixe
        const headerHeight = 80;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };

    tryScroll();
  };

  /**
   * Retourner à l'accueil et scroller vers le haut
   */
  const goToHome = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeAll();
  };

  /**
   * Naviguer vers la page Map (Nos stations)
   * Fonction dédiée pour garantir que la navigation fonctionne toujours
   * Version simplifiée et robuste
   */
  const handleMapNavigation = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    // Empêcher tout comportement par défaut et la propagation
    e.preventDefault();
    e.stopPropagation();

    // Fermer les menus immédiatement (important pour mobile)
    closeAll();

    // Forcer le scroll vers le haut immédiatement (sans animation)
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Navigation : utiliser à la fois setCurrentPage ET le callback
    // pour double sécurité
    setCurrentPage('map');
    onMapClick();

    // Fallback : forcer une nouvelle fois après un court délai
    // pour s'assurer que React a bien traité la mise à jour
    setTimeout(() => {
      setCurrentPage('map');
    }, 10);
  }, [setCurrentPage, onMapClick, closeAll]);

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">

            {/* LOGO */}
            <div className="logo" onClick={goToHome} style={{ cursor: 'pointer' }}>
              <img
                src={logoImage}
                alt="Africa Petroleum"
                className="logo-img"
              />
              <div className="logo-text">
                <span className="logo-name">AFRICA PETROLEUM</span>
                <span className="logo-tagline">Carburants & Services</span>
              </div>
            </div>

            {/* BOUTON NOS STATIONS (visible sur mobile, à gauche du menu) */}
            <button
              className="mobile-stations-btn"
              onClick={handleMapNavigation}
              onMouseDown={(e) => e.preventDefault()}
              type="button"
              aria-label="Voir nos stations"
            >
              Nos stations
            </button>

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
                À propos
              </button>

              {/* SERVICES DROPDOWN */}
              <div className="nav-dropdown" ref={servicesRef}>
                <button
                  className="nav-link nav-dropdown-toggle"
                  onClick={() => setIsServicesOpen(prev => !prev)}
                >
                  Services
                  <ChevronDown className={`dropdown-arrow ${isServicesOpen ? 'rotated' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="nav-dropdown-menu">
                    <button className="dropdown-item" onClick={() => { goToSectionFromAnyPage('services'); closeAll(); }}>
                      Nos Services
                    </button>
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

              <button className="nav-link" onClick={() => { onNewsClick(); closeAll(); }}>
                Actualités
              </button>

              <button className="nav-link" onClick={() => { onCareerClick(); closeAll(); }}>
                Offres d'emploi
              </button>

              <button
                className="nav-link nav-link-cta desktop-stations-btn"
                onClick={handleMapNavigation}
                onMouseDown={(e) => e.preventDefault()}
                type="button"
                aria-label="Voir nos stations sur la carte"
              >
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
      {isMobileMenuOpen && <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeAll} />}
    </>
  );
}
