import Styled from 'styled-components';

export const Li = Styled.li`
  position:relative;
  margin-bottom:32px;
`;

interface ImgBoxProps {
  image: string;
}
export const ImgBox = Styled.div<ImgBoxProps>`
  width: 152px;
  height: 215px;
  overflow:hidden; 
  background-image:${({ image }) => `url(${image})`};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  margin-bottom:8px;
`;

export const PTag = Styled.p`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.14px;
  color: #2b2b2b;
  margin-bottom:4px;
`;

export const Span = Styled.span`
  font-size: 12px;
  letter-spacing: -0.12px;
  color: #4b4b4b;
`;
