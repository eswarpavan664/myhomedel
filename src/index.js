/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../src/screens/redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Dashboard from './screens/Admin/Dashboard';
import AdminNavigation from './screens/Admin/AdminNavigation';

import Comp_for_home from './components/Comp_for_home';
import Cat from './components/Cat';
import MapScreen from './MapScreen';
import {Helmet} from "react-helmet";
const root = ReactDOM.createRoot(document.getElementById('root'));
 
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        </Helmet>
   <App />
   </Provider>
         
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
