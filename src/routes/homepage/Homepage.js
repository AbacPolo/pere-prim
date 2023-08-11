import React, { useEffect } from "react";
import "./Homepage.css";
import MainBanner from "../../components/mainBanner/MainBanner";
import ImageCarousel from "../../components/imageCarousel/ImageCarousel";
import { fetchAllGames, getgamesAreLoaded } from "../gamePage/gamePageSlice";
import { useDispatch, useSelector } from "react-redux";

function Homepage() {
  const dispatch = useDispatch();
  const gamesAreLoaded = useSelector(getgamesAreLoaded);

  useEffect(() => {
    !gamesAreLoaded && dispatch(fetchAllGames());
  }, [gamesAreLoaded, dispatch]);

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
