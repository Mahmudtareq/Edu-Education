// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb3JNMNmzmkykjAvsqHZ0kDEv7lopCqDY",
  authDomain: "education-hub-10fa0.firebaseapp.com",
  projectId: "education-hub-10fa0",
  storageBucket: "education-hub-10fa0.appspot.com",
  messagingSenderId: "1081792839357",
  appId: "1:1081792839357:web:13478cf77970571330c1d4",
};

// Initialize Firebase
const firebaseAuthApp = initializeApp(firebaseConfig);
export default firebaseAuthApp;
