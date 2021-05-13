import Styled from 'styled-components';

export const Container = Styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  flex:1;
`;

export const Img = Styled.img`
  margin-bottom:4px;
`;

export const PTag = Styled.p`
  font-family: Montserrat;
  font-size: ${({ theme }) => theme.sizes.font[1]};
  font-weight: bold;
  font-style: italic;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.fontGray[0]};
  margin-bottom:8px;
`;

export const SpanTag = Styled.span`
  font-family: Montserrat;
  font-size: ${({ theme }) => theme.sizes.font[3]};
  font-weight: bold;
  line-height: 1.19;
  color: ${({ theme }) => theme.colors.fontGray[1]};
`;
