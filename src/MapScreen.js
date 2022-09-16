/* eslint-disable react/style-prop-object */
import React,{useState,useEffect} from 'react'
import Map, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicGF2YW5lc3dhciIsImEiOiJja3RvbGJrZG4wZHNsMnVtdXo2dnczMTlsIn0.YCdQ-ukTTHqEkUc5RlZ1Dg'; // Set your mapbox token here

 
function MapScreen(props) {
  return(
    <Map
      initialViewState={{
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14
      }}
      style={{width: 1550, height: 700}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={-122.4} latitude={37.8} color="red" />
    </Map>
  )
}

export default MapScreen;