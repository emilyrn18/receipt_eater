import React from "react";
import { NavLink } from "react-router-dom";
import styles from './styles.css';

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Receipt Eater Web App
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/User_Profile">
                  User Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Receipt_Capture">
                  Receipt Capture
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;