import React, { ReactElement, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const MainPage = lazy(() => import('./main/MainPage'));
const MapPage = lazy(() => import('./map/MapPage'));
const MyPage = lazy(() => import('./myPages/MyPage'));
const MyPageClause = lazy(() => import('./myPages/update/MypageClause'));
const MyPagePolicy = lazy(() => import('./myPages/update/MyPagePolicy'));
const MyPageProfile = lazy(() => import('./myPages/mypage/MyPageProfile'));
const MyPageUpdate = lazy(() => import('./myPages/update/MyPageUpdate'));
const ThemeReviewPage = lazy(() => import('./theme/ThemeReviewPage'));
const ThemeDetailPage = lazy(() => import('./theme/ThemeDetailPage'));
const ThemePage = lazy(() => import('./theme/ThemePage'));
const MyPageDeleteAccount = lazy(() => import('./myPages/update/MyPageDeleteAccount'));
const MyPageStatus = lazy(() => import('./myPages/mypage/MyPageStatus'));
const MyPageTendency = lazy(() => import('./myPages/mypage/MyPageTendency'));
const MyPageAchieve = lazy(() => import('./myPages/mypage/MyPageAchieve'));
const MyPageTheme = lazy(() => import('./myPages/mypage/MyPageTheme'));
const MyPageQuestions = lazy(() => import('./myPages/mypage/MyPageQuestions'));
const MyPageNotice = lazy(() => import('./myPages/notice/MyPageNotice'));
const MyPageNoticeDetail = lazy(() => import('./myPages/notice/MyPageNoticeDetail'));
const MyPageSignUp = lazy(() => import('./myPages/auth/MyPageSignUp'));
const MyPageLastSignUp = lazy(() => import('./myPages/auth/MyPageLastSignUp'));

const RootPage = (): ReactElement => {
  return (
    <Suspense fallback={<span>로딩중...</span>}>
      <Router>
        <Switch>
          <Redirect exact path="/" to="/home" />
          {/* 홈 */}
          <Route path="/home" component={MainPage} /> {/* 1 */}
          {/* 테마 */}
          <Route exact path="/theme" component={ThemePage} /> {/* 2 */}
          <Route exact path="/theme/:detail" component={ThemeDetailPage} /> {/* 4 */}
          <Route path="/theme/:detail/review" component={ThemeReviewPage} /> {/* 8 */}
          {/* 지도 */}
          <Route path="/map" component={MapPage} /> {/* 9 */}
          {/* 마이페이지 */}
          <Route exact path="/mypage" component={MyPage} /> {/* 11 */}
          <Route path="/mypage/profile" component={MyPageProfile} /> {/* 14 */}
          <Route path="/mypage/status" component={MyPageStatus} /> {/* 22 */}
          <Route path="/mypage/tendency" component={MyPageTendency} /> {/* 23 */}
          <Route path="/mypage/achieve" component={MyPageAchieve} /> {/* 24 */}
          <Route path="/mypage/mytheme" component={MyPageTheme} /> {/* 28 */}
          <Route path="/mypage/questions" component={MyPageQuestions} /> {/* 27 */}
          {/* 마이페이지 회원가입 */}
          <Route exact path="/mypage/signup" component={MyPageSignUp} /> {/* 20 */}
          <Route path="/mypage/signup/last" component={MyPageLastSignUp} /> {/* 21 */}
          {/* 마이페이지 공지사항 */}
          <Route exact path="/mypage/notice" component={MyPageNotice} /> {/* 25 */}
          <Route path="/mypage/notice/:number" component={MyPageNoticeDetail} /> {/* 26 */}
          {/* 마이페이지 설정 */}
          <Route exact path="/mypage/update" component={MyPageUpdate} /> {/* 15 */}
          <Route path="/mypage/update/policy" component={MyPagePolicy} /> {/* 16 */}
          <Route path="/mypage/update/clause" component={MyPageClause} /> {/* 17 */}
          <Route path="/mypage/update/delete" component={MyPageDeleteAccount} /> {/* 18 */}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default RootPage;
