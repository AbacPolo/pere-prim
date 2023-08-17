import React, { useEffect } from "react";
import "./Homepage.css";
import MainBanner from "../../components/mainBanner/MainBanner";
import ImageCarousel from "../../components/imageCarousel/ImageCarousel";
import {
  fetchAllGames,
  getgamesAreLoaded,
  getgamesAreLoading,
} from "../gamePage/gamePageSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMainBanner,
  getBannerIsLoaded,
  getBannerIsLoading,
} from "../../components/mainBanner/mainBannerSlice";
import {
  fetchAbout,
  getAboutIsLoaded,
  getAboutIsLoading,
} from "../aboutPage/aboutPageSlice";

function Homepage() {
  const dispatch = useDispatch();
  const gamesAreLoaded = useSelector(getgamesAreLoaded);
  const gamesAreLoading = useSelector(getgamesAreLoading);
  const bannerIsLoaded = useSelector(getBannerIsLoaded);
  const bannerIsLoading = useSelector(getBannerIsLoading);
  const aboutIsLoaded = useSelector(getAboutIsLoaded);
  const aboutIsLoading = useSelector(getAboutIsLoading);

  useEffect(() => {
    !gamesAreLoaded && !gamesAreLoading && dispatch(fetchAllGames());
    !bannerIsLoaded && !bannerIsLoading && dispatch(fetchMainBanner());
    !aboutIsLoaded && !aboutIsLoading && dispatch(fetchAbout());
  }, [
    gamesAreLoaded,
    gamesAreLoading,
    bannerIsLoaded,
    bannerIsLoading,
    aboutIsLoaded,
    aboutIsLoading,
    dispatch,
  ]);

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
