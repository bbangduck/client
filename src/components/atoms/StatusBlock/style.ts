import Styled from 'styled-components';

interface ContainerProps {
  border: boolean;
  padding: number;
}
export const Container = Styled.div<ContainerProps>`
  height:31px;
  padding: ${({ padding }) => `0 ${padding}px`};
  border: ${({ border, theme }) => (border ? `solid 1px ${theme.colors.bgColor[0]}` : null)};
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:8px;
`;

interface SpanProps {
  color: string;
}
export const Span = Styled.span<SpanProps>`
  font-family: Montserrat;
  font-size: ${({ theme }) => theme.sizes.font[1]};
  font-weight: bold;
  color: ${({ color }) => color};
`;
