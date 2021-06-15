import React, { ReactElement } from 'react';
import checked from '../../../assets/images/check/checkedCircleBlue.png';
import unChecked from '../../../assets/images/check/unCheckedCircle.png';
import * as S from './style';

interface Props {
  isChecked: boolean;
  setCheckState: React.Dispatch<React.SetStateAction<number>>;
  typeTitle: string;
  content: string;
  typeNumber: number;
  setTryChecking: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckedName: React.Dispatch<React.SetStateAction<string>>;
  setFilterDefault: React.Dispatch<React.SetStateAction<boolean>>;
}
const FilterListItem = ({
  isChecked,
  typeTitle,
  content,
  setCheckState,
  typeNumber,
  setTryChecking,
  setCheckedName,
  setFilterDefault,
}: Props): ReactElement => {
  const onCheck = () => {
    setCheckState(typeNumber);
    if (content !== '전체') {
      setTryChecking(true);
      setCheckedName(content);
      setFilterDefault(false);
    } else {
      setTryChecking(false);
      setCheckedName('');
      setFilterDefault(true);
    }
  };

  const ShowContent = () => {
    if (typeTitle === '평점') {
      if (content === '전체') {
        return <S.PTag>{content}</S.PTag>;
      }
      return (
        <S.PTag>
          <S.Span>{content}</S.Span>
          이상
        </S.PTag>
      );
    }
    return <S.PTag>{content}</S.PTag>;
  };

  return (
    <S.ListBox>
      <S.ListItem onClick={onCheck}>
        {ShowContent()}
        <img src={isChecked ? checked : unChecked} alt="체크박스" />
      </S.ListItem>
    </S.ListBox>
  );
};

export default FilterListItem;
