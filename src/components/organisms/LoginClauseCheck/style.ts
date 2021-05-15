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

interface PProps {
  isChecked: boolean;
}
export const P = Styled.p<PProps>`
  font-size: 14px;
  color: ${({ isChecked }) => (isChecked ? '#121212' : '#9c9c9c')};
`;

interface CheckBoxProps {
  isChecked: boolean;
}
export const CheckBox = Styled.div<CheckBoxProps>`
  background-color: ${({ isChecked }) => (isChecked ? '#2b2b2b' : 'transparent')};
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

interface SpanProps {
  isChecked: boolean;
}
export const Span = Styled.span<SpanProps>`
  font-size: 14px;
  letter-spacing: -0.14px;
  color: ${({ isChecked }) => (isChecked ? '#121212' : '#9c9c9c')};
  border-bottom:1px solid #9c9c9c;
  cursor:pointer;
`;
