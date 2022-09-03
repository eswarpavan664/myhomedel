import React,{useState,useEffect} from 'react'
import { Ip } from './../constants/Ip';

function Orders(props) {
  const [Items,setItems] = useState();
    const GetItems=()=>{
      fetch(Ip+'/GetOrders?id='+props.id,{
        headers:new Headers({
          Authorization:"Bearer " 
        })
        }).then(res=>res.json())
        .then(data=>{ 
        
         
          setItems(data);
          
              console.log(data);
           
        }
        )
    }
    useEffect(()=>{
      GetItems();
    })
    const [DisplayType,setDisplayType] =useState("Pending")
  return (
     <>
       <div style={{flexDirection:'row'}}>
       <button style={{backgroundColor:DisplayType==="Delivered"?'green':null}}  onClick={()=>setDisplayType("Delivered")}>Delivered</button>
       <button style={{backgroundColor:DisplayType==="Pending"?'green':null}}  onClick={()=>setDisplayType("Pending")}>Pending</button>
       <button style={{backgroundColor:DisplayType==="Accepted"?'green':null}}  onClick={()=>setDisplayType("Accepted")}>Accepted</button>
       <button style={{backgroundColor:DisplayType==="Declain"?'green':null}}  onClick={()=>setDisplayType("Declain")}>Declined</button>
       </div>
      {Items?  
      <div> 
      {Items.map((item)=>(
          
          <ItemCards 
            CustomerName={item.CustomerName}
            ContactNo={item.ContactNo}
            orderList={item.orderList.split(",")}
            Amount={item.Amount}
            CustomerAddress={item.CustomerAddress}
            CurrentLocation={item.CurrentLocation}
            CustomerId={item.CustomerId}
            DeliveryManId={item.DeliveryManId}
            OrderStatus={item.OrderStatus}
            id={item._id}
            displaytype={DisplayType}

                /> 
       ))

       }
       </div>
      :<h1>No orders</h1>

      }
     </>
  )
}

function ItemCards(props){



  const AcceptOrDeclain=(status)=>{
   
    fetch(Ip+"/OrderAcceptanceStatus",{
      method:"PUT",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "orderId":props.id,
       "status":status
     })
    })
    .then(res=>{

        statusupdate(status)
        alert("Order "+status);
    })
  }

  const [statusupdate,setstatusupdate]=useState("");
  return(
    <div>

      {props.OrderStatus===props.displaytype? 
      
      <>

        
<div class="container">
        <div class="row rw text-center nav ">
            <div class="col-12 ">
                <div class="row  justify-content-center d-flex align-items-center">
                    <div class="col-md-3 col-6 ">
                        <div class="row">
                            <div class="col-12">
                                <p>{props.CustomerName}</p>
                                <p>{props.ContactNo}</p>
 						<p>{props.Amount}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-6 ">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sit ipsa, repellat quibusdam consequatur quam.</p>
                    </div>
                    <div class="col-md-3 col-4 ">
                        <button class="btn btn-secondary">Order Status:- {props.OrderStatus}</button>
                    </div>
                    <div class="col-8 col-md-3 ">
                         {props.OrderStatus==="Delivered"?<h2>Done</h2>:
                          null

                         }

                         {props.OrderStatus==="Accepted"?

                         <h2>Waiting...</h2>:null

                         }
                         {props.OrderStatus==="Pending"?

                         <div class="row">
                            {statusupdate===""?
                              <>
                              <button class="btn btn-danger col-12"  onClick={()=>AcceptOrDeclain("Declain")}>Declain</button>
                                <button class="btn btn-info col-12 mt-2" onClick={()=>AcceptOrDeclain("Accepted")}>Accept</button>
                                  
                              </>:null
                            }
                            {statusupdate==="Declain"?
                              <>
                                    <h2>Order Declined</h2>
                                  
                              </>:null
                            }
                            {statusupdate==="Accepted"?<h2>Order Accepted</h2>:null

                            }
                        </div>:null

                         }

                         {props.OrderStatus==="Declain"?

                          <h2>Order Declined</h2>:null

                         }
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr   />
       
      </>
      
      :null

      }
    </div>
  )
}

export default Orders;