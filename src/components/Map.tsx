/**
 * Composant Map - Page de liste des stations-service
 * Affiche toutes nos stations avec leurs informations
 */
import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Mail } from 'lucide-react';
import '../styles/Map.css';

interface Station {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  email?: string;
  hours: string;
  services: string[];
  image?: string;
}

export default function MapPage() {
  const [selectedCity, setSelectedCity] = useState<string>('Toutes');

  const stations: Station[] = [
    {
      id: 1,
      name: 'Station Bafoussam Centre',
      address: 'Avenue de l\'Indépendance',
      city: 'Bafoussam',
      phone: '+237 6 96 44 99 08',
      email: 'bafoussam.centre@africapetroleum.cm',
      hours: '24h/24 - 7j/7',
      services: ['Carburant', 'Lubrifiants', 'Boutique', 'Restaurant', 'Piscine'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    },
    {
      id: 2,
      name: 'Station Bafoussam Ouest',
      address: 'Route de Douala',
      city: 'Bafoussam',
      phone: '+237 6 96 44 99 09',
      email: 'bafoussam.ouest@africapetroleum.cm',
      hours: '24h/24 - 7j/7',
      services: ['Carburant', 'Lubrifiants', 'Boutique', 'Restaurant'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    },
    {
      id: 3,
      name: 'Station Bafoussam Est',
      address: 'Boulevard Principal',
      city: 'Bafoussam',
      phone: '+237 6 96 44 99 10',
      email: 'bafoussam.est@africapetroleum.cm',
      hours: '24h/24 - 7j/7',
      services: ['Carburant', 'Lubrifiants', 'Boutique'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    },
    {
      id: 4,
      name: 'Station Douala Centre',
      address: 'Boulevard de la Liberté',
      city: 'Douala',
      phone: '+237 6 96 44 99 11',
      email: 'douala.centre@africapetroleum.cm',
      hours: '24h/24 - 7j/7',
      services: ['Carburant', 'Lubrifiants', 'Boutique', 'Restaurant', 'Piscine', 'Boutique Premium'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    },
    {
      id: 5,
      name: 'Station Douala Port',
      address: 'Zone Portuaire',
      city: 'Douala',
      phone: '+237 6 96 44 99 12',
      email: 'douala.port@africapetroleum.cm',
      hours: '24h/24 - 7j/7',
      services: ['Carburant', 'Lubrifiants', 'Boutique', 'Soutes Maritimes'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    },
    {
      id: 6,
      name: 'Station Yaoundé Centre',
      address: 'Avenue Kennedy',
      city: 'Yaoundé',
      phone: '+237 6 96 44 99 13',
      email: 'yaounde.centre@africapetroleum.cm',
      hours: '24h/24 - 7j/7',
      services: ['Carburant', 'Lubrifiants', 'Boutique', 'Restaurant', 'Piscine'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    },
    {
      id: 7,
      name: 'Station Yaoundé Nord',
      address: 'Route de Nsimalen',
      city: 'Yaoundé',
      phone: '+237 6 96 44 99 14',
      email: 'yaounde.nord@africapetroleum.cm',
      hours: '24h/24 - 7j/7',
      services: ['Carburant', 'Lubrifiants', 'Boutique', 'Restaurant'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    }
  ];

  const cities = ['Toutes', 'Bafoussam', 'Douala', 'Yaoundé'];

  const filteredStations = selectedCity === 'Toutes' 
    ? stations 
    : stations.filter(station => station.city === selectedCity);

  return (
    <section className="map-page" id="stations">
      <div className="container">
        <div className="map-page-header">
          <div className="section-badge">
            <MapPin size={18} />
            <span>Nos Stations</span>
          </div>
          <h1 className="section-title">Nos Stations-Service</h1>
          <p className="section-description">
            Découvrez notre réseau de stations-service réparties dans les principales villes du Cameroun
          </p>
        </div>

        <div className="station-filters">
          {cities.map(city => (
            <button 
              key={city} 
              className={`filter-btn ${selectedCity === city ? 'active' : ''}`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="stations-grid">
          {filteredStations.map(station => (
            <div key={station.id} className="station-card">
              {station.image && (
                <div className="station-image">
                  <img src={station.image} alt={station.name} />
                  <div className="station-badge">{station.city}</div>
                </div>
              )}
              <div className="station-content">
                <div className="station-header">
                  <div className="station-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="station-info">
                    <h3 className="station-name">{station.name}</h3>
                    <p className="station-address">
                      {station.address}, {station.city}
                    </p>
                  </div>
                </div>

                <div className="station-details">
                  <div className="station-detail-item">
                    <Phone size={18} />
                    <span>{station.phone}</span>
                  </div>
                  {station.email && (
                    <div className="station-detail-item">
                      <Mail size={18} />
                      <span>{station.email}</span>
                    </div>
                  )}
                  <div className="station-detail-item">
                    <Clock size={18} />
                    <span>{station.hours}</span>
                  </div>
                </div>

                <div className="station-services">
                  <h4 className="services-title">Services disponibles :</h4>
                  <div className="services-list">
                    {station.services.map((service, index) => (
                      <span key={index} className="service-tag">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stations-info">
          <div className="info-card">
            <MapPin size={24} />
            <h3>Réseau National</h3>
            <p>{stations.length} stations réparties dans les principales villes du Cameroun</p>
          </div>
          <div className="info-card">
            <Clock size={24} />
            <h3>Disponibilité 24/7</h3>
            <p>Toutes nos stations sont ouvertes 24h/24 et 7j/7 pour votre commodité</p>
          </div>
          <div className="info-card">
            <Navigation size={24} />
            <h3>Services Complets</h3>
            <p>Carburant, lubrifiants, boutique, restaurant et bien plus encore</p>
          </div>
        </div>
      </div>
    </section>
  );
}
