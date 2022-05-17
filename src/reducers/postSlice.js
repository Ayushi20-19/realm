import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createPostService,
  getAllPostService,
} from "../services/posts.service";

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

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ postData, token }, thunkAPI) => {
    console.log(postData, token);
    try {
      const response = await createPostService(postData, token);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    // get all popsts
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

    //  create post
    [createPost.pending]: (state) => {
      state.status = "pending";
    },
    [createPost.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.status = "fulfilled";
    },
    [createPost.rejected]: (state, { payload }) => {
      state.posts = payload;
      state.status = "rejected";
    },
  },
});

export default postSlice.reducer;
