import React, { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, ReducerType } from '../../../stores/rootReducer';
import { themeKindCheckBox, themeKindCheckBoxReducer } from '../../../stores/ThemeReviewReducer/themeKind';
import * as S from './style';

const ReviewDetailThemeKind = (): ReactElement => {
  const dispatch = useDispatch<AppDispatch>();
  const themeKindBox = useSelector<ReducerType, typeof themeKindCheckBox>((state) => state.themeKindBox);

  return (
    <S.Container>
      <S.Title>테마에 대한 질문</S.Title>
      <S.SubTitle>어떤 테마였나요?</S.SubTitle>
      <S.FlexBox>
        {themeKindBox.map((box) => (
          <S.Box key={box.id} clicked={box.clicked} onClick={() => dispatch(themeKindCheckBoxReducer(box.id))}>
            {box.content}
          </S.Box>
        ))}
      </S.FlexBox>
    </S.Container>
  );
};

export default ReviewDetailThemeKind;
