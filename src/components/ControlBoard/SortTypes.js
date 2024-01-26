import React from 'react';

import { Paper, Box, Grid, Button } from '@mui/material';
// import swap from '../../utils/swap';
// import sleep from '../../utils/sleep';


const SORT_TYPES = [
  'Bubbles',
  'Selection',
  'Merge',
  'Quick',
  'Insertion',
  'Shell',
  'Bucket',
  'Heap',
  'Iteration',
]


function SortTypes({ sorting }) {

  const handleClick = type => {
    sorting(type.toLowerCase());
  }

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
          flexDirection="row"
          flexWrap="wrap"
        >
          {SORT_TYPES.map(item => (
            <Grid item key={item}>
              <Button variant="contained" onClick={() => { handleClick(item)}}>
                {item}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  )
}

export default SortTypes;
