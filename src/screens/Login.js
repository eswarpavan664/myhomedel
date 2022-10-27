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

import Chef from '../images/H LOGO copy.png'
import { provider } from './../firebase';
import { Button } from 'antd';
 
 
import {Helmet} from "react-helmet";




function Mainscreen() {

  const contrycode = "+91";
  const [Number,setNumber] =useState('');
  const [ExpandForm,setExpandForm] = useState(false);
  const [Otp,setOtp] = useState("");
  const [Name,setName] =useState("");
  const [LastName,setLastName] =useState("");
  const [Email,setEmail] =useState("");
  const [Timer,setTimer] =useState(30);
  const [Password,setPassword] =useState("");
       
  const [Start,setStart] =useState();


  const [Screen,setScreen] =useState(0);
  const [ChangeForm,setForm]=useState(2);
 
  
  const [count, setCount] = useState(30);
  var k =count;
 
      
 
  let navigate = useNavigate();

  const detectLogin= async ()=>{
    const token =   localStorage.getItem('user')
     
        if(token){
          navigate('/MainPage');
        }
        else{
          setScreen(1);
        }
        
        
  }
  useEffect(()=>{
  
    detectLogin();
},[])


 


const sendCred = async (em)=>{
 
  const Email ='"'+em+'"';
fetch(Ip+"/UserSigin",{
   
  method:"POST",
  headers: {
   'Content-Type': 'application/json'
 },
 body:JSON.stringify({
  
    "PhonNumber":'+91'+Number,
    "Password":Password,
    
    
 })
})
.then(res=>res.json())
.then(async (data)=>{
       try {
        //localStorage.setItem('user', '+91'+Number);
        if(data.Status==="Wrong"){
          alert("Invalid password/mobile no")

        }
        else if(data.Status==="NO"){
          alert("First Register")
          setForm(2);
        }
        else{
          console.log("Logged done");
          localStorage.setItem('user', '+91'+Number);
          navigate('/MainPage')
        }
       } catch (e) {
         console.log("error hai",e)
          
       }
})
}

 

const signup = async (em)=>{
 
  
fetch(Ip+"/UserSignup",{
  
  method:"POST",
  headers: {
   'Content-Type': 'application/json'
 },
 body:JSON.stringify({
  
    "PhoneNumber":'+91'+Number,
    "Password":Password,
    "email":Email,
    "Name":Name,
    "Role":"Customer",
    "Address":"",
    "Id":'+91'+Number
    
 })
})
.then(res=>res.json())
.then(async (data)=>{
       try {
        //localStorage.setItem('user', '+91'+Number);
        if(data.Status==="Already"){
          alert("you have Already account Please Login with that credentials")
          setForm(1);
        }
        else{
          console.log("Logged done");
          localStorage.setItem('user', '+91'+Number);
          navigate('/MainPage')
        }
       } catch (e) {
         console.log("error hai",e)
          
       }
})
}
        
 
  
 
 
 
  return (
    <>
       <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
              
      </Helmet>

    <div className='login_page_back_'>
        <div className='login_header_ row m-0'>
            <div className='text-center col-12'>
                <img className='img-fluid' src={Chef} style={{overflow:"hidden"}} width="220" />
            </div>
             <p  style={{fontSize:25,fontWeight:'bold',textAlign:'center'}}>My HomeDel</p>
        </div>

        <div className='row'>
            <div className='container col-12 text-center mb-2 mt-5 d-flex justify-content-evenly'>
                    <p className='  font-weight-bold login_signup_text px-5' style={{textDecoration:"none",cursor:"pointer"}} onClick={(e)=>setForm(2)}>Signup</p>
                    <p className='  font-weight-bold login_signup_text px-5' style={{textDecoration:"none",cursor:"pointer"}} onClick={(e)=>setForm(1)}>Login</p>

                </div>
        </div>

        <div className='container text-center login_form_cont_ mt-3'>
            {ChangeForm===2?
            
              <div className='bg-light p-4 px-5  mb-md-0 mb-5 ' style={{display:"inline-block",minWidth:"60%",maxWidth:"100%",borderRadius:"15px",boxShadow:"0 0 10px lightgray"}}>
              



              <div className='row'>
  
                                <h4 className='col-12 text-left pb-4' style={{borderBottom:"1px solid gray"}} >Signup</h4>
                            </div>
            <form >
      
            <div className='row'>
                        <label className='col-12' style={{textAlign:"left"}}>Name</label>
                    </div>
                    <input type={"text"} placeholder="Enter Name" style={{border:"1px solid gray",borderRadius:"15px",backgroundColor:"white",padding:"8px",marginBottom:"10px",width:"100%"}} value={Name} onChange={(e)=>setName(e.target.value)}/><br />
                  

                    <div className='row'>
                        <label className='col-12' style={{textAlign:"left"}}>Email Address</label>
                    </div>
                    <input type={"text"} placeholder="Enter your email" style={{border:"1px solid gray",borderRadius:"15px",backgroundColor:"white",padding:"8px",marginBottom:"10px",width:"100%"}} required value={Email} onChange={(e)=>setEmail(e.target.value)} /><br />
                    <div className='row'>
                        <label className='col-12' style={{textAlign:"left"}}>Phone Number</label>
                    </div>
                    <input type={"number"} placeholder="Enter your phone.no" style={{border:"1px solid gray",borderRadius:"15px",backgroundColor:"white",padding:"8px",marginBottom:"10px",width:"100%"}} required value={Number} onChange={(e)=>setNumber(e.target.value)}/><br />
                    <div className='row'>
                        <label className='col-12' style={{textAlign:"left"}}>Create Password</label>
                    </div>
                    <input type={"password"} placeholder="Enter password" style={{border:"1px solid gray",borderRadius:"15px",backgroundColor:"white",padding:"8px",marginBottom:"10px",width:"100%"}} required value={Password} onChange={(e)=>setPassword(e.target.value)}/><br />
                    


              
                 
              
              
               
      </form>
            <button onClick={signup} className='col-md-2 col-8 offset-2 offset-md-5 login_button_ mt-5' style={{fontSize:17,color:'white',fontWeight:'bold',borderRadius:15}}   >Signup</button>
     
      </div>
      
      :null}
      {ChangeForm===1?
      <div className='bg-light p-4 px-5  mb-md-0 mb-5 ' style={{display:"inline-block",minWidth:"60%",maxWidth:"100%",borderRadius:"15px",background:"white",boxShadow:'0 0 10px lightgray'}}>
              
 

              <div className='row'>
  
                                <h4 className='col-12 text-left pb-4' style={{borderBottom:"1px solid gray",color:'#65A765'}} >Login</h4>
                            </div>
            <form >
      
           
                    
                    <div className='row'>
                        <label className='col-12' style={{textAlign:"left"}}>Phone Number</label>
                    </div>
                    <input type={"number"} placeholder="Enter your phone.no" style={{border:"1px solid gray",borderRadius:"15px",backgroundColor:"white",padding:"8px",marginBottom:"10px",width:"100%"}} required value={Number} onChange={(e)=>setNumber(e.target.value)}/><br />
                    <div className='row'>
                        <label className='col-12' style={{textAlign:"left"}}>Password</label>
                    </div>
                    <input type={"password"} placeholder="Enter password" style={{border:"1px solid gray",borderRadius:"15px",backgroundColor:"white",padding:"8px",marginBottom:"10px",width:"100%"}} required value={Password} onChange={(e)=>setPassword(e.target.value)}/><br />
                    
              
      </form>
      <p className='text-center' onClick={()=>setForm(3)} style={{cursor:'pointer'}}>forget Password</p>
      <div className='row'>
              <button onClick={sendCred} className='col-md-2 col-6 offset-3 offset-md-5 login_button_ mt-3' style={{fontSize:17,color:'white',fontWeight:'bold',borderRadius:15}}  >Login</button>
            </div>
      </div>:null
      }
      {ChangeForm===3?<PhoneLogin setter={setForm}/>:null

      }

             

             
        </div>
         
    </div>
    </>
 
  );

}


 


  



const  PhoneLogin=(props)=>{
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

  let navigate = useNavigate();




  const Signinwithphone = async (em)=>{
 
   
  fetch(Ip+"/UserSiginWithOTP",{
      
    method:"POST",
    headers: {
     'Content-Type': 'application/json'
   },
   body:JSON.stringify({
    
      "PhonNumber":'+91'+Number,
   
      
      
   })
  })
  .then(res=>res.json())
  .then(async (data)=>{
         try {
          //localStorage.setItem('user', '+91'+Number);
          if(data.Status==="Wrong"){
            alert("Invalid password/mobile no")
  
          }
          else if(data.Status==="NO"){
            alert("First Register")
           props.setter(2);
          }
          else{
            /*console.log("Logged done");
            localStorage.setItem('user', '+91'+Number);
            navigate('/MainPage')*/

            requestOtp();
          }
         } catch (e) {
           console.log("error hai",e)
            
         }
  })
  }
  


const requestOtp=(e)=>{
    

    
      fun(30);
               
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
             

const [Start,setStart] =useState();


const verifyotp=(e)=>{
    

    if(Otp.length===6){

      let confirmationResult = window.confirmationResult;

      confirmationResult.confirm(Otp).then((result) => {
        // User signed in successfully.
        const user = result.user;
          if(user){
            console.log("Logged done");
            localStorage.setItem('user', '+91'+Number);
            navigate('/Profile')

            
          }
          else{
            alert("Invalid OTP")
          }

        
        
         
        
          
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error);
        alert("Invalid OTP/Login Error")
      });

    }

  }
  const [Screen,setScreen] =useState(0);
  const [ChangeForm,setForm]=useState(true);
  
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
   
 
 const Resendotp=()=>{
  alert("page Will be Refreshed still you don't get OTP report to our Team")
  window.location.reload(false);
 }
 
    return (
      <div className='bg-light p-4 px-5  mb-md-0 mb-5 ' style={{display:"inline-block",minWidth:"60%",maxWidth:"100%",borderRadius:"15px",background:"white",boxShadow:'0 0 10px lightgray'}}>
              
 

      <div className='row'>

                        <h4 className='col-12 text-left pb-4' style={{borderBottom:"1px solid gray",color:'#65A765'}} >Login</h4>
                    </div>
    <form onSubmit={Signinwithphone}>

   
            
            <div className='row'>
                <label className='col-12' style={{textAlign:"left"}}>Phone Number</label>
            </div>
            <input type={"number"} placeholder="Enter your phone.no" style={{border:"1px solid gray",borderRadius:"15px",backgroundColor:"white",padding:"8px",marginBottom:"10px",width:"100%"}} required value={Number} onChange={(e)=>setNumber(e.target.value)}/><br />
            

      
         
     
                      
      <div id="sign-in-button"></div>
       
</form>
 {ExpandForm===false?
                
                <button class="btn btn-success" style={{width:120}} onClick={Signinwithphone}>Request OTP</button>
            :
              <>


              <div className='row'>
                        <label className='col-12' style={{textAlign:"left"}}>OTP</label>
                </div>
                                  
                <input type={"text"} placeholder="Enter OTP" style={{border:"1px solid gray",borderRadius:"15px",backgroundColor:"white",padding:"8px",width:"100%"}}  required value={Otp} onChange={(e)=>setOtp(e.target.value)} /><br /><br />
                <div className='d-flex justify-content-between align-items-center ' >
                    <p className='m-0'>00:{Timer}</p>
                    <p className='m-0 fs-6' style={{backgroundColor:Timer===0?'orange':'none',borderRadius:5,width:50,cursor:Timer===0?'pointer':'none'}} onClick={Resendotp}>Resend OTP</p>

                </div>  
              </>
          }
<div className='row'>
      
        <button onClick={verifyotp} style={{fontSize:20}} className='col-md-2 col-8 offset-2 offset-md-5 login_button_ mt-5'>Login</button>
    </div>
</div>
    )
}


/*

function LoginPage(props) {

  let navigate = useNavigate();

  const detectLogin= async ()=>{
    const token =   localStorage.getItem('token')
     
        if(token){
          navigate('/DashBoard');
        }
        else{
          setScreen(0);
        }
        
        
  }
  useEffect(()=>{
  
    detectLogin();
},[])



  const [email,setEmail] = useState('');
const [password,setPassword]=useState('')

const [Screen,setScreen] = useState(1);


const sendCred = async (em)=>{

  var id = Math.floor(1000 + Math.random() * 900000);
  const Email ='"'+em+'"';
fetch(Ip+"/StudentUserSignupOrSignin",{
  method:"POST",
  headers: {
   'Content-Type': 'application/json'
 },
 body:JSON.stringify({
  
    "email":Email,
    "Role":"Student",
    "UserId":id
 })
})
.then(res=>res.json())
.then(async (data)=>{
       try {
          localStorage.setItem('token',Email)
          localStorage.setItem('Role',"Student")
          
          navigate('/Dashboard');
       } catch (e) {
         console.log("error hai",e)
          
       }
})
}



 



return (
  <>
   
  </>
  

  
)
}*/
  
export default Mainscreen;