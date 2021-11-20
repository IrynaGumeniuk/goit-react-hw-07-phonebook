import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "./reducers";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
