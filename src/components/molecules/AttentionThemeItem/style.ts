import Styled from 'styled-components';

export const Li = Styled.li`
  padding:10px 0;
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
`;

export const LeftBox = Styled.div`
  display:flex;
`;

interface ImgBoxProps {
  image: string;
}
export const ImgBox = Styled.div<ImgBoxProps>`
  width: 68px;
  height: 96px;
  overflow:hidden; 
  background-image:${({ image }) => `url(${image})`};
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  margin-right:16px;
`;

export const H3 = Styled.h3`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.45px;
  color: #2b2b2b;
  margin-bottom:6px;
`;

export const PTag = Styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: -0.14px;
  color: #4b4b4b;
`;

export const Span = Styled.span`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.12px;
  color: #9c9c9c;
`;

export const RightBox = Styled.div`
  display:flex;
`;

export const Box1 = Styled.div`
  width: 63px;
  height: 23px;
  background-color: #2d369f;
  font-size: 10px;
  letter-spacing: -0.1px;
  color: #ffffff;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-right:6px;
`;

export const Box2 = Styled.div`
  width: 63px;
  height: 23px;
  border: solid 1px #ebebeb;
  font-size: 10px;
  letter-spacing: -0.1px;
  color: #2d369f;
  display:flex;
  justify-content:center;
  align-items:center;
`;
