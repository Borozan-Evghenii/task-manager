import React from 'react';
import TaskItem from "../../components/taskItem/TaskItem";
import {useGetTasksQuery, useUpdateStatusMutation} from "../../redux/tasksApi";
import {useSelector} from "react-redux";

function TaskList() {
    const filter = useSelector(state => state.filter.filter)
    const [changeStatus, result] = useUpdateStatusMutation()
   const {data = [], error, isLoading} = useGetTasksQuery(filter)

    //Cache Selector
    // const {data} = useGetTasksQuery('', {
    //     selectFromResult: (res) => ({
    //             ...res,
    //             data: res.data?.filter(e => filter === 'active' ? e.completed === false : filter === 'completed' ? e.completed === true : e)
    //     })
    // })


    if (isLoading) {
        return <h1>Data Loading</h1>
    }else if (error){
       return <h1>{error.status}</h1>
    }

  return (
      <>
        {data?.map(item =>
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