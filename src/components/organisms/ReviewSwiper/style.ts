import Styled from 'styled-components';

export const Container = Styled.div`
  max-width:412px;
  margin-bottom:15px;
  margin-left:48px;
`;

interface ImgBoxProps {
  image?: string;
}
export const ImgBox = Styled.div<ImgBoxProps>`
  width: 100%;
  height: 19vw;
  max-height: 90px;
  min-height: 68px;
  margin-right:12px;
  overflow:hidden; 
  background-image:${({ image }) => `url(${image})`};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  background-color:lightgray;
`;
