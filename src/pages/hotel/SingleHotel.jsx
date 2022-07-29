import React from "react";
import "./singleHotel.css";
import { Header } from "../../Components/header/Header";
import { Navbar } from "../../Components/navbar/Navbar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MailList } from "../../Components/mailList/MailList";
import { Footer } from "../../Components/footer/Footer";

export const SingleHotel = () => {
  return (
    <div className="singleHotel">
      <Navbar />
      <Header />
      <div className="singleHotelContainer">
        <div className="singleHotelWrapper">
          <div className="singleHotelBookingDesc">
            <div className="singleHotelAddress">
              <h1>Tower Street Apartment</h1>
              <div className="hotelAddress">
                <LocationOnIcon />
                <span className="">
                  5 Basztowa, Old Town, 33-332 Krakow, Poland
                </span>
              </div>

              <h3 className="hotelDistance">
                Excellent Location - 500m from center
              </h3>
              <span className="hotelBenifit">
                Book a stay over $114 at this property and get free airport taxi
              </span>
            </div>
            <div className="singleHotelBookBtn">
              <button className="reserveBtn">Reserve or Book Now!</button>
            </div>
          </div>
          <div className="singleHotelImages">
            <div className="singleHotelImagesRow1">
              <img
                src="https://th.bing.com/th/id/R.65149da4b70cb392c1882d6ae4a791b5?rik=EN%2f0UJu7Hld74w&riu=http%3a%2f%2f4.bp.blogspot.com%2f-g1OaCgGEKUA%2fUpWC8ThAhTI%2fAAAAAAAANbE%2fTF005TEZQak%2fs1600%2fMumbai-Taj-Hotel-Pictures-Wallpaper-1920x1080.jpg&ehk=5FIg3FPTwQJcYY189UZhad6cY6cnKZr85LLJz3vFeuA%3d&risl=&pid=ImgRaw&r=0"
                alt="hotel"
              />
              <img
                src="https://th.bing.com/th/id/OIP.WUb8_p0JupYqRtaPYmkQXQHaE7?pid=ImgDet&rs=1"
                alt="hotel"
              />
              <img
                src="https://th.bing.com/th/id/R.9e096515d752f77cddebd1dd176b2c7e?rik=zRuYaIiWMw0UVw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-k-IGJgMq4b0%2fTbcV8cKgUVI%2fAAAAAAAAGa4%2f9p2pd7TErdo%2fs1600%2f31TH_TAJ_MAHAL_87683f.jpg&ehk=MwsASNJ7cnuwOF44Tk9rCoVIPA3RgsQ4rx1gwMiFnZ8%3d&risl=&pid=ImgRaw&r=0"
                alt="hotel"
              />
            </div>
            <div className="singleHotelImagesRow2">
              <img
                src="https://c2.staticflickr.com/4/3276/3067784105_6185f3e705_b.jpg"
                alt="hotel"
              />
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/01/1e/df/89/mumbai-bombay.jpg"
                alt="hotel"
              />
              <img
                src="https://th.bing.com/th/id/OIP.ieNIliJVy9DKb_eJhJsXRQHaEo?pid=ImgDet&rs=1"
                alt="hotel"
              />
            </div>
          </div>
          <div className="hotelDetails">
            <div className="hotelDesc">
              <h1>Stay in the heart of Krakow</h1>
              <p>
                Situated on the Vistula River in Lesser Poland Voivodeship, the
                city dates back to the seventh century. Kraków was the official
                capital of Poland until 1596 and has traditionally been one of
                the leading centres of Polish academic, economic, cultural and
                artistic life.A city for centuries appreciated for its cultural
                heritage has also become a European centre of gastronomic
                heritage. In 2019, the city of Kraków was granted the title of
                European Capital of Gastronomic Culture by the European Academy
                of Gastronomy. Krakow is the city living a full cultural life.
              </p>
            </div>
            <div className="hotelDiscountCardContainer">
              <div className="hotelDiscountCard">
                <span className="hotelDiscountCardTitle">
                  Perfect for a 9-night stay!
                </span>
                <span>
                  Located in the real heart of krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <span className="hotelDiscountCardPrice">$945 (9-nights)</span>
                <button className="krakowReserve">Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};
