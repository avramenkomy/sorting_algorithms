import React from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const colorMode = createTheme({
    palette: {
      mode: useSelector(state => state.theme.mode),
    }
  });

  return (
    <ThemeProvider theme={colorMode}>
      <CssBaseline />
      <Header />
      <main></main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
