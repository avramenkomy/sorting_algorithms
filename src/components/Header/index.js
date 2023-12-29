import React from 'react';

import { AppBar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import ThemeToggle from '../ThemeToggle';


const StyledAppBar = styled(AppBar)`
  min-height: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;


function Header() {

  return (
    <StyledAppBar position="static" component="header">
      <Typography component="h1" variant="h5" style={{ flexGrow: 1 }}>
        Визуализация алгоритмов сортировки
      </Typography>

      <ThemeToggle />
    </StyledAppBar>
  )
}

export default Header;
