/* eslint-disable react/style-prop-object */
import React,{useState,useEffect} from 'react'
import Map, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import Nav from './components/Nav';
import Comp_for_home from './components/Comp_for_home';
import { Ip } from './constants/Ip';
import { useLocation } from 'react-router-dom';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicGF2YW5lc3dhciIsImEiOiJja3RvbGJrZG4wZHNsMnVtdXo2dnczMTlsIn0.YCdQ-ukTTHqEkUc5RlZ1Dg'; // Set your mapbox token here


function MapScreen(props) {


  const location = useLocation()
  const { DeliveryManId } = location.state
  const [Data,setData] =useState([]);
console.log(DeliveryManId)
  const GetData=()=>{

              
      fetch(Ip+'/GetDeliveryLocation?id='+DeliveryManId,{
          headers:new Headers({
          Authorization:"Bearer " 
          })
          }).then(res=>res.json())
          
          .then(data=>{ 
          
          
          setData(data)
          console.log("Data = ",data)
          
   
          
          }
          )
  }

  useEffect(()=>{
    GetData();
  })
      
  return(
    <> 
    <Nav/>
     {Data?<Map
      initialViewState={{
        latitude: Data.Latitude,
        longitude:  Data.Longitude,
        zoom: 14
      }}
      style={{width: 1550, height: 700}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={81.696617} latitude={16.432983} color="red" />
    </Map>:null

     }
    <Comp_for_home/>
    </>
  )
}

export default MapScreen;