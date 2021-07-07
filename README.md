# 빵덕(BbangDuck , 방탕출 덕후)

<br/>

<img src="https://github.com/bbangduck/client/blob/master/ezgif.com-gif-maker.gif"/>

<br/>

## ! 프로젝트 소개
방탈출 카페는 약 60분가량의 제한시간동안 제한된장소에서 추리 및 단서 발견,퍼즐을 풀어 밀실을 탈출하는 목적으로 생긴 놀이 또는 문화공간입니다.
다양한주제와 테마의 보드게임의 현실판이라고 생각할수 있습니다.

방탈출 카페는 지역마다 다른 주제와 테마를 가지고 운영하고 있으며, 다양한 테마와 장르로 인하여 매니아층을 형성하여 스타일에 맞는 주제를 찾아가며 남녀노소 모두를 만족시킬수 있는 새로운 놀이문화를 형성하였습니다.

빵덕 프로젝트는 흩어져있는 방탈출게임의 정보를 좀더 상세한 주제와 함께 제공할수 있는 플랫폼을 만들고자 합니다.

### <a href="http://13.125.48.96/home">구경하러 가기</a>
<br/>

## ! 빵덕의 목적
빵덕서비스는 업체에서 제공하는 장르와 테마가아닌 사용자가 직접 느낀 장르와 테마를 취합하여 제공할수 있도록 노력합니다.

또한 사용자들이 서로 느낀 정보를 공유하고, 본인만의 능력치를 키워나가며 재미를 느낄수 있는 커뮤니티서비스를  합니다.

<br/>

## ! 프로젝트 기간
2021.04.01 ~ 진행중

<br/>

## ! 구성 팀원 및 기간
### 총 기간) 2021.04.01 ~ 진행중

<ul>
  <li>
    기획자 - 1명
    2021.04.01 ~ 2021.06.01 (세부적 진행중...)
  </li>
  <li>
    디자이너 - 1명
    2021.04.10 ~ 2021.06.01 (세부적 진행중...)
  </li>
  <li>
    프론트엔드 - 1명
    2021.04.10 ~ 진행중...
  </li>
  <li>
    백엔드 - 4명
    2021.04.10 ~ 진행중...
  </li>
</ul>


## ! front-end 사용기술
<ul>
  <li>create-react-app(typescript),</li>
  <li>react-router-dom,</li>
  <li>styled-components,</li>
  <li>redux,</li>
  <li>swr,</li>
  <li>axios,</li>
  <li>atomic-design,</li>
  <li>eslint(airbnb),</li>
  <li>prettier</li>
</ul>

<br/>

## ! 프로젝트 세부 과정

### 1. 초기 설정
- App.tsx 컴포넌트에 반응형 모바일웹뷰를 구성하기위한 초기 layout과 reset css를 적용하였스며, 상태관리 라이브러리 및 provider형식의 분법을 가지고있는 라이브러리를 먼저테스트 적용하였습니다.
``` jsx
const App = (): ReactElement => {
  const swrValue = { errorRetryCount: 1, dedupingInterval: 1000 };

  return (
    <SWRConfig value={swrValue}>
      <Provider store={store}>
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <Layout onClick={clickBlink}>
              <TopAlarm />
              <GlobalStyle />
              <RootPage />
            </Layout>
          </ThemeProvider>
        </HelmetProvider>
      </Provider>
    </SWRConfig>
  );
};
```
<br/>

- 와이어프레임으로 페이지 수와 주제를 파악한 후 페이지를 먼저 나누었습니다.
``` jsx
const RootPage = (): ReactElement => {
  return (
    <Router>
      <CacheSwitch>
        <Route exact path="/" component={() => <Redirect to="/home" />} />
        {/* 로그인 */}
        <CacheRoute exact path="/login" component={LoginPage} when="back" />
        <Route path="/signup/clause" component={SignUpClausePage} />
        <Route path="/signup/email" component={SignUpEmailPage} />
        <Route path="/signup/nickname" component={SignUpNickNamePage} /> 
        {/* 메인페이지 */}
        <Route path="/home" component={MainPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route path="/search/list" component={SearchListPage} />
        {/* 테마 */}
        <Route exact path="/theme" component={ThemePage} />
        <Route exact path="/theme/:name" component={ThemeDetailPage} /> 
        <Route path="/theme/:name/friends" component={ThemeSearchFriendPage} />
        <CacheRoute path="/theme/:name/review" component={ThemeReviewPage} when="forward" /> 
        <Route path="/theme/:name/reviewDetail" component={ThemeDetailReviewPage} /> 
        <Route path="/theme/:name/location" component={ThemeDetailLocationPage} />
        <Route path="/theme/:name/analysis" component={ThemeAnalysisPage} /> 
        {/* 지도 */}
        <Route exact path="/map" component={mapPage} /> 
        {/* 마이페이지 */}
        <Route exact path="/mypage" component={MyPage} /> 
        <Route path="/mypage/status" component={StatusPage} /> 
        <Route path="/mypage/tendency" component={MyTendencyPage} /> 
        <Route path="/mypage/bedges" component={BedgePage} /> 
        <Route path="/mypage/themes" component={MyThemesPage} /> 
        <Route path="/mypage/friends" component={MyFriendsPage} /> 
        {/* 마이페이지 공지사항 */}
        <Route exact path="/mypage/notice" component={NoticePage} />
        <Route exact path="/mypage/notice/:number" component={NoticePage2} /> 
        {/* 마이페이지 설정 */}
        <Route path="/mypage/update" component={UpdatePage} />
        <Route path="/mypage/profile" component={ProfilePage} /> 
        <Route path="/mypage/policy" component={PolicyPage} /> 
        <Route path="/mypage/clause" component={ClausePage} /> 
        <Route exact path="/mypage/removeAccounts" component={RemoveAccountPage} /> 
        <Route path="/mypage/removeAccount" component={RemoveAccountPage2} /> 
        {/* 에러페이지 */}
        <Route path="/error" component={Page404} />
        <Route path="*" component={Page404} />
      </CacheSwitch>
    </Router>
  );
};
```
<br/>

### 2. 재사용성을 고려한 커스텀 훅
- 모달창의 바깥화면을 클릭시 close될 수 있는 반복이 필요한 로직을 커스텀 훅으로 구현하였습니다.
```jsx
import { useState, useRef, useEffect } from 'react';

export const useClickOutside = (
  initialValue: boolean,
): [
  React.MutableRefObject<HTMLDivElement | null>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
] => {
  const visibleContentRef = useRef<null | HTMLDivElement>(null);
  const [modalOn, setModalOn] = useState<boolean>(initialValue);

  useEffect(() => {
    if (modalOn) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'initial';
    }
  }, [modalOn]);

  const clickOutside = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      e.target instanceof HTMLDivElement &&
      visibleContentRef.current &&
      !visibleContentRef.current.contains(e.target) &&
      setModalOn
    ) {
      setModalOn(false);
    }
  };

  return [visibleContentRef, modalOn, setModalOn, clickOutside];
};
```
<br/>

### 3. swr 커스텀 훅 사용
- 자주 사용하게되는 조회기능은 변경시에 한번에 변경하기위하여 공통 커스텀훅으로 사용하였습니다.
```jsx
export const useGetUserData = (): {
  data: UserDataType | undefined;
  error: any;
  loading: boolean;
  mutate: (data?: UserDataType, shouldRevalidate?: boolean | undefined) => Promise<UserDataType>;
  errorStatus?: number | undefined;
} => {
  const memberId = sessionStorage.getItem('bbangUserId');
  const [popAlarm] = usePopAlarm();
  const { data, error, mutate, isValidating } = useSWR(
    `${process.env.REACT_APP_URL}/api/members/${memberId}/profiles`,
    memberId ? fetcher : null,
  );
  if (error && error?.response?.status === 403) popAlarm('탈퇴한 회원은 재가입이 불가능합니다.');

  return {
    data,
    error,
    loading: isValidating,
    mutate,
    errorStatus: error?.response?.status,
  };
};

export default useGetUserData;
```
### 진행상황
- 현재 진행중...
- 퍼블리싱 완료
- 마이페이지, 회원가입, 카카오로그인 서버통신 가능
