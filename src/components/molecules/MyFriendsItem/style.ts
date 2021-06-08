import Styled from 'styled-components';

export const Li = Styled.li`
  padding:18px 0;
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
`;

export const LeftBox = Styled.div`
  display:flex;
`;

interface ImgBoxProps {
  image: string;
}
export const ImgBox = Styled.div<ImgBoxProps>`
  width: 40px;
  height: 40px;
  border-radius:50%;
  background-color:red;
  overflow:hidden; 
  background-image:${({ image }) => `url(${image})`};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  margin-right:10px;
`;

export const Name = Styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  color: #121212;
  margin-bottom:2px;
`;

export const Intro = Styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: #121212;
  margin-bottom:8px;
`;

export const Box = Styled.div`
  display:inline-block;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: #f4f4f9;
`;

export const PlayCount = Styled.p`
  font-size: 12px;
  letter-spacing: -0.12px;
  line-height: 1.5;
  color: #151950;
`;

export const Img = Styled.img`
  cursor:pointer;
`;
