import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './MainPage';
import MapPage from './MapPage';
import MyPage from './MyPage';
import MyPageClause from './MypageClause';
import MyPagePolicy from './MyPagePolicy';
import MyPageProfile from './MyPageProfile';
import MyPageUpdate from './MyPageUpdate';
import ThemeReviewPage from './ThemeReviewPage';
import ThemeDetailPage from './ThemeDetailPage';
import ThemePage from './ThemePage';
import MyPageDeleteAccount from './MyPageDeleteAccount';
import MyPageStatus from './MyPageStatus';
import MyPageTendency from './MyPageTendency';
import MyPageAchieve from './MyPageAchieve';
import MyPageTheme from './MyPageTheme';
import MyPageQuestions from './MyPageQuestions';
import MyPageNotice from './MyPageNotice';
import MyPageNoticeDetail from './MyPageNoticeDetail';
import MyPageSignUp from './MyPageSignUp';
import MyPageLastSignUp from './MyPageLastSignUp';

const RootPage = (): ReactElement => {
  return (
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
  );
};

export default RootPage;
