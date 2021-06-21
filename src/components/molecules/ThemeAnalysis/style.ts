import Styled from 'styled-components';

export const Section = Styled.section`
  margin-bottom:48px;
  padding:0 20px;
`;

export const Box = Styled.div`
  display:flex;
  align-items:center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bgColor[1]};
  padding:12px;
  margin-bottom:22px;
`;

export const Img = Styled.img`
  margin-right:8px;
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  line-height: 1.5;
  letter-spacing: -0.12px;
  text-align: left;
  color: ${({ theme }) => theme.colors.fontGray[0]};
`;
