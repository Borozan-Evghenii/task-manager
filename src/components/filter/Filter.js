import React from 'react';
import style from './Filter.module.css'
import Button from "../../UI/button/Button";
function Filter(props) {
  return (
      <div className={style.filter}>
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Completed</Button>
      </div>
  );
}

export default Filter;