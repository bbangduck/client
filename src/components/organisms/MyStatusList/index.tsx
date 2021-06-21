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
// const example: any = null;
const MypageStatusList = (): ReactElement => {
  const [visibleContentRef, modalOn, setModalOn, clickOutside] = useClickOutside(false);
  const [finalVisibleRef, finalModalOn, setFinalModalOn, finalClickOutside] = useClickOutside(false);

  const onMoreBtnClick = () => {
    setModalOn(true);
  };

  const onDelete = () => {
    setModalOn(false);
    setFinalModalOn(true);
  };

  const onUpdate = () => {
    console.log('수정하기');
  };

  const onFinalDelete = () => {
    setFinalModalOn(false);
    console.log('삭제');
  };

  return (
    <>
      <S.Ul>
        {example ? (
          example.map((item: any) => (
            <MyStatusItem
              key={item.id}
              idNumber={item.id}
              date={item.date}
              detailExist={item.detailExist}
              title={item.title}
              location={item.location}
              star={item.star}
              time={item.time}
              onUpdate={onMoreBtnClick}
            />
          ))
        ) : (
          <S.PTag>
            내 방탈출 내역이 없습니다.
            <br /> 리뷰를 작성하고 내 방탈출에 추가해보세요
          </S.PTag>
        )}
      </S.Ul>
      <BottomModal
        title="내 방탈출"
        firstBtn="수정하기"
        onFirstClick={onUpdate}
        lastBtn="삭제하기"
        onLastClick={onDelete}
        visibleContentRef={visibleContentRef}
        clickOutside={clickOutside}
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
    </>
  );
};

export default MypageStatusList;
