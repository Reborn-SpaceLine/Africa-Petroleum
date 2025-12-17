import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import logoImage from '../assets/logo.webp';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
                <a href="#" className="footer-social-link" aria-label="Facebook">
                    <Facebook size={20} />
                </a>
                <a href="#" className="footer-social-link" aria-label="WhatsApp">
                    <MessageCircle size={20} />
                </a>
                <a href="#" className="footer-social-link" aria-label="Instagram">
                    <Instagram size={20} />
                </a>
              </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })}>Accueil</button></li>
              <li><button onClick={() => document.getElementById('prix')?.scrollIntoView({ behavior: 'smooth' })}>Prix Carburants</button></li>
              <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Services</button></li>
              <li><button onClick={() => document.getElementById('apropos')?.scrollIntoView({ behavior: 'smooth' })}>À Propos</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#">Vente de Carburants</a></li>
              <li><a href="#">Lavage Auto</a></li>
              <li><a href="#">Vidange Express</a></li>
              <li><a href="#">Boutique Station</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact</h4>
            <div className="contact-info-footer">
              <MapPin size={16} className="contact-icon-svg" />
              <span>Bafoussam, Douala, Yaoundé</span>
            </div>
            <div className="contact-info-footer">
              <Phone size={16} className="contact-icon-svg" />
              <span>+237 6 96 44 99 08</span>
            </div>
            <div className="contact-info-footer">
              <Mail size={16} className="contact-icon-svg" />
              <span>contact@africapetroleum.cm</span>
            </div>
            <div className="contact-info-footer">
              <Clock size={16} className="contact-icon-svg" />
              <span>Ouvert 24h/24 - 7j/7</span>
            </div>
          </div>
      </div>
      
      <div className="footer-copyright">
        <p>
           
          <a href="https://www.oicpole.com" target="_blank" rel="noopener noreferrer"> © {currentYear} Ocean Innovation Center (OIC). Tous droits réservés.</a> | 
          {/* <a href="https://www.oicpole.com" target="_blank" rel="noopener noreferrer"> OIC</a> |  */}
          <a href="#" target="_blank" rel="noopener noreferrer"> Politique de Confidentialité</a> | 
          <a href="#" target="_blank" rel="noopener noreferrer"> Conditions d'Utilisation</a>
        </p>
      </div>
    </footer>
  );
}
