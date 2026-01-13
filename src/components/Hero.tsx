import { ArrowRight, MapPin, Loader2 } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import '../styles/Hero.css';

// Import des images locales des stations
import stationImage1 from '../assets/images/stations/images.jpg';
import stationImage2 from '../assets/images/stations/téléchargement.jpg';
import stationImage3 from '../assets/images/stations/téléchargement(1).jpg';
import stationImage4 from '../assets/images/stations/téléchargement(2).jpg';
import stationImage5 from '../assets/images/stations/téléchargement(3).jpg';
import stationImage6 from '../assets/images/stations/téléchargement(4).jpg';
import stationImage7 from '../assets/images/stations/téléchargement(5).jpg';

// Configuration initiale des images de stations
const INITIAL_STATION_IMAGES = [
  {
    url: stationImage1,
    title: 'Station Douala',
    location: 'Douala, Cameroun'
  },
  {
    url: stationImage2,
    title: 'Station Yaoundé',
    location: 'Yaoundé, Cameroun'
  },
  {
    url: stationImage2,
    title: 'Station Yaoundé',
    location: 'Yaoundé, Cameroun'
  },
  {
    url: stationImage2,
    title: 'Station Yaoundé',
    location: 'Yaoundé, Cameroun'
  },
  {
    url: stationImage2,
    title: 'Station Yaoundé',
    location: 'Yaoundé, Cameroun'
  },
  {
    url: stationImage2,
    title: 'Station Yaoundé',
    location: 'Yaoundé, Cameroun'
  },
  {
    url: stationImage2,
    title: 'Station Yaoundé',
    location: 'Yaoundé, Cameroun'
  },
  {
    url: stationImage2,
    title: 'Station Yaoundé',
    location: 'Yaoundé, Cameroun'
  },
  {
    url: stationImage2,
    title: 'Station Yaoundé',
    location: 'Yaoundé, Cameroun'
  },
  {
    url: stationImage2,
    title: 'Station Yaoundé',
    location: 'Yaoundé, Cameroun'
  },
  {
    url: stationImage2,
    title: 'Station Yaoundé',
    location: 'Yaoundé, Cameroun'
  }
];

const SLIDE_INTERVAL = 5000; // 5 secondes
const IMAGE_LOAD_TIMEOUT = 10000; // 10 secondes max par image

interface StationImage {
  url: string;
  title: string;
  location: string;
}

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState<StationImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Fonction pour précharger une image
  const preloadImage = useCallback((imageUrl: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      const timeout = setTimeout(() => {
        resolve(false);
      }, IMAGE_LOAD_TIMEOUT);

      img.onload = () => {
        clearTimeout(timeout);
        resolve(true);
      };

      img.onerror = () => {
        clearTimeout(timeout);
        console.warn(`Image failed to load: ${imageUrl}`);
        resolve(false);
      };

      img.src = imageUrl;
    });
  }, []);

  // Préchargement de toutes les images
  useEffect(() => {
    let isMounted = true;

    const loadAllImages = async () => {
      setIsLoading(true);
      setLoadingProgress(0);

      const validImages: StationImage[] = [];
      const totalImages = INITIAL_STATION_IMAGES.length;

      for (let i = 0; i < INITIAL_STATION_IMAGES.length; i++) {
        const image = INITIAL_STATION_IMAGES[i];
        const loaded = await preloadImage(image.url);

        if (loaded && isMounted) {
          validImages.push(image);
        }

        if (isMounted) {
          setLoadingProgress(Math.round(((i + 1) / totalImages) * 100));
        }
      }

      if (isMounted) {
        setLoadedImages(validImages);
        setIsLoading(false);
        setLoadingProgress(100);

        // Si aucune image n'a été chargée, utiliser au moins la première
        if (validImages.length === 0 && INITIAL_STATION_IMAGES.length > 0) {
          console.warn('Aucune image chargée, utilisation de la première image par défaut');
          setLoadedImages([INITIAL_STATION_IMAGES[0]]);
        }
      }
    };

    loadAllImages();

    return () => {
      isMounted = false;
    };
  }, [preloadImage]);

  // Rotation automatique des images (seulement si des images sont chargées)
  useEffect(() => {
    if (isPaused || loadedImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % loadedImages.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, loadedImages.length]);

  const handleIndicatorClick = (index: number) => {
    if (index >= 0 && index < loadedImages.length) {
      setCurrentImageIndex(index);
      setIsPaused(true);
      // Reprendre après 10 secondes
      setTimeout(() => setIsPaused(false), 10000);
    }
  };

  // Afficher le loader pendant le chargement
  if (isLoading) {
    return (
      <section className="hero hero-loading" id="accueil">
        <div className="hero-loader">
          <Loader2 className="loader-icon" size={48} />
          <p className="loader-text">Chargement des images...</p>
          <div className="loader-progress">
            <div 
              className="loader-progress-bar" 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="loader-percentage">{loadingProgress}%</p>
        </div>
      </section>
    );
  }

  // Ne rien afficher si aucune image n'est chargée
  if (loadedImages.length === 0) {
    return (
      <section className="hero" id="accueil">
        <div className="hero-error">
          <p>Aucune image disponible</p>
        </div>
      </section>
    );
  }

  return (
    <section className="hero" id="accueil">
      {/* Carrousel d'images */}
      <div 
        className="hero-slider"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {loadedImages.map((image, index) => (
          <div
            key={`station-${index}`}
            className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.url})` }}
            aria-hidden={index !== currentImageIndex}
          >
            <div className="hero-slide-overlay">
              <div className="hero-slide-info">
                <MapPin size={24} aria-hidden="true" />
                <div>
                  <h3>{image.title}</h3>
                  <p>{image.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay général */}
      <div className="hero-overlay" aria-hidden="true"></div>

      {/* Indicateurs */}
      {loadedImages.length > 1 && (
        <div className="hero-indicators" role="tablist" aria-label="Carrousel de stations">
          {loadedImages.map((image, index) => (
            <button
              key={`indicator-${index}`}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`Afficher ${image.title}`}
              aria-selected={index === currentImageIndex}
              role="tab"
            />
          ))}
        </div>
      )}

      {/* Contenu principal */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-title-main">Africa Petroleum</span>
            <span className="hero-subtitle">Votre Réseau de Stations-Service de Confiance au Cameroun</span>
          </h1>
          <p className="hero-description">
            Découvrez notre réseau de stations-service modernes réparties dans les principales villes du Cameroun. 
            Carburants de qualité supérieure, services complets et disponibilité 24h/24 pour répondre à tous vos besoins.
          </p>
          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => {
                window.location.hash = 'map';
              }}
              aria-label="Trouver une station sur la carte"
            >
              Trouver une station
              <ArrowRight size={20} aria-hidden="true" />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Découvrir nos services"
            >
              Découvrir nos services
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

