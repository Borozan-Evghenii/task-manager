import React from 'react';
import style from './Checkbox.module.css'
function Checkbox({isChecked, ...props}) {
  return (
      <label className={`${style.checkbox} ${isChecked ? style.checkboxActive : ''}  `}>
        <span className={style.indicator}></span>
        <input className={style.hidden} type="checkbox" {...props} />
      </label>
  );
}

export default Checkbox;