import React from 'react';

import './style.css'

function Element({h, w, id, color}) {

  const arrElemStyle = {
    height: `calc(2px + ${ h }px)`,
    width: `${ w }px`,
    backgroundColor: `${color}`,
  }

  return (
    <div className="arr-elem" id={id} style={arrElemStyle} />
  )
}

export default Element;
