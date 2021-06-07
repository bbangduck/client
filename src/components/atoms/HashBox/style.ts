import Styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  leftMargin?: string;
  rightMargin: string;
}
export const Container = Styled.li<ContainerProps>`
  height: 26px;
  padding: 0 12px;
  border-radius: 4px;
  background-color: ${({ bgColor }) => bgColor};
  margin-left:${({ leftMargin }) => leftMargin};
  margin-right:${({ rightMargin }) => rightMargin};
  display:flex;
  align-items:center;
  `;

interface SpanProps {
  color: string;
}
export const Span = Styled.span<SpanProps>`
  font-size: 12px;
  line-height: 26px;
  letter-spacing: -0.12px;
  color: ${({ color }) => color};
`;
