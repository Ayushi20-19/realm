import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCommentService,
  addToBookmarkService,
  createPostService,
  deletePostService,
  dislikePostService,
  getAllPostService,
  editUserPostService,
  likePostService,
  removeFromBookmarkService,
} from "../services/posts.service";

const initialState = {
  status: "idle",
  error: null,
  posts: [],
  bookmarks: [],
  comments: [],
  postIsLiked: false,
  postIsEdited: false,
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
      const response = await deletePostService(postId, token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editUserPost = createAsyncThunk(
  "posts/editUserPost",
  async ({ postId, postData, token }, thunkAPI) => {
    try {
      const response = editUserPostService({ postId, postData, token });
      return { data: response.data, postIsEdited: true };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const likeDislikePost = createAsyncThunk(
  "posts/likeDislikePost",
  async ({ postId, isLiked, token, dispatch }, thunkAPI) => {
    try {
      const response = isLiked
        ? await dislikePostService(postId, token)
        : await likePostService(postId, token);
      dispatch(getAllPosts());
      return { data: response.data, isLiked: !isLiked };
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

export const addComment = createAsyncThunk(
  "posts/addComment",
  async ({ postId, commentData, token }, thunkAPI) => {
    try {
      const response = await addCommentService(postId, commentData, token);

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
    //edit post
    [editUserPost.pending]: (state) => {
      state.status = "pending";
    },
    [editUserPost.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.posts = payload.data;
      state.postIsEdited = payload.postIsEdited;
    },
    [editUserPost.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = payload;
    },

    //like and dislike post
    [likeDislikePost.pending]: (state) => {
      state.status = "pending";
    },
    [likeDislikePost.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.posts = payload.data.posts;
      state.postIsLiked = payload.isLiked;
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
    //add comment
    [addComment.pending]: (state) => {
      state.status = "pending";
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.comments = payload;
    },
    [addComment.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = payload;
    },
  },
});

export default postSlice.reducer;
