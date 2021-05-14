import Styled from 'styled-components';

export const Container = Styled.div`
  height:216px;
`;

export const Box = Styled.div`
  height:40px;
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

export const H2 = Styled.h2`
  font-size:${({ theme }) => theme.sizes.font[3]};
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.16px;
  color: ${({ theme }) => theme.colors.fontGray[2]};
`;
