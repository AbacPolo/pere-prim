import { configureStore } from "@reduxjs/toolkit";
import allGamesReducer from "../routes/gamePage/gamePageSlice"
import mainBannerReducer from "../components/mainBanner/mainBannerSlice"

export const store = configureStore({
  reducer: {
    mainBanner: mainBannerReducer,
    games: allGamesReducer
  },
});
