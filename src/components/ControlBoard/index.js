import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActive } from '../../redux/actions/setActive';
import sleep from '../../utils/sleep';
import { iteration } from '../../utils/iteration';

import { Grid } from '@mui/material';
import ArraySettings from './ArraySettings';
import SortTypes from './SortTypes';


function ControlBoard() {
  const dispatch = useDispatch();
  const array_state = useSelector(state => state.array);
  const array = array_state.array;
  const speed = array_state.speed;

  async function sorting(type) {
    let actions = [];

    if (type === 'iteration') {
      actions = iteration(array);
    }

    await parseActions(actions);
  }

  async function parseActions(actions) {
    for (let action of actions) {
      const { id, elems } = action;

      if (id === 'setActive') {
        dispatch(setActive(elems));
      }
      await sleep(speed);
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
