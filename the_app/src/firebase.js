import firebase from "firebase/app"; 
import "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyCgxdKkSCPDyf25vdqSpiis30Zlx3U6dV4",
  authDomain: "receipt-eater.firebaseapp.com",
  projectId: "receipt-eater",
  storageBucket: "receipt-eater.appspot.com",
  messagingSenderId: "21164153358",
  appId: "1:21164153358:web:82adea98cb6f3a916cfa5f"
};

firebase.initializeApp(firebaseConfig); 

export default firebase; 