/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import '../css/styles2.css';
import NavBar from './../components/NavBar';
import RestaurentCard from './../components/RestaurentCard';
import Footer from './../components/Footer';
import CollectionCards from './../components/CollectionCards';
import Recomendations from './../components/Recomendations';
import {authentication,database,app} from '../firebase'
import { getAuth } from "firebase/auth";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Ip } from './../constants/Ip';
import OrderByItem from '../components/OrderByItem';
import Baners from '../components/Baners';
import { InAction,DeAction,RemoveAll } from './redux/actions';
import { connect, Connect } from 'react-redux';
import Cat from './../components/Cat';
import '../css/Cat.css'
import Comp_for_home from './../components/Comp_for_home';
import Loader from './../components/Loader';
import TransLoader from './../components/TransLoader'
import {Helmet} from "react-helmet";
import Text from '../components/Text'
import DeviceOrientation, { Orientation } from 'react-screen-orientation'
import Recom from './../components/Recom';
import Restorent from './Restorent';

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import OneSignal from 'react-onesignal';

import Lodi from '../lotties/1786-profile.json'


function MainPage(props) {
  const {local_variable,RemoveAll} =props;



  
  //let user = authentication.currentUser;
 const [Place,setPlace] = useState("All");
 
 const userid =localStorage.getItem('user');
  //console.log("number  = ",userid)
const [Data,setData] =useState([]);

const  GetData = async ()=>{
   
 fetch(Ip+'/GetUser?id='+userid,{
 headers:new Headers({
   Authorization:"Bearer " 
 })
 }).then(res=>res.json())
 
 .then(data=>{ 
 
    
  setData(data)
 
  
 }
 )
}

useEffect(()=>{
  OneSignal.init({
    appId: "64434c51-c9b5-4822-bd12-54553da923c5"
  });
})
useEffect(()=>{
   
  
GetData();
//console.log(check("Adminchandrika@gmail.comFired Rice"))
console.log("ca = ",local_variable)
},[Place])
 

useEffect(()=>{
 
  
  GetData();
  //console.log(check("Adminchandrika@gmail.comFired Rice"))
  console.log("ca = ",local_variable)
},[])
   
  

//console.log("hjdsjvfjhsbf  == ",user.phoneNumber)


var ob={
  "ItemName": "rt",
  "ItemPrice": "ert",
  "ProductImage":"props.ProductImage",
  "ShopId":"props.ShopId",
  "ShopName":"props.ShopName,",
  "id":"props.id",
  "ItemDiscription":"props.ItemDiscription",
  "ItemId":"props.ItemId",
  "Quantity":1
 }

 


if(userid){
  return (
    
    <div>
         <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
              
              <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        </Helmet>
    <header className='header_ d-lg-block d-none'>

<nav class="container navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="#">My Homedel</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
       
      <li class="nav-item active">
        {Data.length>0? <NavLink to="/Profile" > <h5 class="nav-link">{Data[0].Name}</h5></NavLink>:null}
      </li>
    </ul>
  </div>
</nav>

<div className='brand_ mt-5'>
    <h1 className='text-center' style={{color:'white'}}>My Homedel</h1>
</div>

<div className='des_ text-center mt-5'  >
    <h3 style={{color:"white"}}>Discover the best food & drinks in Hyderabad</h3>
</div>


  <div className='search_ container mt-4'>
      <div className=' text-center'>
                  <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Locations
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item"  onClick={()=>setPlace("Bhimavaram")}>Bhimavaram</a>
              <a class="dropdown-item"  onClick={()=>setPlace("Narspur")}>Narspur</a>
              <a class="dropdown-item"  onClick={()=>setPlace("Palakolu")}>Palakolu</a>
              <a class="dropdown-item"  onClick={()=>setPlace("Seetharampuram")}>Seetharampuram</a>
            </div>
  </div>

        <div className='row'>
            
                <input style={{borderRadius:"15px"}} className="p-2 mt-2 col-8 offset-2 searchbar" type={"text"} placeholder={"Search for restaurant, cuisine or a dish"} id="search_bar" value={Place} onChange={(e)=>setPlace(e.target.value)}/>   
            
        </div>
    </div>
</div>

</header>

<section className='d-lg-none d-block mb-3'  style={{position:"sticky",top:"0",zIndex:"30",width:"100%",height:"auto",borderBottomLeftRadius:"15px",borderBottomRightRadius:"15px",backgroundColor:"white"}}>
            <div className='d-flex justify-content-between align-items-center mx-3 mb-3 pt-3'>
              <div>
                <p className='m-0'>Delivery to,</p>
                 {Data.length>0?<p className='m-0 font-weight-bold font-size-large'>{Data[0].Name}</p>:null}
              </div>
               <NavLink to="/Profile"><div>
               <Player
                    autoplay
                    loop
                    src={Lodi}
                    style={{ height: '80px', width: '80px' }}
                >
                   
                </Player>    </div></NavLink>
            </div>
            <div className='row pb-4 m-0'>
              <div className='col-12 text-center m-0'>
                <input className='p-1' style={{width:"95%",border:"1px solid lightgray",borderRadius:"25px"}} placeholder="Search reastaruents" value={Place} onChange={(e)=>setPlace(e.target.value)}/>
              </div>
            </div>
</section>
 
 <Baners/>
 <div className='container mt-4'>
     <h1>Category</h1>
     <Cat/>
     </div>
   {/* <OrderByItem/>*/}
    
    
      <div className='col mt-4'>
      <h2>Must Try </h2>
      <Recom/>
      </div>
  <div className='col'>
  <h2 className='mt-5'>Restaurants Near Palakolu</h2>
  <RestaurentCard User={Data} Place={Place} user={Data} /> 
  </div>
     
    
    
     
    <Comp_for_home/>
</div>
  )
}
else{
  return(
    <div>
      <h3>404 Error Login First</h3>
    </div>
  )
}
  
}

const mapStateToProps = state =>({
  local_variable :state.item
})
export default connect(mapStateToProps,{InAction,DeAction,RemoveAll})(MainPage);

//Palakolu