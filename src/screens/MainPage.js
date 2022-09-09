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
function MainPage(props) {
  const {local_variable,RemoveAll} =props;

  //let user = authentication.currentUser;
 const [Place,setPlace] = useState("All");
 
 const userid =localStorage.getItem('user');
  console.log("number  = ",userid)
const [Data,setData] =useState([]);

const  GetData = async ()=>{
   
 fetch(Ip+'/GetUser?id='+userid,{
 headers:new Headers({
   Authorization:"Bearer " 
 })
 }).then(res=>res.json())
 
 .then(data=>{ 
 
    
  setData(data)
  console.log("Data = ",data)
   
  RemoveAll() 
  
 }
 )
}
useEffect(()=>{
 
  
GetData();
//console.log(check("Adminchandrika@gmail.comFired Rice"))

},)
 
//console.log("hjdsjvfjhsbf  == ",user.phoneNumber)
  return (
    <div>
    
    <header className='header_'>

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
            <a class="dropdown-item"  onClick={()=>setPlace("bhimavaram")}>Bhimavaram</a>
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
<Cat/>
    <OrderByItem/>
    <Baners/>
    <RestaurentCard User={Data} Place={Place} user={Data} />
     
     <Recomendations User={userid}  />  
    <Footer/>
</div>
  )
}

const mapStateToProps = state =>({
  local_variable :state.item
})
export default connect(mapStateToProps,{InAction,DeAction,RemoveAll})(MainPage);