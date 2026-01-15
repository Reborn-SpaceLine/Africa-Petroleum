import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import logoImage from '../assets/logo.webp';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Fonction de navigation vers une page
  const navigateToPage = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = page;
    // Déclencher un événement hashchange pour que l'app réagisse
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  // Navigation vers la section contact sur la page d'accueil
  const navigateToContact = () => {
    if (window.location.hash === '' || window.location.hash === '#home' || window.location.hash === '#accueil') {
      // Si on est déjà sur la page d'accueil, scroll vers contact
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Sinon, aller à la page d'accueil puis scroll vers contact
      navigateToPage('');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <img
                src={logoImage}
                alt="Africa Petroleum"
                className="logo-img"
              />
              <div className="logo-text">
                <span className="footer-logo-name">AFRICA PETROLEUM</span>
                <span className="logo-tagline">Carburants & Services</span>
              </div>
            </div>
            <p className="footer-description">
              Votre station-service de confiance au cœur de vos activités. 
              Carburants de qualité et service professionnel depuis plus de 12 ans.
            </p>
            <div className="footer-social-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                    <Facebook size={18} strokeWidth={2.5} />
                </a>
                <a href="https://wa.me/237696449908" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">
                    <MessageCircle size={18} strokeWidth={2.5} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                    <Instagram size={18} strokeWidth={2.5} />
                </a>
              </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => navigateToPage('')}>Accueil</button></li>
              <li><button onClick={() => navigateToPage('prix')}>Prix Carburants</button></li>
              <li><button onClick={() => navigateToPage('map')}>Nos Stations</button></li>
              <li><button onClick={() => navigateToPage('career')}>Offres d'Emploi</button></li>
              <li><button onClick={navigateToContact}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><button onClick={() => navigateToPage('prix')}>Vente de Carburants</button></li>
              <li><button onClick={() => navigateToPage('restaurant')}>Restaurant</button></li>
              <li><button onClick={() => navigateToPage('piscine')}>Piscine</button></li>
              <li><button onClick={() => navigateToPage('boutique')}>Boutique</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <div className="contact-info-footer">
              <MapPin size={16} strokeWidth={2.5} className="contact-icon-svg" />
              <span>Bafoussam, Douala, Yaoundé</span>
            </div>
            <div className="contact-info-footer">
              <Phone size={16} strokeWidth={2.5} className="contact-icon-svg" />
              <a href="tel:+237696449908" className="contact-link">+237 6 96 44 99 08</a>
            </div>
            <div className="contact-info-footer">
              <Mail size={16} strokeWidth={2.5} className="contact-icon-svg" />
              <a href="mailto:contact@africapetroleum.cm" className="contact-link">contact@africapetroleum.cm</a>
            </div>
            <div className="contact-info-footer">
              <Clock size={16} strokeWidth={2.5} className="contact-icon-svg" />
              <span>Ouvert 24h/24 - 7j/7</span>
            </div>
          </div>
      </div>
      
      <div className="footer-copyright">
        <div className="footer-copyright-content">
          <div className="footer-copyright-text">
            <span className="copyright-symbol">©</span>
            <span className="copyright-year">{currentYear}</span>
            <a 
              href="https://www.oicpole.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="copyright-link"
            >
              Ocean Innovation Center (OIC)
            </a>
            <span className="copyright-rights">Tous droits réservés.</span>
          </div>
          <div className="footer-legal-links">
            <button 
              onClick={() => navigateToPage('mentions-legales')} 
              className="footer-link-btn"
              aria-label="Mentions légales"
            >
              Mentions Légales
            </button>
            <span className="separator">|</span>
            <button 
              onClick={() => navigateToPage('politique-de-confidentialite')} 
              className="footer-link-btn"
              aria-label="Politique de confidentialité"
            >
              Politique de Confidentialité
            </button>
            <span className="separator">|</span>
            <button 
              onClick={() => navigateToPage('cgu')} 
              className="footer-link-btn"
              aria-label="Conditions d'utilisation"
            >
              Conditions d'Utilisation
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
