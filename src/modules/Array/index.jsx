import React, { useState } from 'react';
import Element from './Element';
import './style.css';

import {
  createArrayOfNumbers,
} from '../../utils/AuxiliaryFunctions';
import { useResize } from '../../hooks/useResize';

const ACTIVE_COLOR = 'rgb(255, 255, 255)';
const DEFAULT_COLOR = 'rgb(252, 57, 7)';

function ArrayComponent() {
  const screenWidth = useResize().width;

  const [arrSize, setArrSize] = useState(10);
  const [speedIterating, setSpeedIterating] = useState(100);
  const [arrValue, setArrayValue] = useState(createArrayOfNumbers(arrSize, 0, 500));
  const [currents, setCurrents] = useState([]);
  const [maxArraySize, setMaxArraySize] = useState(Math.floor((screenWidth - 40) / 3));

  React.useEffect(() => {
    setMaxArraySize(Math.floor((screenWidth - 40) / 3));
  }, [screenWidth]);

  let init = -1;
  let timeout;
  let elemWidth = window.screen.width / arrValue.length;
  let i = 0;
  let j = 0;

  const iteratingOnArray = () => {
    clearTimeout(timeout);
    init = init + 1;
    document.getElementById(`${init}`)?.classList?.remove('sorted');
    setCurrents([init, init + 1, init + 2, init + 3]);

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
    if (arrSize > maxArraySize) {
      setArrayValue(createArrayOfNumbers(maxArraySize, 2, 500));
      setArrSize(maxArraySize);
    } else {
      setArrayValue(createArrayOfNumbers(arrSize, 2, 500));
    }

    for (let i = 0; i < arrValue.length; i++) {
      document.getElementById(i).classList.remove('sorted');
    }
  }

  function bubblesSorting() {
    if (i < arrValue.length) {
      innerBubblesSortingCycle();
    } else {
      setCurrents([]);
      iteratingOnArray();
      i = 0;
      j = 0;
      return;
    }
  }

  function innerBubblesSortingCycle() {
    setCurrents([j, j+1]);

    if (j < arrValue.length - (i+1)) {
      timeout = setTimeout(() => {
        if (arrValue[j] > arrValue[j + 1]) {
          [arrValue[j], arrValue[j+1]] = [arrValue[j+1], arrValue[j]];
        }
        j = j + 1;
        innerBubblesSortingCycle();
      }, speedIterating);
    } else {
      j = 0;
      i = i + 1;
      clearTimeout(timeout);
      document.getElementById(arrValue.length - i).classList.toggle('sorted');
      bubblesSorting();
    }
  };

  const handleSortinButton = () => {
    bubblesSorting();
  }

  const disabled = !!currents.length;

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

      <button onClick={iteratingOnArray} disabled={disabled}>Start</button>

      <button onClick={getNewArray} disabled={disabled}>Create Array</button>

      <input
        id="arrSize"
        type="range"
        name={arrSize}
        min={10}
        max={maxArraySize}
        step={5}
        onChange={event => { setArrSize(event.target.value) }}
        disabled={disabled}
      />
      <label htmlFor="arrSize">Size of array</label>

      <input
        id="speedSorting"
        type="range"
        name={speedIterating}
        min={0}
        max={500}
        step={10}
        onChange={event => { setSpeedIterating(500 - event.target.value) }}
        disabled={disabled}
      />
      <label htmlFor="speedSorting">Sorting Speed</label>

      <button
        onClick={handleSortinButton}
        disabled={disabled}
      >
        Bubbles Sort
      </button>
    </React.Fragment>
  )
}

export default ArrayComponent;
