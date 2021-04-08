import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from '../components/TestComponent/TestComponent';

const RootPage = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TestComponent} />
      </Switch>
    </Router>
  );
};

export default RootPage;
