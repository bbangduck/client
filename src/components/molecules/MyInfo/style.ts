import Styled from 'styled-components';

export const Container = Styled.div`
  display:flex;
  height:80px;
  margin-bottom:14px;
`;

export const RightBox = Styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

export const NamePTag = Styled.p`
  font-size:${({ theme }) => theme.sizes.font[2]};
  font-weight:bold;
  color:${({ theme }) => theme.colors.fontGray[2]};
  line-height: 1.43;
`;

export const LevelPTag = Styled.p`
  font-size:${({ theme }) => theme.sizes.font[1]};
  font-weight:bold;
  color:${({ theme }) => theme.colors.fontGray[0]};
  height:18px;
  line-height: 2.17;
`;
