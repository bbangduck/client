import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';
import iconx1 from '../../../assets/images/gear/gear.png';

const SetupBtn = (): ReactElement => {
  const history = useHistory();

  const onSetupClick = () => {
    history.push('/mypage/update');
  };

  return (
    <S.Container onClick={onSetupClick} data-blink="blink">
      <S.Icon src={iconx1} alt="setupIcon" data-blink="blink" />
      <S.SpanTag data-blink="blink">설정</S.SpanTag>
    </S.Container>
  );
};

export default SetupBtn;
