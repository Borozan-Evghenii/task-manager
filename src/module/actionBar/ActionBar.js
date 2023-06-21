import React from 'react';
import style from './Action.module.css'
import Filter from "../../components/filter/Filter";
import Button from "../../UI/button/Button";
import LeftCounter from "../../components/leftCounter/LeftCounter";

function ActionBar() {

  return (
      <div className={style.actionBar}>
          <LeftCounter />
          <Filter />
          <Button >Clear Completed</Button>
      </div>
  );
}

export default ActionBar;