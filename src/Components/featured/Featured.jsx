import React from "react";
import "./featured.css";

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP._YaIc_veQIXWKsFJQL_uXwHaEK?pid=ImgDet&rs=1"
          alt="Dublin"
          className="featuredImg"
        />
        <div className="featuredText">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP.7IyHp1OgKdTd7NnSuuG74AHaEK?pid=ImgDet&rs=1"
          alt="Dublin"
          className="featuredImg"
        />
        <div className="featuredText">
          <h1>Austin</h1>
          <h2>403 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://th.bing.com/th/id/OIP._YaIc_veQIXWKsFJQL_uXwHaEK?pid=ImgDet&rs=1"
          alt="Dublin"
          className="featuredImg"
        />
        <div className="featuredText">
          <h1>Reno</h1>
          <h2>33 Properties</h2>
        </div>
      </div>
    </div>
  );
};
