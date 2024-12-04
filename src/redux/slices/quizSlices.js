import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    list : [],
    score : 0,
}

export const fetchQuestions = createAsyncThunk(
    'quiz/fetchQuestions',
    async ()=>{
        const response = await axios('https://the-trivia-api.com/v2/questions');
        return response.data;
    }
);

const quizSlice = createSlice({
    name:'quiz',
    initialState,
    reducers:{

    }
});