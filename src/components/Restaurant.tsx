import { useState } from 'react';
import { ChefHat, Coffee, Pizza, Utensils, Sparkles, Clock, Star } from 'lucide-react';
import InfoCard from './InfoCard';
import '../styles/Restaurant.css';

export default function RestaurantPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tout', Icon: Utensils },
    { id: 'plats', label: 'Plats', Icon: ChefHat },
    { id: 'boissons', label: 'Boissons', Icon: Coffee },
    { id: 'desserts', label: 'Desserts', Icon: Pizza }
  ];

  const menuItems = [
    {
      id: 1,
      category: 'plats',
      name: 'Poulet DG',
      description: 'Poulet grillé avec frites et salade',
      price: '3500 FCFA',
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800',
      rating: 4.5,
      time: '15 min'
    },
    {
      id: 2,
      category: 'plats',
      name: 'Ndolè',
      description: 'Plat traditionnel camerounais aux feuilles de ndolè',
      price: '4000 FCFA',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800',
      rating: 4.8,
      time: '20 min'
    },
    {
      id: 3,
      category: 'plats',
      name: 'Sanga',
      description: 'Viande de bœuf grillée avec épices locales',
      price: '4500 FCFA',
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800',
      rating: 4.6,
      time: '18 min'
    },
    {
      id: 4,
      category: 'boissons',
      name: 'Jus de Bissap',
      description: 'Jus traditionnel à base d\'hibiscus frais',
      price: '1500 FCFA',
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=800',
      rating: 4.3,
      time: '5 min'
    },
    {
      id: 5,
      category: 'boissons',
      name: 'Café Camerounais',
      description: 'Café noir traditionnel avec épices',
      price: '1200 FCFA',
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800',
      rating: 4.4,
      time: '3 min'
    },
    {
      id: 6,
      category: 'desserts',
      name: 'Beignets Camerounais',
      description: 'Beignets sucrés traditionnels',
      price: '2000 FCFA',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800',
      rating: 4.7,
      time: '10 min'
    }
  ];

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="page restaurant-page" id="restaurant">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <ChefHat size={18} />
            <span>Restaurant</span>
          </div>
          <h1 className="page-title">Notre Restaurant</h1>
          <p className="page-description">Savourez nos plats traditionnels camerounais et spécialités locales</p>
        </div>

        <div className="menu-categories">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <category.Icon size={20} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-card">
              <div className="menu-image">
                <img src={item.image} alt={item.name} />
                <div className="menu-badge">
                  <Star size={14} />
                  <span>{item.rating}</span>
                </div>
              </div>
              <div className="menu-content">
                <h3 className="menu-title">{item.name}</h3>
                <p className="menu-description">{item.description}</p>
                <div className="menu-meta">
                  <div className="menu-time">
                    <Clock size={16} />
                    <span>{item.time}</span>
                  </div>
                  <div className="menu-price">{item.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="restaurant-info info-cards-grid">
          <InfoCard
            icon={Sparkles}
            title="Service 24/7"
            description="Notre restaurant est ouvert toute la journée pour votre confort"
            layout="vertical"
          />
          <InfoCard
            icon={ChefHat}
            title="Cuisine Traditionnelle"
            description="Des plats authentiques préparés avec des ingrédients frais locaux"
            layout="vertical"
          />
          <InfoCard
            icon={Utensils}
            title="Service Rapide"
            description="Commandes préparées rapidement pour ne pas vous faire attendre"
            layout="vertical"
          />
        </div>
      </div>
    </div>
  );
}