import React, {useEffect} from 'react';
import TaskItem from "../../components/taskItem/TaskItem";
import {useDispatch, useSelector} from "react-redux";
import { tasksFetch, updateStatus} from "../../redux/tasksSlice/tasksSlice";

function TaskList() {
    const {tasks, status} = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(tasksFetch())
    }, [])

    if (status.status === 'pending'){
        return (
            <h1>Loading</h1>
        )
    } else if(status.status === 'rejected'){
        return <h1> error { status.message}</h1>
    }

  return (
      <>
        {tasks.map(item =>
            <TaskItem
                key={item.id}
                status={item.completed}
                title={item.title}
                onChange={()=> dispatch(updateStatus(item.id))}
            />
          )
        }
      </>
  );
}

export default TaskList;