import { ShoppingBag, Package, Car, Wrench, Coffee, Gift } from 'lucide-react';
import InfoCard from './InfoCard';
import '../styles/Boutique.css';

export default function Boutique() {
  const products = [
    {
      id: 1,
      category: 'Automotive',
      name: 'Huiles Moteur',
      description: 'Huiles de qualité premium pour tous types de véhicules',
      price: 'À partir de 5000 FCFA',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800',
      icon: Package
    },
    {
      id: 2,
      category: 'Accessories',
      name: 'Accessoires Auto',
      description: 'Tapis de sol, housses de siège, et autres accessoires',
      price: 'À partir de 2000 FCFA',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      icon: Car
    },
    {
      id: 3,
      category: 'Tools',
      name: 'Outils et Pièces',
      description: 'Outils essentiels et pièces de rechange',
      price: 'À partir de 1500 FCFA',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      icon: Wrench
    },
    {
      id: 4,
      category: 'Snacks',
      name: 'Snacks et Boissons',
      description: 'Collations et boissons rafraîchissantes',
      price: 'À partir de 500 FCFA',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      icon: Coffee
    },
    {
      id: 5,
      category: 'Gifts',
      name: 'Articles Cadeaux',
      description: 'Idées cadeaux pour les passionnés d\'auto',
      price: 'À partir de 3000 FCFA',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800',
      icon: Gift
    },
    {
      id: 6,
      category: 'Cleaning',
      name: 'Produits Nettoyants',
      description: 'Produits pour l\'entretien de votre véhicule',
      price: 'À partir de 1000 FCFA',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800',
      icon: Package
    }
  ];

  const categories = ['Tous', 'Automotive', 'Accessories', 'Tools', 'Snacks', 'Gifts', 'Cleaning'];

  return (
    <div className="boutique-page">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <ShoppingBag size={18} />
            <span>Boutique</span>
          </div>
          <h1 className="page-title">Notre Boutique</h1>
          <p className="page-description">Découvrez notre sélection de produits automobiles et accessoires de qualité</p>
        </div>

        <div className="boutique-categories">
          {categories.map((category, index) => (
            <button 
              key={category} 
              className={`category-btn ${index === 0 ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-category">{product.category}</div>
              </div>
              <div className="product-content">
                <div className="product-icon">
                  <product.icon size={24} />
                </div>
                <h3 className="product-title">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">{product.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="boutique-info info-cards-grid">
          <InfoCard
            icon={ShoppingBag}
            title="Large Choix"
            description="Une gamme complète de produits pour votre véhicule"
            layout="vertical"
          />
          <InfoCard
            icon={Package}
            title="Qualité Garantie"
            description="Produits de marques reconnues et de qualité supérieure"
            layout="vertical"
          />
          <InfoCard
            icon={Coffee}
            title="Service Rapide"
            description="Disponible pendant les heures d'ouverture de la station"
            layout="vertical"
          />
        </div>
      </div>
    </div>
  );
}
