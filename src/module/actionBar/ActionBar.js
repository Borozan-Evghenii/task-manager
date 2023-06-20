import React from 'react';
import style from './Action.module.css'
import Filter from "../../components/filter/Filter";
import Button from "../../UI/button/Button";
import LeftCounter from "../../components/leftCounter/LeftCounter";
import {clearCompleted} from "../../redux/tasksSlice/tasksSlice";
import {useDispatch, useSelector} from "react-redux";
import {changeFilter} from "../../redux/filterSlice/filterSlice";

function ActionBar() {
    const dispatch = useDispatch()

  return (
      <div className={style.actionBar}>
          <LeftCounter />
          <Filter />
          <Button onClick={()=> dispatch(clearCompleted())}>Clear Completed</Button>
      </div>
  );
}

export default ActionBar;