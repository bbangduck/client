import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './main/MainPage';
import MapPage from './map/MapPage';
import MyPage from './myPages/MyPage';
import MyPageClause from './myPages/update/MypageClause';
import MyPagePolicy from './myPages/update/MyPagePolicy';
import MyPageProfile from './myPages/mypage/MyPageProfile';
import MyPageUpdate from './myPages/update/MyPageUpdate';
import ThemeReviewPage from './theme/ThemeReviewPage';
import ThemeDetailPage from './theme/ThemeDetailPage';
import ThemePage from './theme/ThemePage';
import MyPageDeleteAccount from './myPages/update/MyPageDeleteAccount';
import MyPageStatus from './myPages/mypage/MyPageStatus';
import MyPageTendency from './myPages/mypage/MyPageTendency';
import MyPageAchieve from './myPages/mypage/MyPageAchieve';
import MyPageTheme from './myPages/mypage/MyPageTheme';
import MyPageQuestions from './myPages/mypage/MyPageQuestions';
import MyPageNotice from './myPages/notice/MyPageNotice';
import MyPageNoticeDetail from './myPages/notice/MyPageNoticeDetail';
import MyPageSignUp from './myPages/auth/MyPageSignUp';
import MyPageLastSignUp from './myPages/auth/MyPageLastSignUp';

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
