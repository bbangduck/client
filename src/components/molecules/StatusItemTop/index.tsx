import React, { ReactElement } from 'react';
import moreIcon from '../../../assets/images/more/more.png';
import * as Styled from './style';

interface Props {
  idNumber: number;
  date: string;
}
const StatusItemTop = ({ idNumber, date }: Props): ReactElement => {
  return (
    <Styled.Container>
      <Styled.LeftBox>
        <Styled.Number>#{idNumber}</Styled.Number>
        <Styled.Date>{date}</Styled.Date>
      </Styled.LeftBox>
      <Styled.Img src={moreIcon} alt="자세히" />
    </Styled.Container>
  );
};

export default StatusItemTop;
