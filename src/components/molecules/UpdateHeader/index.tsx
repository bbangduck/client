import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

interface Props {
  content?: string;
  arrow: string;
  img?: string;
  imgAlt?: string;
  onImgClick?: () => void;
}
const UpdateHeader = ({ content, arrow, img, imgAlt, onImgClick }: Props): ReactElement => {
  const history = useHistory();

  const onImgClickHandeler = () => {
    if (onImgClick) onImgClick();
  };

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
      {img ? <S.Img src={img} alt={imgAlt} onClick={onImgClickHandeler} /> : null}
    </S.Header>
  );
};

export default UpdateHeader;
