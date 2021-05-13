import Styled from 'styled-components';

interface SectionProps {
  tendency: boolean | string;
}
export const Section = Styled.section<SectionProps>`
  margin-bottom:${({ tendency }) => (tendency ? '40px' : '64px')};
`;

export const Img = Styled.img`
  cursor:pointer;
`;

export const TendBox = Styled.ul`
  display:flex;
`;

export const PTag = Styled.p`
  width:100%;
  font-size: ${({ theme }) => theme.sizes.font[2]};
  line-height: 1.86;
  text-align: center;
  color:${({ theme }) => theme.colors.fontGray[0]};
`;
