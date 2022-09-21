import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchSlideCreate,
  fetchSlideDelete,
  fetchSlideGets,

} from "../fetch/fetchSlide.js";

export const actionSlideCreate = createAsyncThunk(
  "Slide-create",
  async (payload, thunkAPI) => {
    return await fetchSlideCreate(payload);
  }
);

export const actionSlideGets = createAsyncThunk(
  "Slide-gets",
  async (payload, thunkAPI) => {
    
    return await fetchSlideGets(payload);
  }
);

export const actionSlideDelete = createAsyncThunk(
  "Slide-delete",
  async (payload, thunkAPI) => {

    const response =  await fetchSlideDelete(payload);
    thunkAPI.dispatch(actionSlideGets());
    return response
  }
);
