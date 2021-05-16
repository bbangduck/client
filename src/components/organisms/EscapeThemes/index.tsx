import React, { ReactElement } from 'react';
import MyPageSubTitle from '../../molecules/MyPageSubTitle';
import MyPageGuide from '../../atoms/MyPageGuide';
import * as S from './style';

const EscapeThemes = (): ReactElement => {
  const themes = 1;

  return (
    <S.Section item={themes}>
      <MyPageSubTitle content="관심 테마" page="/" item={themes} trueMargin="8px" falseMargin="40px" arrow />
      {themes ? (
        <S.ThemesBox>
          <S.ImgBox>
            <img src="" alt="관심테마 사진" />
          </S.ImgBox>
          <S.ImgBox>
            <img src="" alt="관심테마 사진" />
          </S.ImgBox>
        </S.ThemesBox>
      ) : (
        <MyPageGuide content="관심 테마가 없습니다." />
      )}
    </S.Section>
  );
};

export default EscapeThemes;
