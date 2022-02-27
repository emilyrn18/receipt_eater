// Import the functions you need from the SDKs you need
import firebase  from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUVejyGWgsxh3OtipvgYZo_X9cDCudXdA",
  authDomain: "receipteater-f0b50.firebaseapp.com",
  projectId: "receipteater-f0b50",
  storageBucket: "receipteater-f0b50.appspot.com",
  messagingSenderId: "1047840377018",
  appId: "1:1047840377018:web:54f9b62bbb0719da115a83",
  measurementId: "G-PKGETJGEQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const databaseref = firebase.database().ref()
export const receipteaterref = databaseref.child("receipteater")
export default firebase; 