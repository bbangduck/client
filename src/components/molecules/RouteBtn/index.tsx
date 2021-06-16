import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  content: string;
  icon?: string;
  color: string;
  fontWeight: string;
  onClick?: () => void;
}
const RouteBtn = ({ content, icon, color, fontWeight, onClick }: Props): ReactElement => {
  const onClickHandeler = () => {
    if (onClick) onClick();
  };

  return (
    <S.Container onClick={onClickHandeler} data-blink="blink">
      <S.H2 color={color} fontWeight={fontWeight} data-blink="blink">
        {content}
      </S.H2>
      {icon ? <img src={icon} alt={`${content} 더보기`} data-blink="blink" /> : null}
    </S.Container>
  );
};

export default RouteBtn;
