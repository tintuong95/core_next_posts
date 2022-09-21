import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategoryCreate, fetchCategoryDelete, fetchCategoryGet, fetchCategoryGets, fetchCategoryUpdate } from "../fetch/fetchCategory.js";

export const actionCategoryCreate = createAsyncThunk(
  "Category-create",
  async (payload, thunkAPI) => {
    return await fetchCategoryCreate(payload);
  }
);

export const actionCategoryUpdate = createAsyncThunk(
  "Category-update",
  async (payload, thunkAPI) => {
    return await fetchCategoryUpdate(payload);
  }
);


export const actionCategoryGets = createAsyncThunk(
  "Category-gets",
  async (payload, thunkAPI) => {
    return await fetchCategoryGets(payload);
  }
);


export const actionCategoryGet = createAsyncThunk(
  "Category-get",
  async (payload, thunkAPI) => {
    return await fetchCategoryGet(payload);
  }
);

export const actionCategoryDelete = createAsyncThunk(
  "Category-delete",
  async (payload, thunkAPI) => {

    const response = await fetchCategoryDelete(payload);
    thunkAPI.dispatch(actionCategoryGets());
    return response;
  }
);


