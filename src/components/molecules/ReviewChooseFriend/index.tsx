import React, { ReactElement, useEffect } from 'react';
import minus from '../../../assets/images/minus/minus.png';
import plus from '../../../assets/images/plus/plus.png';
import poster from '../../../assets/images/test/poster.jpg';
import { shortSentence } from '../../../hooks/shortSentence';
import ProfileImg from '../../atoms/ProfileImg';
import * as S from './style';

interface Props {
  setCountState: React.Dispatch<React.SetStateAction<number>>;
  countState: number;
}
const ReviewChooseFriend = ({ setCountState, countState }: Props): ReactElement => {
  const onMinusClick = () => {
    if (countState <= 0) {
      setCountState(0);
    } else {
      setCountState((prev) => prev - 1);
    }
  };

  return (
    <S.Container>
      <S.TitleBox>
        <S.PTag>같이할 친구 (선택)</S.PTag>
        <S.Box>
          <S.CountBox onClick={onMinusClick}>
            <img src={minus} alt="같이할 친구 인원 빼기" />
          </S.CountBox>
          <S.Span>{countState}</S.Span>
          <S.CountBox onClick={() => setCountState((prev) => prev + 1)}>
            <img src={plus} alt="같이할 친구 인원 추가" />
          </S.CountBox>
        </S.Box>
      </S.TitleBox>
      <S.FriendsBox>
        {poster ? (
          <S.ProfileBox>
            <ProfileImg image={poster} width={68} height={68} />
            <S.Span2>{shortSentence(5, '방달출초보다')}</S.Span2>
          </S.ProfileBox>
        ) : (
          <S.NoImg>
            <img src={plus} alt="친구 추가" />
          </S.NoImg>
        )}
      </S.FriendsBox>
    </S.Container>
  );
};

export default React.memo(ReviewChooseFriend);
