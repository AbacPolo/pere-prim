import { configureStore } from "@reduxjs/toolkit";
import allGamesReducer from "../routes/gamePage/gamePageSlice"
// import allEnginesReducer from "../routes/enginesSection/enginePageSlice"
import mainBannerReducer from "../components/mainBanner/mainBannerSlice"
import aboutReducer from "../routes/aboutPage/aboutPageSlice"
import carouselReducer from "../components/imageCarousel/imageCarouselSlice"

export const store = configureStore({
  reducer: {
    mainBanner: mainBannerReducer,
    carousel: carouselReducer,
    games: allGamesReducer,
    // engines: allEnginesReducer,
    about: aboutReducer
  },
});
