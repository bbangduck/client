import Styled from 'styled-components';

interface SectionProps {
  item: any;
}
export const Section = Styled.section<SectionProps>`
  margin-bottom:${({ item }) => (item ? '40px' : '65px')};
`;
