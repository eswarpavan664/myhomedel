/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

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
                    <NavLink to="/MainPage"> 
                    <svg xmlns="http://www.w3.org/2000/svg" style={{color:window.location.pathname==="/MainPage"?"#65A765":'gray'}}   width="26" height="26" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
                        <p className='m-0' style={{color:'black'}}>Home</p>
                    </NavLink>
                </div>

                <div className='col-3 m-0 p-2'
                 style={{backgroundColor:window.location.pathname==="/PresentOrders" || window.location.pathname==="/OrderStatusDetails" || window.location.pathname==="/PresentOrders"?"#E6FFE6":'white',borderTop:window.location.pathname==="/PresentOrders" || window.location.pathname==="/OrderStatusDetails" || window.location.pathname==="/PresentOrders"?"3px solid #65A765":'white'}}
                onClick={()=>setSelected("Orders")}
                >
                <NavLink to="/PresentOrders">
                <svg xmlns="http://www.w3.org/2000/svg" style={{color:window.location.pathname==="/PresentOrders" || window.location.pathname==="/OrderStatusDetails" || window.location.pathname==="/PresentOrders"?"#65A765":'gray',borderTop:window.location.pathname==="/PresentOrders" || window.location.pathname==="/OrderStatusDetails" || window.location.pathname==="/PresentOrders"?"#65A765":'gray'}} width="26" height="26" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
                                            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                            </svg>
                    <p className='m-0' style={{color:'black'}}>Orders</p>
                    </NavLink>
                </div>


                <div className='col-3 m-0 p-2'
                style={{backgroundColor:window.location.pathname==="/MyOrders" ?"#E6FFE6":'white' ,borderTop:window.location.pathname==="/MyOrders"?"3px solid #65A765":'white'}}
                onClick={()=>setSelected("History")}
                >
                    <NavLink to="/MyOrders"> 
                    <svg xmlns="http://www.w3.org/2000/svg"  style={{color:window.location.pathname==="/MyOrders"?"#65A765":'gray'}}   width="26" height="26" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
                                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
                                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
                                </svg>
                    <p className='m-0' style={{color:'black'}}>History</p>
                    </NavLink>
                </div>



                <div className='col-3 m-0 p-2'
                
                style={{backgroundColor:window.location.pathname==="/Profile"?"#E6FFE6":'white',borderTop:window.location.pathname==="/Profile"?"3px solid #65A765":'white'}}
                onClick={()=>setSelected("Profile")}
                >
                    <NavLink to="/Profile"> 
                    <svg xmlns="http://www.w3.org/2000/svg" style={{color:window.location.pathname==="/Profile"?"#65A765":'gray'}} width="26" height="26" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
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