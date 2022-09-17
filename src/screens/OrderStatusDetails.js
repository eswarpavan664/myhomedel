import React,{useState,useEffect} from 'react'
import Comp_for_home from '../components/Comp_for_home';
import Nav from '../components/Nav';
import { useLocation } from 'react-router-dom';
import { Ip } from './../constants/Ip';

function OrderStatusDetails(props) {
    const location = useLocation()
    const {ShopName,orderList,Amount,DeliveryManId,OrderOtp,OrderStatus,OrderTime} = location.state
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
        
        
  return (
    <div> 
    <Nav/>
         <h1>OrderStatusDetails</h1>
    <Comp_for_home/>
    
    </div>
  )
}

export default OrderStatusDetails;