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
    <S.Container>
      <S.PTag>
        {title} {number}
      </S.PTag>
      <S.Img src={isShow ? up : down} alt="" onClick={onListShow} />
    </S.Container>
  );
};

export default RequestNumber;
