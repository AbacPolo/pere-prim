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
  fetchAllEngines,
  getEnginesAreLoaded,
  getEnginesAreLoading,
} from "../enginesSection/enginePageSlice";
import { fetchImageCarousel, getCarouselIsLoaded, getCarouselIsLoading } from "../../components/imageCarousel/imageCarouselSlice";


function Homepage() {
  const dispatch = useDispatch();
  const gamesAreLoaded = useSelector(getgamesAreLoaded);
  const gamesAreLoading = useSelector(getgamesAreLoading);
  const bannerIsLoaded = useSelector(getBannerIsLoaded);
  const bannerIsLoading = useSelector(getBannerIsLoading);
  const aboutIsLoaded = useSelector(getAboutIsLoaded);
  const aboutIsLoading = useSelector(getAboutIsLoading);
  const enginesAreLoaded = useSelector(getEnginesAreLoaded);
  const enginesAreLoading = useSelector(getEnginesAreLoading);
  const carouselIsLoaded = useSelector(getCarouselIsLoaded);
  const carouselIsLoading = useSelector(getCarouselIsLoading);



  useEffect(() => {
    !gamesAreLoaded && !gamesAreLoading && dispatch(fetchAllGames());
    !enginesAreLoaded && !enginesAreLoading && dispatch(fetchAllEngines());
    !bannerIsLoaded && !bannerIsLoading && dispatch(fetchMainBanner());
    !carouselIsLoaded && !carouselIsLoading && dispatch(fetchImageCarousel());
    !aboutIsLoaded && !aboutIsLoading && dispatch(fetchAbout());
  }, [
    gamesAreLoaded,
    gamesAreLoading,
    enginesAreLoaded,
    enginesAreLoading,
    bannerIsLoaded,
    bannerIsLoading,
    aboutIsLoaded,
    aboutIsLoading,
    carouselIsLoaded,
    carouselIsLoading,
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
