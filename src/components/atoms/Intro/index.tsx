import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  content?: string;
}
const Intro = ({ content }: Props): ReactElement => {
  return (
    <S.Container>
      <S.PTag content={content}>{content || '나의 한마디를 남겨보세요'}</S.PTag>
    </S.Container>
  );
};

export default Intro;
