import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import RouteBtn from '../../molecules/RouteBtn';
import * as S from './style';
import theme from '../../../styles/theme';
import right from '../../../assets/images/arrow/right.png';

const darkColor = theme.colors.fontGray[2];
const lightColor = theme.colors.fontGray[0];

const UpdateCenter = (): ReactElement => {
  const history = useHistory();

  return (
    <section>
      <RouteBtn
        content="프로필 변경"
        icon={right}
        color={darkColor}
        fontWeight="bold"
        onClick={() => history.push('/mypage/update')}
      />
      <RouteBtn
        content="개인정보 처리방침"
        icon={right}
        color={darkColor}
        fontWeight="bold"
        onClick={() => history.push('/mypage/update')}
      />
      <RouteBtn
        content="이용약관"
        icon={right}
        color={darkColor}
        fontWeight="bold"
        onClick={() => history.push('/mypage/update')}
      />
      <S.Box>
        <RouteBtn content="로그아웃" color={lightColor} fontWeight="normal" />
        <RouteBtn
          content="회원탈퇴"
          color={lightColor}
          fontWeight="normal"
          onClick={() => history.push('/mypage/update/remove')}
        />
      </S.Box>
    </section>
  );
};

export default UpdateCenter;
