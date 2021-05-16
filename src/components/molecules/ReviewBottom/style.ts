import Styled from 'styled-components';

export const Container = Styled.aside`
  position:fixed;
  bottom:0;
  width:360px;
  height:52px;
  background-color:white;
  transform:translateX(-20px);
  display:flex;
  cursor:pointer;
`;

export const leftBox = Styled.div`
  width: 64px;
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
  width:148px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const PTag = Styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #2b2b2b;
`;

export const ReviewBox = Styled.div`
  width:148px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: #2b2b2b;
`;

export const P = Styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
`;
