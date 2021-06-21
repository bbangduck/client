import Styled from 'styled-components';

export const Li = Styled.li`
  margin-right:16px;
  width:100%;
`;
interface ImgBoxProps {
  image?: string;
}
export const ImgBox = Styled.img<ImgBoxProps>`
  width: 100%;
  height: 100vw;
  min-height:334px;
  max-height:375px;
  margin-bottom:12px;
  object-fit:cover;
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
