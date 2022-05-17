import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createPostService,
  deletePostService,
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
    try {
      const response = await createPostService(postData, token);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "post/deleteUserPost",
  async ({ postId, token }, thunkAPI) => {
    try {
      console.log(postId);
      const response = await deletePostService(postId, token);
      return response.data;
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

    //delete post
    [deletePost.pending]: (state) => {
      state.status = "pending";
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.posts = payload.posts;
    },
    [deletePost.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = payload;
    },
  },
});

export default postSlice.reducer;
