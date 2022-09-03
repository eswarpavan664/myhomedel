import React,{useState,useEffect} from 'react';
import './App.css';
import {
  useNavigate ,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

 
import Loading from './screens/Loading'
 
import Home from './screens/Home';
 
import PhoneLogin from './screens/Login';
import Payment from './screens/Payment';
import Restorent from './screens/Restorent';
import ProfilePage from './screens/ProfilePage';
import { Ip } from './constants/Ip';
import MainPage from './screens/MainPage';
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      

 
          
          <Route path="/" element={<Loading />} />
          <Route path="/Login" element={<PhoneLogin />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/Restorent" element={<Restorent />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Profile" element={<ProfilePage />} />
         
    </Routes>
  </BrowserRouter>
  );
}

export default App;
