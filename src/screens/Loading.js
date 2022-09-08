import React,{useState,useEffect} from 'react'

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import {useNavigate} from "react-router-dom";

import Lodi from '../lotties/72168-loading-food.json'
 
import logo from '../images/logo.jpeg'
function Loading() {

    let navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('Login');
        }, 9000);
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
    
               <div style={{marginTop:'10%'}}>


               <Player
                    autoplay
                    loop
                    src={Lodi}
                    style={{ height: '500px', width: '500px' }}
                >
                   
                </Player>

                

               </div>


    </>
  )
}

export default Loading;