import { useState } from 'react';
import { Fuel, Zap, Droplet, Sparkles, DollarSign, CheckCircle, Clock, Flame } from 'lucide-react';
import '../styles/FuelPrices.css';

export default function FuelPrices() {
  const [selectedFuel, setSelectedFuel] = useState<string | null>(null);
  const fuels = [
    { Icon: Fuel, name: 'Super 91', price: 650, type: 'Essence', description: 'Carburant standard pour la plupart des véhicules essence' },
    { Icon: Zap, name: 'Super 95', price: 680, type: 'Essence Premium', description: "Essence à indice d'octane élevé pour les moteurs performants" },
    { Icon: Droplet, name: 'Gasoil', price: 600, type: 'Diesel', description: 'Carburant pour véhicules diesel et utilitaires' },
    { Icon: Sparkles, name: 'Pétrole', price: 550, type: 'Lampant', description: 'Pétrole lampant pour usage domestique et éclairage' }
  ];

  return (
    <section className="fuel-prices" id="prix">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <DollarSign size={18} />
            <span>Prix du Jour</span>
          </div>
          <h2 className="section-title">Nos Tarifs Carburants</h2>
          <p className="section-description">
            Prix compétitifs et transparents pour tous types de carburants. Mise à jour quotidienne.
          </p>
        </div>

        <div className="prices-grid">
          {fuels.map((fuel, index) => {
            const IconComponent = fuel.Icon;
            return (
              <div
                key={index}
                className={`price-card ${selectedFuel === fuel.name ? 'price-card-selected' : ''}`}
                onClick={() => setSelectedFuel(fuel.name)}
              >
                <div className="price-icon">
                  <IconComponent size={36} />
                </div>
                <div className="price-header">
                  <h3 className="price-name">{fuel.name}</h3>
                  <span className="price-type">{fuel.type}</span>
                </div>
                <div className="price-amount">
                  <span className="price-value">{fuel.price}</span>
                  <span className="price-unit">FCFA/Litre</span>
                </div>
                <p className="price-description">{fuel.description}</p>
              </div>
            );
          })}
        </div>

        <div className="price-features">
          <div className="feature-box">
            <div className="feature-icon">
              <CheckCircle size={24} />
            </div>
            <div className="feature-content">
              <h4>Qualité Certifiée</h4>
              <p>Tous nos carburants sont conformes aux normes internationales</p>
            </div>
          </div>
          <div className="feature-box">
            <div className="feature-icon">
              <DollarSign size={24} />
            </div>
            <div className="feature-content">
              <h4>Prix Fixes</h4>
              <p>Nos prix restent stables toute la journée</p>
            </div>
          </div>
          <div className="feature-box">
            <div className="feature-icon">
              <Clock size={24} />
            </div>
            <div className="feature-content">
              <h4>Service Rapide</h4>
              <p>Remplissage rapide pour vous faire gagner du temps</p>
            </div>
          </div>
        </div>

        <div className="price-notice">
          <div className="notice-icon">
            <Flame size={24} />
          </div>
          <div className="notice-text">
            <strong>Information :</strong> Les prix affichés sont valables aujourd'hui et peuvent varier selon les fluctuations du marché. 
            Pour les commandes en gros volume, contactez-nous pour des tarifs préférentiels.
          </div>
        </div>
      </div>
    </section>
  );
}
