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
import Privacy_PolicyScreen from './screens/Privacy_PolicyScreen';
import Mainscreen from './screens/Login';
import MustTryRestorents from './screens/MustTryRestorents';

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      

 
          
          <Route path="/" element={<Loading />} />
          <Route path="/Login" element={<Mainscreen />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/Restaurants" element={<Restorent />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/DisplayByItem" element={<DisplayByItemScreen />} />
          <Route path="/ShopType" element={<ShopTypeScreen />} />
          <Route path="/MyOrders" element={<MyOrders />} />
          <Route path="/PresentOrders" element={<PresentOrdres />} />
          <Route path="/Tracking" element={<MapScreen />} />
          <Route path="/OrderStatusDetails" element={<OrderStatusDetails />} />
          <Route path="/Privacy" element={<Privacy_PolicyScreen />} />
          <Route path="/MustTryPage" element={<MustTryRestorents />} />
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
