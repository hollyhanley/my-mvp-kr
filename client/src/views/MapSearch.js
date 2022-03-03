import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapSearch() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
//     <MapContainer className="MapSearch" center={[51.505, -0.09]} zoom={13}>
//         <TileLayer
//             attribution="(credits to tile server)"
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         <Marker position={[51.505, -0.09]} >
//             <Popup>Auto Center</Popup>
//         </Marker>

//     </MapContainer>
);
}


// this will be an addition view to search for artists on a map based on location

{/* <div id="map">
let map = L.map('map').setView([51.505, -0.09], 13);
</div> */}


