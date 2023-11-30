import React from 'react';
import Element from './Element';
import './style.css';

const array = [
  10, 100, 61, 12, 34, 57, 89, 44, 95, 11, 29, 10, 100, 61, 12,
  14, 102, 66, 16, 31, 52, 85, 46, 91, 15, 28, 11, 10, 1, 16,
  10, 100, 61, 12, 34, 57, 89, 44, 95, 11, 29, 10, 100, 61, 12,
];

function Array() {
  let elemWidth = window.screen.width / array.length;  

  return (
    <div className="array">
      {array.map((h, idx) => (
        <Element
          key={idx}
          h={h}
          w={elemWidth}
          id={idx}
        />
      ))}
    </div>
  )
}

export default Array;
