import Styled from 'styled-components';

export const Container = Styled.div`
  height: 52px;
  padding:0 20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:pointer;
`;

interface H2Props {
  color: string;
  fontWeight: string;
}
export const H2 = Styled.h2<H2Props>`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: 1.43;
  letter-spacing: -0.14px;
  color: ${({ color }) => color};
`;
