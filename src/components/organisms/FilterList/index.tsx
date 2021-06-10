import React, { ReactElement, useState, useEffect } from 'react';
import FilterListItem from '../../molecules/FilterListItem';
import top from '../../../assets/images/arrow/upDark.png';
import down from '../../../assets/images/arrow/downBig.png';
import * as S from './style';

interface Props {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<number>>;
  setFilterDefault: React.Dispatch<React.SetStateAction<boolean>>;
  typeNumber: number;
  title: string;
  typeList: { id: number; type: string }[];
  reset: boolean;
}
const FilterList = ({ isOn, setIsOn, typeNumber, title, typeList, reset, setFilterDefault }: Props): ReactElement => {
  const [filterItemType, setFilterItemType] = useState(1);
  const [titleChecked, setTitleChecked] = useState(false);
  const [checkedName, setCheckedName] = useState('');

  const onListShow = () => {
    if (isOn) {
      setIsOn(0);
    } else {
      setIsOn(typeNumber);
    }
  };

  useEffect(() => {
    setFilterItemType(1);
    setTitleChecked(false);
    setCheckedName('');
  }, [reset]);

  return (
    <S.Container>
      <S.TitleBox>
        <S.PTag isChecked={titleChecked}>{title}</S.PTag>
        <S.RightBox onClick={onListShow}>
          <S.Span>{checkedName}</S.Span>
          <img src={isOn ? top : down} alt="열기" />
        </S.RightBox>
      </S.TitleBox>
      {isOn ? (
        <div>
          {typeList.map((item) => (
            <FilterListItem
              key={item.id}
              isChecked={filterItemType === item.id}
              setCheckState={setFilterItemType}
              content={item.type}
              typeNumber={item.id}
              setTryChecking={setTitleChecked}
              setCheckedName={setCheckedName}
              typeTitle={title}
              setFilterDefault={setFilterDefault}
            />
          ))}
        </div>
      ) : null}
    </S.Container>
  );
};

export default FilterList;
