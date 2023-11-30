import React from 'react';

import './style.css'

function Element({h, w, id}) {

  const arrElemStyle = {
    height: `calc(2px + ${ h }px)`,
    width: `${ w }px`,
  }

  return (
    <div className="arr-elem" id={id} style={arrElemStyle} />
  )
}

export default Element;
