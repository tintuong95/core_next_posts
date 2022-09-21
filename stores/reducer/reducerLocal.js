import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breadCrumbs: [],
};

export const sliceLocal = createSlice({
  name: "Local",
  initialState,
  reducers: {
    addBreadCrumb:(state,{type,payload,meta})=>{
      state.breadCrumbs=payload
    }
  },
});




export const {addBreadCrumb}=sliceLocal.actions


