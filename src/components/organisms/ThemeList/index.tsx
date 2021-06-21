import React, { ReactElement } from 'react';
import ThumbNail from '../../molecules/ThumbNail';
import poster from '../../../assets/images/test/poster.jpg';
import poster2 from '../../../assets/images/test/me.jpg';
import * as S from './style';

const ThemeList = (): ReactElement => {
  return (
    <S.Ul>
      <ThumbNail image={poster} />
      <ThumbNail image={poster2} />
      <ThumbNail image={poster2} />
      <ThumbNail image={poster} />
      <ThumbNail image={poster2} />
      <ThumbNail image={poster} />
    </S.Ul>
  );
};

export default ThemeList;
