import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import poster from '../../../assets/images/test/poster.jpg';
import * as S from './style';

const ThumbNail = (): ReactElement => {
  const history = useHistory();

  return (
    <S.Li data-blink="cover" onClick={() => history.push('/theme/:name')}>
      <S.Img src={poster} data-blink="cover" />
      <S.PTag data-blink="cover">검은 사원</S.PTag>
      <S.Span data-blink="cover">제로월드 강남점</S.Span>
    </S.Li>
  );
};

export default ThumbNail;
