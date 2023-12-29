import React from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  const colorMode = createTheme({
    palette: {
      mode: useSelector(state => state.theme.mode),
    }
  });

  return (
    <ThemeProvider theme={colorMode}>
      <CssBaseline />
      <header></header>
      <main></main>
      <footer></footer>
    </ThemeProvider>
  );
}

export default App;
