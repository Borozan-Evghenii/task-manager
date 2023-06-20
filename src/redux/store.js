import {configureStore} from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice/tasksSlice";
import filterReducer from "./filterSlice/filterSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filter: filterReducer
    }
})