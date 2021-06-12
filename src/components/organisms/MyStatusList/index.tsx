import React, { ReactElement } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import BottomModal from '../../molecules/BottomModal';
import Modal from '../Modal';
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
  const [visibleContentRef, modalOn, setModalOn, clickOutside] = useClickOutside(false);
  const [finalVisibleRef, finalModalOn, setFinalModalOn, finalClickOutside] = useClickOutside(false);

  const onUpdate = () => {
    setModalOn(true);
  };

  const onDelete = () => {
    setModalOn(false);
    setFinalModalOn(true);
  };

  const onFinalDelete = () => {
    setFinalModalOn(false);
    console.log('삭제');
  };

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
          onUpdate={onUpdate}
        />
      ))}
      <BottomModal
        title="내 방탈출"
        firstBtn="수정하기"
        secondBtn="삭제하기"
        visibleContentRef={visibleContentRef}
        clickOutside={clickOutside}
        onDelete={onDelete}
        isOn={modalOn}
      />
      {finalModalOn ? (
        <Modal
          clickOutsideClose={finalClickOutside}
          modalRef={finalVisibleRef}
          setModalState={setFinalModalOn}
          title="내 방탈출 삭제"
          content="정말로 삭제하시겠습니까?"
          btnContent="삭제"
          onSubmitHandeler={onFinalDelete}
        />
      ) : null}
    </S.Ul>
  );
};

export default MypageStatusList;
