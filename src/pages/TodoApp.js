import React from 'react';
import TaskList from "../module/taskList/TaskList";
import Filter from "../components/filter/Filter";
import ActionBar from "../module/actionBar/ActionBar";
import CreateTask from "../module/createTask/CreateTask";

function TodoApp() {
  return (
      <>
          <div style={{marginBottom: "20px" }} className="shadow-container">
              <CreateTask />
          </div>
        <div className="shadow-container">
            <ActionBar />
            <TaskList />
        </div>
      </>
  );
}

export default TodoApp;