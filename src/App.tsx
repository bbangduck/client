import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import theme from './styles/theme';
import RootPage from './pages/RootPage';
import Layout from './styles/Layout';
import store from './stores/rootReducer';

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <GlobalStyle />
            <RootPage />
          </Layout>
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  );
};

export default App;
