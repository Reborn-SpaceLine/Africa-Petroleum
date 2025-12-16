import { Fuel, Droplets, Wrench, Wind, ShoppingBag, Zap, Sparkles, ArrowRight } from 'lucide-react';
import '../styles/Services.css';

export default function Services() {
  const services = [
    {
      Icon: Fuel,
      title: 'Vente de Carburants',
      description: 'Super 91, Super 95, Gasoil et Pétrole disponibles 24/7 avec un service rapide et efficace.',
      image: 'https://images.unsplash.com/photo-1609940330034-37c18f547f0e?w=800'
    },
    {
      Icon: Droplets,
      title: 'Lavage Auto',
      description: 'Service de lavage complet intérieur et extérieur pour garder votre véhicule impeccable.',
      image: 'https://images.unsplash.com/photo-1611876094264-3fdbb105ff88?w=800'
    },
    {
      Icon: Wrench,
      title: 'Vidange Express',
      description: "Changement d'huile moteur rapide avec des produits de qualité.",
      image: 'https://images.unsplash.com/photo-1581093588401-9dcdb18dc33d?w=800'
    },
    {
      Icon: ShoppingBag,
      title: 'Boutique Station',
      description: 'Large gamme de produits automobiles, accessoires et lubrifiants.',
      image: 'https://images.unsplash.com/photo-1592928302452-c2a94ad3392d?w=800'
    },
    {
      Icon: Wind,
      title: 'Gonflage Pneus',
      description: 'Vérification et gonflage de vos pneus à la pression recommandée.',
      image: 'https://images.unsplash.com/photo-1611599536427-bdb3e6aede71?w=800'
    },
    {
      Icon: Zap,
      title: 'Service Express',
      description: 'Service prioritaire pour les clients pressés, remplissage rapide sans attente.',
      image: 'https://images.unsplash.com/photo-1620407932223-79fa4d78ec09?w=800'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        {/* Header Section */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={18} />
            <span>Nos Services</span>
          </div>
          <h2 className="section-title">Ce Que Nous Offrons</h2>
          <p className="section-description">Une gamme complète de services pour prendre soin de votre véhicule</p>
        </div>

        {/* Grid des services */}
        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              {service.image && (
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
              )}
              <div className="service-icon">
                <service.Icon size={28} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
