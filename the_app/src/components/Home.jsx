import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <br></br>
            <h4>Inspiration:</h4>
            <p>
                Our inspiration for this app is, 
                a lot of people struggle with keeping track of receipts and managing their finances. 
                Better finance will lead to better financial decisions.
            </p>
            <h4>What it does:</h4>
            <p>
                This app will take in an image of a receipt and record necessary information 
                such as the company the user bought something from, the item(s) they purchased, 
                and the break down of the cost. It will then organize this spending based on type 
                of purchase and the date it was purchased. We also hope to add a feature for 
                users to ask questions about credit scores, loans, and tax information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;