import { configureStore } from "@reduxjs/toolkit";
import allGamesReducer from "../routes/gamePage/gamePageSlice"

export const store = configureStore({
  reducer: {
    games: allGamesReducer
  },
});
