import React from "react";
import ReactDOM from "react-dom";
// import firebase from "./firebase/compat/app";
// import "firebase/compat/auth"
// import "firebase/compat/firestore"

import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  User_Profile,
  Receipt_Capture,
  Finance_Bot,
} from "./components";

// const ref = firebase.firestore().collection("clients");

function App(){
  return(
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User_Profile" element={<User_Profile />} />
          <Route path="/Receipt_Capture" element={<Receipt_Capture />} />
          <Route path="/Finance_Bot" element={<Finance_Bot />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;