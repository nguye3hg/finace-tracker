// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLj1vJlA-B0EoUo_6ceyLHRfnZwCKF8-I",
  authDomain: "expense-tracker-236d3.firebaseapp.com",
  projectId: "expense-tracker-236d3",
  storageBucket: "expense-tracker-236d3.appspot.com",
  messagingSenderId: "1037240861784",
  appId: "1:1037240861784:web:4ee0e2857bc974d6abb62d",
  measurementId: "G-4KF4BJNTMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
