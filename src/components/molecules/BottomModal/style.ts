import Styled from 'styled-components';

export const Container = Styled.div`
  position:fixed;
  bottom:0;
  transform:translateX(-20px);
  width:360px;
  height:100vh;
  background-color: rgba(43, 43, 43, 0.6);
  overflow:hidden;
`;

export const Box = Styled.div`
  width:100%;
  position:absolute;
  bottom:0;
  padding:24px 20px;
  background-color: #ffffff;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
`;

export const Title = Styled.p`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.16px;
  color: #121212;
  margin-bottom:8px;
`;

export const Btn = Styled.p`
  height:44px;
  font-size: 14px;
  letter-spacing: -0.14px;
  color: #4b4b4b;
  display:flex;
  align-items:center;
  cursor:pointer;
`;

export const Btn2 = Styled.p`
  display:flex;
  align-items:center;
  height:44px;
  font-size: 14px;
  letter-spacing: -0.14px;
  color: #4b4b4b;
  cursor:pointer;
`;
