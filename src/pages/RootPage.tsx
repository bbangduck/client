import React, { ReactElement, Suspense } from 'react';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from '../components/TestComponent/TestComponent';

const MyPage = loadable(() => import('./myPages/MyPage'));
const Page404 = loadable(() => import('./404/Page404'));
const StatusPage = loadable(() => import('./myPages/mypage/StatusPage'));
const BedgePage = loadable(() => import('./myPages/mypage/BedgePage'));
const NoticePage = loadable(() => import('./myPages/mypage/NoticePage'));
const NoticePage2 = loadable(() => import('./myPages/mypage/NoticePage2'));
const UpdatePage = loadable(() => import('./myPages/update/UpdatePage'));
const ProfilePage = loadable(() => import('./myPages/update/ProfilePage'));
const PolicyPage = loadable(() => import('./myPages/update/PolicyPage'));
const ClausePage = loadable(() => import('./myPages/update/ClausePage'));
const RemoveAccountPage = loadable(() => import('./myPages/update/RemoveAccountPage'));
const RemoveAccountPage2 = loadable(() => import('./myPages/update/RemoveAccountPage2'));
const LoginPage = loadable(() => import('./login/LoginPage'));
const LoginSignUpPage = loadable(() => import('./login/LoginSignUpPage'));
const LoginClausePage = loadable(() => import('./login/LoginClausePage'));
const ThemeDetailPage = loadable(() => import('./themes/ThemeDetailPage'));
const ThemeAnalysisPage = loadable(() => import('./themes/ThemeAnalysisPage'));

const RootPage = (): ReactElement => {
  return (
    <Suspense fallback={<p>로딩중...</p>}>
      <Router>
        <Switch>
          <Route exact path="/" component={TestComponent} />
          <Route exact path="/error" component={Page404} />
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
