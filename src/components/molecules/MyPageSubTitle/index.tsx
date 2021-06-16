import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import right from '../../../assets/images/arrow/right.png';
import * as S from './style';

interface Props {
  content: string;
  page?: string;
  item?: any;
  trueMargin?: string;
  falseMargin?: string;
  arrow?: boolean;
}
const MyPageSubTitle = ({ content, page, item, trueMargin, falseMargin, arrow }: Props): ReactElement => {
  const history = useHistory();

  return (
    <S.Container
      item={item}
      trueMg={trueMargin}
      falseMg={falseMargin}
      onClick={() => page && history.push(page)}
      data-blink="blink"
    >
      <S.H2 data-blink="blink">{content}</S.H2>
      {arrow && page && <img src={right} alt="방탈출 현황 더보기" data-blink="blink" />}
    </S.Container>
  );
};

export default MyPageSubTitle;
