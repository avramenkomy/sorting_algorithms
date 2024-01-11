import React from 'react';

import { Grid } from '@mui/material';

import ControlBoard from '../ControlBoard';
import ArrayBoard from '../ArrayBoard';

function MainContent() {

  return (
    <Grid
      container
      component="main"
      flexDirection="column"
      flexWrap="nowrap"
      p={0.5}
    >
      <Grid item container minHeight={225} height="30%">
        <ControlBoard />
      </Grid>
      <Grid item flexGrow={1} display="flex" minHeight={325}>
        <ArrayBoard />
      </Grid>
    </Grid>
  )
}

export default MainContent;
