// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBikCT5ksmnTyBbe8-tLRAT3j4gsPUQywI",
  authDomain: "carapp-7870d.firebaseapp.com",
  projectId: "carapp-7870d",
  storageBucket: "carapp-7870d.appspot.com",
  messagingSenderId: "158011798793",
  appId: "1:158011798793:web:d12030b958ba023d5f4fd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);