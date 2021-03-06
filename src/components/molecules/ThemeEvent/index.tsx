import React, { ReactElement } from 'react';
import ThemeGuide from '../../atoms/ThemeGuide';
import MyPageSubTitle from '../MyPageSubTitle';
import redMark from '../../../assets/images/pointmark/redPoint.svg';
import * as S from './style';

interface Props {
  event?: string;
  isRef: React.MutableRefObject<HTMLElement | null>;
}
const ThemeEvent = ({ event, isRef }: Props): ReactElement => {
  return (
    <S.Section ref={isRef}>
      <MyPageSubTitle content="진행중 이벤트" />
      {event ? (
        <>
          <S.PTag>{event}</S.PTag>
          <ThemeGuide
            pointMark={redMark}
            content="회원카드/신분증 지참시 가능"
            subContent="현금 할인 외 다른 할인과 중복 할인 불가"
            bgColor="#fff0ef"
            color="#f5463c"
          />
        </>
      ) : (
        <S.EmptyBox>
          <S.Empty>진행중인 이벤트가 없습니다.</S.Empty>
        </S.EmptyBox>
      )}
    </S.Section>
  );
};

export default React.memo(ThemeEvent);
