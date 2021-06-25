import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

interface Props {
  content?: string;
  arrow: string;
  img?: string;
  imgAlt?: string;
  onImgClick?: () => void;
  marginBottom?: string;
}
const UpdateHeader = ({ content, arrow, img, imgAlt, onImgClick, marginBottom }: Props): ReactElement => {
  const history = useHistory();

  const onImgClickHandeler = () => {
    if (onImgClick) onImgClick();
  };

  return (
    <S.Header img={img} marginBottom={marginBottom || '20px'}>
      <S.ImgBox onClick={() => history.goBack()} data-blink="blink">
        <img src={arrow} alt="뒤로가기" data-blink="blink" />
      </S.ImgBox>
      {content ? (
        <S.H1Box>
          <S.H1>{content}</S.H1>
        </S.H1Box>
      ) : null}
      {img ? <S.Img src={img} alt={imgAlt} onClick={onImgClickHandeler} data-blink="blink" /> : null}
    </S.Header>
  );
};

export default UpdateHeader;
