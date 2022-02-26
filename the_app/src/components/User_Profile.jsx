import React from "react";

function User_Profile() {
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
    </div>
  );
}

export default User_Profile;