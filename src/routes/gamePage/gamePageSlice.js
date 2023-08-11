import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllGames = createAsyncThunk(
  "controlPanel/fetchAllGames",
  async () => {
    const query = encodeURIComponent(`*[_type == "game"]{
        name,
        bannerImage{
            asset->{
              _id,
              url
             }
           },
        body
    }`);
    const data = await fetch(
      `https://h2rv99ub.api.sanity.io/v2021-10-21/data/query/production?query=${query}`
    );
    const json = data.json();
    return json;
  }
);

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    allGames: {},
    isLoadingGames: false,
    loadingGamesHasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGames.pending, (state) => {
        state.isLoadingGames = true;
        state.loadingGamesHasError = false;
      })
      .addCase(fetchAllGames.fulfilled, (state, action) => {
        state.isLoadingGames = false;
        state.loadingGamesHasError = false;
        state.allGames = action.payload;
      })
      .addCase(fetchAllGames.rejected, (state) => {
        state.isLoadingGames = false;
        state.loadingGamesHasError = true;
        state.allGames = {};
      });
  },
});

export const getAllGames = (state) => state.games.allGames;
//export const {reducer names} = {__Slice}.actions;
export default gamesSlice.reducer;
