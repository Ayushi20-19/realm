import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../pages/Feed/postSlice";
export const store = configureStore({
  reducer: { posts: postsReducer },
});
