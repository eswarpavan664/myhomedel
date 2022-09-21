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
           
          
   
          
          }
          )
  }

  useEffect(()=>{
    GetData();
  },[Data])
    const lon = "81.696617";
    const lat="16.432983";
    //console.log("sdaa= ",Data[0].Latitude )
  return(
    <> 
    <Nav/>
     {Data.length>0?<Map
      initialViewState={{
        latitude: Data[0].Latitude,
        longitude:  Data[0].Longitude,
        zoom: 12
      }}
      style={{width: 1550, height: 700}}
      mapStyle="mapbox://styles/pavaneswar/ckuy6yadi23mc18mymdhmtfzy"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={Data[0].Longitude} latitude={Data[0].Latitude} color="red" />
    </Map>:null

     }
    <Comp_for_home/>
    </>
  )
}

export default MapScreen;