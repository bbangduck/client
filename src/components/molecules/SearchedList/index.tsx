import React, { ReactElement } from 'react';
import InfoBox from '../../atoms/InfoBox';
import * as S from './style';

interface Props {
  title: string;
}
const SearchedList = ({ title }: Props): ReactElement => {
  return (
    <div>
      <S.PTag>{title}</S.PTag>
      <S.Ul>
        <InfoBox content="공포" bgColor="#404041" color="#959595" marginRight={8} marginBottom={10} />
        <InfoBox content="공포테마" bgColor="#404041" color="#959595" marginRight={8} marginBottom={10} />
      </S.Ul>
    </div>
  );
};

export default SearchedList;
