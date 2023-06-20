import React from 'react';
import style from './Input.module.css'
function Input({...props}) {
  return (
      <input className={style.input} {...props}/>
  );
}

export default Input;