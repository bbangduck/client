# client

## 설치한 라이브러리 종류

create-react-app(typescript),
axios,
swr,
react-router-dom,
styled-components,
styled-reset
dotenv

## 폴더트리 구조

components,
hooks,
pages,
styles,
utils

### components 폴더

1. components폴더안에 component폴더로 다시 나눠집니다.
2. 컴포넌트 폴더명과 파일명은 대문자로 시작합니다.
3. 컴포넌트 파일은 tsx, 스타일파일은 ts로 구분하였습니다.
4. 스타일태그와 컴포넌트태그를 구분하기 쉽게 ( ex: import \* as Styled from "./TestComponent.style" ) 하였습니다.

### pages 폴더

react-router-dom을 사용하여 첫 페이지들을 담은 폴더입니다.

### styles 폴더

globalStyle과 theme파일을 담은 파일입니다.

### env

배포시에 env파일에 배포주소를 적어서 axios url을 바꿀수있습니다.

### commit 메시지 작성규칙

1. Feature : 신규기능
2. Style : 스타일/css 관련
3. Test : test
4. Fix : 기능 오류수정
