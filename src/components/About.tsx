import React from 'react';
import { Award, CheckCircle, DollarSign, MapPin } from 'lucide-react';
import '../styles/About.css';

export default function About() {
  const features = [
    {
      number: '01',
      title: 'Expérience & Fiabilité',
      description: 'Plus de 12 ans d\'expérience dans la distribution de carburants au Cameroun.',
      Icon: Award
    },
    {
      number: '02',
      title: 'Qualité Garantie',
      description: 'Carburants certifiés conformes aux normes internationales de qualité.',
      Icon: CheckCircle
    },
    {
      number: '03',
      title: 'Service Client',
      description: 'Personnel qualifié et courtois à votre service 24h/24 et 7j/7.',
      Icon: DollarSign
    },
    {
      number: '04',
      title: 'Emplacement Stratégique',
      description: 'Plusieurs stations dans vos différentes villes, facilement accessibles.',
      Icon: MapPin
    }
  ];

  const highlights = [
    {
      title: 'Ouvert 24/7',
      subtitle: 'Service continu toute la semaine',
      Icon: CheckCircle
    },
    {
      title: 'Prix Compétitifs',
      subtitle: 'Les meilleurs tarifs du marché',
      Icon: CheckCircle
    },
    {
      title: 'Carburants Certifiés',
      subtitle: 'Qualité garantie et contrôlée',
      Icon: CheckCircle
    }
  ];

  return (
    <section className="about" id="apropos">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-badge">
              <Award size={18} />
              <span>À Propos de Nous</span>
            </div>
            <h1 className="section-title">Africa Petroleum</h1>
            <h2 className="section-subtitle">Votre Station-Service de Référence</h2>
            <p className="about-description">
              Implantée au cœur de vos activités depuis plus de 12 ans, notre station-service
              est devenue la référence pour des milliers d'automobilistes qui recherchent
              qualité, rapidité et professionnalisme.
            </p>
            <p className="about-description">
              Nous nous engageons à fournir des carburants de la plus haute qualité,
              conformes aux standards internationaux, tout en offrant un service client
              irréprochable et des prix compétitifs. Notre équipe dévouée est disponible
              24h/24 pour répondre à tous vos besoins.
            </p>
            
            <div className="about-image">
              <img
                src="https://images.pexels.com/photos/34636185/pexels-photo-34636185.jpeg?auto=compress&cs=tinysrgb&w=1080"
                alt="Station-service moderne avec pompes et voitures"
              />
            </div>
          </div>

          <div className="about-features">
            {features.map((feature, index) => {
              const IconComponent = feature.Icon;
              return (
                <div key={index} className="feature-item">
                  <div className="feature-icon-wrapper">
                    <div className="feature-number">{feature.number}</div>
                    <div className="feature-icon">
                      <IconComponent size={24} />
                    </div>
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlights en bas */}
        <div className="about-highlights horizontal">
          {highlights.map((item, index) => (
            <div key={index} className="highlight">
              <div className="highlight-icon">
                <item.Icon size={20} />
              </div>
              <div className="highlight-text">
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
