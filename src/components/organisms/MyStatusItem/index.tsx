import React, { ReactElement } from 'react';
import StatusItemTop from '../../molecules/StatusItemTop';
import StatusItemCenter from '../../molecules/StatusItemCenter';
import StatusItemBottom from '../../molecules/StatusItemBottom';
import * as S from './style';

interface Props {
  idNumber: number;
  date: string;
  detailExist: boolean;
  title: string;
  location: string;
  star: number;
  time: string;
  onUpdate: () => void;
}
const MyStatusItem = ({ idNumber, date, detailExist, title, location, star, time, onUpdate }: Props): ReactElement => {
  return (
    <S.Li>
      <StatusItemTop idNumber={idNumber} date={date} onUpdate={onUpdate} />
      <StatusItemCenter detailExist={detailExist} title={title} location={location} star={star} time={time} hint={2} />
      {detailExist ? <StatusItemBottom /> : null}
    </S.Li>
  );
};
export default MyStatusItem;
