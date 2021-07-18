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
  pushTo?: string;
}
const UpdateHeader = ({ content, arrow, img, imgAlt, onImgClick, marginBottom, pushTo }: Props): ReactElement => {
  const history = useHistory();

  const onImgClickHandeler = () => {
    if (onImgClick) onImgClick();
  };

  const onBackClick = () => {
    if (pushTo) {
      history.push(pushTo);
    } else {
      history.goBack();
    }
  };

  return (
    <S.Header img={img} marginBottom={marginBottom || '20px'}>
      <S.ImgBox onClick={onBackClick} data-blink="blink">
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
