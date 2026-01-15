import { useState } from 'react';
import { Waves, Users, Clock, Sparkles, Calendar, MapPin } from 'lucide-react';
import InfoCard from './InfoCard';
import '../styles/Piscine.css';

export default function PiscinePage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: 'basic',
      name: 'Accès Simple',
      price: '2000 FCFA',
      duration: '2 heures',
      features: [
        'Accès à la piscine',
        'Vestiaire',
        'Douches',
        'Surveillance'
      ]
    },
    {
      id: 'premium',
      name: 'Pack Premium',
      price: '3500 FCFA',
      duration: '4 heures',
      features: [
        'Accès à la piscine',
        'Vestiaire privé',
        'Serviettes fournies',
        'Boissons incluses',
        'Surveillance 24/7'
      ]
    },
    {
      id: 'family',
      name: 'Pack Famille',
      price: '8000 FCFA',
      duration: '4 heures',
      features: [
        'Accès pour 4 personnes',
        'Vestiaires familiaux',
        'Serviettes pour tous',
        'Boissons et snacks',
        'Zone enfants surveillée'
      ]
    }
  ];

  const heroFeatures = [
    {
      Icon: Waves,
      text: '25 mètres, 6 couloirs'
    },
    {
      Icon: Users,
      text: 'Zone enfants sécurisée'
    },
    {
      Icon: Clock,
      text: 'Ouvert 24/7'
    }
  ];

  const facilities = [
    {
      Icon: Waves,
      title: 'Piscine Olympique',
      description: 'Piscine de 25m avec 6 couloirs, eau chlorée et température contrôlée'
    },
    {
      Icon: Users,
      title: 'Zone Enfants',
      description: 'Espace sécurisé pour les plus petits avec jeux aquatiques'
    },
    {
      Icon: Clock,
      title: 'Horaires Flexibles',
      description: 'Ouvert de 6h à 22h tous les jours de la semaine'
    },
    {
      Icon: Sparkles,
      title: 'Services Premium',
      description: 'Vestiaires, douches, casiers sécurisés et service de restauration'
    }
  ];

  return (
    <div className="page piscine-page" id="piscine">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Waves size={18} />
            <span>Piscine</span>
          </div>
          <h1 className="page-title">Complexe Aquatique</h1>
          <p className="page-description">Détendez-vous dans notre piscine olympique avec des installations modernes</p>
        </div>

        <div className="piscine-hero">
          <div className="hero-content">
            <h2>Une Expérience Aquatique Unique</h2>
            <p>Profitez d'une piscine olympique de qualité avec des services haut de gamme pour toute la famille.</p>
            <div className="hero-features">
              {heroFeatures.map((feature, index) => {
                const IconComponent = feature.Icon;
                return (
                  <div key={index} className="feature-item">
                    <IconComponent size={20} aria-hidden="true" />
                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800" 
              alt="Piscine olympique moderne avec eau cristalline" 
              loading="lazy"
            />
          </div>
        </div>

        <div className="packages-section">
          <h2 className="section-title">Nos Forfaits</h2>
          <div className="packages-grid">
            {packages.map(pkg => (
              <div
                key={pkg.id}
                className={`package-card ${selectedPackage === pkg.id ? 'selected' : ''}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <div className="package-header">
                  <h3 className="package-name">{pkg.name}</h3>
                  <div className="package-price">{pkg.price}</div>
                  <div className="package-duration">{pkg.duration}</div>
                </div>
                <ul className="package-features">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className="package-btn">
                  {selectedPackage === pkg.id ? 'Sélectionné' : 'Choisir ce forfait'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="facilities-section">
          <h2 className="section-title">Nos Installations</h2>
          <div className="facilities-grid">
            {facilities.map((facility, i) => (
              <div key={i} className="facility-card">
                <div className="facility-icon">
                  <facility.Icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="facility-title">{facility.title}</h3>
                <p className="facility-description">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="piscine-info">
          <div className="info-section">
            <h3>Informations Pratiques</h3>
            <div className="info-cards-row">
              <InfoCard
                icon={Calendar}
                title="Horaires"
                description="6h00 - 22h00"
                layout="vertical"
              />
              <InfoCard
                icon={MapPin}
                title="Localisation"
                description="À côté de la station-service"
                layout="vertical"
              />
              <InfoCard
                icon={Users}
                title="Capacité"
                description="Jusqu'à 100 personnes"
                layout="vertical"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
