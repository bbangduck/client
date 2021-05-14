import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';
import iconx1 from '../../../assets/images/gear/gear.png';

const SetupBtn = (): ReactElement => {
  const history = useHistory();

  const onSetupClick = () => {
    history.push('');
  };

  return (
    <S.Container onClick={onSetupClick}>
      <S.Icon src={iconx1} alt="setupIcon" />
      <S.SpanTag>설정</S.SpanTag>
    </S.Container>
  );
};

export default SetupBtn;
