import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function AdminProfile(props) {
    let navigate = useNavigate();
  const  logout =()=>{
    localStorage.removeItem("token") 
     navigate('/Login')
   
 }
  return (
    <div>
        <h2>{props.Data.Name}</h2>
        <h2>{props.Data.email}</h2>
        <h2>{props.Data.PhoneNumber}</h2>
        <h2>{props.Data.ShopName}</h2>
        <h2>{props.Data.Address}</h2>
        <button onClick={logout}> Logout</button>
    </div>
  )
}

export default AdminProfile;