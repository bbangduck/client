import React, { ReactElement } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import BottomBtn from '../../atoms/BottomBtn';
import RemoveContent from '../../molecules/RemoveContent';
import UpdateHeader from '../../molecules/UpdateHeader';
import left from '../../../assets/images/arrow/left.png';
import * as S from './style';
import userCheck from '../../../utils/userCheck';

const RemoveAccountTemplate = (): ReactElement => {
  const history = useHistory();

  const onNextClick = () => {
    history.push('/mypage/removeAccount/2');
  };

  if (!userCheck()) return <Redirect to="/" />;
  return (
    <S.Container>
      <UpdateHeader content="회원탈퇴" arrow={left} />
      <RemoveContent />
      <BottomBtn content="다음" onClick={onNextClick} />
    </S.Container>
  );
};

export default RemoveAccountTemplate;
