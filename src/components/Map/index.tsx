import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Map = () => {
  return (
    <MapContainer center={[-12.908719, -38.4389836]} zoom={14}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[-12.908719, -38.4389836]} />
    </MapContainer>
  );
};

export default Map;
