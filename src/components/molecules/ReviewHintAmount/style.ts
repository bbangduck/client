import Styled from 'styled-components';

export const Container = Styled.div`
  margin-bottom:32px;
  padding:0 20px;
`;

export const PTag = Styled.p`
  width: 360px;
  height: 36px;
  font-size: 14px;
  letter-spacing: -0.14px;
  color: #2b2b2b;
  margin-bottom:8px;
`;

export const Box = Styled.div`
  display:flex;
  justify-content:space-between;
`;

interface SelectBtnProps {
  clicked: boolean;
}
export const SelectBtn = Styled.div<SelectBtnProps>`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 21.25%;
  height: 50px;
  background-color: ${({ clicked }) => (clicked ? '#2b2b2b' : '#ffffff')};
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  color: ${({ clicked }) => (clicked ? '#ffffff' : '#2b2b2b')};
  cursor:pointer;
  border: ${({ clicked }) => (clicked ? 'none' : 'solid 1px #ebebeb')};
`;
