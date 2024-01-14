import React from 'react';
import uniqid from 'uniqid';
import { useSelector } from 'react-redux';

import useResize from '../../../hooks/useResize';

import './styles.css';

import ArrayElement from './item';


function ArrayComponent() {
  const array = useSelector(state => state.array.array);

  const max = Math.max(...array);
  const screenWidth = useResize().width;

  /**
   * 36 это сумма левых и правых
   * паддингов контейнера main 4 + 4
   * паддингов контейнера массива 10 + 10
   * марджинов элемента paper для контейнера массива 4 + 4
   */
  const elemWidth = (screenWidth - 36) / array.length;

  return (
    <div className='array-container'>
      {array.map((item, index) => (
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
