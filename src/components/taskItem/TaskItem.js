import React from 'react';
import Checkbox from "../../UI/checkbox/Checkbox";
import style from './TaskItem.module.css'
function TaskItem({status, title, ...props}) {
  return (
      <div className={style.item}>
        <Checkbox isChecked={status} {...props}/>
        <p className={status ? style.itemTitleActive: ''}>{title}</p>
      </div>
  );
}

export default TaskItem;