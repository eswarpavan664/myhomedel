/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React,{useEffect,useState} from 'react'
import { authentication ,database } from '../firebase';
import { getAuth, signOut } from "firebase/auth";
import { connect, Connect } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { InAction,DeAction } from './redux/actions';
import '../css/Profilestyle.css'
import {useLocation} from 'react-router-dom'
import { Ip } from './../constants/Ip';
 
import Orders from './../components/Orders';
import Restorent from './Restorent';
import { async } from '@firebase/util';


function ProfilePage(props) {
  const location = useLocation()
  const userid =localStorage.getItem('user');

const {local_variable,InAction,DeAction } =props;
let user =[]
  let navigate = useNavigate();
  const Logout=()=>{
    signOut(authentication).then(() => {
      navigate('/Login');
    }).catch((error) => {
      // An error happened.
    });
     
  }
  var ob={
    "name":"pavan",
    "age":"22",
    "phoneno":"7993031882"
  }
  const [Myorders,setMyordres] = useState([]);


  const [Items,setItems] = useState();
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

 
  const [Data,setData] =useState([]);
 
  const  GetData =  async ()=>{
     
   fetch(Ip+'/GetUser?id='+userid,{
   headers:new Headers({
     Authorization:"Bearer " 
   })
   }).then(res=>res.json())
   
   .then(async data=>{ 
   
 
    await setData(data)
    
  

   }
   )
  }
   
    
  
     
  const [se,setse]=useState(true);
  useEffect(()=>{
    GetData()
   
   if(Data.length>0){
    if(se){
      const Add = Data[0].Address.split("_");
      setName(Data[0].Name)
      setemail(Data[0].email)
      setCityName(Add[0])
      setLankmark(Add[1])
      setPincode(Add[2])
      setse(false)
    }    
     

   }
   GetItems()
  },[Data])
 
  const Address= Data.length>0?Data[0].Address.split("_") : "k";
 
  const UpdateDetails=()=>{
    fetch(Ip+"/UpdateUserDetails",{
      method:"PUT",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
      "email": email,
      "Name":Name,
      "Address":CityName+"_"+Lankmark+"_"+Pincode,
      "Id":Data[0]._id
     })
    })
    .then(res=>res.json())
  }
 
  const [Name,setName]=useState("");
  const [email,setemail]=useState();
  const [CityName,setCityName]=useState();
  const [Pincode,setPincode]=useState();
  const [Lankmark,setLankmark]=useState();
   

 
   
  const [Setter,setSetter] =useState(0)
    
    

    return (
      <div className='page pt-md-5'>
          <div class="container">
          <div class="row text-center rounded_ r_">
              <div class="col-md-3 border text-center pro_details">
                  <img class=" pro_img mt-5 img-fluid" src="https://www.sukhii.group/assets/images/male-user.png" alt="" width="150" height="150"/>
                  {Data.length>0?<h4 class="mt-5">{Data[0].Name} </h4>:null} 
                  {Data.length>0?<h5 class="mt-5">{Data[0].email} </h5>:null} 
                  {Data.length>0?<h5 class="mt-5">{Data[0].PhoneNumber} </h5>:null} 
                  <p class="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio consequuntur nihil aliquam autem! Quisquam, assumenda.</p>
                  <div class="button_ row mb-4">
                      <button class="btn btn-danger col-8 offset-2" onClick={Logout}>Logout</button>
                  </div>
              </div>
              <div class="col-md-9 border pro_links p-0 mt-5 mt-md-0">
                  <div class="row p-0 m-0 text-center" style={{borderBottom: "1px solid gray",backgroundColor:"whitesmoke"}}>
                      <div class="col-md-3 col-6 m-0" style={{borderRight: "1px solid gray",cursor: "pointer",backgroundColor:Setter===1?"green":"white" }}>
                          <h4 onClick={()=>setSetter(1)} style={{color:Setter===1?"white":"black"}}>Profile</h4>
                      </div>
                      <div class="col-md-3 col-6 m-0" style={{borderRight: "1px solid gray",cursor: "pointer",backgroundColor:Setter===0?"green":"white"}}>
                          <h4 onClick={()=>setSetter(0)}  style={{color:Setter===0?"white":"black"}}>My orders</h4>
                      </div>
                  </div>
                  {Setter===0?
                    <div class="m_ pt-md-4 pt-3" style={{background:"rgb(255,255,255)"}}>
                       
  
                       {Myorders.length>0?
   
                       <>
                         {Myorders.map((item)=>(
   
                           <div>
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
                                           <button className='col-10 offset-1 btn btn-secondary'>Track</button>
                                           <button className='col-10 offset-1 btn btn-danger mt-1'>Cancel</button>
                                       </div>:null
  
                                        }
                                        {item.OrderStatus==="Declain"?
                                          <p>Order Canceled by Restorent</p>
                                          :null
                                        }
                                   </div>
                               </div>
                          </div>
                         ))
   
                         }
                       </>: <h1>No history of Orders</h1>
                       }
   
                   </div>:
  
                   <div className='pt-md-4 pt-3 m_' style={{backgroundColor:"rgb(255,255,2555)"}}>
                            <div className='container text-center mt-md-5 mt-4' style={{width:"80%"}}>
                                <input placeholder='Enter new name' class="profile_edit_"        value={Name}  onChange={(e)=>setName(e.target.value)}/><br />
                                <input placeholder='Enter new email' class="profile_edit_ mt-4"  value={email}  onChange={(e)=>setemail(e.target.value)}/><br />
                                
                                <div className='row justify-content-center'>
                                    <div class="form-group col-md-6 mt-4">
                                        <input type="text" class=" profile_edit_" id="inputEmail4" placeholder="City Name" value={CityName}  onChange={(e)=>setCityName(e.target.value)}/>
                                    </div>  
                                    <div class="form-group col-md-6 mt-4">
                                        <input type="number" class=" profile_edit_" id="inputEmail4" placeholder="Pin no" value={Pincode}  onChange={(e)=>setPincode(e.target.value)}/>
                                    </div> 
                                    <div class="form-group col-12 mt-3">
                                        <input type="text" class=" profile_edit_" id="inputEmail4" placeholder="Land Mark" value={Lankmark}  onChange={(e)=>setLankmark(e.target.value)}/>
                                    </div>               
                                </div>
                                <div className='row'>
                                    <div className='col-12 text-right mt-4'>
                                        <button className='btn btn-success' onClick={UpdateDetails}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
   
  
                  }
              </div>
          </div>
      </div>
      </div>)
 
  
}

const mapStateToProps = state =>({
  local_variable :state
})
export default connect(mapStateToProps,{InAction,DeAction})(ProfilePage);