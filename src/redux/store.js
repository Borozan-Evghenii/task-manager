import {configureStore} from "@reduxjs/toolkit";
import {tasksApi} from "./tasksApi";
import {setupListeners} from "@reduxjs/toolkit/query/react";
export const store = configureStore({
    reducer: {
        [tasksApi.reducerPath] : tasksApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tasksApi.middleware),
})

setupListeners(store.dispatch)