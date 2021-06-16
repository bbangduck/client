import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  title: string;
  titleColor: string;
  address: string;
  themeAccount: number;
  boxColor: string;
  boxBgColor: string;
  addressColor: string;
  themeColor: string;
  themeCountColor: string;
  borderColor: string;
  marginBottom?: number;
}
const PickItem = ({
  title,
  titleColor,
  address,
  themeAccount,
  boxColor,
  boxBgColor,
  addressColor,
  themeColor,
  themeCountColor,
  borderColor,
  marginBottom,
}: Props): ReactElement => {
  return (
    <S.Li borderColor={borderColor} marginBottom={marginBottom}>
      <S.PTag color={titleColor}>{title}</S.PTag>
      <S.Span color={addressColor}>{address}</S.Span>
      <div>
        <S.Span color={themeColor}>
          보유테마<S.Span2 color={themeCountColor}>&nbsp;&nbsp;&nbsp;{themeAccount}</S.Span2>개
        </S.Span>
      </div>
      <S.MoreBox color={boxColor} bgColor={boxBgColor} data-blink="blink">
        More
      </S.MoreBox>
    </S.Li>
  );
};

export default PickItem;
