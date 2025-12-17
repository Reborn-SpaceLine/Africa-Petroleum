import { Fuel, Droplets, Wrench, Wind, ShoppingBag, Zap, Sparkles } from 'lucide-react';
import '../styles/Services.css';

export default function Services() {
 const services = [
   {
     Icon: Fuel,
     title: 'Vente de Carburants',
     description: 'Super 91, Super 95, Gasoil et Pétrole disponibles 24/7 avec un service rapide et efficace.',
     image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop'
   },
   {
     Icon: Droplets,
     title: 'Lavage Auto',
     description: 'Service de lavage complet intérieur et extérieur pour garder votre véhicule impeccable.',
     image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop'
   },
   {
     Icon: Wrench,
     title: 'Vidange Express',
     description: "Changement d'huile moteur rapide avec des produits de qualité.",
     image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80&auto=format&fit=crop'
   },
   {
     Icon: ShoppingBag,
     title: 'Boutique Station',
     description: 'Large gamme de produits automobiles, accessoires et lubrifiants.',
     image: 'https://images.unsplash.com/photo-1604719312566-8912e92277c6?w=800&q=80&auto=format&fit=crop'
   },
   {
     Icon: Wind,
     title: 'Gonflage Pneus',
     description: 'Vérification et gonflage de vos pneus à la pression recommandée.',
     image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&q=80&auto=format&fit=crop'
   },
   {
     Icon: Zap,
     title: 'Service Express',
     description: 'Service prioritaire pour les clients pressés, remplissage rapide sans attente.',
     image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop'
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
              <div className="service-header">
                <div className="service-icon">
                  <service.Icon size={28} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
