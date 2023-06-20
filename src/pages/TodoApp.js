import React from 'react';
import TaskList from "../module/taskList/TaskList";
import Filter from "../components/filter/Filter";

function TodoApp(props) {
  return (
      <>
        <TaskList />
        <Filter/>
      </>
  );
}

export default TodoApp;