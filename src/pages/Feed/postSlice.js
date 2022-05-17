import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPostService } from "../../services/posts.service";

const initialState = {
  status: "idle",
  error: null,
  posts: [],
};

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    const response = await getAllPostService();
    return response.data;
  } catch (error) {
    return error;
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [getAllPosts.pending]: (state) => {
      state.status = "loading";
    },
    [getAllPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
      state.status = "fulfilled";
    },
    [getAllPosts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.status = "rejected";
    },
  },
});

export default postSlice.reducer;
