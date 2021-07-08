import React, { ReactElement } from 'react';
import useSWR from 'swr';
import ProfileImg from '../../atoms/ProfileImg';
import defaultImg from '../../../assets/images/profile/profile.png';
import * as S from './style';
import fetcherWithoutToken from '../../../utils/fetcherWithoutToken';

interface Props {
  themeId: string;
}
const PlayedPeople = ({ themeId }: Props): ReactElement => {
  const { data } = useSWR(
    `/api/themes/${themeId}/reviews?pageNum=1&amount=3&sortCondition=LATEST`,
    fetcherWithoutToken,
  );
  const image1 = data.contents?.[0]?.writerInfo.profileImageThumbnailUrl;
  const image2 = data.contents?.[1]?.writerInfo.profileImageThumbnailUrl;
  const image3 = data.contents?.[2]?.writerInfo.profileImageThumbnailUrl;

  return (
    <S.Container>
      <S.Images>
        <ProfileImg image={image1 || defaultImg} width={40} height={40} />
        <S.ImgBox2>
          <ProfileImg image={image2 || defaultImg} width={40} height={40} />
        </S.ImgBox2>
        <S.ImgBox3>
          <ProfileImg image={image3 || defaultImg} width={40} height={40} />
        </S.ImgBox3>
      </S.Images>
      <S.PTag>
        &quot;<S.Span>40명</S.Span>의 빵덕이 플레이했어요&quot;
      </S.PTag>
    </S.Container>
  );
};

export default PlayedPeople;
