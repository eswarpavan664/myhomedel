/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Comp_for_home() {
    const [Selected,setSelected] =useState("");

    console.log( );
  return (
    <div>

    
    <div className='d-block d-md-none p-1 rounded' style={{position:"fixed",bottom:0,width:"100%",backgroundColor:"white",borderTop:"1px solid black",zIndex:"2"}} >
        <div className=' container-fluid m-0'>
            <div className='row text-center'>
                <div className='col-3' style={{backgroundColor:window.location.pathname==="/MainPage"?"orange":'white'}}
                onClick={()=>setSelected("Home")}
                >
                    <NavLink to="/MainPage"> 
                        <img className='img-fluid' src='https://cdn-icons-png.flaticon.com/512/1946/1946488.png' width={"20"}  />
                        <p className='m-0' style={{color:'black'}}>Home</p>
                    </NavLink>
                </div>
                <div className='col-3'
                 style={{backgroundColor:window.location.pathname==="/PresentOrders"?"orange":'white'}}
                onClick={()=>setSelected("Orders")}
                >
                <NavLink to="/PresentOrders">
                    <img className='img-fluid' src='https://cdn-icons-png.flaticon.com/512/3496/3496155.png' width={"20"} />
                    <p className='m-0' style={{color:'black'}}>Orders</p>
                    </NavLink>
                </div>
                <div className='col-3'
                style={{backgroundColor:window.location.pathname==="/MyOrders"?"orange":'white'}}
                onClick={()=>setSelected("History")}
                >
                    <NavLink to="/MyOrders"> 
                    <img className='img-fluid' src='https://cdn-icons-png.flaticon.com/512/2961/2961948.png' width={"20"} />
                    <p className='m-0' style={{color:'black'}}>History</p>
                    </NavLink>
                </div>
                <div className='col-3'
                
                style={{backgroundColor:window.location.pathname==="/Profile"?"orange":'white'}}
                onClick={()=>setSelected("Profile")}
                >
                    <NavLink to="/Profile"> 
                        <img className='img-fluid' src='https://cdn-icons-png.flaticon.com/512/1077/1077063.png' width={"20"} />
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