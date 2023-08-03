import React from "react";
import "./Homepage.css";
import MainBanner from "../../components/mainBanner/MainBanner";

function Homepage() {
  return (
    <div className="Homepage_Container">
      <div className="Homepage_Wrapper">
        <MainBanner />
      </div>
    </div>
  );
}

export default Homepage;