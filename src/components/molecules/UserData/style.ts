import Styled from 'styled-components';

export const Containter = Styled.div`
  display:flex;
  align-items:flex-start;
  margin-bottom:2px;
`;

interface ImgBoxProps {
  image: string;
}
export const ImgBox = Styled.div<ImgBoxProps>`
  width: 40px;
  height: 40px;
  border-radius:50%;
  overflow:hidden;
  background-image:${({ image }) => `url(${image})`};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  margin-right:10px;
`;

export const ContentBox = Styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
`;

export const Title = Styled.p`
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
  padding: 4px 12px;
  border-radius: 4px;
  background-color: #f4f4f9;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.12px;
  color: #151950;
`;
