import React, { ReactElement } from 'react';
import up from '../../../assets/images/arrow/upDark.png';
import down from '../../../assets/images/arrow/downBig.png';
import * as S from './style';

interface Props {
  title: string;
  number: number;
  onShowClick: () => void;
  isShow: boolean;
}
const RequestNumber = ({ title, number, onShowClick, isShow }: Props): ReactElement => {
  const onListShow = () => {
    onShowClick();
  };

  return (
    <S.Container onClick={onListShow} data-blink="blink">
      <S.PTag data-blink="blink">
        {title} {number}
      </S.PTag>
      <img src={isShow ? up : down} alt="" data-blink="blink" />
    </S.Container>
  );
};

export default RequestNumber;
