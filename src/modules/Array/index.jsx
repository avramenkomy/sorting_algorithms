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
  const [current, setCurrent] = useState(-1);

  let init = -1;
  let timeout;
  let elemWidth = window.screen.width / arrValue.length;

  const iteratingOnArray = () => {
    clearTimeout(timeout);
    init = init + 1;
    setCurrent(init);

    timeout = setTimeout(() => {
      if (init < arrValue.length) {
        iteratingOnArray();
      } else {
        setCurrent(-1);
        init = -1;
      }
    }, speedIterating);
  }

  const getNewArray = () => {
    setArrayValue(createArrayOfNumbers(arrSize, 2, 500));
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
            color={idx === current ? ACTIVE_COLOR : DEFAULT_COLOR}
          />
        ))}
      </div>
      <button onClick={iteratingOnArray} disabled={current !== -1}>Start</button>
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
    </React.Fragment>
  )
}

export default ArrayComponent;
