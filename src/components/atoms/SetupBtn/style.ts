import Styled from 'styled-components';

export const Container = Styled.div`
  width:62px;
  height:26px;
  padding:4px 10px;
  border-radius:261px;
  background-color: ${({ theme }) => theme.colors.bgColor[0]};
  display:flex;
  align-items:center; 
  justify-content:space-between;
  cursor:pointer;
`;

export const Icon = Styled.img`
  object-fit:contain;
`;

export const SpanTag = Styled.span`
  font-size:${({ theme }) => theme.sizes.font[1]};
  letter-spacing:normal;
  color: ${({ theme }) => theme.colors.fontGray[1]}; 
`;
