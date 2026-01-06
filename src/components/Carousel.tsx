import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Image } from 'lucide-react';
import '../styles/Carousel.css';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  link?: string;
}

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const items: CarouselItem[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
      title: 'Carburants de Qualité',
      description: 'Des carburants premium pour tous vos besoins automobiles'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
      title: 'Service Professionnel',
      description: 'Une équipe dévouée à votre service 24h/24 et 7j/7'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80',
      title: 'Installations Modernes',
      description: 'Des équipements de pointe pour votre confort'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80',
      title: 'Services Complets',
      description: 'Carburant, boutique, restaurant et bien plus encore'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-header">
          <div className="section-badge">
            <Image />
            <span>Galerie</span>
          </div>
        </div>
        <div className="carousel-wrapper">
          <div 
            className="carousel-slides"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item) => (
              <div key={item.id} className="carousel-slide">
                <div className="carousel-image-wrapper">
                  <img src={item.image} alt={item.title} className="carousel-image" />
                  <div className="carousel-overlay"></div>
                </div>
                <div className="carousel-content">
                  <h2 className="carousel-title">{item.title}</h2>
                  <p className="carousel-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button 
            className="carousel-button carousel-button-prev"
            onClick={goToPrevious}
            aria-label="Slide précédent"
          >
            <ChevronLeft />
          </button>
          <button 
            className="carousel-button carousel-button-next"
            onClick={goToNext}
            aria-label="Slide suivant"
          >
            <ChevronRight />
          </button>

          {/* Indicators */}
          <div className="carousel-indicators">
            {items.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

