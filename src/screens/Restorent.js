/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React,{useState,useEffect} from 'react'
import ItemCard from '../components/ItemCard';
import '../css/Res.css'
import {useLocation} from 'react-router-dom'
import { Ip } from './../constants/Ip';
import { NavLink } from 'react-router-dom';
import { InAction,DeAction } from './redux/actions';
import { connect, Connect } from 'react-redux';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import Load from '../lotties/112087-empty.json'
import Comp_for_home from '../components/Comp_for_home';
import Nav from './../components/Nav';

function Restorent(props) {
    const {local_variable} =props;
    const location = useLocation()
  const { AdminId ,ShopName,Address,ShopPhoto,PhoneNumber,User,ShopType,Deliverycharges,DeliveryTime} = location.state
  
  const [Items,setItems] = useState([]);

   const [itemname,setitemname] = useState("All");
 
  const  GetData = async ()=>{
   //  const token = await  localStorage.getItem("token")
    // console.log("Dashboard = "+token)
   fetch(Ip+'/GetItems?id='+AdminId+"&itemname="+itemname,{
   headers:new Headers({
     Authorization:"Bearer " 
   })
   }).then(res=>res.json())
   
   .then(data=>{ 
   
      
    setItems(data);
     
     console.log("items in restaurants = ",data);     
    
   }
   )
  }
useEffect(()=>{
 
  GetData();
 //console.log(check("Adminchandrika@gmail.comFired Rice"))
 if(!done){
    console.log("done")
    
 }
},[])

 
     
const [done,setdone] =useState(false);
  //console.log(local_variable)

function check(name) {
    const { length } = local_variable;
    const id = length + 1;
    const found = local_variable.some(el => el.ItemId ===name);
    if (!found)  
    {
        return false;
    }
    else{
        return true;
    } 
  }
 
console.log("Item == ",local_variable);

  return (
    <div>
    <Nav/>
        <div className='container mt-2'>
            <img src={ShopPhoto?Ip+"/"+ShopPhoto:'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2927%2Ftrend20200831092220.jpg'} style={{width:"100%",height:"60vh"}} />

            <div className='row mt-5'>
                <div className='col-6 col-md-3'>
                    <h2>{ShopName}</h2>
                </div>

                <div className='col-6 col-md-2 ml-auto text-center'>
                    <div className='d-flex align-items-center'>
                        <p className='review_rating m-0 mr-2'>4.3<i class="fa-solid fa-star"></i></p>
                        <div className='m-0'>
                            <p className='m-0'>546</p>
                            <p className='m-0 font-weight-light review_rating_somethig'>Somethig</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                 {ShopType==="Restaurant"?<p className='font-weight-light m-0'>Biryani, Fast Food, Pizza,Curry,Chicken</p>:null}
                 {ShopType==="Meet Shop"?<p className='font-weight-light m-0'>Chicken, Fish, Prawns, Crabs</p>:null}
                 {ShopType==="Medical"?<p className='font-weight-light m-0'>All Medical Tablets</p>:null}
                 {ShopType==="Vegetable Shop"?<p className='font-weight-light m-0'>All Vegetables</p>:null}
                 {ShopType==="Grocery"?<p className='font-weight-light m-0'>Oils,Soaps,and etc</p>:null}
                <p className='font-weight-light m-0'>{Address}</p>
                <div className='col-12 fw-bold'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z"/>
                </svg>Delivery Charges:-  { Deliverycharges?Deliverycharges:10}
                                    </div>
                <p className='font-weight-light m-0'><span className='text-danger'>Delivery Time:-</span> {DeliveryTime?DeliveryTime:"30 min"} </p>
            </div>
            
            {/*<div className='buttonGroup'>
                <button className='btn btn-danger m-2'><i class="fa-regular fa-star"></i> Add Review</button>
                <button className='btn btn-outline-danger m-2'>Direction</button> 
                <button className='btn btn-outline-danger m-2'>Bookmark</button> 
                <button className='btn btn-outline-danger m-2'>Share</button> 
            </div>*/}
            <hr/>
            <div className='row'>
               {/* <div className='col-md-3'>
                    <ul>
                        <li>Recommended</li>
                        <li>Rice And Biryani</li>
                        <li>Desert</li>
                    </ul>
                </div>*/}
                <div className='col-md-9'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <h3 className='font-weight-light'>Order Online</h3>
                           
                        </div>
                        <div className='col-md-6 ml-auto d-none d-md-block'>
                            <input className='form-group' value={itemname} onChange={(e)=>setitemname(e.target.value)} placeholder='Search' style={{border:"none",boxShadow:"0 0 10px 0 lightgray"}} />
                        </div>
                    </div>
                    <input type={"checkbox"} className="form-group mr-2 mt-4" /><label>Veg</label>
                    <h3>Recommended</h3>
                     {Items.length===0?

                     <div>
                              <Player
                                autoplay
                                loop
                                src={Load}
                                style={{ height: '300px', width: '300px' }}
                            >
                            
                            </Player>

                     </div>
                     :
                     <div className='row'>
                         {Items.map((item)=> (
                         
                         
                            <ItemCard   
                                     ItemName={item.ItemName}
                                      ItemPrice={item.ItemPrice} 
                                       ProductImage={item.ProductImage}
                                        ShopId={item.ShopId} 
                                        ShopName={item.ShopName} 
                                        id={item._id}
                                         ItemDiscription={item.ItemDiscription}
                                         ItemId={item.ItemId}  

                                         Cart={check(item.ItemId)}
                                         /> 
                         ))

                         }
                    </div>

                     }
          

         
                </div>
            </div>



                                        
       

        </div>

        <div style={{paddingBottom:"120px"}}>
           {local_variable.length>0? 


           
           
                    <NavLink to="/Payment"
                
                        state={{
                            AdminId:AdminId,
                            User:User,
                            ShopName:ShopName
                        }}
                        >
                              <div style={{borderTop:"1px solid lightgreen",position:"fixed",bottom:"55px",left:"0",width:"100%",height:"auto",backgroundColor:"white",zIndex:"10"}} className="p-2">
                                <div className='container-fluid m-0 p-0'>
                                    <div className='row align-items-center text-center'>
                                        <div className='col-4 text-success'>
                                            <p className='m-0'>{local_variable.length}</p>
                                            <p className='m-0'>Added</p>
                                        </div>
                                        <div className='col-5'>
                                        <div className='btn btn-outline-success remove'  >Continue</div>
                                         
                                        </div>
                                        
                                    </div>

                                     </div>
                            </div>
                    </NavLink>
                    :
                    null
            
           }
         </div> 
         <Comp_for_home/>
    </div>
  )
}
const mapStateToProps = state =>({
    local_variable :state.item
  })
export default connect(mapStateToProps,{InAction,DeAction})(Restorent);