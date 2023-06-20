import React from 'react';
import TaskItem from "../../components/taskItem/TaskItem";

function TaskList() {
  const data = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
  ]
  return (
      <div className={'shadow-container'}>
        {
          data.map(item =>
            <TaskItem status={item.completed} title={item.title}/>
          )
        }
      </div>
  );
}

export default TaskList;