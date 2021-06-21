import Styled from 'styled-components';

export const Container = Styled.div`
  position:relative;
  cursor:pointer;
`;

export const ImgBox = Styled.div`
  min-width: 152px;
  width:44%;
  height: 215px;
  overflow:hidden;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:8px;
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
