import React, { ReactElement } from 'react';
import MyStatusItem from '../MyStatusItem';
import * as S from './style';

const example = [
  {
    id: 1,
    date: '2020년 2월 1일',
    title: '[제로월드 강남] 검은사원',
    location: '제로월드 강남점',
    star: 2,
    time: '56:32:11',
    detailExist: true,
  },
  {
    id: 2,
    date: '2020년 2월 1일',
    title: '[제로월드 강남] 검은사원',
    location: '제로월드 강남점',
    star: 2,
    time: '56:32:11',
    detailExist: true,
  },
  {
    id: 3,
    date: '2020년 2월 1일',
    title: '[제로월드 강남] 검은사원',
    location: '제로월드 강남점',
    star: 2,
    time: '56:32:11',
    detailExist: true,
  },
  {
    id: 4,
    date: '2020년 2월 1일',
    title: '[제로월드 강남] 검은사원',
    location: '제로월드 강남점',
    star: 2,
    time: '56:32:11',
    detailExist: false,
  },
];
const MypageStatusList = (): ReactElement => {
  return (
    <S.Ul>
      {example.map((item) => (
        <MyStatusItem
          key={item.id}
          idNumber={item.id}
          date={item.date}
          detailExist={item.detailExist}
          title={item.title}
          location={item.location}
          star={item.star}
          time={item.time}
        />
      ))}
    </S.Ul>
  );
};

export default MypageStatusList;
