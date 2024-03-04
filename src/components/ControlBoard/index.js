import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActive } from '../../redux/actions/setActive';
import { setSorted } from '../../redux/actions/setSorted';
import { arrayOnChange } from '../../redux/actions/arrayOnChange';
import {
  iteration, sleep,
  bubbles, selection, quick, insertion, shell, heap, merge, bucket,
} from '../../utils';

import { Grid } from '@mui/material';
import ArraySettings from './ArraySettings';
import SortTypes from './SortTypes';


function ControlBoard() {
  const dispatch = useDispatch();
  const array_state = useSelector(state => state.array);
  let array = array_state.array;
  const speed = array_state.speed;

  async function sorting(type) {
    let actions = [];
    let arrayCopy = Array.from(array);

    switch(type) {
      case 'bubbles':
        actions = bubbles(array);
        break;
      case 'selection':
        actions = selection(array);
        break;
      case 'quick':
        quick(arrayCopy, 0, arrayCopy.length - 1, actions);
        break;
      case 'insertion':
        arrayCopy = insertion(arrayCopy, actions);
        break;
      case 'shell':
        arrayCopy = shell(arrayCopy, actions);
        break;
      case 'heap':
        heap(arrayCopy, actions);
        break;
      case 'merge':
        merge(arrayCopy, actions);
        break;
      case 'bucket':
        bucket(arrayCopy, 'bubbles', actions);
        break;
      default:
        actions = iteration(array);
    }

    await parseActions(actions);
  }

  async function parseActions(actions) {
    for (let action of actions) {
      let { id, elems } = action;

      switch(id) {
        case 'setActive':
          dispatch(setActive(elems));
          break;
        case 'setSorted':
          dispatch(setSorted(elems));
          break;
        case 'swap':
          elems = Array.from(new Set(elems));
          if (elems.length === 2) {
            const a = elems[0];
            const b = elems[1];
            [array[a], array[b]] = [array[b], array[a]];
          } else if (elems.length === 3) {
            const a = elems[0];
            const b = elems[1];
            const c = elems[2];
            [array[a], array[b], array[c]] = [array[c], array[a], array[b]];
          }
          dispatch(arrayOnChange(array));
          break;
        case 'setElem':
          const index = elems[0];
          const value = elems[1];
          array[index] = value;
          dispatch(arrayOnChange(array));
          break;
        default: // do nothing
      }

      await sleep(500 - speed);
    }

    dispatch(setActive([]));
  }

  return(
    <React.Fragment>
      <Grid item xs={12} md={4} display="flex">
        <ArraySettings />
      </Grid>
      <Grid item xs={12} md={8} display="flex">
        <SortTypes sorting={sorting} />
      </Grid>
    </React.Fragment>
  )
}

export default ControlBoard;
