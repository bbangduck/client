import Styled from 'styled-components';

export const Container = Styled.div`
  position:fixed;
  bottom:0;
  width:360px;
  height:100%;
  transform:translateX(-20px);
  background-color: rgba(43, 43, 43, 0.6);
  display:flex;
  justify-content:center;
  z-index:10;
`;

export const ModalBox = Styled.div`
  position:absolute;
  padding: 32px 24px 24px 24px;
  top:28vh;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const PTag = Styled.p`
  width: 232px;
  height: 40px;
  margin-bottom:12px;
  display:flex;
  align-items:center;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.16px;
  color: #121212;
`;

export const P = Styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: #4b4b4b;
  margin-bottom:24px;
`;

export const BtnBox = Styled.div`
  display:flex;
  justify-content:flex-end;
`;

export const Btn = Styled.button`
  width: 74px;
  height: 36px;
  background-color: #2b2b2b;
  border:none;
  outline:none;
  cursor:pointer;
  font-size: ${({ theme }) => theme.sizes.font[2]};
  color: #ffffff;
`;
