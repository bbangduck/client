import Styled from 'styled-components';

export const Container = Styled.div`
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  height:100%;
`;

export const Box = Styled.div`
  position:absolute;
  bottom:82px;
  left:20px;
  display:flex;
  align-items:center;
  cursor:pointer;
`;

type CheckBoxProps = {
  isChecked: boolean;
};
export const CheckBox = Styled.div<CheckBoxProps>`
  width: 24px;
  height: 24px;
  background-color: ${({ isChecked }) => (isChecked ? '#2b2b2b' : null)};
  border:1px solid ${({ isChecked }) => (isChecked ? '#2b2b2b' : '#cbcbcb')};
  margin-right:8px;
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.fontGray[2]};
`;
