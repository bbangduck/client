import Styled from 'styled-components';

interface SectionProps {
  item: number;
}
export const Section = Styled.section<SectionProps>`
  margin-bottom:${({ item }) => (item ? '20px' : '64px')};
  padding:0 20px;
`;

export const ThemesBox = Styled.ul`
  display:flex;
  justify-content:space-between;
`;

export const ImgBox = Styled.li`
  min-width: 152px;
  width:48%;
  height: 5.6%;
  min-height: 215px;
  max-height: 282px;
  height:60vw;
  background-color:lightgray;
  overflow:hidden;
`;

export const Img = Styled.img`
  width:100%;
  height:100%;
`;
