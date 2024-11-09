// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD16M5-pI9lxbIw0ZSHFZaOMxB3pRmW4Uw",
  authDomain: "sm-shope-3e59e.firebaseapp.com",
  projectId: "sm-shope-3e59e",
  storageBucket: "sm-shope-3e59e.firebasestorage.app",
  messagingSenderId: "392795647909",
  appId: "1:392795647909:web:eb40904a758dcf3348424c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
