import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchNewsCreate,
  fetchNewsDelete,
  fetchNewsGet,
  fetchNewsGets,
  fetchNewsUpdate,
} from "../fetch/fetchNews.js";

export const actionNewsCreate = createAsyncThunk(
  "news-create",
  async (payload, thunkAPI) => {
    return await fetchNewsCreate(payload);
  }
);

export const actionNewsUpdate = createAsyncThunk(
  "news-update",
  async (payload, thunkAPI) => {
    return await fetchNewsUpdate(payload);
  }
);

export const actionNewsGets = createAsyncThunk(
  "news-gets",
  async (payload, thunkAPI) => {
    return await fetchNewsGets(payload);
  }
);

export const actionNewsGet = createAsyncThunk(
  "news-get",
  async (payload, thunkAPI) => {
    return await fetchNewsGet(payload);
  }
);

export const actionNewsDelete = createAsyncThunk(
  "news-delete",

  async (payload, thunkAPI) => {
    const response = await fetchNewsDelete(payload);
    thunkAPI.dispatch(actionNewsGets({ limit: 6, offset: payload.offset })); //refesh table with limit offset payload

    return response;
  }
);

export const actionPostNews = createAsyncThunk(
  "news-post-news",
  async (payload, thunkAPI) => {
    return await fetchNewsGets(payload);
  }
);

export const actionPostRecommends = createAsyncThunk(
  "news-post-recommend",
  async (payload, thunkAPI) => {
    return await fetchNewsGets(payload);
  }
);

export const actionPostFooters = createAsyncThunk(
  "news-post-footer",
  async (payload, thunkAPI) => {
    return await fetchNewsGets(payload);
  }
);

export const actionPostImportands = createAsyncThunk(
  "news-post-importands",
  async (payload, thunkAPI) => {
    return await fetchNewsGets(payload);
  }
);

export const actionPostSlide = createAsyncThunk(
  "news-post-slide",
  async (payload, thunkAPI) => {
    return await fetchNewsGets(payload);
  }
);

export const actionPostCategories = createAsyncThunk(
  "news-post-categories",
  async (payload, thunkAPI) => {
    return await fetchNewsGets(payload);
  }
);

export const actionPostNewsAdd = createAsyncThunk(
  "news-gets-add",
  async (payload, thunkAPI) => {
    return await fetchNewsGets(payload);
  }
);

export const actionPostCategoryAdd = createAsyncThunk(
  "news-gets-add-category",
  async (payload, thunkAPI) => {
    return await fetchNewsGets(payload);
  }
);
