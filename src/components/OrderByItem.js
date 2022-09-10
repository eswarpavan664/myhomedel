/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {
     NavLink
  } from "react-router-dom";
function OrderByItem() {
  return (
    <div style={{marginTop:'5%',marginBottom:'5%'}}>

        <div className='container'  >
            <div className='row'>


                <div className='col-3 col-md-2 text-center'>
                    <NavLink to="/DisplayByItem">
                    <img className='img-fluid' style={{borderRadius:"50%"}} src='https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png' width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold',textDecoration:'none',color:'black'}}>Shake</p>
                    </NavLink>
                </div>
                <div className='col-3 col-md-2 text-center'>
                <NavLink to="/DisplayByItem">
                    <img className='img-fluid' style={{borderRadius:"50%"}} src='https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png' width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold',textDecoration:'none',color:'black'}}>Shake</p>
                    </NavLink>
                </div>
                <div className='col-3 col-md-2 text-center'>
                <NavLink to="/DisplayByItem">
                    <img className='img-fluid' style={{borderRadius:"50%"}} src='https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png' width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold',textDecoration:'none',color:'black'}}>Shake</p>
                    </NavLink>
                </div>
                <div className='col-3 col-md-2 text-center'>
                <NavLink to="/DisplayByItem">
                    <img className='img-fluid' style={{borderRadius:"50%"}} src='https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png' width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold',textDecoration:'none',color:'black'}}>Shake</p>
                    </NavLink>
                </div>
                <div className='col-3 col-md-2 text-center'>
                <NavLink to="/DisplayByItem">
                    <img className='img-fluid' style={{borderRadius:"50%"}} src='https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png' width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold',textDecoration:'none',color:'black'}}>Shake</p>
                    </NavLink>
                </div>
                <div className='col-3 col-md-2 text-center'>
                <NavLink to="/DisplayByItem">
                    <img className='img-fluid' style={{borderRadius:"50%"}} src='https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png' width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold',textDecoration:'none',color:'black'}}>Shake</p>
                    </NavLink>
                </div>
                

            </div>
        </div>
        
    </div>
  )
}

export default OrderByItem;