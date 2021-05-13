import Styled from 'styled-components';

interface SectionProps {
  item: number;
}
export const Section = Styled.section<SectionProps>`
  margin-bottom:${({ item }) => (item ? '40px' : '64px')};
`;

export const ThemesBox = Styled.ul`
  display:flex;
  justify-content:space-between;
`;

export const ImgBox = Styled.li`
  width: 152px;
  height: 215px;
  background-color:lightgray;
`;
