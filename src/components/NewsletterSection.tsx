import { Sparkles, Bell, TrendingUp } from 'lucide-react';
import Newsletter from './Newsletter';
import '../styles/NewsletterSection.css';

export default function NewsletterSection() {
  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-section-bg-elements">
        <div className="newsletter-bg-circle newsletter-bg-circle-1"></div>
        <div className="newsletter-bg-circle newsletter-bg-circle-2"></div>
        <div className="newsletter-bg-circle newsletter-bg-circle-3"></div>
      </div>
      <div className="container">
        <div className="newsletter-section-content">
          <div className="newsletter-section-text">
            <div className="newsletter-badge">
              <Bell size={16} />
              <span>Newsletter</span>
            </div>
            <h2 className="newsletter-section-title">
              Ne manquez aucune <span className="highlight">actualité</span>
            </h2>
            <p className="newsletter-section-description">
              Inscrivez-vous à notre newsletter pour recevoir en exclusivité nos dernières promotions, 
              actualités et événements directement dans votre boîte mail.
            </p>
            <div className="newsletter-benefits">
              <div className="newsletter-benefit-item">
                <TrendingUp size={18} />
                <span>Promotions exclusives</span>
              </div>
              <div className="newsletter-benefit-item">
                <Sparkles size={18} />
                <span>Actualités en avant-première</span>
              </div>
              <div className="newsletter-benefit-item">
                <Bell size={18} />
                <span>Événements et nouveautés</span>
              </div>
            </div>
          </div>
          <div className="newsletter-section-form">
            <Newsletter />
          </div>
        </div>
      </div>
    </section>
  );
}

