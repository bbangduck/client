import Styled from 'styled-components';

export const Section = Styled.section`
  margin-bottom:40px;
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  line-height: 1.43;
  letter-spacing: -0.14px;
  color:  ${({ theme }) => theme.colors.fontGray[3]};
`;
