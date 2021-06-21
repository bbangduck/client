import Styled from 'styled-components';

export const Container = Styled.div`
  padding:0 20px;
  min-height:716px;
  height:100vh;
`;

export const Box = Styled.div`
  position:relative;
  transform:translateY(-71px);
  padding:0 20px;
`;

export const H1 = Styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: #2b2b2b;
  margin:20px 0;
`;

export const H2 = Styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: -0.35px;
  text-align: left;
  color: #9c9c9c;
  margin-bottom:436px;
`;

export const Button = Styled.button`
  cursor:pointer;
  position:absolute;
  bottom:20px;
  width:calc(100% - 40px);
  height:52px;
  box-shadow: 0 -5px 10px 0 rgba(0, 0, 0, 0.05);
  background-color: #2b2b2b;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
`;
