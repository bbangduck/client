import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import theme from './styles/theme';
import RootPage from './pages/RootPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RootPage />
    </ThemeProvider>
  );
};

export default App;
