import React from "react";
import "./Homepage.css";
import MainBanner from "../../components/mainBanner/MainBanner";
import ImageCarousel from "../../components/imageCarousel/ImageCarousel";

function Homepage() {
  return (
    <div className="Homepage_Container">
      <div className="Homepage_Wrapper">
        <MainBanner />
        <ImageCarousel />
      </div>
    </div>
  );
}

export default Homepage;