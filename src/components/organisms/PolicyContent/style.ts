import Styled from 'styled-components';

export const ContentBox = Styled.div`
  padding-bottom:116px;
`;

export const CenterBox = Styled.div`
  margin-bottom:44px;
`;

export const CenterPTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  line-height: 2;
  color: ${({ theme }) => theme.colors.fontGray[3]};
`;

export const H2 = Styled.h2`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.fontGray[3]};
  font-weight:bold;
`;

export const BottomPTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  line-height: 24px;
  color: ${({ theme }) => theme.colors.fontGray[3]};
`;
