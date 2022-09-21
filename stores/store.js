import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { sliceAdmin } from "./reducer/reducerAdmin.js";
import { sliceCategory } from "./reducer/reducerCategory.js";
import { sliceLocal } from "./reducer/reducerLocal.js";
import { sliceNews } from "./reducer/reducerNews.js";
import { sliceSlide } from "./reducer/reducerSlide.js";

const makeStore = () =>
  configureStore({
    reducer: {
      reducerCategory: sliceCategory.reducer,
      reducerAdmin: sliceAdmin.reducer,
      reducerSlide: sliceSlide.reducer,
      reducerLocal: sliceLocal.reducer,
      reducerNews: sliceNews.reducer,
    },
    devTools: true,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const wrapper = createWrapper(makeStore);
