import React from 'react';

import { Grid, Box, Paper, Button } from '@mui/material';

import RangeElement from '../Elements/Range';


function ArraySettings() {

  return(
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexWrap: 'nowrap',
        '& > :not(style)': {
          m: 0.5,
          flexGrow: 1,
        },
      }}
    >
      <Paper elevation={3} sx={{ padding: '4px' }}>
        <Grid
          container
          spacing={1}
          flexDirection="column"
          flexWrap="nowrap"
        >
          <Grid
            item
            container
            flexGrow={1}
            flexDirection="column"
            flexWrap="nowrap"
            spacing={1}
          >
            <Grid item>
              <RangeElement defaultValue={30} label="Array size" />
            </Grid>

            <Grid item>
              <RangeElement defaultValue={30} label="Speed sorting" />
            </Grid>
          </Grid>

          <Grid item alignSelf="center">
            <Button variant="outlined">Create</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default ArraySettings;
