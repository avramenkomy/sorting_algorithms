import React, { useState } from 'react';
import Element from './Element';
import './styles.css';

import {
  createArrayOfNumbers,
} from '../../utils/AuxiliaryFunctions';
import { useResize, useBrowser } from '../../hooks';

import Button from '../Controls/Button/Button';
import InputRange from '../Controls/InputRange';

const ACTIVE_COLOR = 'rgb(255, 255, 255)';
const DEFAULT_COLOR = 'rgb(252, 57, 7)';

function ArrayComponent() {
  const screenWidth = useResize().width;
  const browser = useBrowser()?.browser;

  const [arrSize, setArrSize] = useState(10);
  const [speedIterating, setSpeedIterating] = useState(250);
  const [arrValue, setArrayValue] = useState(
    createArrayOfNumbers(arrSize, 0, 500)
  );
  const [currents, setCurrents] = useState([]);
  const [maxArraySize, setMaxArraySize] = useState(
    Math.floor((screenWidth - 40) / 3)
  );

  React.useEffect(() => {
    setMaxArraySize(Math.floor((screenWidth - 40) / 3));
  }, [screenWidth]);

  if (browser === 'Chrome' || browser === 'Safari') {
    const element = document.getElementById('speedSorting');

    let percent = element?.value/500 * 100;
    let fill = percent > 50 ? `${percent}%` : `calc(${percent}% + 2px)`;
    element.style.background = `linear-gradient(to right, #367ebd 0%, #367ebd ${fill}, #fff ${percent}%, #fff 100%)`;
  }

  if (browser === 'Chrome'|| browser === 'Safari') {
    const element = document.getElementById('arrSize');

    let percent = (arrSize - 10)/(maxArraySize - 10) * 100;
    let fill = percent > 50 ? `${percent}%` : `calc(${percent}% + 2px)`;
    element.style.background = `linear-gradient(to right, #367ebd 0%, #367ebd ${fill}, #fff ${percent}%, #fff 100%)`;
  }

  let init = -1;
  let timeout;
  let elemWidth = screenWidth / arrValue.length;
  let i = 0;
  let j = 0;
  let min = 0;

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
      document.getElementById(i).className = 'arr-elem';
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

  function selectedSorting() {
    if (i < arrValue.length - 1) {
      innerSelectedSortingCycle();
    } else {
      setCurrents([]);
      document.getElementById(i).classList.toggle('sorted');
      iteratingOnArray();
      i = 0;
      j = 0;
      min = 0;
    }
  }

  function innerSelectedSortingCycle() {
    setCurrents([i, j]);

    if (j < arrValue.length) {
      timeout = setTimeout(() => {
        if (arrValue[min] > arrValue[j]) {
          min = j;
        }
        j = j + 1;
        innerSelectedSortingCycle();
      }, speedIterating);
    } else {
      [arrValue[i], arrValue[min]] = [arrValue[min], arrValue[i]];
      document.getElementById(i).classList.toggle('sorted');
      i = i + 1;
      j = i + 1;
      min = i;
      clearTimeout(timeout);      
      selectedSorting();
    }
  }  

  const handleSortinButton = sortingType => {
    sortingType === 'bubbles' && bubblesSorting();
    sortingType === 'selecting' && selectedSorting();
  }

  const disabled = !!currents.length;

  const arrSizeOnChange = event => {
    setArrSize(event.target.value);

    if (browser === 'Chrome') {
      let percent = (event.target.value - 10)/(maxArraySize - 10) * 100;
      let fill = percent > 50 ? `${percent}%` : `calc(${percent}% + 2px)`;
      document.getElementById('arrSize').style.background = `linear-gradient(to right, #367ebd 0%, #367ebd ${fill}, #fff ${percent}%, #fff 100%)`;
    }
  }

  const speedIteratingOnChange = event => {
    setSpeedIterating(500 - event.target.value);

    if (browser === 'Chrome') {
      let percent = event.target.value/500 * 100;
      let fill = percent > 50 ? `${percent}%` : `calc(${percent}% + 2px)`;
      document.getElementById('speedSorting').style.background = `linear-gradient(to right, #367ebd 0%, #367ebd ${fill}, #fff ${percent}%, #fff 100%)`;
    }
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

      <div className="control-panel">
        <Button
          onClick={getNewArray}
          disabled={disabled}
          className="reset"
        >
          Create Array
        </Button>

        <InputRange
          id="arrSize"
          value={arrSize}
          min={10}
          max={maxArraySize}
          step={5}
          onChange={arrSizeOnChange}
          disabled={disabled}
          labelText="size of array"
        />

        <InputRange
          id="speedSorting"
          min={0}
          max={500}
          step={10}
          onChange={speedIteratingOnChange}
          disabled={disabled}
          labelText="speed of sorting"
        />

        <Button
          className="sort"
          onClick={() => handleSortinButton('bubbles')}
          disabled={disabled}
        >
          Bubbles Sort
        </Button>

        <Button
          className="sort"
          onClick={() => {
            j = j + 1;
            handleSortinButton('selecting');
          }}
          disabled={disabled}
        >
          Selected Sort
        </Button>
      </div>
    </React.Fragment>
  )
}

export default ArrayComponent;
