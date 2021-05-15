import React, { ReactElement } from 'react';
import * as S from './style';
import starIcon from '../../../assets/images/star/star.png';

interface Props {
  star: number;
}
const StarBox = ({ star }: Props): ReactElement => {
  return (
    <S.Like>
      <S.Img src={starIcon} alt="인기점수" />
      <S.Span>{star}</S.Span>
    </S.Like>
  );
};

export default StarBox;
