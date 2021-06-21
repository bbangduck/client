import Styled from 'styled-components';

export const Container = Styled.div`
  position:relative;
  cursor:pointer;
  width:48%;
  max-width:210px;
  min-width: 152px;
`;

export const ImgBox = Styled.div`
  width:100%;
  min-height: 215px;
  max-height: 275px;
  height:56vw;
  overflow:hidden;
  margin-bottom:8px;
  background:crimson;
`;

export const Img = Styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
`;

export const PTag = Styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: -0.14px;
  color: #2b2b2b;
`;

export const Span = Styled.span`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.12px;
  color: #9c9c9c;
  `;
