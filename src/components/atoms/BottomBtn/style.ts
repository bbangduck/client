import Styled from 'styled-components';

export const Container = Styled.button`
  position:absolute;
  bottom:0;
  left:0;
  width: 100%;
  height: 52px;
  background-color: #2b2b2b;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  font-weight: bold;
  line-height: 1.43;
  color: #ffffff;
`;
