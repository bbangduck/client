import Styled from 'styled-components';

export const Title = Styled.div`
  height:40px;
  display:flex;
  align-items:center;
  margin-bottom:16px;
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

export const CompleteBtn = Styled.button`
  width:360px;
  transform:translateX(-20px);
  height:52px;
  background-color: #2b2b2b;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  cursor:pointer;
`;
