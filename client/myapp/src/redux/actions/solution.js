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

export const addSolution = createAsyncThunk(
  "solution/addSolution",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const response = await axios.post(
        `https://debugging-masters-server.vercel.app/api/solutions/problems/${payload.id_problem}/users/${payload.idUser}`,
        payload.data,
        { headers }
      );
      return await response.data;
    } catch (error) {
      const err = error.response.data.message;
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getSolutions = createAsyncThunk(
  "solutions/getSolutions",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://debugging-masters-server.vercel.app/api/solutions");
      return await response.data;
    } catch (error) {}
  }
);
