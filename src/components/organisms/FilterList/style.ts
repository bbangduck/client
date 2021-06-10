import Styled from 'styled-components';

export const Container = Styled.div`
  
`;

export const TitleBox = Styled.div`
  height:44px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 20px;
  border-bottom: solid 1px #ebebeb;
`;

interface PTagProps {
  isChecked: boolean;
}
export const PTag = Styled.p<PTagProps>`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.14px;
  color:${({ isChecked }) => (isChecked ? '#2d369f' : '#4b4b4b')} ;
`;

export const RightBox = Styled.div`
  display:flex;
  align-items:center;
  cursor:pointer;
`;

export const Span = Styled.span`
  font-size: 12px;
  letter-spacing: -0.12px;
  color: #9c9c9c;
  margin-right:8px;
`;
