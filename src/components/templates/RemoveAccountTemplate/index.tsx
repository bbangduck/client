import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import BottomBtn from '../../atoms/BottomBtn';
import RemoveContent from '../../molecules/RemoveContent';
import UpdateHeader from '../../molecules/UpdateHeader';
import * as S from './style';

const RemoveAccountTemplate = (): ReactElement => {
  const history = useHistory();

  const onNextClick = () => {
    history.push('/mypage/removeAccount/2');
  };

  return (
    <S.Container>
      <UpdateHeader content="회원탈퇴" />
      <RemoveContent />
      <BottomBtn content="다음" onClick={onNextClick} />
    </S.Container>
  );
};

export default RemoveAccountTemplate;
