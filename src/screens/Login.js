/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
 
import {Ip} from '../constants/Ip'
import { useNavigate } from 'react-router-dom';
 
import MainPage from './MainPage';

import '../css/loginstyles.css'
import { authentication ,database } from '../firebase';
import { RecaptchaVerifier , signInWithPhoneNumber} from "firebase/auth";

import {getDatabase, ref, set , onValue, child, get, push, update  } from "firebase/database";


 





function Mainscreen() {

  const contrycode = "+91";
  const [Number,setNumber] =useState('+91');
  const [ExpandForm,setExpandForm] = useState(false);
  const [Otp,setOtp] = useState("");
  const [Name,setName] =useState("");
  const [LastName,setLastName] =useState("");

  const generateRecaptcha = ()=>{
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        console.log("prepared phone auth process",response);
      }
    }, authentication);
    

  }

const requestOtp=(e)=>{
    e.preventDefault();
    if(Number.length>=10){
      setExpandForm(true);
      generateRecaptcha()
      let appVerifier = window.recaptchaVerifier;
 
      signInWithPhoneNumber(authentication, Number, appVerifier)
          .then((confirmationResult) => {
        
            window.confirmationResult = confirmationResult;
            // ...
          }).catch((error) => {
           console.log(error)
          });
    }
}

  const verifyotp=(e)=>{
    

    if(Otp.length===6){

      let confirmationResult = window.confirmationResult;

      confirmationResult.confirm(Otp).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user)

        
        fetch(Ip+"/UserSignuporSigin",{
          method:"POST",
          headers: {
           'Content-Type': 'application/json'
         },
         body:JSON.stringify({
          "PhoneNumber":Number,
          "email":"",
          "Name":"",
          "Role":"Customer",
          "Address":"",
          "Id":Number 
  
         })
        })
        .then(res=>res.json())
       
         
        
          
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
      });

    }

  }
  const [Screen,setScreen] =useState(0);

  return (
    <div className='body_ '>
      <div className='container'>
      <div className='row'>
          <div className='col-md-6 col-8 offset-md-3 offset-2 p-3 card'>
            <form onSubmit={requestOtp}>
              <h3 className='text-center text-danger mb-5'>Login/ Signup</h3>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="text" placeholder="Phone Number" required value={Number} onChange={(e)=>setNumber(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>

              {ExpandForm===false?
                  
                  <button class="btn btn-success">request OTP</button>
              : <>

                <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter OTP" required value={Otp} onChange={(e)=>setOtp(e.target.value)}/>
                

                </>

              }
              
              <div id="sign-in-button"></div>
            </form>
            <button class="btn btn-primary" style={{width:100,textAlign:'center',marginLeft:'40%',marginTop:10}} onClick={verifyotp}>Login</button>
          </div>
        </div>
      </div>
        
    </div>
   
 
  );

}








function Signin(props) {

  const contrycode = "+91";
  const [Number,setNumber] =useState('+917993031882');
  const [ExpandForm,setExpandForm] = useState(false);
  const [Otp,setOtp] = useState("");
  
 
  const generateRecaptcha = ()=>{
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        console.log("prepared phone auth process",response);
      }
    }, authentication);
    

  }

const requestOtp=(e)=>{
    e.preventDefault();
    if(Number.length>=10){
      setExpandForm(true);
      generateRecaptcha()
      let appVerifier = window.recaptchaVerifier;
 
      signInWithPhoneNumber(authentication, Number, appVerifier)
          .then((confirmationResult) => {
        
            window.confirmationResult = confirmationResult;
            // ...
          }).catch((error) => {
           console.log(error)
          });
    }
}

  const verifyotp=(e)=>{
    

    if(Otp.length===6){

      let confirmationResult = window.confirmationResult;

      confirmationResult.confirm(Otp).then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user)

        
          
          
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
      });

    }

  }

  return(
    <div class="form_div">
    <form onSubmit={requestOtp}>
      <input type="text" placeholder="Phone Number" required value={Number} onChange={(e)=>setNumber(e.target.value)}/>
    
    
    {ExpandForm===false?
    
               <button class="btn btn-success">request OTP</button>
           : <>

             <input type="number" placeholder="Enter OTP" required value={Otp} onChange={(e)=>setOtp(e.target.value)}/>
              
         
             </>
     
 }
<div id="sign-in-button"></div>
</form>
   <button class="btn btn-success" onClick={verifyotp}>submit</button>
 </div>
  )
  
}




const  PhoneLogin=()=>{
    const [presentUser,setPresentUser] = useState(null);
    const navigate = useNavigate();
    var us=false;
    useEffect(()=>{
      authentication.onAuthStateChanged(user =>{
        if(user){
        setPresentUser( 
         user
    )
    us=true;
  
      }
      else{
        setPresentUser(null);
      }
      })
    },[])
     console.log(presentUser)
    return (
      <div>
        <center>
          {presentUser?  navigate('/MainPage') : <Mainscreen  /> }
        </center>
      </div>
    )
  }
  
export default PhoneLogin;