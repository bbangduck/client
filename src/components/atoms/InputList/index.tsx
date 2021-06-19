import React, { ReactElement } from 'react';
import arrowDown from '../../../assets/images/arrow/downBig.png';
import arrowUp from '../../../assets/images/arrow/upDark.png';
import * as S from './style';

interface Props {
  title: string;
  list: { id: number; content: string; lastBorder?: boolean }[];
  listOpen: boolean;
  setListOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClickItem: (reason: string) => void;
  reason: string;
}
const InputList = ({ title, list, listOpen, setListOpen, onClickItem, reason }: Props): ReactElement => {
  return (
    <S.Container firstRender={!reason}>
      <S.FirstBox firstRender={!reason} onClick={() => setListOpen((prev) => !prev)}>
        <S.Span firstRender={!reason}>{reason || title}</S.Span>
        <img src={!listOpen ? arrowDown : arrowUp} alt="탈퇴사유 열기" />
      </S.FirstBox>
      <S.ListBox listOpen={listOpen}>
        {list.map((item) => (
          <S.ItemBox key={item.id} borderRadius={item.lastBorder} onClick={() => onClickItem(item.content)}>
            <S.Span>{item.content}</S.Span>
          </S.ItemBox>
        ))}
      </S.ListBox>
    </S.Container>
  );
};

export default InputList;
