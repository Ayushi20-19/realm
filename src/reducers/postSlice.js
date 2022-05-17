import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addToBookmarkService,
  createPostService,
  deletePostService,
  dislikePostService,
  getAllPostService,
  likePostService,
  removeFromBookmarkService,
} from "../services/posts.service";

const initialState = {
  status: "idle",
  error: null,
  posts: [],
  bookmarks: [],
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
  "posts/deleteUserPost",
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
export const likeDislikePost = createAsyncThunk(
  "posts/likeDislikePost",
  async ({ postId, isLiked, token }, thunkAPI) => {
    try {
      const response = isLiked
        ? await dislikePostService(postId, token)
        : await likePostService(postId, token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addRemoveBookmark = createAsyncThunk(
  "posts/addRemoveBookmark",
  async ({ postId, isBookmarked, token }, thunkAPI) => {
    try {
      const response = isBookmarked
        ? await removeFromBookmarkService(postId, token)
        : await addToBookmarkService(postId, token);
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

    //like and dislike post
    [likeDislikePost.pending]: (state) => {
      state.status = "pending";
    },
    [likeDislikePost.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.posts = payload.posts;
    },
    [likeDislikePost.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = payload;
    },
    //add and remove from bookmark
    [addRemoveBookmark.pending]: (state) => {
      state.status = "pending";
    },
    [addRemoveBookmark.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.bookmarks = payload;
    },
    [addRemoveBookmark.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = payload;
    },
  },
});

export default postSlice.reducer;
