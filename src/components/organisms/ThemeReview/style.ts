import Styled from 'styled-components';

export const Section = Styled.section`
  border-top:4px solid #ebebeb;
  padding:20px 20px 0;
  width:360px;
  transform:translateX(-20px);
  padding-bottom:63px;
`;

export const EmptyBox = Styled.div`
  height:124px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.colors.fontGray[0]};
`;
