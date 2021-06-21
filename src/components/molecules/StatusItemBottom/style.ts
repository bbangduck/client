import Styled from 'styled-components';

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  line-height: 2;
  letter-spacing: -0.12px;
  color: ${({ theme }) => theme.colors.fontGray[3]};
  margin-bottom:12px;
`;

export const Ul = Styled.ul`
  display:flex;
  margin-bottom:12px;
`;

export const Li = Styled.li`
  width:21.25%;
  min-width: 68px;
  max-width: 90px;
  height:19vw;
  min-height: 68px;
  max-height: 90px;
  background:lightgray;
  margin-right:12px;
`;

export const Img = Styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
`;

export const HashBox = Styled.ul`
  display:flex;
  flex-wrap:wrap;
  margin-bottom:24px;
`;
