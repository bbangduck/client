import Styled from 'styled-components';

export const PTag = Styled.p`
  width:100%;
  font-size: ${({ theme }) => theme.sizes.font[2]};
  line-height: 1.86;
  text-align: center;
  color:${({ theme }) => theme.colors.fontGray[0]};
`;
