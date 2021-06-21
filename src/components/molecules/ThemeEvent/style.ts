import Styled from 'styled-components';

export const Section = Styled.section`
  margin-bottom:46px;
  padding:0 20px;
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  line-height: 1.86;
  color: ${({ theme }) => theme.colors.fontGray[3]};
  margin-bottom:8px;
`;

export const EmptyBox = Styled.div`
  height:78px;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const Empty = Styled.div`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.colors.fontGray[0]};
`;
