import React from 'react';
import uniqid from 'uniqid';
import { useSelector } from 'react-redux';

import useResize from '../../../hooks/useResize';

import './styles.css';

import ArrayElement from './item';


function ArrayComponent() {
  const array_state = useSelector(state => state.array);
  const array = array_state.array;
  const active = array_state.active;
  const sorted = array_state.sorted;

  const max = array_state.max;
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
      {/* FIXME: Костыль, добавляется невидымый элемент с максимальной
      высотой чтобы избежать изменения высоты контейнера для массива
      при сортировке merge в момент когда максимальный элемент попадает в
      буфферный массив и его место занимает следующий максимальный элемент,
      который меньше начального максимального элемента, так как высота
      контейнера для массива вычисляется по максимальному элементу. */}
      <ArrayElement w={0} h={max} max={max} display="hidden" />

      {array.map((item, index) => (
        <ArrayElement
          key={uniqid()}
          id={item}
          w={elemWidth}
          h={item}
          max={max}
          active={active.includes(index)}
          sorted={sorted.includes(index)}
        />
      ))}
    </div>
  )
}

export default ArrayComponent;
