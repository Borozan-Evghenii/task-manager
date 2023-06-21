import React from 'react';
import TaskItem from "../../components/taskItem/TaskItem";
import {useGetTasksQuery, useUpdateStatusMutation} from "../../redux/tasksApi";

function TaskList() {
    const {data = [], error, isLoading} = useGetTasksQuery()
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