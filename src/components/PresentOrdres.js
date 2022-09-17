import React,{useState,useEffect} from 'react'
import Nav from './Nav';
import Comp_for_home from './Comp_for_home';
import { Ip } from './../constants/Ip';
import { NavLink } from 'react-router-dom';
import Loader from './Loader';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Load from '../lotties/20779-skeleton-loading-card.json'
import Load2 from '../lotties/93483-order.json'
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

          <div class="m_ pt-md-4 pt-3 container" style={{backgroundColor:"rgba(211,211,211,0.2)",minHeight:"100vh",maxHeight:"auto"}}>
                         
    





                        
                           {Myorders.map((item)=>(
     
                             <div className='text-center' >
                                 {item.OrderStatus!=="Delivered"?
  
                                 <div className='row align-items-center justify-content-center pb-2 my-2 mx-1' style={{backgroundColor:"white",borderRadius:"15px"}}>
                                     <div className='col-md-2  col-3 py-3 m-0 '>
                                         <img className='img-fluid rounded' src='https://b.zmtcdn.com/data/dish_photos/8d1/6df584834e5252fa5663c4e4d86618d1.jpg?fit=around|130:130&crop=130:130;*,*' />
                                     </div>
                                     
                                     
                                     <div className='col-6'>
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
                                             <NavLink to="/Tracking"> <button className='col-10 offset-1 btn btn-secondary m-0'>Track</button></NavLink>
                                             
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

export default PresentOrdres;