import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../pages/Feed/postSlice";
import authReducer from "../reducers/authSlice";
export const store = configureStore({
  reducer: { auth: authReducer, posts: postsReducer },
});
