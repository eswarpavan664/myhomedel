/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { InAction,DeAction ,RemoveAll,QuantityAdd} from './../screens/redux/actions';
import { connect, Connect } from 'react-redux';
import { Ip } from './../constants/Ip';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Load from '../lotties/9091-empty-sad-shopping-bag.json'
import { NavLink, useLocation } from 'react-router-dom';
import OrderPlacedLoading from './../components/OrderPlacedLoading';
import { useState } from 'react';
import { useEffect } from 'react';



function Payment(props) {
  const {local_variable,DeAction,RemoveAll,QuantityAdd} =props;

  


let sum = local_variable.reduce(function(prev, current) {
  return prev +parseInt(current.ItemPrice)*current.Quantity;
}, 0);
 
var quantity=1;
let itemnames = local_variable.reduce(function(prev, current) {
  return prev +current.ItemName+"_"+current.ItemPrice+"_"+current.Quantity+"-";
}, "");

const location = useLocation()
const {AdminId,User,ShopName} = location.state
 
const [orderstatus,setorderstatus] =useState(false)
const [AddressData,setAddressData] =useState();
console.log("dsjdskj",User)
var address = User[0].Address.split("_")
const PlaceOrder =()=>{

  fetch(Ip+"/Orders",{
    method:"POST",
    headers: {
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({
    "CustomerName":User[0].Name,
    "ContactNo":User[0].PhoneNumber,
    "orderList":itemnames,
    "Amount":sum+tax,
    "CustomerAddress":AddressData,
    "CurrentLocation":"16.66-81.464",
    "OrderStatus":"Pending",
    "AdminId":AdminId,
    "CustomerId":User[0]._id,
    "DeliveryManId":"",
    "OrderOtp":val,
    "OrderId":AdminId+val,
    "ShopName":ShopName,
    "OrderTime":new Date().toLocaleString()

   })
  })
  .then(res=> setorderstatus(true))
 
}

useEffect(()=>{

},[local_variable])
 
var val = Math.floor(1000 + Math.random() * 9000);
 
var tax=29;
 
console.log(User[0].Name)

  return (
    <div>
        {!orderstatus?

          <div className='container-fluid'>

{local_variable.length>0?

  <div className='row mt-5'>
      <div className='col-md-5' >
        
          
        {local_variable.map((item,index)=>(
          <MyCart  data={item} local_variable={local_variable} DeAction={DeAction} QuantityAdd={QuantityAdd}/>
        ))

        }
        
        
      </div>
      
  <div className='col-md-7'  style={{borderLeft:"1px solid lightgray"}}>

       <div className='container' style={{width:'80%'}}>
       <div className='d-flex justify-content-between'>
        <p>Item Amount: </p>
        <p>₹{sum}</p>
      </div>
      <div className='d-flex justify-content-between'>
        <p>Tax: </p>
        <p>₹{tax}</p>
      </div>
      <div className='d-flex justify-content-between'>
        <p>Total Amount: </p>
        <p className='text-danger'>₹{sum+tax}</p>
      </div>
       </div>

    <hr />
    <div>
        <div className='container'>
            <form>
                <div className='d-flex mt-1 mb-2' style={{justifyContent:"space-evenly"}}>
                    <input type={"radio"} name={"adder"} onClick={()=>setAddressData(User[0].Address)} />
                    <div style={{ border:"1px solid black",width:"430px",padding:"15px",borderRadius:"15px"}}>
                        <h4>{address[0]}</h4>
                        <p>{address[1]}</p>
                        <p>{address[2]}</p>
                    </div>
                </div>

               
              
            </form>
            
        </div>
    </div>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Welcome there,</strong> as of now, online payments are not working here.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <form>
          <input type={"radio"} value="Cash On Delivery" /> Cash On Delivery
          <br />
          <input type={"reset"} className="btn btn-outline-info mt-3" />
        </form>
        <div className='row mt-3 text-center mb-5'>
          {AddressData?<button className='col-10 offset-1 btn btn-danger' 
           onClick={PlaceOrder}>Place Order</button>:
           <button className='col-10 offset-1 btn btn-danger' disabled 
           onClick={PlaceOrder}>Place Order</button>}
        </div>

  </div>
</div>: <div style={{marginTop:'20%'}}>
     <Player
                      autoplay
                      loop
                      src={Load}
                      style={{ height: '300px', width: '300px' }}
                  >
                  
                  </Player>
                  <h2 style={{textAlign:'center'}}>No Items In Cart</h2> 
                  <NavLink to="/"><h4>Go To Home</h4></NavLink>
     </div>

}

</div>:<OrderPlacedLoading Data={User}/>
          
        }
    </div>
  )
}

function MyCart(props){
  const {local_variable,InAction,DeAction,QuantityAdd} =props;
   
 
const [Value,setValue] =useState(props.data.Quantity);
 
const QuantityUpdate=(e)=>{
   setValue(e.target.value)
   QuantityAdd(props.data,e.target.value)

}
useEffect(()=>{

},[Value])

  return(
    <div className='row d-flex align-items-center mb-4 pb-2' style={{borderBottom:"1px solid gray"}}>
    <div className='col-2'>
      <img className='img-fluid' src={Ip+"/"+props.data.ProductImage} style={{borderRadius:"8px"}} />
    </div>
    <div className='col-6'>
      <h5>{props.data.ItemName}</h5>
      <p className='d-none d-md-block'>{props.data.ItemDiscription}</p>
    </div>
    <div className='col-2'>
    <label> Quantity </label>
            <input
                type='number'
                step="1"
                min='1'
                max='5'
                value={Value}
                onChange= {(e) => QuantityUpdate(e)}
              />
      <button className='btn btn-outline-danger' onClick={()=>DeAction(props.data)}>Remove</button>
    </div>
  </div>
  )
}



const mapStateToProps = state =>({
  local_variable :state.item
})

export default connect(mapStateToProps,{InAction,DeAction,RemoveAll,QuantityAdd})(Payment);