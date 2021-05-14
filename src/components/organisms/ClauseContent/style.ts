import Styled from 'styled-components';

export const ContentBox = Styled.div`
  padding-bottom:116px;
`;

export const H2 = Styled.h2`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.fontGray[3]};
  font-weight:bold;
`;

export const H3 = Styled.h3`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.fontGray[3]};
  font-weight:bold;
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.fontGray[3]};
  margin-bottom:44px;
`;
