import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import theme from './styles/theme';
import RootPage from './pages/RootPage';

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RootPage />
    </ThemeProvider>
  );
};

export default App;
