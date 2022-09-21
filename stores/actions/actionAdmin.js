import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdminLogin, fetchAdminLogout, fetchAdminProfile, fetchAdminUpdate } from "../fetch/fetchAdmin.js";

export const actionAdminLogin = createAsyncThunk(
  "Admin-login",
  async (payload, thunkAPI) => {
    return await fetchAdminLogin(payload);
  }
);

export const actionAdminUpdate = createAsyncThunk(
  "Admin-update",
  async (payload, thunkAPI) => {
    return await fetchAdminUpdate(payload);
  }
);


export const actionAdminProfile = createAsyncThunk(
  "Admin-profile",
  async (payload, thunkAPI) => {
    return await fetchAdminProfile(payload);
  }
);


export const actionAdminLogout = createAsyncThunk(
  "Admin-logout",
  async (payload, thunkAPI) => {
    return await fetchAdminLogout(payload);
  }
);



