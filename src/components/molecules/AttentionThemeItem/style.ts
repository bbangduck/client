import Styled from 'styled-components';

export const Li = Styled.li`
  padding:10px 20px;
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  width:100%;
`;

export const LeftBox = Styled.div`
  display:flex;
  height: 100%;
  width:62%;
`;

export const ImgBox = Styled.img`
  width:40%;
  max-width:110px;
  min-width:68px;
  min-height:96px;
  max-height:143px;
  height: 30vw;
  overflow:hidden; 
  margin-right:16px;
  object-fit:cover;
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
