import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../reducers/postSlice";
import authReducer from "../reducers/authSlice";
export const store = configureStore({
  reducer: { auth: authReducer, posts: postsReducer },
});
