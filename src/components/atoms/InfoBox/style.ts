import Styled from 'styled-components';

interface BoxProps {
  bgColor: string;
}
export const Box = Styled.li<BoxProps>`
  height:26px;
  display:flex;
  text-align:center;
  justify-content:center;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${({ bgColor }) => bgColor};
  margin-right:9px;
  margin-bottom:8px;
  `;

interface SpanProps {
  color: string;
}
export const Span = Styled.span<SpanProps>`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  color: ${({ color }) => color};
  line-height: 1.5;
  letter-spacing: -0.12px;
`;
