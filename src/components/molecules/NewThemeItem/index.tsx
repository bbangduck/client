import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  image: string;
}
const NewThemeItem = ({ image }: Props): ReactElement => {
  return (
    <S.Li data-blink="cover">
      <S.ImgBox src={image} data-blink="cover" />
      <S.H3 data-blink="cover">[강남] 어느겨울밤</S.H3>
      <S.PTag data-blink="cover">제로월드 강남점</S.PTag>
    </S.Li>
  );
};

export default NewThemeItem;
