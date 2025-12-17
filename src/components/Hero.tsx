import { ArrowRight, Fuel, Car, Clock, ShoppingCart, ShieldCheck } from 'lucide-react';
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
              <div className="showcase-text">
                <h2>Carburants Premium</h2>
                <p>Essence et gasoil de qualité supérieure</p>
              </div>
            </div>
            <div className="showcase-item">
              <Car className="showcase-icon" />
              <div className="showcase-text">
                <h2>Service Auto</h2>
                <p>Entretien et réparation automobile</p>
              </div>
            </div>
            <div className="showcase-item">
              <Clock className="showcase-icon" />
              <div className="showcase-text">
                <h2>Ouvert 24/7</h2>
                <p>Service continu pour votre confort</p>
              </div>
            </div>
            <div className="showcase-item">
              <ShoppingCart className="showcase-icon" />
              <div className="showcase-text">
                <h2>Boutique</h2>
                <p>Produits et accessoires pour votre véhicule</p>
              </div>
            </div>
            <div className="showcase-item">
              <ShieldCheck className="showcase-icon" />
              <div className="showcase-text">
                <h2>Sécurisés</h2>
                <p>Espace sécurisés pour votre confort et votre sécurité</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
