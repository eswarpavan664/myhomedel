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

function Restorent(props) {
    const {local_variable} =props;
    const location = useLocation()
  const { AdminId ,ShopName,Address,ShopPhoto,PhoneNumber,User} = location.state
  
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
     
          
    
   }
   )
  }
useEffect(()=>{
 
  GetData();
 //console.log(check("Adminchandrika@gmail.comFired Rice"))
 
},[itemname])

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



  return (
    <div>
        <div className='container'>
            <img src={ShopPhoto?ShopPhoto:'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2927%2Ftrend20200831092220.jpg'} style={{width:"100%",height:"60vh"}} />

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
                <p className='font-weight-light m-0'>Bakery, Fast Food, Pizza, Burger</p>
                <p className='font-weight-light m-0'>{Address}</p>
                <p className='font-weight-light m-0'><span className='text-danger'>Open now</span> - 9am - 11pm (Today)</p>
            </div>
            
            <div className='buttonGroup'>
                <button className='btn btn-danger m-2'><i class="fa-regular fa-star"></i> Add Review</button>
                <button className='btn btn-outline-danger m-2'>Direction</button> 
                <button className='btn btn-outline-danger m-2'>Bookmark</button> 
                <button className='btn btn-outline-danger m-2'>Share</button> 
            </div>
            <hr/>
            <div className='row'>
                <div className='col-md-3'>
                    <ul>
                        <li>Recommended</li>
                        <li>Rice And Biryani</li>
                        <li>Desert</li>
                    </ul>
                </div>
                <div className='col-md-9'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <h3 className='font-weight-light'>Order Online</h3>
                            <p className='m-0 text-danger'>Currently closed for online ordering</p>
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
                    {localStorage.getItem("item")?
         <div className='mb-5'>
           {local_variable.length>0?  <NavLink to="/Payment"
           
           state={{
            AdminId:AdminId,
            User:User,
            ShopName:ShopName
           }}
           >
             <div className='row text-center'>
              <p className='col-1'>Next</p>
              <button className='col-11 btn btn-danger'>Continue</button>
             </div>
            </NavLink>:null
            
           }
         </div>:null

         }
                </div>
            </div>

        </div>

        
    </div>
  )
}
const mapStateToProps = state =>({
    local_variable :state.item
  })
export default connect(mapStateToProps,{InAction,DeAction})(Restorent);