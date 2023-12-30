import React from 'react';

import { Grid } from '@mui/material';

function MainContent() {

  return (
    <Grid container component="main" flexDirection="column" flexWrap="nowrap">
      <Grid item container flexGrow={1}>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={8}></Grid>
      </Grid>
      <Grid item flexGrow={3}></Grid>
    </Grid>
  )
}

export default MainContent;
