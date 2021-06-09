import Styled from 'styled-components';

export const Li = Styled.li`
  position:relative;
  height: 100px;
  padding:16px 0 17px 16px;
  border: solid 1px #9c9c9c;
`;

export const PTag = Styled.p`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-bottom:2px;
`;

export const Span = Styled.span`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.12px;
  color: #9c9c9c;
`;

export const Span2 = Styled.span`
  font-family: Montserrat;
  font-size: 12px;
  line-height: 1.5;
  font-weight: bold;
  letter-spacing: -0.12px;
  color: #ffffff;
`;

export const MoreBox = Styled.div`
  position:absolute;
  right:11px;
  bottom:12px;
  padding: 8px 12px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display:Flex;
  justify-content:center;
  align-items:center;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.12px;
  color: #2b2b2b;
  cursor:pointer;
`;
