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

export const TitleBox = Styled.div`
  width: 232px;
  height: 40px;
  margin-bottom:12px;
  display:flex;
  align-items:center;
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[3]};
  font-weight: bold;
  letter-spacing: -0.16px;
  color:  ${({ theme }) => theme.colors.fontGray[2]};
`;

export const P = Styled.p`
  line-height: 1.5;
  font-size: ${({ theme }) => theme.sizes.font[1]};
  color: ${({ theme }) => theme.colors.fontGray[3]};
  margin-bottom:24px;
`;

export const BtnBox = Styled.div`
  display:flex;
  justify-content:flex-end;
`;

export const LeftBtn = Styled.button`
  width: 74px;
  height: 36px;
  margin: 0 8px 0 0;
  background-color: #ffffff;
  border:none;
  outline:none;
  cursor:pointer;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.fontGray[0]};
`;

export const RightBtn = Styled.button`
  width: 74px;
  height: 36px;
  background-color: #ff5c53;
  border:none;
  outline:none;
  cursor:pointer;
  font-size: ${({ theme }) => theme.sizes.font[2]};
  color: #ffffff;
`;
