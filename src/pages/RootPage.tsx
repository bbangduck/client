import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from '../components/TestComponent/TestComponent';
import MyPage from './myPages/myPage';

const RootPage = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TestComponent} />
        {/* 마이페이지 */}
        <Route exact path="/mypage" component={MyPage} /> {/* 11 */}
      </Switch>
    </Router>
  );
};

export default RootPage;
