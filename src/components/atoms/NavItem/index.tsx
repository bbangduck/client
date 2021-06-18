import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import useGetUserData from '../../../swr/useGetUserData';
import * as Styled from './style';

interface Props {
  src: string;
  name: string;
  pushTo?: string;
}
const NavItem = ({ src, name, pushTo }: Props): ReactElement => {
  // const { mutate } = useGetUserData();
  const history = useHistory();
  const onClick = () => {
    // mutate();
    if (pushTo) history.push(pushTo);
  };

  return (
    <Styled.Li onClick={onClick}>
      <Styled.ImgBox>
        <img src={src} alt={name} />
      </Styled.ImgBox>
      <Styled.PTag>{name}</Styled.PTag>
    </Styled.Li>
  );
};

export default NavItem;
