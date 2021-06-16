import Styled from 'styled-components';

interface ContainerProps {
  item?: any;
  trueMg?: string;
  falseMg?: string;
}
export const Container = Styled.div<ContainerProps>`
  height:40px;
  margin-bottom:${({ item, trueMg, falseMg }) => (item ? trueMg : falseMg)};
  display:flex;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
`;

export const H2 = Styled.h2`
  font-size:${({ theme }) => theme.sizes.font[3]};
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.16px;
  color: ${({ theme }) => theme.colors.fontGray[2]};
`;
