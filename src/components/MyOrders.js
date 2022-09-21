import React,{useState,useEffect} from 'react'
import Nav from './Nav';
import Comp_for_home from './Comp_for_home';
import { Ip } from './../constants/Ip';
import { NavLink } from 'react-router-dom';
import Loader from './Loader';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Load from '../lotties/20779-skeleton-loading-card.json'
import Load2 from '../lotties/93483-order.json'
function MyOrders(props) {
  const userid =localStorage.getItem('user');
  
  const [Myorders,setMyordres] = useState([]);
 const GetItems=()=>{
    fetch(Ip+'/GetUserHistoryOrders?id='+userid,{
      headers:new Headers({
        Authorization:"Bearer " 
      })
      }).then(res=>res.json())
      .then(data=>{ 
      
       
        setMyordres(data);
        
        if(data.length>0){
          setse(1);
          
         }
         if(data.length===0){
          setse(2);
         }
         
      }
      )
  }

  useEffect(()=>{
    GetItems();
  })
  const [se,setse] =useState(0);
  console.log("history orders = ",Myorders);
  return (
    <div> 
    <Nav/>
    <>
        {se===0?
          <Lode/>

          :
          
          null
        }
        </>
          <>
            {se===1?

              <div class="m_ pt-md-4 pt-3" style={{background:"rgb(255,255,255)"}}>
                       
  
                       {Myorders.length>0?
   
                       <>
                         {Myorders.map((item)=>(
   
                           <div>
                               {item.OrderStatus==="Delivered" ||  item.OrderStatus==="CanceledByCustomer"?

                               <NavLink to="/OrderStatusDetails"
                                      
                                      state={{
                                          
                                          ShopName:item.ShopName,
                                          orderList:item.orderList,
                                          Amount:item.Amount,
                                          DeliveryManId:item.DeliveryManId,
                                          OrderOtp:item.OrderOtp,
                                          OrderStatus:item.OrderStatus,
                                          OrderTime:item.OrderTime





                                          }}
                                      
                                      
                                      
                                      >
                                      <div className='row align-items-center justify-content-center pb-2 my-2 mx-1' style={{backgroundColor:"pink",borderRadius:"15px"}}>
                                     <div className='col-md-2  col-3 py-3 m-0 '>
                                         <img className='img-fluid rounded' src='https://b.zmtcdn.com/data/dish_photos/8d1/6df584834e5252fa5663c4e4d86618d1.jpg?fit=around|130:130&crop=130:130;*,*' />
                                     </div>
                                     
                                     
                                     <div className='col-6'>
                                          {item.OrderStatus==="Delivered"?<h4 style={{color:'black'}}>Done</h4>
                                            :null
                                          }
                                          {item.OrderStatus==="Pending"?
                                          <>   <p style={{color:'black'}}>Waiting </p><button className='col-5 offset-1 btn btn-secondary m-0'  >Cancel</button></>
                                          :null
    
                                          }
                                          {item.OrderStatus==="Accepted"?
                                            <>
                                            <p style={{color:'black'}}>Order Accepted</p>
                                            <button className='col-5 offset-1 btn btn-secondary m-0' >Cancel</button>
                                            </>
                                              :null
    
                                          }
                                          {item.OrderStatus==="CanceledByCustomer"?
                                            <>
                                            <p style={{color:'black'}}>Canceled By You</p>
                                             
                                            </>
                                              :null
    
                                          }
                                          {item.OrderStatus==="AcceptedByDeliveryBoy"?
    
                                          <div className='row'>
                                             <NavLink to="/Tracking"
                                          
                                             state={{
                                              DeliveryManId:"dahj",
                                              }}
                              
                                             > <button className='col-5 offset-1 btn btn-secondary m-0'>Track</button></NavLink>
                                             
                                         </div>:null
    
                                          }
                                          {item.OrderStatus==="Declain"?
                                          <> <p style={{color:'black'}}>Order Canceled by Restorent</p><button className='col-5 offset-1 btn btn-secondary m-0'>Cancel</button></>
                                            
                                            :null
                                          }
                                     </div>
                                 </div>
                                      </NavLink>: null

                               }
                          </div>
                         ))
   
                         }
                       </>:<h1>No history of Orders</h1>
                       }
   
                   </div>:null

            }
          </>


                   <>
      {se===2?
          
          <Player
                                  autoplay
                                  loop
                                  src={Load2}
                                  style={{ height: '300px', width: '300px' }}
                                  
                              >
                              </Player>
                              
        :null

        }
        </>
<Comp_for_home/>
    </div>
  )
}


function Lode(){
  return(
    <>
      <Player
                                  autoplay
                                  loop
                                  src={Load}
                                  style={{ height: '300px', width: '300px' }}
                                  
                              >
                              </Player>

                              <Player
                                  autoplay
                                  loop
                                  src={Load}
                                  style={{ height: '300px', width: '300px' }}
                                  
                              >
                              </Player>

                              <Player
                                  autoplay
                                  loop
                                  src={Load}
                                  style={{ height: '300px', width: '300px' }}
                                  
                              >
                              </Player>

    </>
  )
}

export default MyOrders;