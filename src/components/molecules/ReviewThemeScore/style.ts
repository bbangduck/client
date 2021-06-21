import Styled from 'styled-components';

export const Container = Styled.div`
  margin-bottom:48px;
  padding:0 20px;
`;

export const PTag = Styled.p`
  height:36px;
  display:flex;
  align-items:center;
  font-size: 14px;
  letter-spacing: -0.14px;
  color: #2b2b2b;
  margin-bottom:32px;
`;

export const Box = Styled.div`
  padding:0 72px;
  display:flex;
  justify-content:space-between;
  width:100%;
`;

interface TestProps {
  clicked: boolean;
}
export const Test = Styled.div<TestProps>`
  width:20px;
  height:20px;
  background-color: ${({ clicked }) => (clicked ? 'dodgerblue' : 'gray')};
  margin-right:10px;
`;

export const Img = Styled.img`
  width:19%;
`;
