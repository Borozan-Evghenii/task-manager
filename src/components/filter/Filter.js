import React from 'react';
import style from './Filter.module.css'
import Button from "../../UI/button/Button";
import {changeFilter} from "../../redux/filterSlice/filterSlice";
import {useDispatch, useSelector} from "react-redux";
function Filter() {
  const filter = useSelector(state => state.filter.filter)
  const dispatch = useDispatch()

  return (
      <div className={style.filter}>
        <Button active={filter === 'all'} onClick={()=> dispatch(changeFilter('all'))}>All</Button>
        <Button active={filter === 'active'} onClick={()=> dispatch(changeFilter('active'))}>Active</Button>
        <Button active={filter === 'completed'} onClick={()=> dispatch(changeFilter('completed'))}>Completed</Button>
      </div>
  );
}

export default Filter;