/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { Ip } from './../constants/Ip';
//import { NavLink } from 'react-router-dom';

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import {
 
 
  useNavigate ,
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Load from '../images/101961-non-data-found.json'
import Comp_for_home from './../components/Comp_for_home';
import Nav from './../components/Nav';
import Loader from './../components/Loader';

function ShopTypeScreen(props) {
  const location = useLocation()
const {shoptype} = location.state
const [Restaurents,setRestaurents] =useState([]);
const  GetData = async ()=>{
  //  const token = await  localStorage.getItem("token")
   // console.log("Dashboard = "+token)
  fetch(Ip+'/GetShopsByType?id='+shoptype,{
  headers:new Headers({
    Authorization:"Bearer " 
  })
  }).then(res=>res.json())
  
  .then(data=>{ 
  
     
   setRestaurents(data);
    
         console.log("shoptype Data= ",data);
    if(data.length>0){
      setse(1)
    }
    if(data.length===0){
      setse(2)
    }
   
  }
  )
 }
useEffect(()=>{
  GetData();
})
const [se,setse] =useState(0);
  return (
    <>
    <section >
     <Nav/>
     <div className='container mt-5'>
        {se===0?
             <Loader/>

          :
          
          null
        }
       {se===1?
          <div className='row pb-5'>
                {Restaurents.map((item)=>(
                   <>
                    {item.Role==="Admin"?<div className='col-md-4 mb-4'>
                    <NavLink to="/Restorent"
                       state={{
                        
                         ShopId: item.AdminId,
                         ShopName:item.ShopName,
                         Address:item.Address,
                         ShopPhoto:item.ShopPhoto,
                         PhoneNumber:item.PhoneNumber,
                         AdminId:item.AdminId,
                          User:props.user
                         }}
                    >
                         
                        <div class="card sec_one_card">
                          <img class="card-img-top img-fluid" src={item.ShopPhoto?item.ShopPhoto:"https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2975%2Ftrend20201030124515.jpg"} style={{borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}} alt={"Card image cap"} width="150" />
                          <div class="card-body">
                            <h5 class="card-title">{item.ShopName}</h5>
                            <p class="card-text text-truncate">Enjoy the food</p>
                            <p style={{color:'black',fontSize:25}}>{item.Address}</p>
                          </div>
                        </div>
                      
                    </NavLink>
                    </div>:null
                      
                    }
                   </>
                )       
                )}
                 
            </div>:null


          }
          {se===2?<h1>
          
            <Player
                                    autoplay
                                    loop
                                    src={Load}
                                    style={{ height: '300px', width: '300px' }}
                                    
                                >
                                </Player>
                                
          No Shops Found....</h1>:null

          }
             
        </div>
</section>
 <Comp_for_home/>
 </>
  )
}

export default ShopTypeScreen;