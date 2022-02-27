import React from "react";
import { ReactDOM } from "react";

function User_Profile() {
  return (
    <div className="User_Profile">
      <h1 class="font-weight-light">User Profile</h1>
      <Card 
      img ="https://www.bing.com/images/search?view=detailV2&ccid=AUrlV8%2bc&id=37F1C92B8351933931879361A43FDF9B72558F1E&thid=OIP.AUrlV8-cM3Lxe1-71Pa-0AHaMT&mediaurl=https%3a%2f%2fexpressexpense.com%2fimages%2fgas-fuel-receipt-sample.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.014ae557cf9c3372f17b5fbbd4f6bed0%3frik%3dHo9VcpvfP6Rhkw%26pid%3dImgRaw%26r%3d0&exph=997&expw=600&q=image+of+gas+station+receipt&simid=608001716743856413&FORM=IRPRST&ck=77E51CADECE8EC0CF4944362982D4B6A&selectedIndex=15&ajaxhist=0&ajaxserp=0"/>
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