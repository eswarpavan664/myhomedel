import React,{useState,useEffect} from 'react'
import Nav from './Nav';
import Comp_for_home from './Comp_for_home';
import { Ip } from './../constants/Ip';
import { NavLink } from 'react-router-dom';

function PresentOrdres() {
    const userid =localStorage.getItem('user');
  
    const [Myorders,setMyordres] = useState([]);
   const GetItems=()=>{
      fetch(Ip+'/GetUserOrders?id='+userid,{
        headers:new Headers({
          Authorization:"Bearer " 
        })
        }).then(res=>res.json())
        .then(data=>{ 
        
         
          setMyordres(data);
          
           
           
        }
        )
    }
  
    useEffect(()=>{
      GetItems();
    })
  
    return (
      <div> 
      <Nav/>
      <div class="m_ pt-md-4 pt-3" style={{background:"rgb(255,255,255)"}}>
                         
    
                         {Myorders.length>0?
     
                         <>
                           {Myorders.map((item)=>(
     
                             <div>
                                 {item.OrderStatus!=="Delivered"?
  
                                 <div className='row align-items-center justify-content-center pb-2' style={{borderBottom:"1px solid lightgray"}}>
                                     <div className='col-3'>
                                         <img className='img-fluid rounded' src='https://b.zmtcdn.com/data/dish_photos/8d1/6df584834e5252fa5663c4e4d86618d1.jpg?fit=around|130:130&crop=130:130;*,*' />
                                     </div>
                                     <div className='col-3'>
                                         <p className='font-weight-bold'>{item.OrderStatus}</p>
                                     </div>
                                     <div className='col-2'>
                                         <p className='text-danger'>₹{item.Amount}</p>
                                     </div>
                                     <div className='col-4'>
                                          {item.OrderStatus==="Delivered"?<h4>Done</h4>
                                            :null
                                          }
                                          {item.OrderStatus==="Pending"?
                                            <p>Waiting </p>:null
    
                                          }
                                          {item.OrderStatus==="Accepted"?
    
                                              <p>Order Accepted</p>:null
    
                                          }
                                          {item.OrderStatus==="AcceptedByDeliveryBoy"?
    
                                          <div className='row'>
                                             <NavLink to="/Tracking"> <button className='col-10 offset-1 btn btn-secondary'>Track</button></NavLink>
                                             <button className='col-10 offset-1 btn btn-danger mt-1'>Cancel</button>
                                         </div>:null
    
                                          }
                                          {item.OrderStatus==="Declain"?
                                            <p>Order Canceled by Restorent</p>
                                            :null
                                          }
                                     </div>
                                 </div>: null
  
                                 }
                            </div>
                           ))
     
                           }
                         </>:<h1>No Orders</h1>
                         }
     
                     </div>
  <Comp_for_home/>
      </div>
    )
}

export default PresentOrdres;