import Styled from 'styled-components';

export const Container = Styled.div`
  height:31px;
  padding: 0 16px;
  border: solid 1px ${({ theme }) => theme.colors.bgColor[0]};
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const Span = Styled.span`
  font-family: Montserrat;
  font-size: ${({ theme }) => theme.sizes.font[1]};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.fontGray[3]};
`;
