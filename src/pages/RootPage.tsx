import React, { ReactElement, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from '../components/TestComponent/TestComponent';

const MyPage = lazy(() => import('./myPages/MyPage'));
const StatusPage = lazy(() => import('./myPages/mypage/StatusPage'));
const BedgePage = lazy(() => import('./myPages/mypage/BedgePage'));
const NoticePage = lazy(() => import('./myPages/mypage/NoticePage'));
const NoticePage2 = lazy(() => import('./myPages/mypage/NoticePage2'));
const UpdatePage = lazy(() => import('./myPages/update/UpdatePage'));
const ProfilePage = lazy(() => import('./myPages/update/ProfilePage'));
const PolicyPage = lazy(() => import('./myPages/update/PolicyPage'));
const ClausePage = lazy(() => import('./myPages/update/ClausePage'));
const RemoveAccountPage = lazy(() => import('./myPages/update/RemoveAccountPage'));
const RemoveAccountPage2 = lazy(() => import('./myPages/update/RemoveAccountPage2'));
const LoginPage = lazy(() => import('./login/LoginPage'));
const LoginSignUpPage = lazy(() => import('./login/LoginSignUpPage'));
const LoginClausePage = lazy(() => import('./login/LoginClausePage'));
const ThemeDetailPage = lazy(() => import('./themes/ThemeDetailPage'));
const ThemeAnalysisPage = lazy(() => import('./themes/ThemeAnalysisPage'));

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
          {/* 마이페이지 공지사항 */}
          <Route exact path="/mypage/notice" component={NoticePage} /> {/* 25 */}
          <Route exact path="/mypage/notice/:number" component={NoticePage2} /> {/* 26 */}
          {/* 마이페이지 설정 */}
          <Route path="/mypage/update" component={UpdatePage} /> {/* 15 */}
          <Route path="/mypage/profile" component={ProfilePage} /> {/* 14 */}
          <Route path="/mypage/policy" component={PolicyPage} /> {/* 16 */}
          <Route path="/mypage/clause" component={ClausePage} /> {/* 17 */}
          <Route exact path="/mypage/removeAccount" component={RemoveAccountPage} /> {/* 18 */}
          <Route path="/mypage/removeAccount/2" component={RemoveAccountPage2} /> {/* ? */}
          {/* 로그인 */}
          <Route exact path="/login" component={LoginPage} /> {/* 19 */}
          <Route path="/login/signUp" component={LoginSignUpPage} /> {/* ? */}
          <Route path="/login/clause" component={LoginClausePage} /> {/* 21 */}
          {/* 테마 */}
          <Route exact path="/theme/:name" component={ThemeDetailPage} /> {/* 4 */}
          <Route path="/theme/:name/analysis" component={ThemeAnalysisPage} /> {/* ? */}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default RootPage;
