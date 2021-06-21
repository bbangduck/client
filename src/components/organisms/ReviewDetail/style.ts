import Styled from 'styled-components';

export const PTag = Styled.p`
  height:40px;
  line-height:40px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.16px;
  color: #121212;
  margin-bottom:16px;
  padding:0 20px;
`;

export const BtnBox = Styled.div`
  height:calc(100vh - 848px);
  min-height:52px;
`;

export const Btn = Styled.button`
  position:absolute;
  width: 100%;
  height: 52px;
  background-color: #2b2b2b;
  left:0;
  bottom:0;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  cursor:pointer;
`;
