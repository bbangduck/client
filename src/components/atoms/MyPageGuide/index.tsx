import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  content: string;
}
const MyPageGuide = ({ content }: Props): ReactElement => {
  return <S.PTag>{content}</S.PTag>;
};

export default MyPageGuide;
