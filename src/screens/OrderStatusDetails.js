/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react'
import Comp_for_home from '../components/Comp_for_home';
import Nav from '../components/Nav';
import { useLocation } from 'react-router-dom';
import { Ip } from './../constants/Ip';
import StatusBar from './../components/StatusBar';

function OrderStatusDetails(props) {
    const location = useLocation()
    const {ShopName,orderList,Amount,DeliveryManId,OrderOtp,OrderStatus,OrderTime,OrderId} = location.state
    const [Data,setData] =useState([]);

    const GetData=()=>{

                
        fetch(Ip+'/GetDeliveryLocation?id='+DeliveryManId,{
            headers:new Headers({
            Authorization:"Bearer " 
            })
            }).then(res=>res.json())
            
            .then(data=>{ 
            
            
            setData(data)
            console.log("Data = ",data)
            
     
            
            }
            )
    }
        
    const item = orderList.split("*")
    item.pop(-1)
     const [Items,setItem] =useState(item)
     console.log(item)   
  return (
    <> 
    <Nav/>
    <div className='container'>
    <div className='row mt-3'  >
        <div className='col-12 d-flex justify-content-between align-items-center'>
            <p className='m-0' style={{fontSize:"12px"}}>Order ID: {OrderId}</p>
            <p className='m-0' style={{fontSize:"12px"}}>OTP : {OrderOtp}</p>
            <p className='m-0 d-flex align-items-center' style={{fontSize:"14px"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            </svg> <span className='ml-1'>{OrderTime}</span></p>
        </div>

        <div className='col-12 mt-3 m-0 d-flex justify-content-between align-items-center'>
            <p className='m-0' style={{fontWeight:"bold", fontSize:"14px"}}>Delivery</p>
            <p className='m-0 rounded' style={{color:"white",background:"lightgreen",fontSize:"12px",padding:"3px"}}>Cash on delivery</p>
        </div>
        <hr style={{borderTop:"1px solid lightgray",width:"100%"}} />
        <div className='col-12 d-flex justify-content-between align-items-center'>
            <p className='m-0 ' style={{fontSize:"14px"}}>Item: <span className='text-success'>1</span></p>
            <p className='m-0  d-flex align-items-center' style={{fontSize:"14px"}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-dot" viewBox="0 0 16 16">
<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg><span>{OrderStatus}</span></p>
        </div>
        <hr style={{borderTop:"1px solid lightgray",width:"100%"}} />
        <div className='col-12 '>
           {Items.map((it)=>(
            <div className='row align-items-center mt-4'>
                <div className='col-3'>
                    <img className='img-fluid rounded' src={it.split("_")[3]} /> 
                </div>
                <div className='col-5'>
                    <p className='m-0 font-weight-bold text-truncate' style={{fontSize:"14px"}}>{it.split("_")[0]}</p>
                    <p className='m-0 font-weight-bold' style={{fontSize:"14px"}}>₹{it.split("_")[1]}</p>
                    <p className='m-0 text-truncate' style={{fontSize:"12px"}}><span className='font-weight-bold'>Variation:</span> Size - regular</p>
                </div>
                <div className='col-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='m-0' style={{fontSize:"14px"}}>Quantity: <span className=''>{it.split("_")[2]}</span></p>
                        </div>
                        <div className='col-12 text-center'>
                        <p className='m-0 rounded' style={{color:"white",background:"lightgreen",fontSize:"12px",padding:"3px"}}>Non-veg</p>

                        </div>
                    </div>
                </div>
            </div>
           ))

           }
        </div>
        <hr style={{borderTop:"1px solid lightgray",width:"100%"}} />

        <div class="ml-2">
        <StatusBar status={OrderStatus==="Pending"? 1:OrderStatus==="AcceptedByDeliveryBoy"?2:OrderStatus==="AcceptedByRestorent"?3:OrderStatus==="Delivered"?4:OrderStatus==="declin"?5:OrderStatus==="CanceledByCustomer"?6:0}/>
        </div>
        <div className='col-12'>
            <p className='m-0 font-weight-bold'>Track Your Order</p>
           
        </div>
        <p className='m-0 col-12'>Restaurant Details</p>
        <div className='row mt-2'>
            <div className='col-3 text-center'>
                <img className='img-fluid' src='https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png' width={"80%"} />
            </div>
            <div className='col-9'>
                <p style={{fontSize:"14px"}} className='m-0 font-weight-bold m-0'>{ShopName}</p>
                <p style={{fontSize:"14px"}} className='m-0 font-weight-light'>Pizza|Burger|Fried Chicken</p>
            </div>
        </div>
        <div className='col-12 d-flex justify-content-between align-items-center mt-2'>
            <p className='m-0' style={{fontSize:"14px",fontWeight:"light"}}>Item Price</p>
            <p className='m-0' style={{fontSize:"14px",fontWeight:"light"}}>₹{Amount}</p>
        </div>
        
        <hr style={{width:"100%"}} />

        <div className='col-12 d-flex justify-content-between align-items-center'>
            <p className='m-0' style={{fontSize:"14px",fontWeight:"light"}}>Subtotal</p>
            <p className='m-0' style={{fontSize:"14px",fontWeight:"light"}}>₹{Amount}</p>
        </div>
        <div className='col-12 d-flex justify-content-between align-items-center'>
            <p className='m-0' style={{fontSize:"14px",fontWeight:"light"}}>Discount</p>
            <p className='m-0' style={{fontSize:"14px",fontWeight:"light"}}>(-)₹0</p>
        </div>
        
        <div className='col-12 d-flex justify-content-between align-items-center'>
            <p className='m-0' style={{fontSize:"14px",fontWeight:"light"}}>Delivery Free</p>
            <p className='m-0' style={{fontSize:"14px",fontWeight:"light"}}>(-)₹30</p>
        </div>
        <hr style={{width:"100%",background:"green"}} />
        <div className='col-12 d-flex justify-content-between align-items-center'>
            <p className='m-0 text-success' style={{fontSize:"14px",fontWeight:"bold"}}>Total Amount</p>
            <p className='m-0 text-success' style={{fontSize:"14px",fontWeight:"bold"}}>₹{Amount}</p>
        </div>
    </div>
</div>
<Comp_for_home/>
</>
  )
}

export default OrderStatusDetails;