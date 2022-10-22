import React,{useState,useEffect} from 'react'

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import {useNavigate} from "react-router-dom";

import Lodi from '../lotties/112469-fast-delivery (1).json'
  
import {Helmet} from "react-helmet";
import logo from '../images/logo.jpeg'
function Loading() {

    let navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('Login');
        }, 5000);
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
     <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
              
      </Helmet>
    
               <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>


               <Player
                    autoplay
                    loop
                    src={Lodi}
                    style={{ height: '780px', width: '680px' }}
                >
                   
                </Player>

                

               </div>


    </>
  )
}

export default Loading;