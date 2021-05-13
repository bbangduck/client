import React, { ReactElement } from 'react';
import * as Styled from './style';

interface Props {
  src: string;
  name: string;
}
const NavItem = ({ src, name }: Props): ReactElement => {
  return (
    <li>
      <Styled.Container>
        <Styled.ImgBox>
          <Styled.Img src={src} alt={name} />
        </Styled.ImgBox>
        <Styled.PTag>{name}</Styled.PTag>
      </Styled.Container>
    </li>
  );
};

export default NavItem;
