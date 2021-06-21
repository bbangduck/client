import Styled from 'styled-components';

export const Container = Styled.div`
  width:100%;
  height: calc(100vh - 202px);
  min-height:514px;
  position:relative;
`;

export const BtnBox = Styled.div`
  width:100%;
  position:absolute;
  bottom:104px;
  padding:0 20px;
`;

export const Btn = Styled.button`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:52px;
  background-color: #ffdd00;
  font-size: 14px;
  font-weight: bold;
  color: #2b2b2b;
  cursor:pointer;
  margin-bottom:12px;
`;

export const Btn2 = Styled.button`
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:52px;
  background-color: #1ec800;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  cursor:pointer;
`;
