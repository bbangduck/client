import React, { ReactElement, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from '../components/TestComponent/TestComponent';

const MyPage = lazy(() => import('./myPages/MyPage'));
const UpdatePage = lazy(() => import('./myPages/update/UpdatePage'));
const ProfilePage = lazy(() => import('./myPages/update/ProfilePage'));
const PolicyPage = lazy(() => import('./myPages/update/PolicyPage'));

const RootPage = (): ReactElement => {
  return (
    <Suspense fallback={<p>로딩중...</p>}>
      <Router>
        <Switch>
          <Route exact path="/" component={TestComponent} />
          {/* 마이페이지 */}
          <Route exact path="/mypage" component={MyPage} /> {/* 11 */}
          <Route path="/mypage/update" component={UpdatePage} /> {/* 15 */}
          <Route path="/mypage/profile" component={ProfilePage} /> {/* 14 */}
          <Route path="/mypage/policy" component={PolicyPage} /> {/* 16 */}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default RootPage;
