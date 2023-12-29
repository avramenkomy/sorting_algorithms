import React from 'react';

import './styles.css';


function InputRange(props) {
  const {id, labelText, onChange, ...rest_props} = props;

  return (
    <React.Fragment>
      <input
        {...rest_props}
        id={id}
        onChange={onChange}
        type="range"
      />
      <label htmlFor={id}>{labelText}</label>
    </React.Fragment>
  )
}

export default InputRange;
