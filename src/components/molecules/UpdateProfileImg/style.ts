import Styled from 'styled-components';

export const Container = Styled.form`
  width:80px;
  margin:0 auto;
  height:80px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:20.4px;
  position:relative;
`;

export const IconBox = Styled.label`
  width:32px;
  height:32px;
  position:absolute;
  right:0;
  bottom:0;
  border-radius:50%;
  cursor:pointer;
`;

export const FileUpload = Styled.input`
  display:none;
`;

interface ImgProps {
  image: string;
}
export const Img = Styled.div<ImgProps>`
  width:100%;
  height:100%;
  border-radius:50%;
  background-image:${({ image }) => `url(${image})`};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
`;
