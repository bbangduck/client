import React, { ReactElement } from 'react';
import useGetThemeDetail from '../../../swr/useGetThemeDetail';
import Loading from '../../atoms/Loading';
import MyPageSubTitle from '../MyPageSubTitle';
import * as S from './style';

interface Props {
  isRef: React.MutableRefObject<HTMLElement | null>;
  themeId: string;
}
const ThemeExplain = ({ isRef, themeId }: Props): ReactElement => {
  const { data, loading } = useGetThemeDetail(themeId);

  const { themeDescription } = data || { themeDescription: '' };

  if (loading) return <Loading />;
  return (
    <S.Section ref={isRef}>
      <MyPageSubTitle content="테마 설명" />
      <S.PTag>{themeDescription}</S.PTag>
    </S.Section>
  );
};

export default ThemeExplain;
