import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

interface Props {
  image?: string;
}
const ThumbNail = ({ image }: Props): ReactElement => {
  const history = useHistory();

  return (
    <S.Li data-blink="cover" onClick={() => history.push('/theme/:name')}>
      <S.Img src={image} data-blink="cover" />
      <S.PTag data-blink="cover">검은 사원</S.PTag>
      <S.Span data-blink="cover">제로월드 강남점</S.Span>
    </S.Li>
  );
};

export default ThumbNail;
