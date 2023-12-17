import React from 'react';

import './styles.css';


function Button(props) {
  const { onClick, className, ...rest_props } = props;


  return (
    <button
      {...rest_props}
      onClick={ onClick }
      className={`btn ` + className}
    >
      {props.children}
    </button>
  )
}

export default Button;
