import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import right from '../../../assets/images/arrow/right.png';
import * as S from './style';

interface Props {
  content: string;
  page: string;
  item?: any;
  trueMargin: string;
  falseMargin: string;
}
const MyPageSubTitle = ({ content, page, item, trueMargin, falseMargin }: Props): ReactElement => {
  const history = useHistory();

  return (
    <S.Container item={item} trueMg={trueMargin} falseMg={falseMargin}>
      <S.H2>{content}</S.H2>
      <S.Img src={right} alt="방탈출 현황 더보기" onClick={() => history.push(page)} />
    </S.Container>
  );
};

export default MyPageSubTitle;