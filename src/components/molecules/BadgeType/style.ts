import Styled from 'styled-components';

export const Section = Styled.section`
  margin-bottom:48px;
  padding:0 20px;
`;

export const TitleBox = Styled.div`
  height: 40px;
  display:flex;
  align-items:center;
`;

export const H2 = Styled.h2`
  font-size: ${({ theme }) => theme.sizes.font[3]};
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.16px;
  color: ${({ theme }) => theme.colors.fontGray[2]};
`;

export const H3 = Styled.h3`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  line-height: 1.5;
  letter-spacing: -0.12px;
  color: ${({ theme }) => theme.colors.fontGray[0]};
  margin-bottom:10px;
`;

export const ItemBox = Styled.ul`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  transform:translateX(-8px);
`;

export const Item = Styled.li`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:68px;
  margin: 0 8px;
`;

export const ImgBox = Styled.div`
  width: 68px;
  height: 68px;
  background-color: #ebebeb;
  margin-bottom:4px;
`;

export const PTag = Styled.p`
  text-align:center;
  font-size: ${({ theme }) => theme.sizes.font[0]};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.fontGray[0]};
`;
