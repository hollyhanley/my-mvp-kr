import React, { useEffect, useState } from 'react'
import './MapSearch.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function BristolMapView() {
  const [artistsByLocation, setArtistsByLocations] = useState([]);
  async function getArtistsByLocation() {
    console.log('this is working');
    try {
      let response = await fetch("/artists?city=Bristol")
      if (response.ok) {
        let data = await response.json();
        setArtistsByLocations(data);
        console.log(data[0].longlat.split(','))
      }
    } catch (e) {
      console.log("network error:", e.message);
    }
  }

  useEffect(() => {
    getArtistsByLocation()
  }, []);

  return (
    <div>
        <a href="/mapsearch" class="btn btn-primary">Back to London default</a>
    <MapContainer center={[51.4538022, -2.5972985]} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {artistsByLocation.map((artist) => (
  <Marker position={artist.longlat.split(',')}>
    <Popup class="text-center">
     `{artist.first_name} {artist.last_name} @ {artist.studio} <br /> {artist.instagram}`
    </Popup>
  </Marker>
))}
  </MapContainer>
  </div>
  )
}


