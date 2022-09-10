/* eslint-disable react/style-prop-object */
import React,{useState,useEffect} from 'react'
import Map, { Layer, Feature,Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
/*
const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoicGF2YW5lc3dhciIsImEiOiJja3RvbGJrZG4wZHNsMnVtdXo2dnczMTlsIn0.YCdQ-ukTTHqEkUc5RlZ1Dg'
  });*/
function MapScreen(props) {
  return(
    <Map
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
    <Marker longitude={-100} latitude={40} anchor="bottom" >
       K
    </Marker>
  </Map>
  )
}

export default MapScreen;