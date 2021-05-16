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
  width:40px;
  height:40px;
  background-color:gray;
  border-radius:50%;
  transform:translateX(-12px);
`;

export const ImgBox3 = Styled.div`
  width:40px;
  height:40px;
  background-color:black;
  border-radius:50%;
  transform:translateX(-24px);
`;

export const PTag = Styled.p`
  font-size: 14px;
  line-height: 1.86;
  color: #2b2b2b;
`;

export const Span = Styled.span`
  font-family: Montserrat;
  font-weight: bold;
`;
