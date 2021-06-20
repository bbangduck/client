import Styled from 'styled-components';

export const Container = Styled.div`
  display:flex;
  margin-bottom:52px;
  position:relative;
  padding:0 20px;
`;

export const ImgBox = Styled.img`
  width:21%;
  overflow:hidden; 
  margin-right:16px;
`;

export const H1 = Styled.h1`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.63;
  letter-spacing: -0.16px;
  color: #4b4b4b;
  margin:4px 0 ;
`;

export const PTag = Styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: #121212;
  margin-bottom:18px;
`;

export const Box = Styled.div`
  display:flex;
`;

export const Line = Styled.div`
  position:absolute;
  bottom:-24px;
  left:0;
  width: 100%;
  height: 4px;
  background-color: #ebebeb;
`;
