import React, { ReactElement, useState } from 'react';
import * as S from './style';
import unCheckedCircle from '../../../assets/images/check/unCheckedCircle.png';
import checkedCircle from '../../../assets/images/check/checkedCircle.png';

const CareerOn = (): ReactElement => {
  const [careerOpenList, setCareerOpenList] = useState([
    { id: 1, content: '전체 공개', img: unCheckedCircle },
    { id: 2, content: '친구에게만 공개', img: unCheckedCircle },
    { id: 3, content: '나만 보기', img: unCheckedCircle },
  ]);

  const onCheck = (checkedId: number) => {
    setCareerOpenList((prev) => {
      return prev.map((openItem) => {
        if (openItem.id === checkedId) {
          return { ...openItem, img: checkedCircle };
        }
        return { ...openItem, img: unCheckedCircle };
      });
    });
  };

  return (
    <S.Container>
      <S.H2>방탈출 기록 공개</S.H2>
      <ul>
        {careerOpenList.map((item) => {
          return (
            <S.Li key={item.id} onClick={() => onCheck(item.id)} data-blink="blink">
              <S.PTag data-blink="blink">{item.content}</S.PTag>
              <img src={item.img} alt={item.content} data-blink="blink" />
            </S.Li>
          );
        })}
      </ul>
    </S.Container>
  );
};

export default CareerOn;
