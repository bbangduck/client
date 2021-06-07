import React, { ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import theme from './styles/theme';
import RootPage from './pages/RootPage';
import Layout from './styles/Layout';

const App = (): ReactElement => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <RootPage />
        </Layout>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
