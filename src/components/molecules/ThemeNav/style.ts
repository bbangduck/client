import Styled from 'styled-components';

export const Nav = Styled.nav`
  width:100vw;
  max-width:480px;
  min-width:360px;
  position:sticky;
  top:0;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items:center;
  border-bottom:1px solid #ebebeb;
  margin-bottom:48px;
  background-color:white;
  z-index:10;
`;

interface BoxProps {
  border: boolean;
}
export const Box = Styled.div<BoxProps>`
  height:40px;
  border-bottom:2px solid ${({ border }) => (border ? '#2b2b2b' : 'transparent')};
  padding:12px 0 8px 0;
  transition:0.3s ;
`;

interface PTagProps {
  border: boolean;
}
export const PTag = Styled.p<PTagProps>`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  line-height: 1.43;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.colors.fontGray[1]};
  font-weight:${({ border }) => (border ? 'bold' : 'normal')};
  transition:0.3s ;
`;
