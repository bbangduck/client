import Styled from 'styled-components';

export const Background = Styled.div`
  width:100%;
  height:100vh;
  background-color:#262626;
`;

export const Img = Styled.img`
  width:100%;
  max-height:720px;
  object-fit:cover;
`;

export const Container = Styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
`;

export const Box = Styled.div`
  width:100%;
  height: 56px;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  padding:0 20px;
  margin-bottom:20px;
`;

export const Later = Styled.button`
  background-color:transparent;
  border:none;
  outline:none;
  font-size: 12px;
  letter-spacing: -0.12px;
  color: #9c9c9c;
  cursor:pointer;
`;

export const PTag = Styled.p`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: #ffffff;
  padding-left:20px;
`;

export const Span = Styled.span`
  font-size: 36px;
  letter-spacing: -0.9px;
`;

export const BottomBox = Styled.div`
  width:100%;
  height:220px;
  position:absolute;
  bottom:0;
  transform:translateX(0px);
`;

export const Btn = Styled.button`
  display:flex;
  align-items:center;
  justify-content:center;
  width:320px;
  height:52px;
  background-color: #ffdd00;
  font-size: 14px;
  font-weight: bold;
  color: #2b2b2b;
  cursor:pointer;
  margin-bottom:12px;
`;

export const Btn2 = Styled.button`
  display:flex;
  align-items:center;
  justify-content:center;
  width:320px;
  height:52px;
  background-color: #1ec800;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  cursor:pointer;
  margin-bottom:12px;
`;
