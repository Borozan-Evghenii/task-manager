import React from 'react';
import style from './Button.module.css'
function Button({children, active, ...props}) {
  return (
      <button className={`${style.button} ${active && style.buttonActive} `} {...props}>{children}</button>
  );
}

export default Button;