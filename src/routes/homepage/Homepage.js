import React, { useEffect } from "react";
import "./Homepage.css";
import MainBanner from "../../components/mainBanner/MainBanner";
import ImageCarousel from "../../components/imageCarousel/ImageCarousel";
import { fetchAllGames, getgamesAreLoaded } from "../gamePage/gamePageSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainBanner, getBannerIsLoaded } from "../../components/mainBanner/mainBannerSlice";
import { fetchAbout, getAboutIsLoaded } from "../aboutPage/aboutPageSlice";

function Homepage() {
  const dispatch = useDispatch();
  const gamesAreLoaded = useSelector(getgamesAreLoaded);
  const bannerIsLoaded = useSelector(getBannerIsLoaded);
  const aboutIsLoaded = useSelector(getAboutIsLoaded);

  useEffect(() => {
    !gamesAreLoaded && dispatch(fetchAllGames());
    !bannerIsLoaded && dispatch(fetchMainBanner())
    !aboutIsLoaded && dispatch(fetchAbout())
  }, [gamesAreLoaded,bannerIsLoaded, aboutIsLoaded, dispatch]);

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
