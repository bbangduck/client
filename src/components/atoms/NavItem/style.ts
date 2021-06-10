import Styled from 'styled-components';

export const Li = Styled.li`
  background-color:white;
  border:none;
  outline:none;
  width:90px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`;

export const ImgBox = Styled.div`
  width: 24px;
  height: 24px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:2px;
`;

export const PTag = Styled.p`
  font-size: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.fontGray[1]};
`;
