import Styled from 'styled-components';

export const ToggleBtn = Styled.div`
  width:36px;
  height:20px;
  border-radius: 10px;
  padding:0 2px;
  background-color: ${({ theme }) => theme.colors.fontGray[1]};
  display:flex;
  align-items:center;
  cursor:pointer;
`;

interface CircleProps {
  isClicked: boolean;
}
export const Circle = Styled.div<CircleProps>`
  transition:.1s linear;
  width: 16px;
  height: 16px;
  background-color: #ffffff;
  border-radius:50%;
  transform:translateX(${({ isClicked }) => (isClicked ? `100%` : `0`)});
`;
