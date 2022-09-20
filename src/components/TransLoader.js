import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
 
import Lodi from '../lotties/99680-3-dots-loading.json'

function TransLoader() {
  return (
    <div style={{position:"absolute",zIndex:"2",background:"rgba(0,0,0,0.3)",width:"100%"}}>
        <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
        <Player
                    autoplay
                    loop
                    src={Lodi}
                    style={{ height: '300px', width: '300px' }}
                    className="ing-fluid"
                >
                   
                </Player>
        </div>
    </div>
  )
}

export default TransLoader;