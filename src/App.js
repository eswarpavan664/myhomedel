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
import Comp_for_home from './components/Comp_for_home';
import DisplayByItemScreen from './screens/DisplayByItemScreen';
import ShopTypeScreen from './screens/ShopTypeScreen';
import MyOrders from './components/MyOrders';
import PresentOrdres from './components/PresentOrdres';
import MapScreen from './MapScreen';
import OrderStatusDetails from './screens/OrderStatusDetails';

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
          <Route path="/DisplayByItem" element={<DisplayByItemScreen />} />
          <Route path="/ShopType" element={<ShopTypeScreen />} />
          <Route path="/MyOrders" element={<MyOrders />} />
          <Route path="/PresentOrders" element={<PresentOrdres />} />
          <Route path="/Tracking" element={<MapScreen />} />
          <Route path="/OrderStatusDetails" element={<OrderStatusDetails />} />
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
