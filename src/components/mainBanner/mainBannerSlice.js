import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMainBanner = createAsyncThunk(
  "controlPanel/fetchMainBanner",
  async () => {
    const query = encodeURIComponent(`*[_type == "homepage"]{
        mainTitle,
        subtitle,
        bannerImage{
          asset->{
            _id,
            url
           }
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
      }
    }`);
    const data = await fetch(
      `https://h2rv99ub.api.sanity.io/v2021-10-21/data/query/production?query=${query}`
    );
    const json = data.json();
    return json;
  }
);

export const mainBannerSlice = createSlice({
  name: "mainBanner",
  initialState: {
    pageBanner: [],
    bannerIsLoaded: false,
    isLoadingBanner: false,
    loadingBannerHasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainBanner.pending, (state) => {
        state.isLoadingBanner = true;
        state.loadingBannerHasError = false;
      })
      .addCase(fetchMainBanner.fulfilled, (state, action) => {
        state.isLoadingBanner = false;
        state.loadingBannerHasError = false;
        state.bannerIsLoaded = true;
        state.pageBanner = action.payload.result;
      })
      .addCase(fetchMainBanner.rejected, (state) => {
        state.isLoadingBanner = false;
        state.loadingBannerHasError = true;
        state.pageBanner = [];
      });
  },
});

export const getMainBanner = (state) => state.mainBanner.pageBanner[0];
export const getBannerIsLoaded = (state) => state.mainBanner.bannerIsLoaded;
//export const {reducer names} = {__Slice}.actions;
export default mainBannerSlice.reducer;
