import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchImageCarousel = createAsyncThunk(
  "controlPanel/fetchImageCarousel",
  async () => {
    const query = encodeURIComponent(`*[_type == "carousel"]{
      preview[]->{
        name,
        _type
      }
    }`);
    const data = await fetch(
      `https://h2rv99ub.api.sanity.io/v2021-10-21/data/query/production?query=${query}`
    );
    const json = data.json();
    return json;
  }
);

export const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    carousel: [],
    carouselIsLoaded: false,
    isLoadingCarousel: false,
    loadingCarouselHasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImageCarousel.pending, (state) => {
        state.isLoadingCarousel = true;
        state.loadingCarouselHasError = false;
      })
      .addCase(fetchImageCarousel.fulfilled, (state, action) => {
        state.isLoadingCarousel = false;
        state.loadingCarouselHasError = false;
        state.carouselIsLoaded = true;
        state.carousel = action.payload.result;
      })
      .addCase(fetchImageCarousel.rejected, (state) => {
        state.isLoadingCarousel = false;
        state.loadingCarouselHasError = true;
        state.carousel = [];
      });
  },
});

export const getCarousel = (state) => state.carousel.carousel[0];
export const getCarouselIsLoaded = (state) => state.carousel.carouselIsLoaded;
export const getCarouselIsLoading = (state) => state.carousel.isLoadingCarousel;
//export const {reducer names} = {__Slice}.actions;
export default carouselSlice.reducer;
