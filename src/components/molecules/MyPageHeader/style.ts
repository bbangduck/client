import Styled from 'styled-components';

export const Header = Styled.header`
  display: flex;
  justify-content:space-between;
  align-items:center;
  height:56px;
  margin-bottom:20px;
  padding:0 20px;
`;

export const H1Tag = Styled.h1`
  font-size:${({ theme }) => theme.sizes.font[4]};
  font-weight:bold;
  letter-spacing:-0.6px;
  color:${({ theme }) => theme.colors.fontGray[1]};
`;
