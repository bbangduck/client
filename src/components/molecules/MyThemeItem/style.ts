import Styled from 'styled-components';

export const Li = Styled.li`
  margin-bottom:32px;
`;

export const ImgBox = Styled.div`
  position:relative;
  width: 152px;
  height: 215px;
  background-color:gray;
  margin-bottom:8px;
`;

export const MoreBox = Styled.div`
  position:absolute;
  top:0;
  right:0;
  width: 32px;
  height: 32px;
  opacity: 0.8;
  background-color: #2b2b2b;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
`;

export const PTag = Styled.p`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.14px;
  color: #2b2b2b;
  margin-bottom:4px;
`;

export const Span = Styled.span`
  font-size: 12px;
  letter-spacing: -0.12px;
  color: #4b4b4b;
`;
