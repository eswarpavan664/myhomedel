/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React,{ useState,useEffect }  from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Res.css'
import { Ip } from './../constants/Ip';
import { InAction,DeAction,RemoveAll } from './../screens/redux/actions';
import { connect, Connect } from 'react-redux';
import {Helmet} from "react-helmet";
function ItemCard(props) {
  const {local_variable,InAction,DeAction,RemoveAll} =props;
    var a =[]
    const Add=(name,price,Image,shopid,shopname,id,discription)=>{
      a.push(JSON.parse(localStorage.getItem('session')));
       
       
    }
 

       var ob={
        "ItemName":props.ItemName,
        "ItemPrice":props.ItemPrice,
        "ProductImage":props.ProductImage,
        "ShopId":props.ShopId,
        "ShopName":props.ShopName,
        "id":props.id,
        "ItemDiscription":props.ItemDiscription,
        "ItemId":props.ItemId,
        "Quantity":1,
        "AdminId":props.adminId
       }
     
      

    const AddItem=()=>{
       if(local_variable.length===0){
         InAction(ob)
       }
       else{
            if(local_variable[0].ShopName===props.ShopName){
              InAction(ob);
            }
            else{
              RemoveAll();
              InAction(ob);
            }
       }
    }
    const RemoveItem=()=>{
      DeAction(ob)
    }
        
// https://myhomedel.herokuapp.com/items/1663830338725--53096628.webp
  return (
    <>

 
           
        <div className='col-md-2 col-4' style={{marginBottom:20}}>
            <img className='img-fluid' src={props.ProductImage?props.ProductImage:'https://www.holidify.com/images/cmsuploads/compressed/Mutton_Biryani_with_egg_and_salad_20170829120133.JPG'} style={{borderRadius:"8px"}} />
        </div>
        <div className='col-md-8 col-5'>
            <h5>{props.ItemName}</h5>
              
            <p className='mt-1 m-0' style={{color:"gold"}}>  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
  <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
</svg>
                <span style={{color:"black"}} className="font-weight-light">362 votes</span> </p>
            <div className='row col-12  '>

            <p className='m-0 col-md-2 col-6'><s>₹{props.DiscountPrice}</s></p>
            <p className='m-0 col-md-3 col-4'>₹{props.ItemPrice}</p>
            </div>
            <p>{props.ItemDiscription}</p>
            
        </div>
        <div className='col-md-2 col-2 text-right mt-3'>
             
       
    
         {props.ItemStatus==="true"?
         <>
         {props.Cart?<div className='btn btn-outline-success remove' onClick={RemoveItem}>Remove</div>: <div className='btn btn-outline-success add' onClick={AddItem}>Add</div> } 
      
         </>: 

         <>
         {props.Cart?<div className='btn btn-outline-success remove' onClick={()=>alert("Item Not available")}>Remove</div>: <div className='btn btn-outline-success add' onClick={()=>alert("Item Not available")}>Add</div> } 
      
         </>
         }
        </div>
           
        

        
        
   
          
    </>
  )
}

const mapStateToProps = state =>({
  local_variable :state.item
})

export default connect(mapStateToProps,{InAction,DeAction,RemoveAll})(ItemCard);