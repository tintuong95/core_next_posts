import { createSlice } from "@reduxjs/toolkit";
import {
  actionAdminLogin,
  actionAdminLogout,
  actionAdminProfile,
  actionAdminSignin,
  actionAdminUpdate,
} from "../actions/actionAdmin.js";

const initialState = {
  login: false,
  router: null,
  info:{}
};

export const sliceAdmin = createSlice({
  name: "Admin",
  initialState,
  reducers: {
    addRouter: (state, { payload }) => {
      state.router = payload.router;
    },
  },

  extraReducers: (builder) => {
    //[CREATE]
    builder.addCase(
      actionAdminLogin.fulfilled,
      (state, { meta, payload, type }) => {
        console.log
        state.login = true;
        state.info=payload.data
        state.router.push("/admin");
      }
    );

    //[UPDATE]
    builder.addCase(
      actionAdminUpdate.fulfilled,
      (state, { meta, payload, type }) => {
        console.log(payload);
      }
    );
    //[GETS]
    builder.addCase(
      actionAdminProfile.fulfilled,
      (state, { meta, payload, type }) => {
        state.login=true
      }
    );



    //[GET]
    builder.addCase(
      actionAdminLogout.fulfilled,
      (state, { meta, payload, type }) => {
        state.login = false;
      }
    );
  },
});

export const { addRouter } = sliceAdmin.actions;
