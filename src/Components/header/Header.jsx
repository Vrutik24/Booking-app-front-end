import React from "react";
import "./header.css";
import HotelIcon from "@mui/icons-material/Hotel";
import FlightIcon from "@mui/icons-material/Flight";
import CarRentalIcon from "@mui/icons-material/CarRental";
import AttractionsIcon from "@mui/icons-material/Attractions";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ManIcon from "@mui/icons-material/Man";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";

export const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <HotelIcon />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FlightIcon />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <CarRentalIcon />
            <span>Car Rental</span>
          </div>
          <div className="headerListItem">
            <AttractionsIcon />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <LocalTaxiIcon />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="marketingHeading">
          A lifetime of discount? It's Genius.
        </h1>
        <p className="marketingDesc">
          Get rewards for your travel - unlock instant savings of 10% or more
          with a free lamabooking account.
        </p>
        <button className="regButton">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <AirlineSeatIndividualSuiteIcon className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <DateRangeIcon className="headerIcon" />
            <span onClick={() => setOpen(!open)} className="searchText">
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
            {open && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <ManIcon className="headerIcon" />
            <span className="searchText">2 Adults 2 Children 1 Room</span>
          </div>
          <div className="headerSearchItem">
            <button className="headerButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};
