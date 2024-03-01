import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActive } from '../../redux/actions/setActive';
import { setSorted } from '../../redux/actions/setSorted';
import { arrayOnChange } from '../../redux/actions/arrayOnChange';
import {
  iteration, sleep,
  bubbles, selection, quick, insertion, shell, heap, merge,
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

    if (type === 'iteration') {
      actions = iteration(array);
    } else if ( type === 'bubbles') {
      actions = bubbles(array);
    } else if ( type === 'selection') {
      actions = selection(array);
    } else if ( type === 'quick') {
      quick(arrayCopy, 0, arrayCopy.length - 1, actions);
    } else if ( type === 'insertion' ) {
      arrayCopy = insertion(arrayCopy, actions);
    } else if ( type === 'shell') {
      arrayCopy = shell(arrayCopy, actions);
    } else if (type === 'heap') {
      heap(arrayCopy, actions);
    } else if ( type === 'merge') {
      merge(arrayCopy, actions);
    }

    await parseActions(actions);
  }

  async function parseActions(actions) {
    for (let action of actions) {
      let { id, elems } = action;

      if (id === 'setActive') {
        dispatch(setActive(elems));
      }

      if (id === 'setSorted') {
        dispatch(setSorted(elems));
      }

      if (id === 'swap') {
        elems = Array.from(new Set(elems));
        if (elems.length === 2) {
          [array[elems[0]], array[elems[1]]] = [array[elems[1]], array[elems[0]]];
        } else if (elems.length === 3) {
          [array[elems[0]], array[elems[1]], array[elems[2]]] = [array[elems[2]], array[elems[0]], array[elems[1]]];
        }
        dispatch(arrayOnChange(array));
      }

      if (id === 'setElem') {
        array[elems[0]] = elems[1];
        dispatch(arrayOnChange(array));
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
