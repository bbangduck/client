import Styled from 'styled-components';

export const Li = Styled.li`
  /* margin-right:16px; */
`;

interface ImgBoxProps {
  image: string;
}
export const ImgBox = Styled.div<ImgBoxProps>`
  width: 236px;
  height: 334px;
  overflow:hidden; 
  background-image:${({ image }) => `url(${image})`};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  margin-bottom:12px;
`;

export const H3 = Styled.h3`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  color: #121212;
  margin-bottom:4px;
`;

export const PTag = Styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: #9c9c9c;
`;
