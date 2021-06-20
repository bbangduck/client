import Styled from 'styled-components';

interface LiProps {
  borderColor: string;
  marginBottom?: number;
}
export const Li = Styled.li<LiProps>`
  /* position:relative; */
  height: 100px;
  padding:16px 0 17px 16px;
  border: solid 1px ${({ borderColor }) => borderColor};
  margin-bottom:${({ marginBottom }) => `${marginBottom || 0}px`};
`;

interface PTagProps {
  color: string;
}
export const PTag = Styled.p<PTagProps>`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.14px;
  color: ${({ color }) => color};
  margin-bottom:2px;
`;

interface SpanProps {
  color: string;
}
export const Span = Styled.span<SpanProps>`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.12px;
  color: ${({ color }) => color};
`;

export const Span2 = Styled.span<SpanProps>`
  font-family: Montserrat;
  font-size: 12px;
  line-height: 1.5;
  font-weight: bold;
  letter-spacing: -0.12px;
  color: ${({ color }) => color};
`;

interface MoreBoxProps {
  color: string;
  bgColor: string;
}
export const MoreBox = Styled.div<MoreBoxProps>`
  position:absolute;
  right:11px;
  bottom:12px;
  padding: 8px 12px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: ${({ bgColor }) => bgColor};
  display:Flex;
  justify-content:center;
  align-items:center;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.12px;
  color: ${({ color }) => color};
  cursor:pointer;
`;
