import React from 'react';

import { Paper, Box, Grid, Button } from '@mui/material';


const SORT_TYPES = [
  'Bubbles',
  'Selection',
  'Merge',
  'Quick',
  'Insertion',
  'Shell',
  'Bucket',
  'Heap',
]


function SortTypes() {

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
            <Grid item>
              <Button variant="contained">{item}</Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  )
}

export default SortTypes;
