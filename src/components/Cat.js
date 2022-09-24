/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react'
import '../css/Cat.css'
import { NavLink } from 'react-router-dom';

import groceryicon from '../images/Groceries.png';
import meaticon from '../images/Meat.png';
import food from '../images/Food.png'
import veg from '../images/fruits-and-vegetables.png'
import fresh from '../images/fresh.png'
function Cat(props) {
    const [Temp,setTemp] =useState("Food");
  return (
    <div className='container' style={{width:"95%"}}>
    <div class=" row text-center mt-5">
        <div className='col-md-3 col-4 p-0 px-1'>
          <div class=" text-center align-items-center border py-2"       onClick={()=>setTemp("Food")}>
<NavLink 
                     to="/ShopType" 
                     
                     state={{
                         shoptype:"Restaurant"
                    }}
                     >                
<img src={food} class=" img-fluid" width={"50"} alt="..."/>
            <div class="card-body">
              <p class="card-title m-0">Food</p>

             </div>
</NavLink>
           </div>
        </div>
      
        <div className='col-md-3 col-4 p-0 px-1'>
          <div class=" align-items-center border py-2"  onClick={()=>setTemp("Grocery")}>
            <NavLink
                     to="/ShopType" 
                     
                     state={{
                         shoptype:"Grocery"
                    }}
                    
                    >
     <img  src={groceryicon} class=" img-fluid" width={"50"} alt="..."/>
            <div class="card-body">
              <p class="card-title m-0">Grocery</p>
             </div>
          </NavLink>
           </div>
        </div>


        <div className='col-md-3 col-4 p-0 px-1'>
          <div class=" align-items-center border py-2"  onClick={()=>setTemp("Meat")}>
            <NavLink
                      to="/ShopType" 
                     
                     state={{
                         shoptype:"Meet Shop"
                    }}
                    >
                        
<img src={meaticon} class=" img-fluid" width={"50"} alt="..."/>
            <div class="card-body">
              <p class="card-title m-0">Meat</p>
             </div>
</NavLink>
           </div>
        </div>


        <div className='col-md-3 col-4 p-0 px-1 mt-md-0 mt-5'>
          <div class=" align-items-center border py-2"                     onClick={()=>setTemp("Vegetable")}>
<NavLink
                   
                   to="/ShopType" 
                     
                     state={{
                         shoptype:"Vegetable Shop"
                    }}
                   >
            <img src={veg} class=" img-fluid" width={"50"} alt="..."/>
            <div class="card-body">
              <p class="card-title m-0">Veggies</p>
             </div>
</NavLink>
           </div>
        </div>

        <div className='col-md-3 col-4 p-0 px-1 mt-5'>
          <div class=" align-items-center border py-2"  onClick={()=>setTemp("Fresh")}>
         <NavLink
                      to="/ShopType" 
                     
                     state={{
                         shoptype:"Fresh"
                    }}
                    >   
<img  src={fresh} class=" img-fluid" width={"50"} alt="..."/>
            <div class="card-body">
              <p class="card-title m-0">Fresh</p>
             </div>
</NavLink>
           </div>
        </div>
    </div>
</div>
  )
}

export default Cat;