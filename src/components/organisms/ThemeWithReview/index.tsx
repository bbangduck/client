import React, { ReactElement } from 'react';
import ThumbNail from '../../molecules/ThumbNail';
import poster from '../../../assets/images/test/poster.jpg';
import poster2 from '../../../assets/images/test/me.jpg';
import * as S from './style';

const ThemeWithReview = (): ReactElement => {
  return (
    <S.Section>
      <S.H2>리뷰 가득 테마</S.H2>
      <S.Ul>
        <ThumbNail image={poster} />
        <ThumbNail image={poster2} />
      </S.Ul>
    </S.Section>
  );
};

export default ThemeWithReview;
