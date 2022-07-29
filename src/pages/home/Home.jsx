import React from "react";
import "./home.css";
import { Featured } from "../../Components/featured/Featured";
import { Header } from "../../Components/header/Header";
import { Navbar } from "../../Components/navbar/Navbar";
import { PropertList } from "../../Components/property/PropertList";
import { FeaturedProperties } from "../../Components/featuredProperties/FeaturedProperties";
import { MailList } from "../../Components/mailList/MailList";
import { Footer } from "../../Components/footer/Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="featuredContainer">
        <Featured />
        <h1 className="propertyHeading">Browse by property type</h1>
        <PropertList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
