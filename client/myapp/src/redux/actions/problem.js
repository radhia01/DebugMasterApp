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

export const addProblem = createAsyncThunk(
  "problem/addProblem",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `https://debugging-masters-server.vercel.app/api/problems/users/${payload.idUser}`,
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
// get problems
export const getProblems = createAsyncThunk(
  "problem/getProblems",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://debugging-masters-server.vercel.app/api/problems",
        {
          headers,
        }
      );
      return await response.data;
    } catch (error) {}
  }
);
// delete problem
export const deleteProblem = createAsyncThunk(
  "problem/deleteProblems",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://debugging-masters-server.vercel.app/api/problems/${id}`,
        { headers }
      );
      console.log(response.data.tags);
      return await response.data;
    } catch (error) {
      const message = error.response.data.message;
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// get tags associated to a problem
export const getProblemsTag = createAsyncThunk(
  "problems/gettags",
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const response = await axios.get(
        `https://debugging-masters-server.vercel.app/api/tags/problem/${id}`
      );
      return await response.data;
    } catch (error) {}
  }
);
// get problem

export const getProblemDetails = createAsyncThunk(
  "problems/problemDetails",
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const response = await axios.get(
        `https://debugging-masters-server.vercel.app/api/problems/details/${id}`,
        { headers }
      );
      return await response.data;
    } catch (error) {}
  }
);

// get problems associated to a tag
export const getProblemsByTag = createAsyncThunk(
  "problems/getproblemsByTag",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://debugging-masters-server.vercel.app/api/problems/tag/${id}`,
        { headers }
      );
      return response.data;
    } catch (error) {}
  }
);
