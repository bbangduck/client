import Styled from 'styled-components';

export const Container = Styled.div`
  width:272px;
`;

export const TopBox = Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  height:40px;
  margin-bottom:12px;
`;

export const NameBox = Styled.div`
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  margin-bottom:9px;
`;

export const Name = Styled.p`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.14px;
  color: #4b4b4b;
`;

export const Brief = Styled.p`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.12px;
  color: #9c9c9c;
`;

export const Date = Styled.p`
  font-size: 10px;
  letter-spacing: -0.1px;
  color: #9c9c9c;
`;

export const Boxes = Styled.div`
  display:flex;
  margin-bottom:12px;
`;

export const ReviewContent = Styled.p`
  font-size: 12px;
  line-height: 2;
  letter-spacing: -0.12px;
  color: #4b4b4b;
  position:relative;
  margin-bottom:12px;
`;

export const MoreBox = Styled.div`
  position:absolute;
  bottom:0;
  right:0;
  width:47px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
`;

export const More = Styled.p`
  font-size: 12px;
  font-weight: bold;
  line-height: 2.17;
  color: #2b2b2b;
`;

export const HashBox = Styled.ul`
  display:flex;
  flex-wrap:wrap;
  margin-bottom:24px;
`;
