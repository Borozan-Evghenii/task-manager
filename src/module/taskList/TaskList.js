import React, {useMemo} from 'react';
import TaskItem from "../../components/taskItem/TaskItem";
import {useGetTasksQuery, useUpdateStatusMutation} from "../../redux/tasksApi";
import {createSelector} from "@reduxjs/toolkit";

function TaskList() {
    const filter = true

    const selectTasksByFilter = useMemo(()=> {
    return createSelector(
        [res => res.data, (res, filter)=> filter],
        (data, filter ) => data.filter(item => item.completed === filter) ?? []
    )
}, [])

    const {data = [], error, isLoading} = useGetTasksQuery(undefined, {
        selectFromResul: result => ({
            ...result,
            data: selectTasksByFilter(result, filter)
        })
    })


    const [changeStatus, result] = useUpdateStatusMutation()







    if (isLoading) {
        return <h1>Data Loading</h1>
    }else if (error){
       return <h1>{error.status}</h1>
    }

  return (
      <>
        {data.map(item =>
            <TaskItem
                key={item.id}
                status={item.completed}
                title={item.title}
                onClick={()=> changeStatus({id: item.id, status: !item.completed})}
            />
          )
        }
      </>
  );
}

export default TaskList;