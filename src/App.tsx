import { useState, useEffect } from 'react';
import './styles/App.css';
import './styles/Icons.css';
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
import NewsletterPopup from './components/NewsletterPopup';
import Legal from './components/Legal';

type Page =
  | 'home'
  | 'restaurant'
  | 'piscine'
  | 'news'
  | 'prix'
  | 'career'
  | 'boutique'
  | 'exchangeRates'
  | 'map'
  | 'jobDetail'
  | 'mentions'
  | 'confidentialite'
  | 'cgu';

/**
 * Système de routing basé sur le hash de l'URL
 * Permet la navigation via l'URL (ex: #map, #restaurant, etc.)
 * et le partage de liens directs vers une page
 */

/**
 * Fonction pour créer un slug à partir d'un titre
 */
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
    .replace(/[^a-z0-9\s-]/g, '') // Supprimer les caractères spéciaux
    .trim()
    .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
    .replace(/-+/g, '-'); // Remplacer les tirets multiples par un seul
};

/**
 * Fonction utilitaire pour obtenir la page depuis le hash de l'URL
 * Supporte plusieurs alias pour chaque page pour plus de flexibilité
 */
const getPageFromHash = (): { page: Page; jobSlug?: string } => {
  const hash = window.location.hash.replace('#', '');
  
  // Vérifier si c'est une route job-detail avec un slug
  const jobDetailMatch = hash.match(/^job-detail\/(.+)$/);
  if (jobDetailMatch) {
    return { page: 'jobDetail', jobSlug: jobDetailMatch[1] };
  }
  
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
    'nos-stations': 'map',
    'mentions-legales': 'mentions',
    'mentions': 'mentions',
    'politique-de-confidentialite': 'confidentialite',
    'confidentialite': 'confidentialite',
    'cgu': 'cgu',
    'conditions-generales': 'cgu'
  };
  
  return { page: hashToPage[hash] || 'home' };
};

/**
 * Fonction pour mettre à jour l'URL avec le hash correspondant à la page
 */
const updateUrlHash = (page: Page, jobSlug?: string) => {
  const pageToHash: Record<Page, string> = {
    'home': '',
    'restaurant': 'restaurant',
    'piscine': 'piscine',
    'news': 'news',
    'boutique': 'boutique',
    'prix': 'prix',
    'career': 'career',
    'exchangeRates': 'exchangeRates',
    'map': 'map',
    'jobDetail': jobSlug ? `job-detail/${jobSlug}` : 'career',
    'mentions': 'mentions-legales',
    'confidentialite': 'politique-de-confidentialite',
    'cgu': 'cgu'
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
    const { page } = getPageFromHash();
    console.log('Initial page from URL:', page, 'Hash:', window.location.hash);
    return page;
  });
  const [selectedJobSlug, setSelectedJobSlug] = useState<string | null>(() => {
    const { jobSlug } = getPageFromHash();
    return jobSlug || null;
  });
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);

  // Écouter les changements de hash dans l'URL (navigation via URL)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const { page: pageFromUrl, jobSlug: jobSlugFromUrl } = getPageFromHash();
      console.log('Hash changed:', hash, 'Page:', pageFromUrl, 'JobSlug:', jobSlugFromUrl);
      
      // Si c'est une page différente, changer de page
      if (pageFromUrl !== currentPage) {
        console.log('Changing page to:', pageFromUrl);
        setCurrentPage(pageFromUrl);
        if (jobSlugFromUrl) {
          setSelectedJobSlug(jobSlugFromUrl);
        } else if (pageFromUrl !== 'jobDetail') {
          setSelectedJobSlug(null);
        }
      } 
      // Si on change juste le slug du job dans jobDetail
      else if (pageFromUrl === 'jobDetail' && jobSlugFromUrl && jobSlugFromUrl !== selectedJobSlug) {
        setSelectedJobSlug(jobSlugFromUrl);
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
      const { page: initialPage, jobSlug: initialJobSlug } = getPageFromHash();
      console.log('Checking initial page on mount:', initialPage, 'Current:', currentPage, 'JobSlug:', initialJobSlug);
      if (initialPage !== currentPage) {
        console.log('Setting initial page to:', initialPage);
        setCurrentPage(initialPage);
        if (initialJobSlug) {
          setSelectedJobSlug(initialJobSlug);
        }
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

  // Afficher la pop-up newsletter après 3 secondes (une seule fois)
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('newsletter-popup-seen');
    if (!hasSeenPopup && !showNewsletterPopup) {
      const timer = setTimeout(() => {
        setShowNewsletterPopup(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNewsletterPopup]);

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

  const handleJobDetail = (jobId: number, jobTitle: string) => {
    const jobSlug = createSlug(jobTitle);
    setSelectedJobSlug(jobSlug);
    setSelectedJobId(jobId);
    setCurrentPage('jobDetail');
    setShowApplicationForm(false);
    updateUrlHash('jobDetail', jobSlug);
  };

  const handleBackToCareer = () => {
    setSelectedJobSlug(null);
    setSelectedJobId(null);
    setShowApplicationForm(false);
    setCurrentPage('career');
    updateUrlHash('career');
  };

  const handleApplyFromDetail = (job: any) => {
    setShowApplicationForm(true);
    setSelectedJobId(job.id);
    setSelectedJobSlug(null);
    setCurrentPage('career');
    updateUrlHash('career');
  };

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
      case 'mentions':
        return <Legal page="mentions" />;
      case 'confidentialite':
        return <Legal page="confidentialite" />;
      case 'cgu':
        return <Legal page="cgu" />;
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
      case 'jobDetail':
        if (selectedJobSlug) {
          return (
            <JobDetail 
              jobSlug={selectedJobSlug} 
              onBack={handleBackToCareer}
              onApply={handleApplyFromDetail}
              onOpenForm={handleApplyFromDetail}
            />
          );
        }
        // Si pas de jobSlug, rediriger vers career
        return <Career onJobClick={handleJobDetail} />;
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

      <NewsletterPopup 
        isOpen={showNewsletterPopup} 
        onClose={() => setShowNewsletterPopup(false)} 
      />

      <div className="floating-buttons">
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
        <button
          className="newsletter-button-floating"
          onClick={() => {
            localStorage.removeItem('newsletter-popup-seen');
            setShowNewsletterPopup(true);
          }}
          aria-label="S'inscrire à la newsletter"
          title="S'inscrire à la newsletter"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
