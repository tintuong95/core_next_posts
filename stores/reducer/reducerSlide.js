import { createSlice } from "@reduxjs/toolkit";
import { actionSlideCreate, actionSlideDelete, actionSlideGet, actionSlideGets, actionSlideUpdate } from "../actions/actionSlide.js";

const initialState = {
  slides: [],
};

export const sliceSlide = createSlice({
  name: "Slides",
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    //[CREATE]
    builder.addCase(
      actionSlideCreate.fulfilled,
      (state, { meta, payload, type }) => {
        console.log(payload);
      }
    );

  
    //[GETS]
    builder.addCase(
      actionSlideGets.fulfilled,
      (state, { meta, payload, type }) => {

        state.slides = payload.data;
      }
    );
  
    builder.addCase(
      actionSlideDelete.fulfilled,
      (state, { meta, payload, type }) => {
        console.log(payload);
        // state.Slide = payload.data;
      }
    );
  },
});


