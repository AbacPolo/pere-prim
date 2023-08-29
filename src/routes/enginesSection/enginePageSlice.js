import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllEngines = createAsyncThunk(
  "controlPanel/fetchAllEngines",
  async () => {
    const query = encodeURIComponent(`*[_type == "engine"]{
      name,
      description,
      _type,
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
      },
      preview[]{
        ...,
        image{
          asset->{
          _id,
          url
          }
        },
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
    }`);
    const data = await fetch(
      `https://h2rv99ub.api.sanity.io/v2021-10-21/data/query/production?query=${query}`
    );
    const json = data.json();
    return json;
  }
);

export const enginesSlice = createSlice({
  name: "engines",
  initialState: {
    allEngines: [],
    enginesAreLoaded: false,
    isLoadingEngines: false,
    loadingEnginesHasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEngines.pending, (state) => {
        state.isLoadingEngines = true;
        state.loadingEnginesHasError = false;
      })
      .addCase(fetchAllEngines.fulfilled, (state, action) => {
        state.isLoadingEngines = false;
        state.loadingEnginesHasError = false;
        state.enginesAreLoaded = true;
        state.allEngines = action.payload.result;
      })
      .addCase(fetchAllEngines.rejected, (state) => {
        state.isLoadingEngines = false;
        state.loadingEnginesHasError = true;
        state.allEngines = [];
      });
  },
});

export const getAllEngines = (state) => state.engines.allEngines;
export const getEnginesAreLoaded = (state) => state.engines.enginesAreLoaded;
export const getEnginesAreLoading = (state) => state.engines.isLoadingEngines;
//export const {reducer names} = {__Slice}.actions;
export default enginesSlice.reducer;
