import { configureStore } from "@reduxjs/toolkit";
import showData from "./slices/showSlice";
import usersReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    show:showData,
    users: usersReducer,
  },
});
export default store;
