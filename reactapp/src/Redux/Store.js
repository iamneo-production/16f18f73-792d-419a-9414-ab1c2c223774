import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/Userslice";

const Store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default Store;