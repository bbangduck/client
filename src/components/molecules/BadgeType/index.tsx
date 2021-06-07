import React, { ReactElement } from 'react';
import * as S from './style';

interface Props {
  title: string;
  subTitle: string;
  itemList: any[];
}
const BadgeType = ({ title, subTitle, itemList }: Props): ReactElement => {
  return (
    <S.Section>
      <S.TitleBox>
        <S.H2>{title}</S.H2>
      </S.TitleBox>
      <S.H3>{subTitle}</S.H3>
      <S.ItemBox>
        {itemList.map((item) => (
          <S.Item key={item}>
            <S.ImgBox>
              <img src="" alt="" />
            </S.ImgBox>
            <S.PTag>비밀의 화원 건대 완료</S.PTag>
          </S.Item>
        ))}
      </S.ItemBox>
    </S.Section>
  );
};

export default BadgeType;
