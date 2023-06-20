import {createSelector} from "@reduxjs/toolkit";

export const selectAllTasks = state => state.tasks.tasks
export const selectFilter = state => state.filter.filter

export const selectTaskByFilter = createSelector(
    [selectAllTasks, selectFilter],
    (tasks, filter)=>{
      if (filter === 'completed'){
        return tasks.filter(item => item.completed)
      }else if ( filter === 'active'){
        return tasks.filter(item => !item.completed)
      }else {
        return tasks
      }
    }
)

export const selectLeftTasks = createSelector(
    [selectAllTasks],
    (tasks) => {
        return tasks.filter(item => !item.completed)
    }
)