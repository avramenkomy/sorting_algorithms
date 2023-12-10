import React, { useState } from 'react';
import Element from './Element';
import './style.css';

import {
  positionExchange, createArrayOfNumbers,
} from '../../utils/AuxiliaryFunctions';

const ACTIVE_COLOR = 'rgb(255, 255, 255)';
const DEFAULT_COLOR = 'rgb(252, 57, 7)';

function ArrayComponent() {
  const [arrSize, setArrSize] = useState(10);
  const [speedIterating, setSpeedIterating] = useState(100);
  const [arrValue, setArrayValue] = useState(createArrayOfNumbers(arrSize, 0, 500));
  const [currents, setCurrents] = useState([]);

  let init = -1;
  let timeout;
  let elemWidth = window.screen.width / arrValue.length;

  const iteratingOnArray = () => {
    clearTimeout(timeout);
    init = init + 1;
    setCurrents([init]);

    timeout = setTimeout(() => {
      if (init < arrValue.length) {
        iteratingOnArray();
      } else {
        setCurrents([]);
        init = -1;
      }
    }, speedIterating);
  }

  const getNewArray = () => {
    setArrayValue(createArrayOfNumbers(arrSize, 2, 500));
  }

  function bubblesSort (arr) {
    let newArray = Array.from(arr);

    for (let i = 0; i < newArray.length; i++) {
      for (let j = 0; j < newArray.length - 1; j++) {
        if (newArray[j] > newArray[j + 1]) {
          newArray = positionExchange(newArray, j, j+1);
        }
      }
    }

    return newArray;
  }

  const bubblesSortHandler = () => {
    let newArray = Array.from(arrValue);
    newArray = bubblesSort(newArray);
    setArrayValue(newArray);
  }

  return (
    <React.Fragment>
      <div className="array">
        {arrValue.map((h, idx) => (
          <Element
            key={idx}
            h={h}
            w={elemWidth}
            id={idx}
            color={
              currents.some(item => item === idx)
                ? ACTIVE_COLOR
                : DEFAULT_COLOR
            }
          />
        ))}
      </div>
      <button onClick={iteratingOnArray} disabled={!!currents.length}>Start</button>
      <button onClick={getNewArray}>Create Array</button>
      <input
        id="arrSize"
        type="range"
        name={arrSize}
        min={10}
        max={450}
        step={5}
        onChange={event => { setArrSize(event.target.value) }}
      />
      <label htmlFor="arrSize">Size of array</label>

      <input
        id="speedSorting"
        type="range"
        name={speedIterating}
        min={0}
        max={500}
        step={10}
        onChange={event => { setSpeedIterating(-event.target.value + 500) }}
      />
      <label htmlFor="speedSorting">Sorting Speed</label>

      <button onClick={bubblesSortHandler}>Bubbles Sort</button>
    </React.Fragment>
  )
}

export default ArrayComponent;
