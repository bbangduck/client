import Styled from 'styled-components';

export const Li = Styled.li`
  width:44%;
  min-height:265px;
  min-width:152px;
  margin-bottom:32px;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
`;

interface ImgBoxProps {
  image: string;
}
export const ImgBox = Styled.div<ImgBoxProps>`
  position:relative;
  width: 100%;
  height:100%;
  min-height: 215px;
  overflow:hidden; 
  background-image:${({ image }) => `url(${image})`};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  margin-bottom:8px;
`;

export const MoreBox = Styled.div`
  position:absolute;
  top:0;
  right:0;
  width: 32px;
  height: 32px;
  opacity: 0.8;
  background-color: #2b2b2b;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
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
