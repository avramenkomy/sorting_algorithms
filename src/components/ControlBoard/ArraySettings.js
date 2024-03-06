import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setArray } from '../../redux/actions/setArray';
import { setSortingSpeed } from '../../redux/actions/setSortingSpeed';
import useResize from '../../hooks/useResize';

import { Grid, Box, Paper, Button } from '@mui/material';

import RangeElement from '../Elements/Range';


function ArraySettings() {

  const dispatch = useDispatch();
  const screenWidth = useResize().width;
  const array_state = useSelector(state => state.array);

  const [ maxArraySize, setMaxArraySize ] = useState(
    Math.floor((screenWidth - 36) / 3)
  );
  const [ arrSize, setArrSize ] = useState(array_state.array.length);
  const [ sortSpeed, setSortSpeed ] = useState(array_state.speed);

  useEffect(() => {
    setMaxArraySize(Math.floor((screenWidth - 36) / 3));
  }, [screenWidth]);

  useEffect(() => {
    dispatch(setSortingSpeed(sortSpeed));
  }, [sortSpeed, dispatch]);

  const createNewArray = () => {
    dispatch(setArray(arrSize, 0, 1000));
  }

  const speedOnChange = value => {
    setSortSpeed(value);
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
              <RangeElement
                label="Array size"
                val={arrSize}
                min={10}
                max={maxArraySize}
                onChange={newValue => setArrSize(newValue)}
                inputView
              />
            </Grid>

            <Grid item>
              <RangeElement
                label="Speed sorting"
                val={sortSpeed}
                min={0}
                max={500}
                step={10}
                onChange={speedOnChange}
                marks={[{value: 0, label: 'Slow'}, {value: 500, label: 'Fast'}]}
              />
            </Grid>
          </Grid>

          <Grid item alignSelf="center">
            <Button
              variant="outlined"
              onClick={createNewArray}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default ArraySettings;
