/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1lE2zKjhRAm-NCJwEFpsCwGgx0hMdcmY",
  authDomain: "myhomedel.firebaseapp.com",
  databaseURL: "https://myhomedel-default-rtdb.firebaseio.com",
  projectId: "myhomedel",
  storageBucket: "myhomedel.appspot.com",
  messagingSenderId: "128217027868",
  appId: "1:128217027868:web:d5933a1ccadb2487e456d9",
  measurementId: "G-G5MMESDPT8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

export const provider = new GoogleAuthProvider();

 
export const database = getDatabase(app);