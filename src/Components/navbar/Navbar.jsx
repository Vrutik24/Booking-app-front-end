import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <span className="brandLogo">lamabooking</span>
        <div className="buttongrp">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};
