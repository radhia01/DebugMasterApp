import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
const headers = {
  // "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, Z-Key",
  "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, OPTIONS",
};
// get all users
export const getUsers = createAsyncThunk("GET_USERS", async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      "https://debugging-masters-server.vercel.app/api/users",
      {
        headers,
      }
    );

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Error during users loading");
  }
});
export const addUser = createAsyncThunk(
  "user/addUser",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://debugging-masters-server.vercel.app/api/users",
        payload,
        { headers }
      );
      const data = await response.data;
      return data;
    } catch (error) {
      const { message } = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// login
export const login = createAsyncThunk(
  "user/login",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://debugging-masters-server.vercel.app/api/login",
        payload,
        { headers }
      );
      const data = await response.data;
      return data;
    } catch (error) {
      const { message } = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// update user
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.put(
        `https://debugging-masters-server.vercel.app/api/users/${payload.id}`,
        payload.data
      );
      console.log(await response.data);
      return await response.data;
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// update user password
export const updateUserPassword = createAsyncThunk(
  "user/updatepassword",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.put(
        `https://debugging-masters-server.vercel.app/api/users/update/password/${payload.id}`,
        payload.data,
        { headers }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// get posted problems
export const getPostedProblems = createAsyncThunk(
  "user/getpostedproblems",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://debugging-masters-server.vercel.app/api/problems/users/${id}`
      );
      return response.data;
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
