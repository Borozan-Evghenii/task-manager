import {configureStore} from "@reduxjs/toolkit";
import {tasksApi} from "./tasksApi";
import {setupListeners} from "@reduxjs/toolkit/query/react";
import filterReducer from "./slices/filterSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        [tasksApi.reducerPath] : tasksApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tasksApi.middleware),
})

setupListeners(store.dispatch)