import { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import '../styles/Newsletter.css';

interface NewsletterProps {
  onSubscribeSuccess?: () => void;
}

export default function Newsletter({ onSubscribeSuccess }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Veuillez entrer votre adresse email');
      return;
    }

    if (!validateEmail(email)) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simuler l'envoi (à remplacer par un appel API réel)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
      
      // Appeler le callback de succès si fourni
      if (onSubscribeSuccess) {
        // Attendre 2 secondes pour afficher le message de succès, puis fermer
        setTimeout(() => {
          onSubscribeSuccess();
        }, 2000);
      } else {
        // Réinitialiser le message après 5 secondes si pas de callback
        setTimeout(() => {
          setIsSubscribed(false);
        }, 5000);
      }
    }, 1500);
  };

  return (
    <div className="newsletter">
      {!isSubscribed ? (
        <>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className={`newsletter-input-group ${isFocused ? 'focused' : ''} ${error ? 'error' : ''}`}>
              <div className="newsletter-input-wrapper">
                <Mail size={18} className="newsletter-input-icon" />
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Entrez votre email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  required
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                className="newsletter-button"
                disabled={isLoading || !email}
              >
                {isLoading ? (
                  <span className="newsletter-spinner"></span>
                ) : (
                  <>
                    <span className="newsletter-button-text">S'inscrire</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
            {error && (
              <div className="newsletter-error">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}
          </form>
          <p className="newsletter-privacy">
            En vous inscrivant, vous acceptez de recevoir nos emails. 
            Vous pouvez vous désabonner à tout moment.
          </p>
        </>
      ) : (
        <div className="newsletter-success">
          <div className="newsletter-success-icon-wrapper">
            <CheckCircle size={24} />
          </div>
          <div className="newsletter-success-content">
            <h4 className="newsletter-success-title">Inscription réussie !</h4>
            <p className="newsletter-success-message">
              Merci pour votre inscription. Vous recevrez bientôt nos actualités.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

