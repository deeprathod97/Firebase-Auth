// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHQeJentc1BHCkvglr8Tl8-oyBGZ3SXTw",
  authDomain: "fir-auth-6a4e6.firebaseapp.com",
  projectId: "fir-auth-6a4e6",
  storageBucket: "fir-auth-6a4e6.firebasestorage.app",
  messagingSenderId: "681300342399",
  appId: "1:681300342399:web:b33b9db7ee012a0647f14a",
  measurementId: "G-G95M0481LK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);