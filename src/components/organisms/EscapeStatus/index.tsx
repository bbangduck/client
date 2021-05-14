import React, { ReactElement } from 'react';
import MyPageSubTitle from '../../molecules/MyPageSubTitle/index';
import EscapeType from '../../molecules/EscapeType';
import door1 from '../../../assets/images/doors/door1.png';
import door2 from '../../../assets/images/doors/door2.png';
import door3 from '../../../assets/images/doors/door3.png';
import * as S from './style';

const EscapeStatus = (): ReactElement => {
  const challengeCount = 150;
  const SuccessCount = 96;
  const failCount = 44;

  return (
    <S.Section>
      <MyPageSubTitle content="방탈출 현황" page="/" trueMargin="12px" falseMargin="12px" />
      <S.ItemBox>
        <EscapeType icon={door1} content="Challenge" count={challengeCount} />
        <EscapeType icon={door2} content="Success" count={SuccessCount} />
        <EscapeType icon={door3} content="Fail" count={failCount} />
      </S.ItemBox>
    </S.Section>
  );
};

export default EscapeStatus;
