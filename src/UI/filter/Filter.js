import React from 'react';
import style from './Filter.module.css'
import Button from "../button/Button";
function Filter({children}) {
  return (
      <div className={style.filter}>
          {children}
      </div>
  );
}

export default Filter;