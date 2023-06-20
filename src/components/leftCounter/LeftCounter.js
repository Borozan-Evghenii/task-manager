import React from 'react';
import style from './LeftCounter.module.css'
import {useSelector} from "react-redux";
import {selectLeftTasks} from "../../redux/tasksSlice/tasksSelectors";
function LeftCounter() {
  const count = useSelector(selectLeftTasks)
  return (
      <div className={style.counter}>{count.length} items left</div>
  );
}

export default LeftCounter;