/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import home from '../lotties/49921-home.json'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import cart from '../lotties/lf30_editor_3rxawcps.json';
import his from '../lotties/lf30_editor_ob0pijbv.json'
import pro from '../lotties/1606-profile.json'
function Comp_for_home() {
    const [Selected,setSelected] =useState("");

    console.log( );
  return (
    <div>

    
    <div className='d-block d-md-none  rounded' style={{position:"fixed",bottom:0,width:"100%",backgroundColor:"white",borderTop:"1px solid black",zIndex:"2"}} >
        <div className=' container-fluid m-0'>
            <div className='row text-center align-items-center'>
                <div className='col-3 m-0 p-2' style={{backgroundColor:window.location.pathname==="/MainPage"?"#E6FFE6":'white',borderTop:window.location.pathname==="/MainPage"?"3px solid #65A765":'white'}}
                onClick={()=>setSelected("Home")}
                >
                    <NavLink to="/MainPage" style={{textDecoration:'none',color:'black'}}> 
                    <Player
                    autoplay
                    loop
                    src={home}
                    style={{ height: '35px', width: '90px' }}
                >
                   
                </Player>

                        <p className='m-0' style={{color:'black'}}>Home</p>
                    </NavLink>
                </div>

                <div className='col-3 m-0 p-2'
                 style={{backgroundColor:window.location.pathname==="/PresentOrders" || window.location.pathname==="/OrderStatusDetails" || window.location.pathname==="/PresentOrders"?"#E6FFE6":'white',borderTop:window.location.pathname==="/PresentOrders" || window.location.pathname==="/OrderStatusDetails" || window.location.pathname==="/PresentOrders"?"3px solid #65A765":'white'}}
                onClick={()=>setSelected("Orders")}
                >
                <NavLink to="/PresentOrders" style={{textDecoration:'none',color:'black'}}>
                <Player
                    autoplay
                    loop
                    src={cart}
                    style={{ height: '35px', width: '90px' }}
                >
                   
                </Player>
                    <p className='m-0' style={{color:'black'}}>Orders</p>
                    </NavLink>
                </div>


                <div className='col-3 m-0 p-2'
                style={{backgroundColor:window.location.pathname==="/MyOrders" ?"#E6FFE6":'white' ,borderTop:window.location.pathname==="/MyOrders"?"3px solid #65A765":'white'}}
                onClick={()=>setSelected("History")}
                >
                    <NavLink to="/MyOrders" style={{textDecoration:'none',color:'black'}}> 
                    <Player
                    autoplay
                    loop
                    src={his}
                    style={{ height: '35px', width: '90px' }}
                >
                   
                </Player>
                    <p className='m-0' style={{color:'black'}}>History</p>
                    </NavLink>
                </div>



                <div className='col-3 m-0 p-2'
                
                style={{backgroundColor:window.location.pathname==="/Profile"?"#E6FFE6":'white',borderTop:window.location.pathname==="/Profile"?"3px solid #65A765":'white'}}
                onClick={()=>setSelected("Profile")}
                >
                    <NavLink to="/Profile" style={{textDecoration:'none',color:'black'}}> 
                    <Player
                    autoplay
                    loop
                    src={pro}
                    style={{ height: '30px', width: '90px' }}
                >
                   
                </Player>
                        <p className='m-0' style={{color:'black'}}>Profile</p>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Comp_for_home;