import {useMemo} from "react";
import {createSelector} from "@reduxjs/toolkit";
import {tasksApi} from "./tasksApi";

export const selectTasksResult = tasksApi.endpoints.getPosts.select()


export const selectAllTasks = createSelector(
    selectTasksResult,
    tasksResult => tasksResult?.data ?? []
)

export const selectTasksByFilter = createSelector(
    selectTasksResult,
    tasksResult => tasksResult?.data ?? []
)