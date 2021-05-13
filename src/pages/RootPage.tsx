import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Section } from '../components/organisms';

const RootPage = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Section} />
      </Switch>
    </Router>
  );
};

export default RootPage;
