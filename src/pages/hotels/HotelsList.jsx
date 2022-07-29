import React from "react";
import "./hotelsList.css";
import { Header } from "../../Components/header/Header";
import { Navbar } from "../../Components/navbar/Navbar";
import { SearchItem } from "../../Components/searchItem/SearchItem";

export const HotelsList = () => {
  return (
    <div className="hotelsList">
      <Navbar />
      <Header />
      <div className="hotelsListContainer">
        <div className="hotelsListWrapper">
          <div className="hotelsListSearch">
            <h1>Search</h1>
            <div className="searchDestination">
              <label className="label">Destination</label>
              <input type="text" className="searchInput" />
            </div>
            <div className="searchDate">
              <label className="label">Check-in date</label>
              <input type="text" className="searchDateInput" />
            </div>
            <div className="options">
              <span className="optionHeading">Options</span>
              <div className="option">
                <span className="optionName">Min price (per night)</span>
                <input type="text" className="optionInput" />
              </div>
              <div className="option">
                <span className="optionName">Max price (per night)</span>
                <input type="text" className="optionInput" />
              </div>
              <div className="option">
                <span className="optionName">Adult</span>
                <input type="text" className="optionInput" />
              </div>
              <div className="option">
                <span className="optionName">Children</span>
                <input type="text" className="optionInput" />
              </div>
              <div className="option">
                <span className="optionName">Room</span>
                <input type="text" className="optionInput" />
              </div>
            </div>
            <button className="hotelSearchBtn">Search</button>
          </div>
          <div className="hotelsListModal">
            <div className="hotelLists">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
