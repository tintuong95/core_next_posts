import { createSlice } from "@reduxjs/toolkit";
import { actionCategoryCreate, actionCategoryDelete, actionCategoryGet, actionCategoryGets, actionCategoryUpdate } from "../actions/actionCategory.js";

const initialState = {
  categorys: [],
  category:{}
};

export const sliceCategory = createSlice({
  name: "Categorys",
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    //[CREATE]
    builder.addCase(
      actionCategoryCreate.fulfilled,
      (state, { meta, payload, type }) => {
        console.log(payload);
      }
    );

    //[UPDATE]
    builder.addCase(
      actionCategoryUpdate.fulfilled,
      (state, { meta, payload, type }) => {
        console.log(payload);
      }
    );

    //[GETS]
    builder.addCase(
      actionCategoryGets.fulfilled,
      (state, { meta, payload, type }) => {
    
        state.categorys = payload.data;
      }
    );
    //[GET]
    builder.addCase(
      actionCategoryGet.fulfilled,
      (state, { meta, payload, type }) => {
       ;
        state.category = payload.data;
      }
    ); 
    builder.addCase(
      actionCategoryDelete.fulfilled,
      (state, { meta, payload, type }) => {
        console.log(payload);
        // state.category = payload.data;
      }
    );
  },
});


