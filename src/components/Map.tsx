/**
 * Composant Map - Page de localisation des stations avec carte interactive
 * Affiche toutes les stations sur une carte Leaflet avec possibilité de calculer des itinéraires
 */
import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { MapPin, Navigation, Phone, Clock, X } from 'lucide-react';
import '../styles/Map.css';

// Configuration de l'icône par défaut de Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

// Configuration des icônes Leaflet
const DefaultIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Interface pour les stations
interface Station {
  id: number;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  position: [number, number]; // [latitude, longitude]
}

/**
 * Composant pour mettre à jour la vue de la carte
 */
function ChangeMapView({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  
  useEffect(() => {
    map.setView(center, zoom);
    // Invalider la taille pour s'assurer que la carte s'affiche correctement
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map, center, zoom]);
  
  return null;
}

/**
 * Composant pour forcer l'invalidation de la carte au montage
 */
function MapInitializer() {
  const map = useMap();
  
  useEffect(() => {
    // Forcer l'invalidation plusieurs fois pour s'assurer que la carte s'affiche
    const invalidateSize = () => {
      map.invalidateSize();
    };
    
    // Invalider immédiatement
    invalidateSize();
    
    // Puis après un court délai
    setTimeout(invalidateSize, 100);
    setTimeout(invalidateSize, 300);
    setTimeout(invalidateSize, 500);
    
    // Écouter les événements de resize
    window.addEventListener('resize', invalidateSize);
    
    return () => {
      window.removeEventListener('resize', invalidateSize);
    };
  }, [map]);
  
  return null;
}

/**
 * Composant pour gérer le routage sur la carte
 */
function RoutingControl({ 
  start, 
  end
}: { 
  start: [number, number] | null; 
  end: [number, number];
}) {
  const map = useMap();
  const routingControlRef = useRef<any>(null);

  useEffect(() => {
    if (!start) return;

    // Créer le contrôle de routage
    if (routingControlRef.current) {
      map.removeControl(routingControlRef.current);
      routingControlRef.current = null;
    }

    routingControlRef.current = (L as any).Routing.control({
      waypoints: [
        L.latLng(start[0], start[1]),
        L.latLng(end[0], end[1])
      ],
      routeWhileDragging: false,
      lineOptions: {
        styles: [
          {
            color: '#7d1935', // Couleur bordeaux du thème
            weight: 5,
            opacity: 0.8
          }
        ]
      },
      createMarker: () => null, // Ne pas créer de marqueurs supplémentaires
      showAlternatives: false
    }).addTo(map);

    // Nettoyer lors du démontage
    return () => {
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }
    };
  }, [map, start, end]);

  return null;
}

/**
 * Composant principal de la page Map
 */
export default function MapPage() {
  console.log('MapPage component rendered');
  
  // État pour la station sélectionnée
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  
  // État pour la position de l'utilisateur
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  
  // État pour le routage actif
  const [isRouting, setIsRouting] = useState(false);
  
  // État pour forcer le re-render de la carte
  const [mapKey, setMapKey] = useState(0);
  
  // Forcer l'invalidation de la carte après le montage pour s'assurer qu'elle s'affiche
  useEffect(() => {
    console.log('MapPage mounted, initializing map');
    // Petit délai pour s'assurer que le DOM est prêt
    const timer = setTimeout(() => {
      // Invalider la taille de la carte pour forcer le recalcul
      window.dispatchEvent(new Event('resize'));
      setMapKey(prev => prev + 1);
      console.log('Map resize event dispatched');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Liste des stations disponibles
  const stations: Station[] = [
    {
      id: 1,
      name: 'Station Bafoussam Centre',
      address: 'Avenue de l\'Indépendance',
      city: 'Bafoussam',
      phone: '+237 6 96 44 99 08',
      hours: '24h/24 - 7j/7',
      position: [5.4747, 10.4176]
    },
    {
      id: 2,
      name: 'Station Bafoussam Ouest',
      address: 'Route de Douala',
      city: 'Bafoussam',
      phone: '+237 6 96 44 99 09',
      hours: '24h/24 - 7j/7',
      position: [5.4740, 10.4190]
    },
    {
      id: 3,
      name: 'Station Bafoussam Est',
      address: 'Boulevard Principal',
      city: 'Bafoussam',
      phone: '+237 6 96 44 99 10',
      hours: '24h/24 - 7j/7',
      position: [5.4755, 10.4200]
    },
    {
      id: 4,
      name: 'Station Douala Centre',
      address: 'Boulevard de la Liberté',
      city: 'Douala',
      phone: '+237 6 96 44 99 11',
      hours: '24h/24 - 7j/7',
      position: [4.0511, 9.7679]
    },
    {
      id: 5,
      name: 'Station Douala Port',
      address: 'Zone Portuaire',
      city: 'Douala',
      phone: '+237 6 96 44 99 12',
      hours: '24h/24 - 7j/7',
      position: [4.0550, 9.7650]
    },
    {
      id: 6,
      name: 'Station Yaoundé Centre',
      address: 'Avenue Kennedy',
      city: 'Yaoundé',
      phone: '+237 6 96 44 99 13',
      hours: '24h/24 - 7j/7',
      position: [3.8480, 11.5021]
    },
    {
      id: 7,
      name: 'Station Yaoundé Nord',
      address: 'Route de Nsimalen',
      city: 'Yaoundé',
      phone: '+237 6 96 44 99 14',
      hours: '24h/24 - 7j/7',
      position: [3.8500, 11.5000]
    }
  ];

  /**
   * Fonction pour obtenir la position GPS de l'utilisateur
   */
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error('Erreur de géolocalisation:', error);
          alert('Impossible d\'obtenir votre position. Veuillez autoriser l\'accès à la localisation.');
        }
      );
    } else {
      alert('La géolocalisation n\'est pas supportée par votre navigateur.');
    }
  };

  /**
   * Calculer la distance entre deux points (formule de Haversine)
   * @param lat1 Latitude du premier point
   * @param lon1 Longitude du premier point
   * @param lat2 Latitude du deuxième point
   * @param lon2 Longitude du deuxième point
   * @returns Distance en kilomètres
   */
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Rayon de la Terre en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  /**
   * Trier les stations par distance si la position de l'utilisateur est disponible
   */
  const sortedStations = userLocation
    ? [...stations].sort((a, b) => {
        const distA = calculateDistance(
          userLocation[0], userLocation[1],
          a.position[0], a.position[1]
        );
        const distB = calculateDistance(
          userLocation[0], userLocation[1],
          b.position[0], b.position[1]
        );
        return distA - distB;
      })
    : stations;

  /**
   * Centrer la carte sur une station ou la position de l'utilisateur
   */
  const getMapCenter = (): [number, number] => {
    if (selectedStation) {
      return selectedStation.position;
    }
    if (userLocation) {
      return userLocation;
    }
    // Centre par défaut sur le Cameroun
    return [5.5, 10];
  };

  /**
   * Obtenir le niveau de zoom approprié
   */
  const getMapZoom = (): number => {
    if (selectedStation || userLocation) {
      return 13;
    }
    return 7; // Vue d'ensemble du Cameroun
  };

  /**
   * Gérer le clic sur une station
   */
  const handleStationClick = (station: Station) => {
    setSelectedStation(station);
    setIsRouting(false);
  };

  /**
   * Calculer l'itinéraire vers une station
   */
  const calculateRoute = (station: Station) => {
    if (!userLocation) {
      alert('Veuillez d\'abord activer votre localisation pour calculer un itinéraire.');
      return;
    }
    setSelectedStation(station);
    setIsRouting(true);
  };

  /**
   * Fermer le routage
   */
  const closeRouting = () => {
    setIsRouting(false);
  };

  console.log('MapPage render - stations:', stations.length, 'selectedStation:', selectedStation?.name);
  
  return (
    <section className="map-page" id="stations">
      <div className="container">
        {/* En-tête de la page */}
        <div className="map-page-header">
          <div className="section-badge">
            <MapPin size={18} />
            <span>Nos Stations</span>
          </div>
          <h1 className="section-title">Trouvez Notre Station la Plus Proche</h1>
          <p className="section-description">
            Localisez nos stations-service sur la carte et calculez votre itinéraire directement depuis le site
          </p>
          {/* Message de débogage temporaire */}
          {import.meta.env.DEV && (
            <div style={{ 
              background: '#f0f0f0', 
              padding: '10px', 
              marginTop: '20px', 
              borderRadius: '8px',
              fontSize: '12px',
              color: '#666'
            }}>
              Debug: MapPage chargée - {stations.length} stations disponibles
            </div>
          )}
        </div>

        <div className="map-content">
          {/* Sidebar avec la liste des stations */}
          <div className="stations-sidebar">
            {/* Contrôle de localisation */}
            <div className="location-controls">
              <button 
                className="btn-locate"
                onClick={getUserLocation}
                title="Localiser ma position"
              >
                <Navigation size={18} />
                {userLocation ? 'Position détectée' : 'Me localiser'}
              </button>
            </div>

            {/* Liste des stations */}
            <div className="stations-list">
              {sortedStations.map((station) => {
                const distance = userLocation
                  ? calculateDistance(
                      userLocation[0], userLocation[1],
                      station.position[0], station.position[1]
                    ).toFixed(1)
                  : null;

                return (
                  <div
                    key={station.id}
                    className={`station-card ${selectedStation?.id === station.id ? 'active' : ''}`}
                    onClick={() => handleStationClick(station)}
                  >
                    <div className="station-header">
                      <div className="station-icon">
                        <MapPin size={20} />
                      </div>
                      <div className="station-info">
                        <h3 className="station-name">{station.name}</h3>
                        <p className="station-address">
                          {station.address}, {station.city}
                        </p>
                        {distance && (
                          <p className="station-distance">
                            📍 {distance} km de votre position
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="station-details">
                      <div className="station-detail-item">
                        <Phone size={16} />
                        <span>{station.phone}</span>
                      </div>
                      <div className="station-detail-item">
                        <Clock size={16} />
                        <span>{station.hours}</span>
                      </div>
                    </div>

                    <div className="station-actions">
                      <button
                        className="btn-route"
                        onClick={(e) => {
                          e.stopPropagation();
                          calculateRoute(station);
                        }}
                        disabled={!userLocation}
                        title={!userLocation ? 'Activez votre localisation d\'abord' : 'Calculer l\'itinéraire'}
                      >
                        <Navigation size={16} />
                        Itinéraire
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carte interactive Leaflet */}
          <div className="map-container" id="leaflet-map-container">
            <MapContainer
              key={`map-${mapKey}`}
              center={getMapCenter()}
              zoom={getMapZoom()}
              scrollWheelZoom={true}
              style={{ height: '100%', width: '100%', zIndex: 0, minHeight: '600px' }}
              whenReady={() => {
                console.log('Map ready');
                // L'invalidation sera gérée par MapInitializer
              }}
            >
              {/* Couche de tuiles OpenStreetMap */}
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Marqueur de la position de l'utilisateur */}
              {userLocation && (
                <Marker position={userLocation}>
                  <Popup>
                    <div className="station-popup">
                      <h3>Votre position</h3>
                      <p>📍 Vous êtes ici</p>
                    </div>
                  </Popup>
                </Marker>
              )}

              {/* Marqueurs des stations */}
              {stations.map((station) => (
                <Marker 
                  key={station.id} 
                  position={station.position}
                  eventHandlers={{
                    click: () => handleStationClick(station)
                  }}
                >
                  <Popup>
                    <div className="station-popup">
                      <h3>{station.name}</h3>
                      <p>{station.address}, {station.city}</p>
                      <p><Phone size={14} /> {station.phone}</p>
                      <p><Clock size={14} /> {station.hours}</p>
                      {userLocation && (
                        <button
                          className="btn-popup-route"
                          onClick={() => calculateRoute(station)}
                        >
                          <Navigation size={14} />
                          Itinéraire depuis ma position
                        </button>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))}

              {/* Initialisation de la carte */}
              <MapInitializer />
              
              {/* Mise à jour de la vue de la carte */}
              <ChangeMapView center={getMapCenter()} zoom={getMapZoom()} />

              {/* Contrôle de routage */}
              {isRouting && selectedStation && userLocation && (
                <RoutingControl
                  start={userLocation}
                  end={selectedStation.position}
                />
              )}
            </MapContainer>

            {/* Panneau de contrôle du routage */}
            {isRouting && (
              <div className="route-control-panel">
                <div className="route-info">
                  <h4>Itinéraire actif</h4>
                  <p>Vers: {selectedStation?.name}</p>
                </div>
                <button
                  className="btn-close-route"
                  onClick={closeRouting}
                  title="Fermer l'itinéraire"
                >
                  <X size={18} />
                  Fermer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
