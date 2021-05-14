import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';
import left from '../../../assets/images/arrow/left.png';

type Props = {
  content?: string;
};
const UpdateHeader = ({ content }: Props): ReactElement => {
  const history = useHistory();

  return (
    <S.Header>
      <S.ImgBox onClick={() => history.goBack()}>
        <img src={left} alt="뒤로가기" />
      </S.ImgBox>
      {content ? (
        <S.H1Box>
          <S.H1>{content}</S.H1>
        </S.H1Box>
      ) : null}
    </S.Header>
  );
};

export default UpdateHeader;
