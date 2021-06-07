import Styled from 'styled-components';

export const Section = Styled.section`
  min-height:${({ theme }) => theme.sizes.mobile.minHeight};
  height:${({ theme }) => theme.sizes.mobile.height};
`;

export const H1 = Styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: #2b2b2b;
  margin-bottom:28px;
`;
