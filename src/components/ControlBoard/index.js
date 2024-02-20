import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActive } from '../../redux/actions/setActive';
import { setSorted } from '../../redux/actions/setSorted';
import { arrayOnChange } from '../../redux/actions/arrayOnChange';
import { iteration, bubbles, selection, sleep } from '../../utils';

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

    if (type === 'iteration') {
      actions = iteration(array);
    } else if ( type === 'bubbles') {
      actions = bubbles(array);
    } else if ( type === 'selection') {
      actions = selection(array);
    }

    await parseActions(actions);
  }

  async function parseActions(actions) {
    for (let action of actions) {
      const { id, elems } = action;

      if (id === 'setActive') {
        dispatch(setActive(elems));
      }

      if (id === 'setSorted') {
        dispatch(setSorted(elems));
      }

      if (id === 'swap') {
        [array[elems[0]], array[elems[1]]] = [array[elems[1]], array[elems[0]]]

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
