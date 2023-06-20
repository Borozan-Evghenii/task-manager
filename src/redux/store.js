import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice/tasksSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
})