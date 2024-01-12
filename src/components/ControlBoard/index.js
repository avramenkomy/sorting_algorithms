import React from 'react';

import { Grid } from '@mui/material';
import ArraySettings from './ArraySettings';
import SortTypes from './SortTypes';


function ControlBoard() {

  return(
    <React.Fragment>
      <Grid item xs={12} md={4} display="flex">
        <ArraySettings />
      </Grid>
      <Grid item xs={12} md={8} display="flex">
        <SortTypes />
      </Grid>
    </React.Fragment>
  )
}

export default ControlBoard;
