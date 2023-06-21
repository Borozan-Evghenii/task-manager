import React from 'react';
import style from './LeftCounter.module.css'
import {useGetTasksQuery} from "../../redux/tasksApi";
function LeftCounter() {
  const {data = []} = useGetTasksQuery()
  const counter = data.filter(item => !item.completed)
  return (
      <div className={style.counter}> {counter.length} items left</div>
  );
}

export default LeftCounter;