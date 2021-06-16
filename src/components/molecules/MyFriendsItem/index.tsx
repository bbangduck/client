import React, { ReactElement } from 'react';
import more from '../../../assets/images/more/more.png';
import * as S from './style';
import UserData from '../UserData';

interface Props {
  onMoreClick: () => void;
}
const MyFriendsItem = ({ onMoreClick }: Props): ReactElement => {
  const onMoreClickHandeler = () => {
    onMoreClick();
  };

  return (
    <S.Li>
      <UserData marginBottom={2} />
      <S.Img src={more} alt="친구 관리" onClick={onMoreClickHandeler} data-blink="blink" />
    </S.Li>
  );
};

export default MyFriendsItem;
