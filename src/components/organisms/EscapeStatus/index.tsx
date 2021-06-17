import React, { ReactElement } from 'react';
import MyPageSubTitle from '../../molecules/MyPageSubTitle/index';
import EscapeType from '../../molecules/EscapeType';
import door1 from '../../../assets/images/doors/door1.png';
import door2 from '../../../assets/images/doors/door2.png';
import door3 from '../../../assets/images/doors/door3.png';
import * as S from './style';
import useGetUserData from '../../../swr/useGetUserData';
import Loading from '../../atoms/Loding';

const EscapeStatus = (): ReactElement => {
  const { data, loading } = useGetUserData();
  const challengesCount = `${data?.data.roomEscapeStatus.challengesCount}`;
  const successCount = `${data?.data.roomEscapeStatus.successCount}`;
  const failCount = `${data?.data.roomEscapeStatus.failCount}`;

  if (loading) return <Loading />;
  return (
    <S.Section>
      <MyPageSubTitle content="방탈출 현황" page="/mypage/status" trueMargin="12px" falseMargin="12px" arrow />
      <S.ItemBox>
        <EscapeType icon={door1} content="Challenge" count={challengesCount} />
        <EscapeType icon={door2} content="Success" count={successCount} />
        <EscapeType icon={door3} content="Fail" count={failCount} />
      </S.ItemBox>
    </S.Section>
  );
};

export default EscapeStatus;
