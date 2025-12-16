import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Icône custom pour les stations
const stationIcon = new L.Icon({
  iconUrl: '/src/assets/pin.png', // mets un pin personnalisé dans assets
  iconSize: [35, 45],
  iconAnchor: [17, 45],
  popupAnchor: [0, -40],
});

export default function MapPage() {
  const stations = [
    { name: 'Station Bafoussam 1', position: [5.4747, 10.4176] },
    { name: 'Station Bafoussam 2', position: [5.4740, 10.4190] },
    { name: 'Station Bafoussam 3', position: [5.4755, 10.4200] },
    { name: 'Station Bafoussam 4', position: [5.4730, 10.4180] },
    { name: 'Station Bafoussam 5', position: [5.4760, 10.4160] },
    { name: 'Station Douala 1', position: [4.0511, 9.7679] },
    { name: 'Station Douala 2', position: [4.0550, 9.7650] },
    { name: 'Station Yaoundé 1', position: [3.8480, 11.5021] },
    { name: 'Station Yaoundé 2', position: [3.8500, 11.5000] },
  ];

  return (
    <div className="map-page">
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>
        Nos stations
      </h2>
      <MapContainer center={[5.5, 10]} zoom={6} scrollWheelZoom style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {stations.map((station, idx) => (
          <Marker key={idx} position={station.position} icon={stationIcon}>
            <Popup>{station.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
