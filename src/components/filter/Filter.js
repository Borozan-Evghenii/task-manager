import React from 'react';
import style from './Filter.module.css'
import Button from "../../UI/button/Button";
function Filter() {
  return (
      <div className={style.filter}>
        {/*<Button onClick={()=> setFilter('all')}>All</Button>*/}
        {/*<Button onClick={()=> setFilter('active')}>Active</Button>*/}
        {/*<Button onClick={()=> setFilter('completed')}>Completed</Button>*/}
      </div>
  );
}

export default Filter;