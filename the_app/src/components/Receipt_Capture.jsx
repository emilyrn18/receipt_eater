import React, { Component, useState, useEffect } from "react";
import {Button, Modal} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? 'Loading…' : 'Click to Capture Receipt'}
    </Button>
  );
}



function Receipt_Capture() {
  
  // const [currentTime, setCurrentTime] = useState(0);

  // useEffect(() => {
  //   fetch('http://localhost:5000/time', 
  //   {
  //     method: 'GET', 
  //     mode: 'no-cors',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     setCurrentTime(data.time);
  //   });
  // }, []);

  // console.log(currentTime)

  return (
    <div className="Receipt_Capture">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Receipt_Capture</h1>
            <LoadingButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipt_Capture;