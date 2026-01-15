import React from 'react';
import { Award, CheckCircle, Users, Target, Globe } from 'lucide-react';
import InfoCard from './InfoCard';
import '../styles/About.css';

export default function About() {
  const sections = [
    {
      id: 1,
      title: 'Notre Histoire',
      subtitle: 'Une Vision Énergétique pour l\'Afrique',
      description: 'Africa Petroleum est née d\'une vision ambitieuse : révolutionner l\'approvisionnement énergétique en Afrique. Depuis notre création, nous avons construit un réseau de stations-service modernes et fiables, répondant aux besoins croissants des populations et des entreprises camerounaises.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      align: 'left'
    },
    {
      id: 2,
      title: 'Notre Mission',
      subtitle: 'Excellence et Innovation',
      description: 'Notre mission est de fournir des produits pétroliers de la plus haute qualité, tout en offrant un service client exceptionnel. Nous investissons continuellement dans la modernisation de nos infrastructures et la formation de nos équipes pour garantir une expérience client inégalée.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      align: 'right'
    },
    {
      id: 3,
      title: 'Nos Valeurs',
      subtitle: 'Intégrité, Qualité, Service',
      description: 'L\'intégrité guide chacune de nos actions. Nous nous engageons à maintenir les plus hauts standards de qualité dans tous nos produits et services. Notre priorité absolue est la satisfaction et la sécurité de nos clients, 24 heures sur 24, 7 jours sur 7.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
      align: 'left'
    },
    {
      id: 4,
      title: 'Notre Engagement',
      subtitle: 'Développement Durable',
      description: 'Nous croyons en un avenir énergétique durable. C\'est pourquoi nous intégrons des pratiques respectueuses de l\'environnement dans nos opérations quotidiennes et explorons activement les énergies alternatives pour contribuer à un avenir plus vert pour l\'Afrique.',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800',
      align: 'right'
    }
  ];

  const highlights = [
    {
      Icon: Award,
      title: 'Excellence Reconnue',
      subtitle: 'Plus de 12 ans d\'expérience dans le secteur pétrolier'
    },
    {
      Icon: Target,
      title: 'Qualité Certifiée',
      subtitle: 'Produits conformes aux normes internationales'
    },
    {
      Icon: Users,
      title: 'Service Client Premium',
      subtitle: 'Équipes qualifiées disponibles 24/7'
    },
    {
      Icon: Globe,
      title: 'Réseau National',
      subtitle: '7 stations dans les principales villes du Cameroun'
    }
  ];

  return (
    <section className="about" id="apropos">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Award size={18} />
            <span>À Propos de Nous</span>
          </div>
          <h1 className="section-title">Africa Petroleum</h1>
          <p className="section-description">
            Votre partenaire énergétique de confiance au Cameroun. Nous transformons l'expérience de ravitaillement avec des services de pointe et une qualité inégalée.
          </p>
        </div>

        <div className="about-sections">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className={`about-section ${section.align === 'right' ? 'reverse' : ''}`}
            >
              <div className="section-content">
                <div className="section-number">0{section.id}</div>
                <h2 className="section-content-title">{section.title}</h2>
                <h3 className="section-content-subtitle">{section.subtitle}</h3>
                <p className="section-content-description">{section.description}</p>
              </div>
              <div className="section-image-wrapper">
                <div className="section-image-trapezoid">
                  <img src={section.image} alt={section.title} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="about-highlights info-cards-grid">
          {highlights.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.Icon}
              title={item.title}
              description={item.subtitle}
              layout="vertical"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
