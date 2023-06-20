import React from 'react';
import style from './LeftCounter.module.css'
function LeftCounter({children}) {
  return (
      <div className={style.counter}>{children} items left</div>
  );
}

export default LeftCounter;