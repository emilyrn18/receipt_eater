import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  User_Profile,
  Receipt_Capture,
} from "./components";

function App(){

  return(
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/User_Profile" element={<User_Profile />}/>
          <Route path="/Receipt_Capture" element={<Receipt_Capture />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App;