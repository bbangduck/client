import Styled from 'styled-components';

export const Container = Styled.aside`
  position:fixed;
  bottom:0;
  width:100%;
  max-width:480px;
  min-width:360px;
  height:52px;
  background-color:white;
  display:flex;
  cursor:pointer;
  z-index:10;
`;

export const leftBox = Styled.div`
  width: 17.8%;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const Line = Styled.div`
  width: 1px;
  height: 16px;
  background-color: #ebebeb;
  transform:translateX(20px);
`;

export const CafeBox = Styled.div`
  width:41.1%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.fontGray[1]};
`;

export const ReviewBox = Styled.div`
  width:41.1%;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: #2b2b2b;
`;

export const Img = Styled.img`
  margin-right:4px;
`;

export const P = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  font-weight: bold;
  color: #ffffff;
`;
