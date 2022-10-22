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
                      
      </Helmet>
    
               <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>


               <Player
                    autoplay
                    loop
                    src={Lodi}
                    style={{ height: '780px', width: '580px' }}
                >
                   
                </Player>

                

               </div>


    </>
  )
}

export default Loading;