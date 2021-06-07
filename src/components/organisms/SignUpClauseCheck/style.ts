import Styled from 'styled-components';

export const H1 = Styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: #2b2b2b;
  margin-bottom:20px;
`;

export const TopBox = Styled.div`
  border-bottom:1px solid #ebebeb;
  padding: 20px 0;
  display:flex;
  align-items:center;
  margin-bottom:8px;
  cursor:pointer;
`;

export const P = Styled.p`
  font-size: 14px;
  color: #121212;
`;

interface CheckBoxProps {
  isChecked: boolean;
}
export const CheckBox = Styled.div<CheckBoxProps>`
  width: 24px;
  height: 24px;
  background-color: ${({ isChecked }) => (isChecked ? '#2b2b2b' : 'transparent')};
  margin-right:8px;
  border:1px solid ${({ isChecked }) => (isChecked ? 'none' : '#cbcbcb')};
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const CheckBox2 = Styled.div`
  margin-right:8px;
`;

export const Box = Styled.div`
  height:44px;
  display:flex;
  align-items:center;
`;

interface PTagProps {
  isChecked: boolean;
}
export const PTag = Styled.p<PTagProps>`
  font-size: 14px;
  line-height: 1.43;
  color: ${({ isChecked }) => (isChecked ? '#121212' : '#9c9c9c')};
  margin-right:8px;
`;

export const Span = Styled.span`
  font-size: 14px;
  letter-spacing: -0.14px;
  color:#9c9c9c;
  border-bottom:1px solid #9c9c9c;
  cursor:pointer;
`;
