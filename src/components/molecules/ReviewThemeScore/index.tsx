/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useState, useEffect } from 'react';
import defaultStar from '../../../assets/images/star/grayStar.svg';
import blackStar from '../../../assets/images/star/blackStar.svg';
import * as S from './style';

interface Props {
  setScoreState: React.Dispatch<React.SetStateAction<number>>;
}
const ReviewThemeScore = ({ setScoreState }: Props): ReactElement => {
  const [starList, setStarList] = useState([
    { id: 1, clicked: false, isClicked: false },
    { id: 2, clicked: false },
    { id: 3, clicked: false },
    { id: 4, clicked: false },
    { id: 5, clicked: false },
  ]);

  const onTest = (id: number) => {
    setStarList((prev) =>
      prev.map((item) => {
        if (item.id <= id) {
          if (id === 1) {
            if (item.isClicked) {
              return { ...item, clicked: false, isClicked: false };
            }
            return { ...item, clicked: true, isClicked: true };
          }
          return { ...item, clicked: true, isClicked: false };
        }
        return { ...item, clicked: false };
      }),
    );
  };

  useEffect(() => {
    starList.forEach((star) => {
      if (star.clicked) {
        if (!starList[star.id]) {
          setScoreState(5);
        } else if (!starList[star.id].clicked) {
          setScoreState(star.id);
        }
      } else if (star.id === 1) {
        setScoreState(0);
      }
    });
  }, [starList]);

  return (
    <S.Container>
      <S.PTag>테마의 평점은?</S.PTag>
      <S.Box>
        {starList.map((item) => (
          <S.Img
            key={item.id}
            src={item.clicked ? blackStar : defaultStar}
            alt="평점"
            onClick={() => onTest(item.id)}
          />
        ))}
      </S.Box>
    </S.Container>
  );
};

export default React.memo(ReviewThemeScore);
