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
import {
  fetchImageCarousel,
  getCarouselIsLoaded,
  getCarouselIsLoading,
} from "../../components/imageCarousel/imageCarouselSlice";
import HomepageDisplay from "../../components/homepageDisplay/HomepageDisplay";

import ReactGA from 'react-ga4';

function Homepage() {
  const dispatch = useDispatch();
  const gamesAreLoaded = useSelector(getgamesAreLoaded);
  const gamesAreLoading = useSelector(getgamesAreLoading);
  const bannerIsLoaded = useSelector(getBannerIsLoaded);
  const bannerIsLoading = useSelector(getBannerIsLoading);
  const aboutIsLoaded = useSelector(getAboutIsLoaded);
  const aboutIsLoading = useSelector(getAboutIsLoading);
  const carouselIsLoaded = useSelector(getCarouselIsLoaded);
  const carouselIsLoading = useSelector(getCarouselIsLoading);

  useEffect(() => {
    !gamesAreLoaded && !gamesAreLoading && dispatch(fetchAllGames());
    !bannerIsLoaded && !bannerIsLoading && dispatch(fetchMainBanner());
    !carouselIsLoaded && !carouselIsLoading && dispatch(fetchImageCarousel());
    !aboutIsLoaded && !aboutIsLoading && dispatch(fetchAbout());
  }, [
    gamesAreLoaded,
    gamesAreLoading,
    bannerIsLoaded,
    bannerIsLoading,
    aboutIsLoaded,
    aboutIsLoading,
    carouselIsLoaded,
    carouselIsLoading,
    dispatch,
  ]);

  ReactGA.send({hitType: "pageview", page: "/", title:"Home",});

  return (
    <div className="Homepage_Container">
      <div className="Homepage_Wrapper">
        <MainBanner />
        <ImageCarousel />
        <HomepageDisplay />
      </div>
    </div>
  );
}

export default Homepage;
