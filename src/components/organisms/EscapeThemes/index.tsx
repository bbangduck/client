import React, { ReactElement } from 'react';
import MyPageSubTitle from '../../molecules/MyPageSubTitle';
import MyPageGuide from '../../atoms/MyPageGuide';
import poster from '../../../assets/images/test/poster.jpg';
import * as S from './style';

const EscapeThemes = (): ReactElement => {
  const themes = 10;

  return (
    <S.Section item={themes}>
      <MyPageSubTitle content="관심 테마" page="/mypage/themes" item trueMargin="8px" falseMargin="40px" arrow />
      {themes ? (
        <S.ThemesBox>
          <S.ImgBox>
            <S.Img src={poster} alt="관심테마 사진" />
          </S.ImgBox>
          <S.ImgBox>
            <S.Img src="" alt="관심테마 사진" />
          </S.ImgBox>
        </S.ThemesBox>
      ) : (
        <MyPageGuide content="관심 테마가 없습니다." />
      )}
    </S.Section>
  );
};

export default EscapeThemes;
