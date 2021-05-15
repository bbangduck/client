import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

type Props = {
  content?: string;
  img?: string;
  arrow: string;
};
const UpdateHeader = ({ content, img, arrow }: Props): ReactElement => {
  const history = useHistory();

  return (
    <S.Header img={img}>
      <S.ImgBox onClick={() => history.goBack()}>
        <img src={arrow} alt="뒤로가기" />
      </S.ImgBox>
      {content ? (
        <S.H1Box>
          <S.H1>{content}</S.H1>
        </S.H1Box>
      ) : null}
      {img ? <S.Img src={img} alt="더보기" /> : null}
    </S.Header>
  );
};

export default UpdateHeader;
