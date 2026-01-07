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
import Map from './components/Map';
import JobDetail from './components/JobDetail';

type Page =
  | 'home'
  | 'restaurant'
  | 'piscine'
  | 'news'
  | 'prix'
  | 'career'
  | 'boutique'
  | 'exchangeRates'
  | 'map';

/**
 * Système de routing basé sur le hash de l'URL
 * Permet la navigation via l'URL (ex: #map, #restaurant, etc.)
 * et le partage de liens directs vers une page
 */

/**
 * Fonction utilitaire pour obtenir la page depuis le hash de l'URL
 * Supporte plusieurs alias pour chaque page pour plus de flexibilité
 */
const getPageFromHash = (): Page => {
  const hash = window.location.hash.replace('#', '');
  
  // Mapping des hash vers les pages
  const hashToPage: Record<string, Page> = {
    '': 'home',
    'home': 'home',
    'accueil': 'home',
    'restaurant': 'restaurant',
    'piscine': 'piscine',
    'news': 'news',
    'actualites': 'news',
    'boutique': 'boutique',
    'prix': 'prix',
    'prix-carburant': 'prix',
    'career': 'career',
    'carrier': 'career',
    'emploi': 'career',
    'offres-emploi': 'career',
    'offres-d-emploi': 'career',
    'exchangeRates': 'exchangeRates',
    'taux-change': 'exchangeRates',
    'map': 'map',
    'stations': 'map',
    'nos-stations': 'map'
  };
  
  return hashToPage[hash] || 'home';
};

/**
 * Fonction pour mettre à jour l'URL avec le hash correspondant à la page
 */
const updateUrlHash = (page: Page) => {
  const pageToHash: Record<Page, string> = {
    'home': '',
    'restaurant': 'restaurant',
    'piscine': 'piscine',
    'news': 'news',
    'boutique': 'boutique',
    'prix': 'prix',
    'career': 'career',
    'exchangeRates': 'exchangeRates',
    'map': 'map'
  };
  
  const hash = pageToHash[page] || '';
  
  // Mettre à jour l'URL sans recharger la page
  if (hash) {
    window.location.hash = hash;
  } else {
    // Pour la page home, on peut soit enlever le hash, soit le laisser vide
    window.history.replaceState(null, '', window.location.pathname);
  }
};

export default function App() {
  // Initialiser la page depuis l'URL au chargement
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const page = getPageFromHash();
    console.log('Initial page from URL:', page, 'Hash:', window.location.hash);
    return page;
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Écouter les changements de hash dans l'URL (navigation via URL)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const pageFromUrl = getPageFromHash();
      console.log('Hash changed:', hash, 'Page:', pageFromUrl);
      
      // Si c'est une page différente, changer de page
      if (pageFromUrl !== currentPage) {
        console.log('Changing page to:', pageFromUrl);
        setCurrentPage(pageFromUrl);
      } 
      // Si on est sur home et que le hash correspond à une section, scroller vers cette section
      else if (pageFromUrl === 'home' && hash) {
        const sections = ['accueil', 'apropos', 'services', 'contact'];
        if (sections.includes(hash)) {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
              const headerHeight = 80;
              const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - headerHeight;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 300);
        }
      }
    };

    // Écouter les changements de hash
    window.addEventListener('hashchange', handleHashChange);
    
    // Vérifier aussi au chargement initial avec un délai pour s'assurer que le DOM est prêt
    setTimeout(() => {
      const initialPage = getPageFromHash();
      console.log('Checking initial page on mount:', initialPage, 'Current:', currentPage);
      if (initialPage !== currentPage) {
        console.log('Setting initial page to:', initialPage);
        setCurrentPage(initialPage);
      } else if (initialPage === 'home') {
        // Si on est sur home, vérifier s'il y a un hash de section
        const hash = window.location.hash.replace('#', '');
        const sections = ['accueil', 'apropos', 'services', 'contact'];
        if (sections.includes(hash)) {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
              const headerHeight = 80;
              const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - headerHeight;
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 500);
        }
      }
    }, 100);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [currentPage]);

  // Gérer l'affichage du bouton scroll to top
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroller vers le haut quand on change de page (sauf pour home)
  useEffect(() => {
    if (currentPage !== 'home') {
      // Petit délai pour laisser le temps à la page de se charger
      // Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
      requestAnimationFrame(() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          // Forcer un resize pour les composants qui en ont besoin (comme la carte)
          window.dispatchEvent(new Event('resize'));
        }, 150);
      });
    }
  }, [currentPage]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleJobDetail = (jobId: number) => {
    setSelectedJobId(jobId);
    setCurrentPage('career');
    setShowApplicationForm(false);
  };

  const handleBackToCareer = () => {
    setSelectedJobId(null);
    setShowApplicationForm(false);
  };

  const handleApplyFromDetail = (job: any) => {
    setShowApplicationForm(true);
    setSelectedJobId(job.id);
  };

  const renderPage = () => {
    // Si une offre est sélectionnée, afficher la page de détails
    if (selectedJobId !== null && currentPage === 'career' && !showApplicationForm) {
      return (
        <JobDetail 
          jobId={selectedJobId} 
          onBack={handleBackToCareer}
          onApply={handleApplyFromDetail}
          onOpenForm={handleApplyFromDetail}
        />
      );
    }

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
        return (
          <Career 
            onJobClick={handleJobDetail} 
            selectedJobIdForForm={showApplicationForm ? selectedJobId : null}
            onCloseForm={() => {
              setShowApplicationForm(false);
              setSelectedJobId(null);
            }}
          />
        );
      case 'map':
        return <Map />;
      default:
        console.log('Default case, currentPage:', currentPage);
        return <Hero />;
    }
  };

  // Fonction wrapper pour setCurrentPage qui met aussi à jour l'URL
  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    updateUrlHash(page);
  };

  return (
    <div className="app">
      <Header
        currentPage={currentPage}       
        setCurrentPage={navigateToPage}
        onRestaurantClick={() => navigateToPage('restaurant')}
        onPiscineClick={() => navigateToPage('piscine')}
        onNewsClick={() => navigateToPage('news')}
        onCareerClick={() => navigateToPage('career')}
        onBoutiqueClick={() => navigateToPage('boutique')}
        onPrixClick={() => navigateToPage('prix')}
        onExchangeRatesClick={() => navigateToPage('exchangeRates')}
        onMapClick={() => navigateToPage('map')}
      />

      <main className="page">{renderPage()}</main>

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
