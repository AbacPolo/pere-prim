import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAbout = createAsyncThunk(
  "controlPanel/fetchAbout",
  async () => {
    const query = encodeURIComponent(`*[_type == "about"]{
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
          logo{
            asset->{
            _id,
            url
            }
          }
        }
      }
    }`);
    const data = await fetch(
      `https://h2rv99ub.api.sanity.io/v2021-10-21/data/query/production?query=${query}`
    );
    const json = data.json();
    return json;
  }
);

export const aboutSlice = createSlice({
  name: "about",
  initialState: {
    aboutInfo: [],
    aboutIsLoaded: false,
    isLoadingAbout: false,
    loadingAboutHasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAbout.pending, (state) => {
        state.isLoadingAbout = true;
        state.loadingAboutHasError = false;
      })
      .addCase(fetchAbout.fulfilled, (state, action) => {
        state.isLoadingAbout = false;
        state.loadingAboutHasError = false;
        state.aboutIsLoaded = true;
        state.aboutInfo = action.payload.result;
      })
      .addCase(fetchAbout.rejected, (state) => {
        state.isLoadingAbout = false;
        state.loadingAboutHasError = true;
        state.aboutInfo = [];
      });
  },
});

export const getAbout = (state) => state.about.aboutInfo[0];
export const getAboutIsLoaded = (state) => state.about.aboutIsLoaded;
export const getAboutIsLoading = (state) => state.about.isLoadingAbout;
//export const {reducer names} = {__Slice}.actions;
export default aboutSlice.reducer;
