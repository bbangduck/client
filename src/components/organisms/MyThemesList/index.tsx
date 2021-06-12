import React, { ReactElement } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import BottomModal from '../../molecules/BottomModal';
import MyThemeItem from '../../molecules/MyThemeItem';
import Modal from '../Modal';
import * as S from './style';

const MyThemesList = (): ReactElement => {
  const test = [1, 2, 3, 4, 5];
  const [visibleBottomRef, bottomModalOn, setBottomModalOn, clickBottomOutside] = useClickOutside(false);
  const [visibleFinalModalRef, finalModalOn, setFinalModalOn, clickFinalOutside] = useClickOutside(false);

  const onMoreClick = () => {
    setBottomModalOn(true);
  };

  const onDelete = () => {
    setBottomModalOn(false);
    setFinalModalOn(true);
  };

  const onFinalDelete = () => {
    setFinalModalOn(false);
  };

  return (
    <S.Ul>
      {test.map((num) => (
        <MyThemeItem key={num} onMoreClick={onMoreClick} />
      ))}
      <BottomModal
        title="관심테마"
        secondBtn="삭제하기"
        visibleContentRef={visibleBottomRef}
        clickOutside={clickBottomOutside}
        onDelete={onDelete}
        isOn={bottomModalOn}
      />
      {finalModalOn ? (
        <Modal
          clickOutsideClose={clickFinalOutside}
          modalRef={visibleFinalModalRef}
          setModalState={setFinalModalOn}
          title="관심테마 삭제"
          content="정말로 삭제하시겠습니까?"
          btnContent="삭제"
          onSubmitHandeler={onFinalDelete}
        />
      ) : null}
    </S.Ul>
  );
};

export default MyThemesList;
