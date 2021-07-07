import React, { ReactElement } from 'react';
import checked from '../../../assets/images/check/checkedCircleBlue.svg';
import unChecked from '../../../assets/images/check/unCheckedCircle.svg';
import * as S from './style';

interface Props {
  isChecked: boolean;
  setCheckState: React.Dispatch<React.SetStateAction<number>>;
  typeTitle: string;
  content: string;
  typeNumber: number;
  typeApi: string;
  setTryChecking: React.Dispatch<React.SetStateAction<boolean>>;
  setCheckedName: React.Dispatch<React.SetStateAction<string>>;
  setFilterDefault: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterCheck?: React.Dispatch<React.SetStateAction<string>>;
}
const FilterListItem = ({
  isChecked,
  typeTitle,
  content,
  setCheckState,
  typeNumber,
  typeApi,
  setTryChecking,
  setCheckedName,
  setFilterDefault,
  setFilterCheck,
}: Props): ReactElement => {
  const onCheck = () => {
    setCheckState(typeNumber);
    if (setFilterCheck) setFilterCheck(typeApi);
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
        return <S.PTag data-blink="blink">{content}</S.PTag>;
      }
      return (
        <S.PTag data-blink="blink">
          <S.Span data-blink="blink">{content}</S.Span>
          이상
        </S.PTag>
      );
    }
    return <S.PTag data-blink="blink">{content}</S.PTag>;
  };

  return (
    <S.ListBox data-blink="blink">
      <S.ListItem onClick={onCheck} data-blink="blink">
        {ShowContent()}
        <img src={isChecked ? checked : unChecked} alt="체크박스" data-blink="blink" />
      </S.ListItem>
    </S.ListBox>
  );
};

export default FilterListItem;
