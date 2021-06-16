import React, { ReactElement } from 'react';
import moreIcon from '../../../assets/images/more/more.png';
import * as Styled from './style';

interface Props {
  idNumber: number;
  date: string;
  onUpdate: () => void;
}
const StatusItemTop = ({ idNumber, date, onUpdate }: Props): ReactElement => {
  const onUpdateClick = () => {
    onUpdate();
  };

  return (
    <Styled.Container>
      <Styled.LeftBox>
        <Styled.Number>#{idNumber}</Styled.Number>
        <Styled.Date>{date}</Styled.Date>
      </Styled.LeftBox>
      <Styled.Img src={moreIcon} alt="자세히" onClick={onUpdateClick} data-blink="blink" />
    </Styled.Container>
  );
};

export default StatusItemTop;
