import React from 'react';

import { Paper, Box } from '@mui/material';
import ArrayComponent from './Array';


function ArrayBoard() {

  return(
    <Box
      id="array_container"
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
      <Paper elevation={3}>
        <ArrayComponent />
      </Paper>
    </Box>
  )
}

export default ArrayBoard;
