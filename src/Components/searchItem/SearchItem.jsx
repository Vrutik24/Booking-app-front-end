import React from "react";
import "./searchItem.css";

export const SearchItem = () => {
  return (
    <div className="searchItem">
      <div className="searchHotelImage">
        <img
          src="https://th.bing.com/th/id/OIP.pd-fSNw7ux8JKjmDyOoIlwHaE7?pid=ImgDet&rs=1"
          alt="hotelRoom"
          className="hotelImage"
        />
      </div>
      <div className="searchHotelDesc">
        <div className="searchHotelDescLeft">
          <h3 className="hotelName">Tower Street Apartments</h3>
          <span className="hotelDistance">500m from center</span>
          <div className="hotelTaxi">Free airport taxi</div>
          <span className="hotelRoom">
            Studio Apartment with Air conditioning
          </span>
          <span className="hotelRoomDesc">
            Entire Studio 1 bathroom 21m 1 full bed
          </span>
          <span className="hotelBookingCancellation">Free cancellation</span>
          <span className="hotelBookingPromo">
            You can cancel it today, so lock in this great price today.
          </span>
        </div>
        <div className="searchHotelDescRight">
          <div className="searchHotelDescRightTop">
            <span className="searchHotelDescRightTopReview">Excellent</span>
            <span className="searchHotelDescRightTopRating">8.9</span>
          </div>
          <div className="searchHotelDescRightBottom">
            <span className="rent">$112</span>
            <span className="rentDesc">Includes taxes and fees</span>
            <button className="rightButton">See availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};
