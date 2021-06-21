import Styled from 'styled-components';

export const Container = Styled.div`
  position:fixed;
  bottom:0;
  width:100%;
  max-width:480px;
  min-width:360px;
  height:100%;
  background-color: rgba(43, 43, 43, 0.6);
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:10;
`;

export const ModalBox = Styled.div`
  position:relative;
  padding:24px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

export const CheckBox = Styled.div`
  position:absolute;
  top:-20px;
  left:24px;
  width: 40px;
  height: 40px;
  border-radius:50%;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  background-color: #121212;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const PTag = Styled.p`
  height:40px;
  font-size: 16px;
  line-height:40px;
  font-weight: bold;
  letter-spacing: -0.16px;
  color: #121212;
  margin-bottom:8px;
`;

export const PTag2 = Styled.p`
  font-size: 12px;
  line-height: 2.17;
  color: #4b4b4b;
  margin-bottom:24px;
`;

export const Box = Styled.div`
  width:216px;
  display:flex;
  justify-content:flex-end;
`;

export const Btn1 = Styled.button`
  width: 116px;
  height: 36px;
  margin-right:8px;
  background-color: #ffffff;
  font-size: 14px;
  color: #9c9c9c;
  cursor:pointer;
`;

export const Btn2 = Styled.button`
  width: 100px;
  height: 36px;
  background-color: #2b2b2b;
  font-size: 14px;
  color: #ffffff;
  cursor:pointer;
`;
