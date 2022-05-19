import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  followUserService,
  getAllUserService,
  unfollowUserService,
} from "../services/user.service";
import { updateUser } from "./authSlice";

const initialState = {
  users: [],
  userState: null,
};

export const getAllUsers = createAsyncThunk(
  "users/getAllUSers",
  async (_, thunkAPI) => {
    try {
      const response = await getAllUserService();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const followUnfollowUser = createAsyncThunk(
  "users/followUser",
  async ({ userId, dispatch, isFollowed, token }, thunkAPI) => {
    try {
      const response = !isFollowed
        ? await followUserService(userId, token)
        : await unfollowUserService(userId, token);
      dispatch(updateUser(response.data.user));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getAllUsers.pending]: (state) => {
      state.userStatus = "pending";
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.userStatus = "fulfilled";
      state.users = payload.users;
    },
    [getAllUsers.rejected]: (state) => {
      state.userStatus = "rejected";
    },
  },
});

export default userSlice.reducer;
