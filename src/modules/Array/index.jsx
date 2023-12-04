import React, { useState } from 'react';
import Element from './Element';
import './style.css';

import {
  positionExchange, createArrayOfNumbers,
} from '../../utils/AuxiliaryFunctions';

const ACTIVE_COLOR = 'rgb(255, 255, 255)';
const DEFAULT_COLOR = 'rgb(252, 57, 7)';

function ArrayComponent() {
  const [current, setCurrent] = useState(-1);
  const [arrValue, setArrayValue] = useState(createArrayOfNumbers(20, 2, 500));

  let init = -1;
  let timeout;
  let elemWidth = window.screen.width / arrValue.length;
  const speedIterating = (20 / arrValue.length) * 500;

  const iteratingOnArray = () => {
    setCurrent(prevState => prevState + 1);
    init = init + 1;

    timeout = setTimeout(() => {
      if (init < arrValue.length) {
        iteratingOnArray();
      } else {
        setCurrent(-1);
        init = -1;
      }
    }, speedIterating);
  }

  const arrModify = () => {
    setArrayValue(prevState => positionExchange(prevState, 2, 3));
  }

  const getNewArray = () => {
    setArrayValue(createArrayOfNumbers(400, 2, 500));
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
      <button onClick={iteratingOnArray}>Start</button>
      <button onClick={getNewArray}>Create Array</button>
      <button onClick={arrModify}>ChangePos</button>
    </React.Fragment>
  )
}

export default ArrayComponent;
