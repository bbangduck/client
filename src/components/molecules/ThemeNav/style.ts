import Styled from 'styled-components';

export const Nav = Styled.nav`
  width:360px;
  position:sticky;
  top:0;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items:center;
  transform: translateX(-20px);
  border-bottom:1px solid #ebebeb;
`;

export const Box = Styled.div`
  height:40px;
  border-bottom:2px solid black;
  padding:12px 0 8px 0;
`;

export const PTag = Styled.p`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.14px;
  color: #2b2b2b;
`;
