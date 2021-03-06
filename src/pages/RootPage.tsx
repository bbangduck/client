import React, { ReactElement } from 'react';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import TestComponent from '../components/TestComponent/TestComponent';

const Loading = loadable(() => import('../components/atoms/Loading'));
const isLoading = { fallback: <Loading /> };

const MainPage = loadable(() => import('./main/MainPage'), isLoading);
const SearchPage = loadable(() => import('./main/SearchPage'), isLoading);
const SearchListPage = loadable(() => import('./main/SearchListPage'), isLoading);
const MyPage = loadable(() => import('./myPages/MyPages'), isLoading);
const Page404 = loadable(() => import('./404/Page404'), isLoading);
const StatusPage = loadable(() => import('./myPages/mypage/StatusPage'), isLoading);
const MyTendencyPage = loadable(() => import('./myPages/mypage/MyTendencyPage'), isLoading);
const BedgePage = loadable(() => import('./myPages/mypage/BedgePage'), isLoading);
const NoticePage = loadable(() => import('./myPages/mypage/NoticePage'), isLoading);
const NoticePage2 = loadable(() => import('./myPages/mypage/NoticePage2'), isLoading);
const UpdatePage = loadable(() => import('./myPages/update/UpdatePage'), isLoading);
const ProfilePage = loadable(() => import('./myPages/update/ProfilePage'), isLoading);
const PolicyPage = loadable(() => import('./myPages/update/PolicyPage'), isLoading);
const ClausePage = loadable(() => import('./myPages/update/ClausePage'), isLoading);
const MyThemesPage = loadable(() => import('./myPages/mypage/MyThemesPage'), isLoading);
const MyFriendsPage = loadable(() => import('./myPages/mypage/MyFriendsPage'), isLoading);
const RemoveAccountPage = loadable(() => import('./myPages/update/RemoveAccountPage'), isLoading);
const RemoveAccountPage2 = loadable(() => import('./myPages/update/RemoveAccountPage2'), isLoading);
const LoginPage = loadable(() => import('./login/LoginPage'), isLoading);
const SignUpClausePage = loadable(() => import('./login/SignUpClausePage'), isLoading);
const SignUpEmailPage = loadable(() => import('./login/SignUpEmailPage'), isLoading);
const SignUpNickNamePage = loadable(() => import('./login/SignUpNickNamePage'), isLoading);
const ThemePage = loadable(() => import('./themes/ThemePage'), isLoading);
const ThemeDetailPage = loadable(() => import('./themes/ThemeDetailPage'), isLoading);
const ThemeDetailLocationPage = loadable(() => import('./themes/ThemeDetailLocationPage'), isLoading);
const ThemeReviewPage = loadable(() => import('./themes/ThemeReviewPage'), isLoading);
const ThemeAnalysisPage = loadable(() => import('./themes/ThemeAnalysisPage'), isLoading);
const ThemeSearchFriendPage = loadable(() => import('./themes/ThemeSearchFriendPage'), isLoading);
const ThemeDetailReviewPage = loadable(() => import('./themes/ThemeDetailReviewPage'), isLoading);
const mapPage = loadable(() => import('./map/mapPage'), isLoading);

const RootPage = (): ReactElement => {
  return (
    <Router>
      <CacheSwitch>
        <Route exact path="/" component={() => <Redirect to="/home" />} />
        <Route path="/test" component={TestComponent} />
        {/* ????????? */}
        <CacheRoute exact path="/login" component={LoginPage} when="back" /> {/* 19 */}
        <Route path="/signup/clause" component={SignUpClausePage} /> {/* 21 */}
        <Route path="/signup/email" component={SignUpEmailPage} /> {/* ? */}
        <Route path="/signup/nickname" component={SignUpNickNamePage} /> {/* ? */}
        {/* ??????????????? */}
        <Route path="/home" component={MainPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route path="/search/list" component={SearchListPage} />
        {/* ?????? */}
        <Route exact path="/theme" component={ThemePage} />
        <Route exact path="/theme/:themeId" component={ThemeDetailPage} /> {/* 4 */}
        <Route path="/theme/:themeId/friends" component={ThemeSearchFriendPage} />
        <Route exact path="/theme/:themeId/review" component={ThemeReviewPage} />
        <Route path="/theme/:themeId/reviewDetail" component={ThemeDetailReviewPage} /> {/* ? */}
        <Route path="/theme/:themeId/location" component={ThemeDetailLocationPage} /> {/* ? */}
        <Route path="/theme/:themeId/analysis" component={ThemeAnalysisPage} /> {/* ? */}
        {/* ?????? */}
        <Route exact path="/map" component={mapPage} /> {/* ? */}
        {/* ??????????????? */}
        <Route exact path="/mypage" component={MyPage} /> {/* 11 */}
        <Route path="/mypage/status" component={StatusPage} /> {/* 22 */}
        <Route path="/mypage/tendency" component={MyTendencyPage} /> {/* 23 */}
        <Route path="/mypage/bedges" component={BedgePage} /> {/* 24 */}
        <Route path="/mypage/themes" component={MyThemesPage} /> {/* ? */}
        <Route path="/mypage/friends" component={MyFriendsPage} /> {/* ? */}
        {/* ??????????????? ???????????? */}
        <Route exact path="/mypage/notice" component={NoticePage} /> {/* 25 */}
        <Route exact path="/mypage/notice/:number" component={NoticePage2} /> {/* 26 */}
        {/* ??????????????? ?????? */}
        <Route path="/mypage/update" component={UpdatePage} /> {/* 15 */}
        <Route path="/mypage/profile" component={ProfilePage} /> {/* 14 */}
        <Route path="/mypage/policy" component={PolicyPage} /> {/* 16 */}
        <Route path="/mypage/clause" component={ClausePage} /> {/* 17 */}
        <Route exact path="/mypage/removeAccounts" component={RemoveAccountPage} /> {/* 18 */}
        <Route path="/mypage/removeAccount" component={RemoveAccountPage2} /> {/* ? */}
        {/* ??????????????? */}
        <Route path="/error" component={Page404} />
        <Route path="*" component={Page404} />
      </CacheSwitch>
    </Router>
  );
};

export default RootPage;
