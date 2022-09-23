/* eslint-disable array-callback-return */
/* eslint-disable no-sequences */
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
import Comp_for_home from '../components/Comp_for_home';
import TransLoader from '../components/TransLoader';
import Loading from './Loading';
 
import '../css/PaymentApplication.css'


function Payment(props) {
      const {local_variable,DeAction,RemoveAll,QuantityAdd} =props;


      const userid =localStorage.getItem('user');

 
      //console.log("number  = ",userid)
    const [Data,setData] =useState();
    
    const  GetData = async ()=>{
       
     fetch(Ip+'/GetUser?id='+userid,{
     headers:new Headers({
       Authorization:"Bearer " 
     })
     }).then(res=>res.json())
     
     .then(data=>{ 
     
        
       setData(data[0])
      
       
       console.log("DATA RA = ",Data);
      
     }
     )
    }






      let sum = local_variable.reduce(function(prev, current) {
        return prev +parseInt(current.ItemPrice)*current.Quantity;
      }, 0);

      var quantity=1;

      let itemnames = local_variable.reduce(function(prev, current) {
        return prev +current.ItemName+"_"+current.ItemPrice+"_"+current.Quantity+"-";
      }, "");


      const location = useLocation()
      const {AdminId,ShopName} = location.state

       

      const [orderstatus,setorderstatus] =useState(false)
      const [AddressData,setAddressData] =useState();
      //console.log("dsjdskj",User)
      const [CouponCode,setCouponCode]=useState("");
      var address = Data?Data.Address.split("_"):"";
      const PlaceOrder =()=>{
      
        if(Data){
          fetch(Ip+"/Orders",{
            method:"POST",
            headers: {
             'Content-Type': 'application/json'
           },
           body:JSON.stringify({
            "CustomerName": Data.Name,
            "ContactNo": Data.PhoneNumber,
            "orderList":itemnames,
            "Amount":total+tax,
            "CustomerAddress":AddressData,
            "CurrentLocation":"16.66-81.464",
            "OrderStatus":"Pending",
            "AdminId":AdminId,
            "CustomerId": Data._id,
            "DeliveryManId":"",
            "OrderOtp":val,
            "OrderId":AdminId+val,
            "ShopName":ShopName,
            "OrderTime":new Date().toLocaleString(),
            "CouponCode":CouponGot.length>0?CouponGot[0].CouponCode:""
           })
          })
          .then(res=> setorderstatus(true))
        }
      
      }



//console.log(AddressData)
//Id,VillageName,PinCode,DoorNo,Landmark,Street

 const [village,setvillage] =useState();
 const [pincode,setpincode] = useState();
 const [doorno,setdoorno] =useState();
 const [landmark,setlandmark] =useState();
 const [street,setstreet] =useState();

    const  AddAddress =()=>{
      setTemp(true)
        
          fetch(Ip+"/AddUserAddresses",{
            method:"POST",
            headers: {
             'Content-Type': 'application/json'
           },
           body:JSON.stringify({
            "Id": Data._id,
            "VillageName":village,
            "PinCode":pincode,
            "DoorNo":doorno,
            "Landmark":landmark,
            "Street":street
            
           })
          })
          .then(res=>{
            GetAddress();
            //console.log("done");
            setTemp(false);
          })
        
      
      }

     const [useraddress,setuseraddress] = useState([]);

      const GetAddress=async()=>{
          
       if(Data){
        fetch(Ip+'/GetUserAddresses?id='+Data._id,{
          headers:new Headers({
            Authorization:"Bearer " 
          })
          }).then(res=>res.json())
          
          .then(async data=>{ 
          
        
          await setuseraddress(data)
          
        
      
          }
          )
       }
      }


      useEffect(()=>{
      GetAddress()
      setTotal(sum);
      console.log(Data)
    

      },[local_variable])

      useEffect(()=>{
        GetAddress()
      },[Data])
      useEffect(()=>{
        
          Data?console.log("Got"): setTimeout(() => {
           
            GetData();
            GetAddress()
          }, 500);
       
      })

      var val = Math.floor(1000 + Math.random() * 9000);

      var tax=29;

   

  

      const [Field,setField] =useState(false);

        const [CouponGot,setCouponGot] =useState([]);

    const CheckCoupon=()=>{ 
      console.log("hii")
      fetch(Ip+'/CheckCouponCode?id='+Data._id+"&coupon="+coupon+"&shopid="+ShopName,{
        headers:new Headers({
          Authorization:"Bearer " 
        })
        }).then(res=>res.json())

        .then(async data=>{ 
        
        
           if(data.Status==="user error"){
            alert("Coupon Code Already Used....")
           }
           else if(data.Status==="error"){
                 alert("Invalid Coupon Code...")
           }
           else{
            alert("Coupon Code Successfully Worth Rs:-",data.Amount)
            setCouponGot(data)
            console.log("coupon = ",data)
            setTotal(parseInt(sum)-parseInt(data[0].Amount))
           }
        }
        )
    }
const [total,setTotal] =useState(sum);
const [coupon,setcoupon] =useState("");
const [Temp,setTemp]= useState(false);

//const {Name,PhoneNumber,Address,email,_id} =User;
 const Reset=()=>{
  setcashondelivery(false);
  setAddressData();
 }



const [cashondelivery,setcashondelivery]=useState(false);
 
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
      {Temp?<TransLoader/>:null

      }
      
  <div className='col-md-7'  style={{borderLeft:"1px solid lightgray",paddingBottom:"120px"}}>

       <div className='container' style={{width:'80%'}}>
       <div className='d-flex justify-content-between'>
        <p>Item Amount: </p>
        <p>₹{total}</p>
      </div>
      <div className='d-flex justify-content-between'>
        <p>Tax: </p>
        <p>₹{local_variable?tax:0}</p>
      </div>
      <div className='d-flex justify-content-between'>
        <p>Total Amount: </p>
        <p className='text-danger'>₹{sum+tax}</p>
      </div>
       </div>

    <hr />

    <div class="form-group"> <label>Have coupon?</label>
<div class="input-group"> <input type="text" class="form-control coupon" name="" placeholder="Coupon code" value={coupon} onChange={(e)=>setcoupon(e.target.value)}/> <span class="input-group-append"> <button class="btn btn-primary btn-apply coupon" onClick={CheckCoupon}>Apply</button> </span> </div>
</div>
        {address[0]?
          <div>
                <div className='container'>
                    <form>
                        <div className=' mt-1 mb-2'>
                            
                            <div style={{ border:"1px solid lightgray",padding:"15px",borderRadius:"15px",cursor:"pointer"}}>
                            <input type={"radio"} name={"adder"} onClick={()=>setAddressData(Data.Address)} style={{display:"inline"}} />
                                <h4>{address[0]}</h4>
                                <p className='m-0'>{address[1]}</p>
                                <p className='m-0'>{address[2]}</p>
                                
                            </div>
                        </div>

                      
                      
                    </form>
                    
                </div>
            </div>:null

        }
         
        {useraddress.length>0?
        
           
           <>
           <button class="btn btn-outline-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Select Address
            </button>
           <div class="collapse" id="collapseExample"> 
            {useraddress.map((ad,i)=>(


              <div>
                <div className='container'>
                    <form>
                        <div className=' mt-1 mb-2'>
                            
                            <div style={{ border:"1px solid lightgray",padding:"15px",borderRadius:"15px",cursor:"pointer"}}>
                            <input type={"radio"} name={"adder"} onClick={()=>setAddressData(ad.VillageName+"_"+ad.DoorNo+"_"+ad.Street+"_"+ad.Landmark+"_"+ad.PinCode)} style={{display:"inline"}} />
                                <h4>{ad.VillageName}</h4>
                                <p className='m-0'>{ad.DoorNo}</p>
                                <p className='m-0'>{ad.Street}-{ad.Landmark}</p>
                                <p className='m-0'>{ad.PinCode}</p>  
                            </div>
                        </div>

                      
                      
                    </form>
                    
                </div>
            </div>
            ))

            }

            </div>
           </>
            :null

        }
        <div className='row'>

        <button className='btn btn-success col-5 mx-3 my-2' onClick={()=>setField(!Field)}>Add New Address</button>
        </div>
    
     


          {Field?<>
            <div class="container">
                    <form  >
                      <div class="row">
                        <div class="col-25">
                          <label for="fname">Village Name:- </label>
                        </div>
                        <div class="col-75">
                          <input type="text" className='payment_page_address' id="fname" name="firstname" placeholder="Village Name" value={village} onChange={(e)=>setvillage(e.target.value)}/>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-25">
                          <label for="lname">Door no:- </label>
                        </div>
                        <div class="col-75">
                          <input type="text" className='payment_page_address' id="lname" name="Door no" placeholder="Door no" value={doorno} onChange={(e)=>setdoorno(e.target.value)}/>
                        </div>
                        
                      </div>
                      <div class="row">
                        <div class="col-25">
                          <label for="lname">Street:- </label>
                        </div>
                        <div class="col-75">
                          <input type="text" className='payment_page_address' id="lname" name="Street no" placeholder="Street no" value={street} onChange={(e)=>setstreet(e.target.value)}/>
                        </div>
                        
                      </div>
                      <div class="row">
                        <div class="col-25">
                          <label for="lname">Landmark:- </label>
                        </div>
                        <div class="col-75">
                          <input type="text" className='payment_page_address' id="lname" name="Landmark no" placeholder="Landmark no" value={landmark} onChange={(e)=>setlandmark(e.target.value)}/>
                        </div>
                        
                      </div>
                      <div class="row">
                        <div class="col-25">
                          <label for="lname">Pin code:- </label>
                        </div>
                        <div class="col-75">
                          <input type="text" className='payment_page_address' id="lname" name="Pin no" placeholder="Pin no" value={pincode} onChange={(e)=>setpincode(e.target.value)}/>
                        </div>
                        
                      </div>
                     
                      
                     
                    </form>
                    <button className='btn btn-success my-2' onClick={AddAddress}>Submit</button>
                  </div>
          </>:null

          }

        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Welcome there,</strong> as of now, online payments are not working here.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <form>
          <input type={"radio"} name={"adder"} value="Cash On Delivery" onClick={()=>setcashondelivery(!cashondelivery)} /> Cash On Delivery
          <br />
          <input type={"reset"} className="btn btn-outline-success mt-3" onClick={Reset} />
        </form>
        <div className='row mt-3 text-center mb-5'>
          {AddressData && cashondelivery?<button className='col-10 offset-1 btn btn-danger' 
           onClick={PlaceOrder}>Place Order</button>:
           <button className='col-10 offset-1 btn btn-danger' disabled 
           onClick={PlaceOrder}>Place Order</button>}
        </div>

  </div>
</div>: 
<div style={{}}>
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

</div>:<OrderPlacedLoading Data={"User"}/>
          
        }
        <Comp_for_home/>
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
    <div className='row align-items-center mb-4 pb-2' style={{borderBottom:"1px solid gray"}}>
    <div className='col-3 col-md-2'>
      <img className='img-fluid' src={props.data.ProductImage?Ip+"/"+props.data.ProductImage:'https://www.holidify.com/images/cmsuploads/compressed/Mutton_Biryani_with_egg_and_salad_20170829120133.JPG'} style={{borderRadius:"8px"}} />
    </div>
    <div className='col-5 col-md-4'>
      <h5>{props.data.ItemName}</h5>
      <p className='d-none d-md-block'>{props.data.ItemDiscription}</p>
    </div>
    <div className='col-4 col-md-3'>
            <label>Quant</label><br />
            <input
                type='number'
                step="1"
                min='1'
                max='5'
                value={Value}
                onChange= {(e) => QuantityUpdate(e)}
              />
      
    </div>
    <div className='col-md-3 col-12 mt-md-0  mt-2  text-right'>
      <button className='btn btn-outline-danger mr-md-0 mr-3 ' onClick={()=>DeAction(props.data)}>Remove</button>
    </div>
  </div>
  )
}



const mapStateToProps = state =>({
  local_variable :state.item
})

export default connect(mapStateToProps,{InAction,DeAction,RemoveAll,QuantityAdd})(Payment);