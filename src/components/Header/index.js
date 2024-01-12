import React from 'react';

import { AppBar, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

import ThemeToggle from '../ThemeToggle';


const StyledAppBar = styled(AppBar)`
  height: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;


function Header() {
  const min550px = useMediaQuery('(max-width:550px)');
  const variant = min550px ? 'h6' : 'h5';
  const fontSize = min550px ? 'small' : null;

  return (
    <StyledAppBar position="static" component="header">
      <Typography component="h1" variant={`${variant}`} style={{ flexGrow: 1 }}>
        Визуализация алгоритмов сортировки
      </Typography>

      <ThemeToggle fontSize={fontSize} />
    </StyledAppBar>
  )
}

export default Header;
