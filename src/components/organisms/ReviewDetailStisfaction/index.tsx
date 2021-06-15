import React, { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, ReducerType } from '../../../stores/rootReducer';
import { interiorCheckBox, interiorCheckBoxReducer } from '../../../stores/ThemeReviewReducer/interiorBox';
import { problemCheckBox, problemCheckBoxReducer } from '../../../stores/ThemeReviewReducer/problemBox';
import { scenarioCheckBox, scenarioCheckBoxReducer } from '../../../stores/ThemeReviewReducer/scenarioBox';
import * as S from './style';

const ReviewDetailStisfaction = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const scenarioList = useSelector<ReducerType, typeof scenarioCheckBox>((state) => state.scenarioBox);
  const interiorList = useSelector<ReducerType, typeof interiorCheckBox>((state) => state.interiorBox);
  const problemList = useSelector<ReducerType, typeof problemCheckBox>((state) => state.problemBox);

  return (
    <div>
      <S.Title>[빵덕]님의 테마만족도 조사</S.Title>
      <S.SubTitle>시나리오 만족도</S.SubTitle>
      <S.Box>
        {scenarioList.map((box) => (
          <S.CheckBox key={box.id} clicked={box.clicked} onClick={() => dispatch(scenarioCheckBoxReducer(box.id))}>
            {box.content}
          </S.CheckBox>
        ))}
      </S.Box>
      <S.SubTitle>인테리어 만족도</S.SubTitle>
      <S.Box>
        {interiorList.map((box) => (
          <S.CheckBox key={box.id} clicked={box.clicked} onClick={() => dispatch(interiorCheckBoxReducer(box.id))}>
            {box.content}
          </S.CheckBox>
        ))}
      </S.Box>
      <S.SubTitle>문제구성 만족도</S.SubTitle>
      <S.Box>
        {problemList.map((box) => (
          <S.CheckBox key={box.id} clicked={box.clicked} onClick={() => dispatch(problemCheckBoxReducer(box.id))}>
            {box.content}
          </S.CheckBox>
        ))}
      </S.Box>
    </div>
  );
};

export default ReviewDetailStisfaction;
