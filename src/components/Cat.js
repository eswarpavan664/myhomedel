/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react'
import '../css/Cat.css'
import { NavLink } from 'react-router-dom';

import groceryicon from '../images/Groceries.png';
import meaticon from '../images/Meat.png';
import food from '../images/Food.png'
function Cat(props) {
    const [Temp,setTemp] =useState("Food");
  return (
    <div className='container-fluid m-0 p-2'>
        <div className='container bg-light p-4 rounded'>
            <div className='row text-center'>
                <div className=' col-md-3 col-4' >
                    <div className='cat_card_hov' style={{boxShadow:"0 0 5px gray",display:"inline-block",padding:"15px",borderRadius:"8px",backgroundColor:Temp==="Food"?"orange":"white",cursor:"pointer"}}
                            onClick={()=>setTemp("Food")}
                    >
                         <NavLink 
                         to="/ShopType" 
                         
                         state={{
                             shoptype:"Restaurant"
                        }}
                         >
                         <img className='img-fluidx' src={food} width={"50"} />
                        <p className='m-0' style={{textDecoration:'none',color:'black'}}>Food</p>
                         </NavLink>
                    </div>
                </div>
                <div className='col-md-2 col-4'>
                    <div className='cat_card_hov' style={{boxShadow:"0 0 5px gray",display:"inline-block",padding:"15px",borderRadius:"8px",cursor:"pointer",backgroundColor:Temp==="Grocery"?"orange":"white"}}
                    onClick={()=>setTemp("Grocery")}
                    >
                        <NavLink
                         to="/ShopType" 
                         
                         state={{
                             shoptype:"Grocery"
                        }}
                        
                        >
                        <img className='img-fluidx' src={groceryicon} width={"50"} />
                        <p className='m-0' style={{textDecoration:'none',color:'black'}}>Grocery</p>
                        </NavLink>
                    </div>
                </div>
                <div className='col-md-2 col-4'>
                    <div className='cat_card_hov' style={{boxShadow:"0 0 5px gray",display:"inline-block",padding:"15px",borderRadius:"8px",cursor:"pointer",backgroundColor:Temp==="Meat"?"orange":"white"}}
                    
                    onClick={()=>setTemp("Meat")}
                    >
                        <NavLink
                          to="/ShopType" 
                         
                         state={{
                             shoptype:"Meet Shop"
                        }}
                        >
                            
                        <img className='img-fluidx' src={meaticon} width={"50"} />
                                                <p className='m-0' style={{textDecoration:'none',color:'black'}}>Meat</p>
                        </NavLink>
                    </div>
                </div>
                <div className='col-md-2 col-4 mt-md-0 mt-5'>
                    <div className='cat_card_hov' style={{boxShadow:"0 0 5px gray",display:"inline-block",padding:"15px",borderRadius:"8px",cursor:"pointer",backgroundColor:Temp==="Medical"?"orange":"white"}}
                    onClick={()=>setTemp("Medical")}
                    >
                        <NavLink
                        
                        to="/ShopType" 
                         
                         state={{
                             shoptype:"Medical"
                        }}
                        >
                            <img className='img-fluidx' src='https://cdn-icons-png.flaticon.com/512/562/562678.png' width={"50"} />
                            <p className='m-0' style={{textDecoration:'none',color:'black'}}>Medical</p>
                        </NavLink>
                    </div>
                </div>
                <div className='col-md-2 col-4 mt-md-0 mt-5'>
                    <div className='cat_card_hov' style={{boxShadow:"0 0 5px gray",display:"inline-block",padding:"15px",borderRadius:"8px",cursor:"pointer",backgroundColor:Temp==="Vegetables"?"orange":"white"}}
                    onClick={()=>setTemp("Vegetable")}
                    >
                       <NavLink
                       
                       to="/ShopType" 
                         
                         state={{
                             shoptype:"Vegetable Shop"
                        }}
                       >
                       <img className='img-fluidx' src='https://cdn-icons-png.flaticon.com/512/562/562678.png' width={"50"} />
                        <p className='m-0' style={{textDecoration:'none',color:'black'}}>Vegetables</p>
                       </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cat;