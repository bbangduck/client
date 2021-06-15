import Styled from 'styled-components';

export const Title = Styled.p`
  height:40px;
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.16px;
  color: #121212;
  margin-bottom:16px;
`;

export const SubTitle = Styled.p`
  height:36px;
  line-height: 36px;
  font-size: 14px;
  letter-spacing: -0.14px;
  color: #2b2b2b;
  margin-bottom:8px;
`;

export const Box = Styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:32px;
`;

interface CheckBoxProps {
  clicked: boolean;
}
export const CheckBox = Styled.div<CheckBoxProps>`
  width: 56px;
  height: 44px;
  border: ${({ clicked }) => (clicked ? 'none' : 'solid 1px #e5e5e5')};
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.12px;
  color: ${({ clicked }) => (clicked ? '#ffffff' : '#9c9c9c')} ;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: ${({ clicked }) => (clicked ? '4px 11px' : '4px 10px')};
  text-align:center;
  cursor:pointer;
  background-color:${({ clicked }) => clicked && '#2b2b2b'};
`;
