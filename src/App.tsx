import { BrowserRouter } from 'react-router-dom';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import AppRouter from './AppRouter';
import { darkTheme } from './themes';
import { AlertMessage, Navbar } from './components';

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
          <AppRouter />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
