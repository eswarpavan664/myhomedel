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

          <div style={{paddingBottom:"100px"}}>
          {Myorders.map((item)=>(

           <Cards item={item}  />
          ))}
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




function Cards(props){

  const [Items,setItems] =useState([]);
  const CancelOrder=(orderid)=>{

    fetch(Ip+"/OrderCancel",{
      method:"PUT",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
      "orderId":props.item._id,
      "status":"CanceledByCustomer"
     })
    })
    .then(res=>res.json())
  }

console.log("sdhsad = ",props.item.OrderStatus)
   const ite = props.item.orderList.split("*");
   ite.pop(-1);
  // console.log("item = ",ite);

  return(
    <> 
    {props.item.OrderStatus==="Delivered" || props.item.OrderStatus==="CanceledByCustomer" || props.item.OrderStatus==="Declain"?

                
          <div className='container-fluid row px-1 mt-1 align-items-center m-0 border'>
                
                    <div className='col-3'>
                    <NavLink to="/OrderStatusDetails"

                                state={{

                                ShopName:props.item.ShopName,
                                orderList:props.item.orderList,
                                Amount:props.item.Amount,
                                DeliveryManId:props.item.DeliveryManId,
                                OrderOtp:props.item.OrderOtp,
                                OrderStatus:props.item.OrderStatus,
                                OrderTime:props.item.OrderTime,
                                OrderId:props.item.OrderId,
                                OrderTime:props.item.OrderTime






                                }}



                                >
                        <img src='https://b.zmtcdn.com/data/dish_photos/8d1/6df584834e5252fa5663c4e4d86618d1.jpg?fit=around|130:130&crop=130:130;*,*' className='img-fluid rounded'  />
                    </NavLink>
                    </div>

                    <NavLink to="/OrderStatusDetails"

                            state={{

                            ShopName:props.item.ShopName,
                            orderList:props.item.orderList,
                            Amount:props.item.Amount,
                            DeliveryManId:props.item.DeliveryManId,
                            OrderOtp:props.item.OrderOtp,
                            OrderStatus:props.item.OrderStatus,
                            OrderTime:props.item.OrderTime,
                            OrderId:props.item.OrderId,
                            OrderTime:props.item.OrderTime






                            }}


                            className='col-6' 
                            >
                    <div  style={{color:'black'}}>
                    
                        <p className='m-0 font-weight-bold' style={{fontSize:"14px"}}>{props.item.ShopName}</p>
                        <p className='m-0 font-weight-lighter' style={{fontSize:"10px"}}>Landmark, City</p>
                        <p className='m-0 font-weight-bold text-success' style={{fontSize:"10px"}}>Opens tomorrow at 10:5Am</p>
                    </div>
                    </NavLink>
                    <div className='col-3'>
                        
                        <p className='m-0 text-center rounded mt-2' style={{color:"white",background:"coral",fontSize:"10px",cursor:'pointer'}} >{props.item.OrderStatus}</p>
                    </div>
                      <hr style={{width:"100%"}} />
                      {ite.length>0?
                       <>
                        {ite.map((it)=>(

                          <div className='col-12'  style={{color:'black'}}>
                     
                     <p className='m-0'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-square" viewBox="0 0 16 16">
                                             <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                             <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z"/>
                                         </svg>
                                         <span className='text-secondary mx-2'>{it.split("_")[2]}x</span>
                                         <span className='font-weight-bold'>{it.split("_")[0]}</span>
                     </p> 
                     <p className='ml-3 m-0 text-secondary'>Half</p> 
                 </div>
                        ))

                        }
                       </>
                      :null}
                      
                       <hr  className='m-0 p-0 mt-2' style={{width:"100%"}} />
                    <div className='col-12 d-flex align-items-center justify-content-between mt-2'>
                        <p className='m-0 text-secondary' style={{fontSize:'12px'}}>{props.item.OrderTime}</p>
                        <p className='m-0 font-weight-bold' style={{fontSize:"12px",color:'black'}}>₹{props.item.Amount}</p>
                    </div>
            </div>
            :null}
            </>
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