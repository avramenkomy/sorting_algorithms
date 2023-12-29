import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../redux/actions/setTheme';

import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { teal } from '@mui/material/colors';



function ThemeToggle() {
  const theme = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();

  const handleThemeOnChange = () => {
    const mode = theme === 'light' ? 'dark' : 'light';

    dispatch(setTheme(mode));
  }

  return (
    <IconButton onClick={handleThemeOnChange}>
      {theme === 'light'
        ? <Brightness7Icon sx={{ color: teal[50]}} />
        : <Brightness4Icon sx={{ color: teal[50]}} />
      }
    </IconButton>
  )
}

export default ThemeToggle;
