import Styled from 'styled-components';

export const Container = Styled.div`
  display:flex;
  margin-bottom:52px;
  position:relative;
`;

interface ImgBoxProps {
  image: string;
}
export const ImgBox = Styled.div<ImgBoxProps>`
  width:68px;
  height:96px;
  overflow:hidden; 
  background-image:${({ image }) => `url(${image})`};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  margin-right:16px;
`;

export const H1 = Styled.h1`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.63;
  letter-spacing: -0.16px;
  color: #4b4b4b;
  margin:4px 0 ;
`;

export const PTag = Styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: #121212;
  margin-bottom:18px;
`;

export const Box = Styled.div`
  display:flex;
`;

export const Line = Styled.div`
  position:absolute;
  bottom:-24px;
  left:-20px;
  width: 360px;
  height: 4px;
  background-color: #ebebeb;
`;
