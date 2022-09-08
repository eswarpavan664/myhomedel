/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect, Suspense} from 'react'
 
import {Ip} from '../constants/Ip'
import { useNavigate } from 'react-router-dom';
 
 

import  '../css/loginstyles.css'
import { authentication ,database } from '../firebase';
import { RecaptchaVerifier , signInWithPhoneNumber} from "firebase/auth";

import {getDatabase, ref, set , onValue, child, get, push, update  } from "firebase/database";

import Chef from '../images/WhatsApp Image 2022-08-26 at 3.18.28 PM (1).jpeg'
 





function Mainscreen() {

  const contrycode = "+91";
  const [Number,setNumber] =useState('+91');
  const [ExpandForm,setExpandForm] = useState(false);
  const [Otp,setOtp] = useState("");
  const [Name,setName] =useState("");
  const [LastName,setLastName] =useState("");
  const [Email,setEmail] =useState("");

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
          "email":Email,
          "Name":Name,
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
  const [ChangeForm,setForm]=useState(true);
  return (
    <div className='login_page_back_'>
        <div className='login_header_ row m-0'>
            <div className='text-center col-12'>
                <img className='img-fluid' src={Chef} style={{overflow:"hidden"}} width="220" />
            </div>
            <div className='container col-12 text-center mb-3 d-flex justify-content-evenly'>
                <p className='text-danger font-weight-bold login_signup_text px-5' style={{textDecoration:"underline",cursor:"pointer"}} onClick={(e)=>setForm(true)}>Signup</p>
                <p className='text-danger font-weight-bold login_signup_text px-5' style={{textDecoration:"underline",cursor:"pointer"}} onClick={(e)=>setForm(false)}>Login</p>

            </div>
        </div>
        <div className='container text-center login_form_cont_ mt-5'>
            {!ChangeForm?<form onSubmit={requestOtp}>
      
                <div class="form-floating mb-3 col-md-4 offset-md-4 col-8 offset-2 input_item">
                      <input type={"text"} placeholder="Enter your name"   class="form-control" id="floatingInput" value={Name} onChange={(e)=>setName(e.target.value)}  />
                      <label for="floatingInput" className='m-1'>Enter your name</label>
                    </div>
                    
                  <div class="form-floating mb-3 col-md-4 offset-md-4 col-8 offset-2 input_item">
                    <input type={"text"} placeholder="Phone Number"   class="form-control" id="floatingInput" required value={Email} onChange={(e)=>setEmail(e.target.value)} />
                    <label for="floatingInput" className='m-1'>Enter Email</label>
                  </div>

                  <div class="form-floating mb-3 col-md-4 offset-md-4 col-8 offset-2 input_item">
                    <input type={"text"} placeholder="Phone Number"   class="form-control" id="floatingInput" required value={Number} onChange={(e)=>setNumber(e.target.value)} />
                    <label for="floatingInput" className='m-1'>Phone Number</label>
                  </div>
          
              
                 
             
    {ExpandForm===false?
    
      <button class="btn btn-success">request OTP</button>
        : <>

  
        <div class="form-floating mb-3 col-md-4 offset-md-4 col-8 offset-2 input_item">
                    <input type={"number"} placeholder="Enter your OTP"    class="form-control" id="floatingInput" required value={Otp} onChange={(e)=>setOtp(e.target.value)} />
                    <label for="floatingInput" className='m-1'>Enter OTP</label>
                  </div>
 
      

      </>

    }
    <div id="sign-in-button"></div>
      </form>:
      <form onSubmit={requestOtp}>
      
              
                    
                  <div class="form-floating mb-3 col-md-4 offset-md-4 col-8 offset-2 input_item">
                    <input type={"text"} placeholder="Phone Number"   class="form-control" id="floatingInput" required value={Number} onChange={(e)=>setNumber(e.target.value)} />
                    <label for="floatingInput" className='m-1'>Phone Number</label>
                  </div>
          
              
                 
             
    {ExpandForm===false?
    
      <button class="btn btn-success">request OTP</button>
        : <>

  
        <div class="form-floating mb-3 col-md-4 offset-md-4 col-8 offset-2 input_item">
                    <input type={"number"} placeholder="Enter your OTP"    class="form-control" id="floatingInput" required value={Otp} onChange={(e)=>setOtp(e.target.value)} />
                    <label for="floatingInput" className='m-1'>Enter OTP</label>
                  </div>
 
      

      </>

    }
    <div id="sign-in-button"></div>
      </form>
      }


             

            <div className='row'>
                <button onClick={verifyotp} className='col-md-2 col-6 offset-3 offset-md-5 login_button_ mt-5'>Login</button>
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
    localStorage.setItem('user', user.phoneNumber );
  
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