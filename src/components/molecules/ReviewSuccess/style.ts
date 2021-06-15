import Styled from 'styled-components';

export const Title = Styled.p`
  height:36px;
  display:flex;
  align-items:center;
  font-size: 14px;
  letter-spacing: -0.14px;
  color: #2b2b2b;
  margin-bottom:8px;
`;

export const Box = Styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:32px;
`;

interface BtnProps {
  clicked: boolean;
}
export const Btn = Styled.button<BtnProps>`
  display:flex;
  justify-content:center;
  align-items:center;
  width:152px;
  height:44px;
  background-color: ${({ clicked }) => (clicked ? '#2b2b2b' : '#ffffff')};
  font-size: 14px;
  letter-spacing: -0.14px;
  color: ${({ clicked }) => (clicked ? '#ffffff' : '#2b2b2b')};
  cursor:pointer;
  border:${({ clicked }) => (clicked ? 'none' : '1px solid #ebebeb')};
`;
