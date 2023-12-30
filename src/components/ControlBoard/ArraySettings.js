import React from 'react';

import { Paper, Box } from '@mui/material';


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
      <Paper elevation={3} />
    </Box>
  )
}

export default ArraySettings;
