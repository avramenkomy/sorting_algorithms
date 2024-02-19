import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';

import {
  Box, Grid, Typography, Slider,
} from '@mui/material';

const Input = styled(MuiInput)`
  width: 42px;
`;

function RangeElement(props) {
  const { val, label, max, min, step, onChange } = props;

  const [value, setValue] = useState(val);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? 0 : Number(event.target.value));
    onChange(event.target.value === '' ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box pl={2} pr={2}>
      <Typography id="input-slider" gutterBottom>
        {label}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={min}
            max={max}
            step={step}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default RangeElement;
