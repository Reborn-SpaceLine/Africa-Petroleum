import { useState, useEffect } from 'react';
import { X, Sparkles, Bell, TrendingUp } from 'lucide-react';
import Newsletter from './Newsletter';
import '../styles/NewsletterPopup.css';

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const handleClose = () => {
    localStorage.setItem('newsletter-popup-seen', 'true');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="newsletter-popup-overlay" onClick={handleClose}>
      <div className="newsletter-popup" onClick={(e) => e.stopPropagation()}>
        <button className="newsletter-popup-close" onClick={handleClose} aria-label="Fermer">
          <X size={24} />
        </button>

        <div className="newsletter-popup-content">
          <div className="newsletter-popup-header">
            <div className="newsletter-popup-badge">
              <Bell size={18} />
              <span>Newsletter</span>
            </div>
            <h2 className="newsletter-popup-title">
              Ne manquez aucune <span className="highlight">actualité</span>
            </h2>
            <p className="newsletter-popup-description">
              Inscrivez-vous à notre newsletter pour recevoir en exclusivité nos dernières promotions,
              actualités et événements directement dans votre boîte mail.
            </p>
          </div>

          <div className="newsletter-popup-benefits">
            <div className="newsletter-popup-benefit-item">
              <TrendingUp size={20} />
              <span>Promotions exclusives</span>
            </div>
            <div className="newsletter-popup-benefit-item">
              <Sparkles size={20} />
              <span>Actualités en avant-première</span>
            </div>
            <div className="newsletter-popup-benefit-item">
              <Bell size={20} />
              <span>Événements et nouveautés</span>
            </div>
          </div>
          <Newsletter onSubscribeSuccess={handleClose} />
        </div>
      </div>
    </div>
  );
}

