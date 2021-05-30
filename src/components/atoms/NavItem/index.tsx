import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './style';

interface Props {
  src: string;
  name: string;
  pushTo?: string;
}
const NavItem = ({ src, name, pushTo }: Props): ReactElement => {
  const history = useHistory();
  const onClick = () => {
    if (pushTo) history.push(pushTo);
  };

  return (
    <li onClick={onClick}>
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
