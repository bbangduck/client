import React, { ReactElement } from 'react';
import Badge from '../../atoms/Badge';
import * as S from './style';

interface Props {
  list: {
    src: string;
    content: string;
  }[];
}
const BadgeList = ({ list }: Props): ReactElement => {
  return (
    <S.Container>
      <Badge badgeItem={list[0]} />
      <Badge badgeItem={list[1]} />
      <Badge badgeItem={list[2]} />
      <Badge badgeItem={list[3]} />
    </S.Container>
  );
};

export default BadgeList;
