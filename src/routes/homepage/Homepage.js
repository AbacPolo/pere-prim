import React, { useEffect } from "react";
import "./Homepage.css";
import MainBanner from "../../components/mainBanner/MainBanner";
import ImageCarousel from "../../components/imageCarousel/ImageCarousel";
import { fetchAllGames } from "../../routes/gamePage/gamePageSlice";
import { useDispatch } from "react-redux";

function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllGames());
  }, []);

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
