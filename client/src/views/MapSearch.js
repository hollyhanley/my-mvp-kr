import React, { useEffect, useState } from 'react'
import './MapSearch.css'
import {getArtists} from './Dashboard'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapSearch() {
  const [artistsByLocation, setArtistsByLocations] = useState([]);
  async function getArtistsByLocation() {
    console.log('this is working');
    try {
      let response = await fetch("/artists?city=London")
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
      <label>
      Switch to Bristol?    
      </label>
      <br />
      <br />
      <a href="/bristolmapview" class="btn btn-primary">Bristol</a>
      <br />
      <br />
      
    <MapContainer center={[51.505, -0.09]} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />


    {/* <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> */}

    {artistsByLocation.map((artist) => (
    <Marker position={artist.longlat.split(',')}>
      <Popup class="text-center">
       `{artist.first_name} {artist.last_name} @ {artist.studio} <br /> {artist.instagram}`
      </Popup>
    </Marker>
))}
  </MapContainer>
  </div>

);
}


// this will be an addition view to search for artists on a map based on location

{/* <div id="map">
let map = L.map('map').setView([51.505, -0.09], 13);
</div> */}



