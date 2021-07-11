import React, { ReactElement } from 'react';
import InfoBox from '../../atoms/InfoBox';
import poster from '../../../assets/images/test/poster.jpg';
import * as S from './style';
import useGetThemeDetail from '../../../swr/useGetThemeDetail';
import Loading from '../../atoms/Loading';

interface Props {
  themeId?: string;
}
const ReviewDetailInfo = ({ themeId }: Props): ReactElement => {
  const { data, loading } = useGetThemeDetail(themeId);
  const {
    themeImage,
    themeName,
    shopInfo: { franchiseInfo, areaInfo },
    themeGenres,
  } = data;

  if (loading) return <Loading />;
  return (
    <S.Container>
      <S.ImgBox src={themeImage?.themeImageThumbnailUrl || poster} />
      <div>
        <S.H1>{themeName}</S.H1>
        <S.PTag>
          {franchiseInfo.franchiseName} {areaInfo.areaName}점
        </S.PTag>
        <S.Box>
          {themeGenres?.map((genre) => (
            <InfoBox content={genre.genreName} bgColor="#f4f4f9" color="#151950" marginRight={4} borderRadius={4} />
          ))}
        </S.Box>
      </div>
      <S.Line />
    </S.Container>
  );
};

export default ReviewDetailInfo;
