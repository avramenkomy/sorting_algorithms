import React from 'react';
import Element from './Element';
import './style.css';

let array = [
  10, 100, 61, 12, 34, 57, 89, 44, 95, 11, 29, 10, 100, 61, 12,
];

const ACTIVE_COLOR = 'white';
const DEFAULT_COLOR = 'rgb(252, 57, 7)';

function ArrayComponent() {
  let elemWidth = window.screen.width / array.length;

  const [current, setCurrent] = React.useState(-1);
  const [arrValue, setArrayValue] = React.useState(array);

  let init = -1;
  let timeout;



  const iteratingOnArray = () => {
    setCurrent(prevState => prevState + 1);
    init = init + 1;

    timeout = setTimeout(() => {
      if (init < array.length) {
        iteratingOnArray();
      } else {
        setCurrent(-1);
        init = -1;
      }
    }, 500);
  }

  const positionExchange = (array, elemPos1, elemPos2) => {
    if (Array.isArray(array) && elemPos1 < array.length && elemPos2 < array.length) {
      let arr = Array.from(array);
      [arr[elemPos1], arr[elemPos2]] = [arr[elemPos2], arr[elemPos1]];
      return arr;
    }
    return;
  }

  const arrModify = () => {
    setArrayValue(prevState => positionExchange(prevState, 2, 3));
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
      <button onClick={() => iteratingOnArray()}>Start</button>
      <button onClick={arrModify}>ChangePos</button>
    </React.Fragment>
  )
}

export default ArrayComponent;
