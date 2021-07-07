import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import poster from '../../../assets/images/test/poster.jpg';
import * as S from './style';

interface Props {
  title: string;
  frenchiseName: string;
  shopName: string;
  image?: string | null;
  lastRef?: React.MutableRefObject<HTMLLIElement | null>;
}
const ThumbNail = ({ title, frenchiseName, shopName, image, lastRef }: Props): ReactElement => {
  const history = useHistory();

  return (
    <S.Li data-blink="cover" onClick={() => history.push('/theme/:name')} ref={lastRef}>
      <S.Img src={image || poster} data-blink="cover" />
      <S.PTag data-blink="cover">{title}</S.PTag>
      <S.Span data-blink="cover">
        {frenchiseName} {shopName}
      </S.Span>
    </S.Li>
  );
};

export default ThumbNail;
