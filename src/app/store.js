import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../reducers/postSlice";
import authReducer from "../reducers/authSlice";
import usersReducer from "../reducers/userSlice";
export const store = configureStore({
  reducer: { auth: authReducer, posts: postsReducer, users: usersReducer },
});
