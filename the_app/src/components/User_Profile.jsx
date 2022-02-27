import React, {useEffect} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import img1 from './chipotle.JPG';
import Card from "./Card";

function User_Profile() {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
    <div className="User_Profile">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">User Profile</h1>
            <p>
              This page is meant to display a list of cards that show information 
              for each receipt the user uploads onto the web app. This list can 
              be filtered by date and subject.
            </p>
          </div>
        </div>
      </div>
      <section className="py-4 py-lg-5 container">
        <div className="row">
          <Card aos="fade-up" aos_offset="100" img={img1} title="Chipotle" desc="Restaurant food purchase. Total Purchase 10.68. Click here for more information."/>
          <Card aos="fade-up" aos_offset="100" img={img1} title="Chipotle" desc="Restaurant food purchase. Total Purchase 10.68. Click here for more information."/>
          <Card aos="fade-up" aos_offset="100" img={img1} title="Chipotle" desc="Restaurant food purchase. Total Purchase 10.68. Click here for more information."/>
          <Card aos="fade-up" aos_offset="100" img={img1} title="Chipotle" desc="Restaurant food purchase. Total Purchase 10.68. Click here for more information."/>
          <Card aos="fade-up" aos_offset="100" img={img1} title="Chipotle" desc="Restaurant food purchase. Total Purchase 10.68. Click here for more information."/>
          <Card aos="fade-up" aos_offset="100" img={img1} title="Chipotle" desc="Restaurant food purchase. Total Purchase 10.68. Click here for more information."/>
          <Card aos="fade-up" aos_offset="100" img={img1} title="Chipotle" desc="Restaurant food purchase. Total Purchase 10.68. Click here for more information."/>
          <Card aos="fade-up" aos_offset="100" img={img1} title="Chipotle" desc="Restaurant food purchase. Total Purchase 10.68. Click here for more information."/>
          <Card aos="fade-up" aos_offset="100" img={img1} title="Chipotle" desc="Restaurant food purchase. Total Purchase 10.68. Click here for more information."/>
          <Card aos="fade-up" aos_offset="100" img={img1} title="Chipotle" desc="Restaurant food purchase. Total Purchase 10.68. Click here for more information."/>
          <Card aos="fade-up" aos_offset="100" img={img1} title="Chipotle" desc="Restaurant food purchase. Total Purchase 10.68. Click here for more information."/>
          <Card aos="fade-up" aos_offset="100" img={img1} title="Chipotle" desc="Restaurant food purchase. Total Purchase 10.68. Click here for more information."/>
          <Card aos="fade-up" aos_offset="100" img={img1} title="Chipotle" desc="Restaurant food purchase. Total Purchase 10.68. Click here for more information."/>

        </div>
      </section>
    </div>
  );
}

export default User_Profile;

function Card(props){
  return(
    <div className = "card">
      <div className="card__body">
        <img src={props.img}></img>
        <h2 className = "card__title"></h2>
      </div>
    </div>
  )
}