import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLoginService, userSignUpService } from "../services/auth.service";

const initialState = {
  status: "idle",
  error: null,
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const userLogin = createAsyncThunk(
  "auth/userlogin",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await userLoginService(email, password);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSignup = createAsyncThunk("auth/userSignup", async () => {
  try {
    const res = await userSignUpService();
    return res.data;
  } catch (error) {}
});

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (user, thunkAPI) => {
    try {
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        user: null,
        token: null,
      };
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.state = "loading";
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.token = payload.encodedToken;
      state.user = payload.foundUser;
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
      state.status = "fulfilled";
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.error = payload;
      state.status = "rejected";
    },
    [userSignup.pending]: (state) => {
      state.authStatus = "pending";
    },
    [userSignup.fulfilled]: (state, { payload }) => {
      console.log("🚀 ~ file: authSlice.js ~ line 73 ~ payload", payload);
      state.authStatus = "fulfilled";
      state.token = payload.encodedToken;
      state.user = payload.createdUser;
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    [userSignup.rejected]: (state, { payload }) => {
      state.authStatus = "Error";
      state.error = payload;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.authStatus = "fulfilled";
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.authStatus = "Error";
      state.error = payload;
    },
  },
});
export const { logout } = authSlice.actions;

export default authSlice.reducer;
