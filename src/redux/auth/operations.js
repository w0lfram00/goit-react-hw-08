import { createAsyncThunk } from "@reduxjs/toolkit";
import { globalApi } from "../contacts/operations";

const setAuthHeader = (token) => {
  globalApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const response = await globalApi.post("/users/signup", user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const response = await globalApi.post("/users/login", user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (token, thunkAPI) => {
    try {
      await globalApi.post("/users/logout");
      setAuthHeader("");
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (token, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) return thunkAPI.rejectWithValue("No token");

    setAuthHeader(savedToken);

    try {
      const response = await globalApi.get("/users/current");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
