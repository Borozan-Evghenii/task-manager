import React from 'react';
import style from './LeftCounter.module.css'
import {useSelector} from "react-redux";
function LeftCounter() {
  const data = useSelector(state => state.tasks.tasks)
  let count = data.filter(item => item.completed === false)

  return (
      <div className={style.counter}>{count.length} items left</div>
  );
}

export default LeftCounter;