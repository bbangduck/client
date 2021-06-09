import Styled from 'styled-components';

export const Container = Styled.div`
  display:flex;
  align-items:center;
  padding: 16px 0;
  margin-right:12px;
  margin-bottom:20px;
`;

export const Images = Styled.div`
  display:flex;
`;

export const ImgBox1 = Styled.div`
  width:40px;
  height:40px;
  background-color:lightgray;
  border-radius:50%;
`;

export const ImgBox2 = Styled.div`
  transform:translateX(-12px);
`;

export const ImgBox3 = Styled.div`
  transform:translateX(-24px);
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  line-height: 1.86;
  color: ${({ theme }) => theme.colors.fontGray[1]};
`;

export const Span = Styled.span`
  font-family: Montserrat;
  font-weight: bold;
`;
