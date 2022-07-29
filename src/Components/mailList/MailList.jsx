import React from "react";
import "./mailList.css";

export const MailList = () => {
  return (
    <div className="mail">
      <h2>Save time, save money!</h2>
      <span>Sign up and we will send best deals to you.</span>
      <div className="searchBar">
        <input type="text" placeholder="Your email" />
        <button className="searchBarButton">Subscribe</button>
      </div>
      <div className="notification">
        <input type="checkbox" />
        <span>Send me a link to get a free Booking.com app!</span>
      </div>
    </div>
  );
};
