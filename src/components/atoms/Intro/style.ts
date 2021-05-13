import Styled from 'styled-components';

export const Container = Styled.div`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bgColor[1]};
`;

type PTagProps = {
  content?: string;
};
export const PTag = Styled.p<PTagProps>`
  font-size:${({ theme }) => theme.sizes.font[1]};
  line-height: 1.5;
  letter-spacing: -0.12px;
  color:${({ theme, content }) => (content ? theme.colors.fontGray[3] : theme.colors.fontGray[0])};
`;
