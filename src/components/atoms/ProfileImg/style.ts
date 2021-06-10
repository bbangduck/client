import Styled from 'styled-components';

interface ImgProps {
  width: number;
  height: number;
  image: string;
  marginRight: number;
}
export const Img = Styled.div<ImgProps>`
  border-radius:50%;
  margin-right:${({ marginRight }) => `${marginRight}px`};
  width:${({ width }) => `${width}px`};
  height:${({ height }) => `${height}px`};
  overflow:hidden; 
  background-image:${({ image }) => `url(${image})`};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
`;
