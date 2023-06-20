import React, {useEffect} from 'react';
import TaskItem from "../../components/taskItem/TaskItem";
import {useDispatch, useSelector} from "react-redux";
import { tasksFetch, updateStatus} from "../../redux/tasksSlice/tasksSlice";
import {selectTaskByFilter} from "../../redux/tasksSlice/tasksSelectors";

function TaskList() {
    const tasks = useSelector(selectTaskByFilter)
    const status = useSelector(state => state.status)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(tasksFetch())
    }, [])

  console.log(status)
  if (status){
    return <h1>Loading</h1>
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