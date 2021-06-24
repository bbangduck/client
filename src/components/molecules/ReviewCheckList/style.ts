import Styled from 'styled-components';

export const Title = Styled.div`
  height:40px;
  display:flex;
  align-items:center;
  margin-bottom:16px;
  padding:0 20px;
`;

export const PTag = Styled.p`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.16px;
  color: #121212;
  margin-right:8px;
`;

export const BoldPTag = Styled.p`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.24px;
  color: #2b2b2b;
`;

export const BtnBox = Styled.div`
  position:relative;
  min-height:52px;
  height:calc(100vh - 1035px);
`;

export const CompleteBtn = Styled.button`
  position:absolute;
  bottom:0;
  width:100%;
  height:52px;
  background-color: #2b2b2b;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  cursor:pointer;
`;
