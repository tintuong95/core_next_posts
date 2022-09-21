import { createSlice } from "@reduxjs/toolkit";
import { actionCategoryUpdate } from "../actions/actionCategory.js";
import {
  actionNewsCreate,
  actionNewsDelete,
  actionNewsGet,
  actionNewsGets,
  actionNewsGetsAdd,
  actionPostCategories,
  actionPostCategoryAdd,
  actionPostFooters,
  actionPostImportands,
  actionPostNews,
  actionPostNewsAdd,
  actionPostRecommends,
  actionPostSlide,
} from "../actions/actionNews.js";

const initialState = {
  posts: [],
  newsDetails:{},
  postNews:[],
  postRecomments:[],
  postImportants:[],
  postSlides:[],
  postCategories:[],
  postFooters:[],
  
};

export const sliceNews = createSlice({
  name: "news",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //[GETS]
    builder.addCase(
      actionNewsGets.fulfilled,
      (state, { meta, payload, type }) => {
        state.posts = payload.data;
      }
    );

    //[GETS]
    builder.addCase(
      actionPostNewsAdd.fulfilled,
      (state, { meta, payload, type }) => {
        state.postNews = state.postNews.concat(payload.data);
      }
    );
    //[GETS]
    builder.addCase(
      actionPostCategoryAdd.fulfilled,
      (state, { meta, payload, type }) => {
        state.postCategories = state.postCategories.concat(payload.data);
      }
    );
    //[GETS]
    builder.addCase(
      actionPostRecommends.fulfilled,
      (state, { meta, payload, type }) => {
        state.postRecomments = payload.data;
      }
    );

    //[GETS]
    builder.addCase(
      actionPostFooters.fulfilled,
      (state, { meta, payload, type }) => {
        console.log(payload.data);
        state.postFooters = payload.data;
      }
    );
    //[GETS]
    builder.addCase(
      actionPostNews.fulfilled,
      (state, { meta, payload, type }) => {
        state.postNews = payload.data;
      }
    );
    //[GETS]
    builder.addCase(
      actionPostCategories.fulfilled,
      (state, { meta, payload, type }) => {
        state.postCategories = payload.data;
      }
    );
    //[GETS]
    builder.addCase(
      actionPostImportands.fulfilled,
      (state, { meta, payload, type }) => {
        state.postImportants = payload.data;
      }
    );
    //[GETS]
    builder.addCase(
      actionPostSlide.fulfilled,
      (state, { meta, payload, type }) => {
        state.postSlides = payload.data;
      }
    );
    // [GET]
    builder.addCase(
      actionNewsGet.fulfilled,
      (state, { meta, payload, type }) => {
        state.newsDetails = payload.data;
      }
    );

    // [UPDATE]
    builder.addCase(
      actionCategoryUpdate.fulfilled,
      (state, { meta, payload, type }) => {
        console.log(payload);
      }
    );

    // [POST]
    builder.addCase(
      actionNewsCreate.fulfilled,
      (state, { meta, payload, type }) => {
        console.log(payload);
      }
    );

    // [DELETE]
    builder.addCase(
      actionNewsDelete.fulfilled,
      (state, { meta, payload, type }) => {
        console.log("payload", payload);
      }
    );
  },
});
