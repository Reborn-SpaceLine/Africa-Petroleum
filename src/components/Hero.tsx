import { ArrowRight, Fuel, Car, Clock, ShoppingCart } from 'lucide-react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-background">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Africa Petroleum
            <br />
            <span className="hero-subtitle"> Votre Station-Service de Confiance</span>
          </h1>
          <p className="hero-description">
            Votre station-service de confiance pour tous vos besoins automobiles.
            Carburants de qualité, service professionnel et prix compétitifs 24/7.
          </p>
          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Découvrir nos services
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-showcase">
            <div className="showcase-item">
              <Fuel className="showcase-icon" />
              <h3>Carburants Premium</h3>
              <p>Essence et gasoil de qualité supérieure</p>
            </div>
            <div className="showcase-item">
              <Car className="showcase-icon" />
              <h3>Service Auto</h3>
              <p>Entretien et réparation automobile</p>
            </div>
            <div className="showcase-item">
              <Clock className="showcase-icon" />
              <h3>Ouvert 24/7</h3>
              <p>Service continu pour votre confort</p>
            </div>
            <div className="showcase-item">
              <ShoppingCart className="showcase-icon" />
              <h3>Boutique</h3>
              <p>Produits et accessoires pour votre véhicule</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
