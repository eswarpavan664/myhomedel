import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
 
import Lodi from '../lotties/99680-3-dots-loading.json'

function TransLoader() {
  return (
    <div  style={{position:"fixed",top:0,zIndex:"2",background:"rgba(0,0,0,0.3)",width:"100%",height:'100vh'}}>
        <div   style={{height:"120vh",display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
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