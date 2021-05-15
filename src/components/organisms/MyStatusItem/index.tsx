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
}
const MyStatusItem = ({ idNumber, date, detailExist, title, location, star, time }: Props): ReactElement => {
  return (
    <S.Li>
      <StatusItemTop idNumber={idNumber} date={date} />
      <StatusItemCenter detailExist={detailExist} title={title} location={location} star={star} time={time} hint={2} />
      {detailExist ? <StatusItemBottom /> : null}
    </S.Li>
  );
};
export default MyStatusItem;
