import Styled from 'styled-components';

export const Container = Styled.section`
  padding-bottom: 100px;
`;

export const Header = Styled.header`
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:20px 0;
  border-bottom:1px solid #ebebeb;
  margin-bottom:20px;
`;

export const H1 = Styled.h1`
  font-size: 14px;
  font-weight: bold;
  line-height: 28px;
  letter-spacing: -0.14px;
  color: #121212;
  margin-bottom: 0px;
`;

export const Span = Styled.span`
  font-family: Montserrat;
  font-size: 12px;
  line-height: 1.5;
  color: #9c9c9c;
`;

export const PTag = Styled.p`
  font-size: 14px;
  line-height: 2;
  color: #4b4b4b;
  margin-bottom:20px;
`;

export const ImgBox = Styled.div`
  width: 100%;
  height: auto;
  overflow:hidden;
  background:lightgray;
`;

export const Img = Styled.img`
  width:100%;
`;
