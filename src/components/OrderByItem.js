/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import biryaniimg from '../images/d19a31d42d5913ff129cafd7cec772f81639737697.avif'
import fridriceimmg from '../images/e444ade83eb22360b6ca79e6e777955f1632716661.avif'
import idle from '../images/d9766dd91cd75416f4f65cf286ca84331634805483.avif'
import chicken from '../images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.webp'
import {
     NavLink
  } from "react-router-dom";
function OrderByItem() {
  return (
    <div style={{marginTop:'5%',marginBottom:'5%'}}>

        <div className='container'  >
            <div className='row'>


                <div className='col-3 col-md-3 text-center'>
                    <NavLink to="/DisplayByItem">
                    <img className='img-fluid' style={{borderRadius:"50%"}} src={biryaniimg} width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold',textDecoration:'none',color:'black'}}>Biryani</p>
                    </NavLink>
                </div>
                <div className='col-3 col-md-2 text-center'>
                <NavLink to="/DisplayByItem">
                    <img className='img-fluid' style={{borderRadius:"50%"}} src={idle} width={"150"} />
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
                    <img className='img-fluid' style={{borderRadius:"50%"}} src={fridriceimmg} width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold',textDecoration:'none',color:'black'}}>Shake</p>
                    </NavLink>
                </div>
                <div className='col-3 col-md-2 text-center'>
                <NavLink to="/DisplayByItem">
                    <img className='img-fluid' style={{borderRadius:"50%"}} src={chicken} width={"150"} />
                    <p style={{fontSize:16,fontWeight:'bold',textDecoration:'none',color:'black'}}>Shake</p>
                    </NavLink>
                </div>
                 

            </div>
        </div>
        
    </div>
  )
}

export default OrderByItem;