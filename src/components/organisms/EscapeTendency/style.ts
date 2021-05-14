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
