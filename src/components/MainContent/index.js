import React from 'react';

import { Grid } from '@mui/material';

import ControlBoard from '../ControlBoard';
import ArrayBoard from '../ArrayBoard';

function MainContent() {

  return (
    <Grid container component="main" flexDirection="column" flexWrap="nowrap" p={0.5}>
      <Grid item container flexGrow={1}>
        <ControlBoard />
      </Grid>
      <Grid item flexGrow={3} display="flex">
        <ArrayBoard />
      </Grid>
    </Grid>
  )
}

export default MainContent;
