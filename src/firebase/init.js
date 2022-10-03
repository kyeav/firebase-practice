// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsim-sD-hkweIt7r-sJftzeb0QUGqw4NA",
  authDomain: "fir-practice-e4744.firebaseapp.com",
  projectId: "fir-practice-e4744",
  storageBucket: "fir-practice-e4744.appspot.com",
  messagingSenderId: "382636705971",
  appId: "1:382636705971:web:8110ccd0e084f2f45d48c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()