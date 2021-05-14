import React, { ReactElement, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from '../components/TestComponent/TestComponent';

const MyPage = lazy(() => import('./myPages/myPage'));

const RootPage = (): ReactElement => {
  return (
    <Suspense fallback={<p>로딩중...</p>}>
      <Router>
        <Switch>
          <Route exact path="/" component={TestComponent} />
          {/* 마이페이지 */}
          <Route exact path="/mypage" component={MyPage} /> {/* 11 */}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default RootPage;
