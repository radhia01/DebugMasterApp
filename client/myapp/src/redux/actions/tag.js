import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, Z-Key",
  "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, OPTIONS",
};
// add new problem
export const addTag = createAsyncThunk(
  "tag/addTag",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `https://debugging-masters-server.vercel.app/api/tags/${payload.id}`,
        payload.data,
        { headers }
      );
      console.log(response.data);
      return await response.data;
    } catch (error) {
      const err = error.response.data.message;
      return thunkAPI.rejectWithValue(err);
    }
  }
);
// get tags
export const getTags = createAsyncThunk("tag/getTags", async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      `https://debugging-masters-server.vercel.app/api/tags/`,
      { headers }
    );
    return await response.data;
  } catch (error) {
    const err = error.response.data.message;
    return thunkAPI.rejectWithValue(err);
  }
});
