// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDGJb5EMeNbZkHpAOxkZPLMhnb1pcSUtlQ",
  authDomain: "movie-mania-95dbe.firebaseapp.com",
  projectId: "movie-mania-95dbe",
  storageBucket: "movie-mania-95dbe.appspot.com",
  messagingSenderId: "893634043710",
  appId: "1:893634043710:web:f4c015f5bf642f4a85d66f",
  measurementId: "G-MFLPVG41RD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);