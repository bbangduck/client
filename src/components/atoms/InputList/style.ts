import Styled from 'styled-components';

export const List = Styled.div`
  height: 42px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bgColor[1]};;
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

export const Placeholder = Styled.span`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  color: #9c9c9c;
`;

export const ImgBox = Styled.div`
  width: 16px;
  height: 16px;
  /* background-color: gray; */
  cursor:pointer;
`;
