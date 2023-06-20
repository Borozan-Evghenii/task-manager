import React from 'react';
import style from './Action.module.css'
import Filter from "../../UI/filter/Filter";
import Button from "../../UI/button/Button";
import LeftCounter from "../../components/leftCounter/LeftCounter";
import {clearCompleted, clearCompletedQuery} from "../../redux/tasksSlice/tasksSlice";
import {useDispatch} from "react-redux";

function ActionBar() {
    const dispatch = useDispatch()
  return (
      <div className={style.actionBar}>
          <LeftCounter>3</LeftCounter>
          <Filter>
              <Button>All</Button>
              <Button>Active</Button>
              <Button>Completed</Button>
          </Filter>
          <Button onClick={()=> dispatch(clearCompleted())}>Clear Completed</Button>
      </div>
  );
}

export default ActionBar;