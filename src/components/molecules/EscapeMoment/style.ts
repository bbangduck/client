import Styled from 'styled-components';

export const PTag = Styled.p`
  height:36px;
  line-height:36px;
  font-size: 14px;
  letter-spacing: -0.14px;
  color: #2b2b2b;
  padding:0 20px;
`;

export const Box = Styled.div`
  display:flex;
  height:84px;
  align-items:center;
  overflow:hidden;
  width:100%;
  padding-left:20px;
`;

export const CameraBox = Styled.div`
  position:relative;
  width: 68px;
  height: 68px;
  margin-right: 12px;
  background-color: #f6f6f6;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const InputFile = Styled.input`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  opacity:0;
  cursor:pointer;
`;

interface ImgBoxProps {
  image: string;
}
export const ImgBox = Styled.div<ImgBoxProps>`
  position:relative;
  width: 68px;
  height: 68px;
  background-image:${({ image }) => `url(${image})`};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  margin-right:12px;
`;

export const Img = Styled.img`
  position:absolute;
  right:-12px;
  top:-12px;
  cursor:pointer;
`;
