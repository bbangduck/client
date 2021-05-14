import Styled from 'styled-components';

export const Box = Styled.div`
  padding: 20px 0;
  border-top:1px solid ${({ theme }) => theme.colors.bgColor[0]};
  border-bottom:1px solid ${({ theme }) => theme.colors.bgColor[0]};
`;
