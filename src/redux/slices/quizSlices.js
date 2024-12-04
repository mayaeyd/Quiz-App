import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  score: 0,
  status: "idle",
};

export const fetchQuizzes = createAsyncThunk("quiz/fetchQuizzes", async () => {
  const response = await axios("https://the-trivia-api.com/v2/questions");  
  return response.data;
});

//export const fetchFilteredQuizzes

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizzes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuizzes.fulfilled,(state,action)=>{
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchQuizzes.rejected , (state)=>{
        state.status = "failed";
      })
  },
});

export default quizSlice.reducer;