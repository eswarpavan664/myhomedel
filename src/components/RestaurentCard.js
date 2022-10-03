/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState,useEffect} from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import {
 
 
  useNavigate ,
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Ip } from './../constants/Ip';


import Load from '../lotties/96526-search-not-found.json'
import Loader from './Loader';
import Restorent from './../screens/Restorent';

function RestaurentCard(props) {
  const [Restaurents,setRestaurents] = useState([]);

   
  const place = "bhimavaram";
  const  GetData = async ()=>{
   //  const token = await  localStorage.getItem("token")
    // console.log("Dashboard = "+token)
   fetch(Ip+'/GetRestorents?id='+props.Place,{
   headers:new Headers({
     Authorization:"Bearer " 
   })
   }).then(res=>res.json())
   
   .then(data=>{ 
   
      
    setRestaurents(data);
     
    //console.log("ksjdajksdjkashdahkddlkaslk= ",data);
     if(data.length>0){
      setse(1)
     }
    if(data.length===1)
    setse(2)
    //alert(data.length)
   }
   )
  }

useEffect(()=>{
   GetData();
   
},[])


useEffect(()=>{
  GetData();
  
},[props.Place])

//console.log("saduash",props.user)
//console.log("data = ",Restaurents)
const [se,setse] =useState(0);
    return (
    <section style={{paddingBottom:"80px"}}>
          
        <div className='container mt-5'>
        {se===0?
             <Loader/>

          :
          
          null
        }
       {se===1?
          <div className='row text-decoration-none'>
                {Restaurents.map((item)=>(
                   <>
                    {item.Role==="Admin"?<div className='col-md-4 mb-4'>
                    <NavLink to="/Restaurants"
                       state={{
                        
                         ShopId: item.AdminId,
                         ShopName:item.ShopName,
                         Address:item.Address,
                         ShopPhoto:item.ShopPhoto,
                         PhoneNumber:item.PhoneNumber,
                         AdminId:item.AdminId,
                          User:props.user,
                          ShopType:item.ShopType,
                          Deliverycharges:item.Deliverycharges,
                          DeliveryTime:item.DeliveryTime

                         }}
                         style={{textDecoration:'none'}}
                    >
                         
                        <div class="card sec_one_card">
                          <img class="card-img-top img-fluid " src={item.ShopPhoto?item.ShopPhoto:"https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2975%2Ftrend20201030124515.jpg"} style={{borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}} alt={"Card image cap"} width="150" />
                          <div class="card-body">
                            <h5 style={{textDecoration:'none'}} class="card-title text-success text-decoration-none">{item.ShopName}</h5>
                            {item.ShopType==="Restaurant"?<p className='font-weight-light m-0'>Biryani, Fast Food, Pizza,Curry,Chicken</p>:null}
                 {item.ShopType==="Meet Shop"?<p className='font-weight-light m-0'>Chicken, Fish, Prawns, Crabs</p>:null}
                 {item.ShopType==="Medical"?<p className='font-weight-light m-0'>All Medical Tablets</p>:null}
                 {item.ShopType==="Vegetable Shop"?<p className='font-weight-light m-0'>All Vegetables</p>:null}
                 {item.ShopType==="Grocery"?<p className='font-weight-light m-0'>Oils,Soaps,and etc</p>:null}
           
                            <div className='row text-center text-success'>
                              <div className='col-4'>
                                  <div className='row'>
                                    <div className='col-12 fw-bold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                </svg> {item.Deliverycharges?item.Deliverycharges:10}
                                    </div>
                                    <div className='col-12 font-weight-light'>
                                    <p className='ms-1 text-dark fw-bold ' style={{fontSize:"12px"}}>Delivery</p>
                                    </div>
                                  </div>
                              </div>
                              <div className='col-4'>
                              <div className='row'>
                              <div className='col-12 fw-bold'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                      <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
                      <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>
                    </svg> {item.DeliveryTime?<span>{item.DeliveryTime} min</span> :  <span>30 min</span> }
                                    </div>
                                    <div className='col-12 font-weight-light'>
                                    <p className='text-dark fw-bold ms-1' style={{fontSize:"12px"}}>Time</p>
                                    </div>
                                  </div>
                              </div>
                              <div className='col-4'>
                              <div className='row'>
                              <div className='col-12 fw-bold'>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg> 4.3
                                    </div>
                                    <div className='col-12 font-weight-light'>
                                      <p className='text-dark fw-bold' style={{fontSize:"10px"}}>(200+ Review)</p>
                                    </div>
                                  </div>
                              </div>
                            </div>
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

  )
}

export default RestaurentCard;