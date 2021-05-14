import Styled from 'styled-components';

export const H2 = Styled.h2`
  font-size: ${({ theme }) => theme.sizes.font[4]};
  font-weight: bold;
  letter-spacing: -0.6px;
  color: ${({ theme }) => theme.colors.fontGray[1]};
  margin-bottom:20px;
`;

export const YellowFont = Styled.span`
  color: #ff5c53;
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  color: ${({ theme }) => theme.colors.fontGray[1]};
  margin-bottom:13px;
  line-height: 1.43;
`;

export const Box = Styled.div`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: #f6f6f6;
  margin-bottom:12px;
`;

export const Span = Styled.span`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  line-height: 2;
  color: ${({ theme }) => theme.colors.fontGray[3]};
`;

export const LastPTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.fontGray[2]};
`;
