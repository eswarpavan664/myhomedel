/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect, Suspense} from 'react'
 
import {Ip} from '../constants/Ip'
import { useNavigate } from 'react-router-dom';
 
 

import  '../css/loginstyles.css'
import { authentication ,database } from '../firebase';
import { RecaptchaVerifier , signInWithPhoneNumber, getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

import {getDatabase, ref, set , onValue, child, get, push, update  } from "firebase/database";

import Chef from '../images/WhatsApp Image 2022-08-26 at 3.18.28 PM (1).jpeg'
import { provider } from './../firebase';
import { Button } from 'antd';
 





function Mainscreen() {

  const contrycode = "+91";
  const [Number,setNumber] =useState('');
  const [ExpandForm,setExpandForm] = useState(false);
  const [Otp,setOtp] = useState("");
  const [Name,setName] =useState("");
  const [LastName,setLastName] =useState("");
  const [Email,setEmail] =useState("");
    const [Timer,setTimer] =useState(30);
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

    
      fun(30);
   

    //setTimeout(() =>setTimer(Timer-1), 2000);    
      fetch(Ip+'/GetUserNewOrOld?id='+Number,{
        headers:new Headers({
          Authorization:"Bearer " 
        })
        }).then(res=>res.json())
        
        .then(data=>{ 
        
          
     
        console.log("Data = ",data.Status);
          
              if(data.Status==="Yes"){
                
                if(Number.length>=10){
                  setExpandForm(true);
                  generateRecaptcha()
                  let appVerifier = window.recaptchaVerifier;
             
                  signInWithPhoneNumber(authentication, "+91"+Number, appVerifier)
                      .then((confirmationResult) => {
                    
                        window.confirmationResult = confirmationResult;
                        console.log("")
                        // ...
                      }).catch((error) => {
                       console.log(error)
                      });
                  
                }
              }
              else{
                alert("Register first....!");
                setForm(false);
              }
        
        }
        )


  
}

const [Start,setStart] =useState();



const Sms=()=>{
  fetch('https://textbelt.com/text', {
  method: 'post',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    phone: '7993031882',
    message: 'Hello world',
    key: 'f9d6547b8dc726a086037da4d84c5e8fe22daba4PePGfgDjvNmUV2OiueVqMBgP3',
  }),
}).then(response => {
  return response.json();
}).then(data => {
  console.log(data);
});
}
  

const SignuprequestOtp=(e)=>{
  e.preventDefault();
  fun(30)

          
    fetch(Ip+'/GetUserNewOrOld?id='+Number,{
      headers:new Headers({
        Authorization:"Bearer " 
      })
      }).then(res=>res.json())
      
      .then(data=>{ 
      
        
   
      console.log("Data = ",data.Status);
        
             
              
              if(Number.length>=10){
                setExpandForm(true);
                generateRecaptcha()
                let appVerifier = window.recaptchaVerifier;
           
                signInWithPhoneNumber(authentication, "+91"+Number, appVerifier)
                    .then((confirmationResult) => {
                  
                      window.confirmationResult = confirmationResult;
                      console.log("")
                      // ...
                    }).catch((error) => {
                     console.log(error)
                    });  
              }
           
      }
      )



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
          "PhoneNumber":"+91"+Number,
          "email":Email,
          "Name":Name,
          "Role":"Customer",
          "Address":"",
          "Id":"+91"+Number
  
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
  //console.log("+91")



const sign =()=>{
  const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;


    fetch(Ip+"/UserSignuporSigin",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
      "PhoneNumber":user.phoneNumber?user.phoneNumber:"1234567890",
      "email":user.email,
      "Name":user.displayName,
      "Role":"Customer",
      "Address":"",
      "Id":user.email

     })
    })
    .then(res=>res.json())

    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}



const [count, setCount] = useState(30);
var k =count;
 
const fun=(e) => {
  var timesRun = e;
  
  var interval = setInterval(function(){
      timesRun -= 1;
      setTimer(timesRun)
      if(timesRun ===0){
          clearInterval(interval);
          console.log("stoped")
      }
      //do whatever here..
      console.log(timesRun)
  }, 1000); 
     
  
 }
   
   
 
  return (
    <div className='login_page_back_'>
        <div className='login_header_ row m-0'>
            <div className='text-center col-12'>
                <img className='img-fluid' src={Chef} style={{overflow:"hidden"}} width="220" />
            </div>
             <p  style={{fontSize:25,fontWeight:'bold'}}>My HomeDel</p>
        </div>

        <div className='row'>
            <div className='container col-12 text-center mb-2 mt-5 d-flex justify-content-evenly'>
                    <p className='  font-weight-bold login_signup_text px-5' style={{textDecoration:"none",cursor:"pointer"}} onClick={(e)=>setForm(false)}>Signup</p>
                    <p className='  font-weight-bold login_signup_text px-5' style={{textDecoration:"none",cursor:"pointer"}} onClick={(e)=>setForm(true)}>Login</p>

                </div>
        </div>

        <div className='container text-center login_form_cont_ mt-3'>
            {!ChangeForm?
            
              <div className='bg-light p-4 px-5  mb-md-0 mb-5 ' style={{display:"inline-block",minWidth:"60%",maxWidth:"100%",borderRadius:"15px",boxShadow:"0 0 10px lightgray"}}>
              



              <div className='row'>
  
                                <h4 className='col-12 text-left pb-4' style={{borderBottom:"1px solid gray"}} >Signup</h4>
                            </div>
            <form onSubmit={SignuprequestOtp}>
      
            <div className='row'>
                        <label className='col-12' style={{textAlign:"left"}}>Name</label>
                    </div>
                    <input type={"text"} placeholder="Enter Name" style={{border:"1px solid gray",borderRadius:"50px",backgroundColor:"white",padding:"8px",marginBottom:"10px",width:"100%"}} value={Name} onChange={(e)=>setName(e.target.value)}/><br />
                  

                    <div className='row'>
                        <label className='col-12' style={{textAlign:"left"}}>Email Address</label>
                    </div>
                    <input type={"text"} placeholder="Enter your email" style={{border:"1px solid gray",borderRadius:"50px",backgroundColor:"white",padding:"8px",marginBottom:"10px",width:"100%"}} required value={Email} onChange={(e)=>setEmail(e.target.value)} /><br />
                    <div className='row'>
                        <label className='col-12' style={{textAlign:"left"}}>Phone Number</label>
                    </div>
                    <input type={"number"} placeholder="Enter your phone.no" style={{border:"1px solid gray",borderRadius:"50px",backgroundColor:"white",padding:"8px",marginBottom:"10px",width:"100%"}} required value={Number} onChange={(e)=>setNumber(e.target.value)}/><br />
                    

              
                 
             
                              {ExpandForm===false?
                        
                                      <button class="btn btn-success" style={{width:'50%'}}>request OTP</button>
                                  :
                                    <>

                      
                                    <div className='row'>
                                            <label className='col-12' style={{textAlign:"left"}}>OTP</label>
                                    </div>
                                                      
                                    <input type={"text"} placeholder="Enter OTP" style={{border:"1px solid gray",borderRadius:"50px",backgroundColor:"white",padding:"8px",width:"100%"}}  required value={Otp} onChange={(e)=>setOtp(e.target.value)} /><br /><br />
                                    <div className='d-flex justify-content-between align-items-center ' >
                                          <p className='m-0'>00:{Timer}</p>
                                          <p className='m-0 fs-6' style={{backgroundColor:Timer===0?'orange':'none',borderRadius:5,width:90,cursor:Timer===0?'pointer':'none'}} onClick={Timer===0?SignuprequestOtp:console.log("error")}>Resend OTP</p>

                                      </div> 
                                    </>
                                }
              <div id="sign-in-button"></div>
               
      </form>
      <div className='row'>
                <button onClick={verifyotp} className='col-md-2 col-6 offset-3 offset-md-5 login_button_ mt-5' style={{fontSize:20}}  >Login</button>
            </div>
      </div>
      
      :
      <div className='bg-light p-4 px-5  mb-md-0 mb-5 ' style={{display:"inline-block",minWidth:"60%",maxWidth:"100%",borderRadius:"15px",background:"white",boxShadow:'0 0 10px lightgray'}}>
              
 

              <div className='row'>
  
                                <h4 className='col-12 text-left pb-4' style={{borderBottom:"1px solid gray",color:'#65A765'}} >Login</h4>
                            </div>
            <form onSubmit={requestOtp}>
      
           
                    
                    <div className='row'>
                        <label className='col-12' style={{textAlign:"left"}}>Phone Number</label>
                    </div>
                    <input type={"number"} placeholder="Enter your phone.no" style={{border:"1px solid gray",borderRadius:"50px",backgroundColor:"white",padding:"8px",marginBottom:"10px",width:"100%"}} required value={Number} onChange={(e)=>setNumber(e.target.value)}/><br />
                    

              
                 
             
                              {ExpandForm===false?
                        
                                      <button class="btn btn-success">request OTP</button>
                                  :
                                    <>

                      
                                    <div className='row'>
                                              <label className='col-12' style={{textAlign:"left"}}>OTP</label>
                                      </div>
                                                        
                                      <input type={"text"} placeholder="Enter OTP" style={{border:"1px solid gray",borderRadius:"50px",backgroundColor:"white",padding:"8px",width:"100%"}}  required value={Otp} onChange={(e)=>setOtp(e.target.value)} /><br /><br />
                                      <div className='d-flex justify-content-between align-items-center ' >
                                          <p className='m-0'>00:{Timer}</p>
                                          <p className='m-0 fs-6' style={{backgroundColor:Timer===0?'orange':'none',borderRadius:5,width:90,cursor:Timer===0?'pointer':'none'}} onClick={requestOtp}>Resend OTP</p>

                                      </div>  
                                    </>
                                }
              <div id="sign-in-button"></div>
               
      </form>
      <div className='row'>
                <button onClick={verifyotp} style={{fontSize:20}} className='col-md-2 col-8 offset-2 offset-md-5 login_button_ mt-5'>Login</button>
            </div>
      </div>
      }


             

             
        </div>
         <button onClick={Sms}>Send msg</button>
        
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
 
      signInWithPhoneNumber(authentication, "+91"+Number, appVerifier)
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
console.log("number = ",Number)
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