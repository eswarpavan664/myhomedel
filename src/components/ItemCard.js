/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React,{ useState,useEffect }  from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Res.css'
import { Ip } from './../constants/Ip';
import { InAction,DeAction } from './../screens/redux/actions';
import { connect, Connect } from 'react-redux';

function ItemCard(props) {
  const {local_variable,InAction,DeAction} =props;
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
        "Quantity":1
       }
     
      console.log(Ip+"/"+props.ProductImage)


        

  return (
    <>
           
        <div className='col-md-2 col-4' style={{marginBottom:20}}>
            <img className='img-fluid' src={'https://www.holidify.com/images/cmsuploads/compressed/Mutton_Biryani_with_egg_and_salad_20170829120133.JPG'} style={{borderRadius:"8px"}} />
        </div>
        <div className='col-md-8 col-5'>
            <h5>{props.ItemName}</h5>
              
            <p className='mt-1 m-0' style={{color:"gold"}}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i> <span style={{color:"black"}} className="font-weight-light">3626 votes</span> </p>
            <p className='m-0'>₹{props.ItemPrice}</p>
            <p>{props.ItemDiscription}</p>
            
        </div>
        <div className='col-md-2 col-2 text-right mt-3'>
         {props.Cart?<div className='btn btn-outline-success remove' onClick={()=>DeAction(ob)}>Remove</div>: <div className='btn btn-outline-success add' onClick={()=>InAction(ob)}>Add</div> } 
        </div>
           
        

     
        
   
          
    </>
  )
}

const mapStateToProps = state =>({
  local_variable :state.item
})

export default connect(mapStateToProps,{InAction,DeAction})(ItemCard);