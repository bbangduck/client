import Styled from 'styled-components';

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  line-height: 2;
  letter-spacing: -0.12px;
  color: ${({ theme }) => theme.colors.fontGray[3]};
  margin-bottom:12px;
`;

export const Ul = Styled.ul`
  display:flex;
  margin-bottom:12px;
`;

export const Li = Styled.li`
  width: 68px;
  height: 68px;
  background:lightgray;
  margin-right:12px;
  `;

export const HashBox = Styled.ul`
  display:flex;
  flex-wrap:wrap;
  margin-bottom:24px;
`;

export const Hash = Styled.li`
  height:26px;
  display:flex;
  text-align:center;
  justify-content:center;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.bgColor[2]};
  margin-right:9px;
  margin-bottom:8px;
  `;

export const Span = Styled.span`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  color: ${({ theme }) => theme.colors.fontGray[0]};
  line-height: 1.5;
  letter-spacing: -0.12px;
`;
