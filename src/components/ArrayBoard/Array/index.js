import React from 'react';
import uniqid from 'uniqid';

import useResize from '../../../hooks/useResize';

import './styles.css';

import ArrayElement from './item';

const ARRAY = [
  330, 492, 420, 381, 498, 482, 334, 378, 46, 293, 413, 33, 234, 196, 257, 0,
  33, 355, 57, 83, 335, 300, 65, 187, 422, 286, 116, 432, 283, 456, 157, 2, 1000
];

function ArrayComponent() {
  const max = Math.max(...ARRAY);
  const screenWidth = useResize().width;

  /**
   * 36 это сумма левых и правых
   * паддингов контейнера main 4 + 4
   * паддингов контейнера массива 10 + 10
   * марджинов элемента paper для контейнера массива 4 + 4
   */
  const elemWidth = (screenWidth - 36) / ARRAY.length;

  return (
    <div className='array-container'>
      {ARRAY.map((item, index) => (
        <ArrayElement
          key={uniqid()}
          id={item}
          w={elemWidth}
          h={item}
          max={max}
          color="red"
          active={index === 4}
          sorted={index === 32}
        />
      ))}
    </div>
  )
}

export default ArrayComponent;
