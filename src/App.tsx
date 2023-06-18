import { BrowserRouter } from 'react-router-dom';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import AppRouter from './AppRouter';
import { darkTheme } from './themes';
import { AlertMessage, Navbar } from './components';
import Loader from './components/Loader';
import './scss/index.scss';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <AlertMessage />
        <Container
          component="main"
          maxWidth={false}
          sx={{ mt: '100px' }}
        >
          <React.Suspense fallback={<Loader />}>
            <AppRouter />
          </React.Suspense>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
