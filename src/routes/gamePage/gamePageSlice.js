import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllGames = createAsyncThunk(
    "controlPanel/fetchAllGames",
    async () => {
        const query = encodeURIComponent(`*[_type == "game"]{
      name,
      description,
      project_Date,
      game_Tags,
      _type,
      bannerImage{ asset->{_id,url} },
      cardImage{ asset->{_id,url} },
      preview[]{
        ...,
        image{
          asset->{
          _id,
          url
          }
        },
      },
      socials[]{
        content[]{
          ...,
          logo{
            asset->{
            _id,
            url
            }
          }
        }
      },
      "cards": body[]{
        name,
        content[]{
          ...,
          image{
            asset->{
            _id,
            url
            }
          },
          file{
            asset->{
            _id,
            url
            }
          },
        }
      }
    }  | order(project_Date desc)`);
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
        allGames: [],
        allTagsU: [],
        gamesAreLoaded: false,
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
                state.gamesAreLoaded = true;
                state.allGames = action.payload.result;
            })
            .addCase(fetchAllGames.rejected, (state) => {
                state.isLoadingGames = false;
                state.loadingGamesHasError = true;
                state.allGames = [];
            });
    },
});

export const getAllGames = (state) => state.games.allGames;
export const getgamesAreLoaded = (state) => state.games.gamesAreLoaded;
export const getgamesAreLoading = (state) => state.games.isLoadingGames;
//export const {reducer names} = {__Slice}.actions;
export default gamesSlice.reducer;
