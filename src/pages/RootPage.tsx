import React, { ReactElement, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from '../components/TestComponent/TestComponent';

const MyPage = lazy(() => import('./myPages/MyPage'));
const StatusPage = lazy(() => import('./myPages/mypage/StatusPage'));
const BedgePage = lazy(() => import('./myPages/mypage/BedgePage'));
const NoticePage = lazy(() => import('./myPages/mypage/NoticePage'));
const UpdatePage = lazy(() => import('./myPages/update/UpdatePage'));
const ProfilePage = lazy(() => import('./myPages/update/ProfilePage'));
const PolicyPage = lazy(() => import('./myPages/update/PolicyPage'));
const ClausePage = lazy(() => import('./myPages/update/ClausePage'));
const RemoveAccountPage = lazy(() => import('./myPages/update/RemoveAccountPage'));
const RemoveAccountPage2 = lazy(() => import('./myPages/update/RemoveAccountPage2'));

const RootPage = (): ReactElement => {
  return (
    <Suspense fallback={<p>로딩중...</p>}>
      <Router>
        <Switch>
          <Route exact path="/" component={TestComponent} />
          {/* 마이페이지 */}
          <Route exact path="/mypage" component={MyPage} /> {/* 11 */}
          <Route path="/mypage/status" component={StatusPage} /> {/* 22 */}
          <Route path="/mypage/bedges" component={BedgePage} /> {/* 24 */}
          {/* 공지사항 */}
          <Route exact path="/mypage/notice" component={NoticePage} /> {/* 25 */}
          {/* 설정 */}
          <Route path="/mypage/update" component={UpdatePage} /> {/* 15 */}
          <Route path="/mypage/profile" component={ProfilePage} /> {/* 14 */}
          <Route path="/mypage/policy" component={PolicyPage} /> {/* 16 */}
          <Route path="/mypage/clause" component={ClausePage} /> {/* 17 */}
          <Route exact path="/mypage/removeAccount" component={RemoveAccountPage} /> {/* 18 */}
          <Route path="/mypage/removeAccount/2" component={RemoveAccountPage2} /> {/* ? */}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default RootPage;
