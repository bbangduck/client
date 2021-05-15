import Styled from 'styled-components';

export const Header = Styled.header`
  position: relative;
  height:616px;
  margin-bottom:16px;
`;

export const Bg = Styled.div`
  position: absolute;
  left:0;
  top:0;
  width:100%;
  height: 475px;
  background-color:gray;
`;

export const Container = Styled.div`
  width:100%;
  transform:translateY(379px);
`;

export const TotalBox = Styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const LeftBox = Styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

export const MapBox = Styled.div`
  width:40px;
  height:40px;
  border-radius:50%;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color:white;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  cursor:pointer;
`;

export const H1Tag = Styled.h1`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.24px;
  color: #121212;
  margin-bottom:8px;
  line-height: 1.5;
`;

export const H2Tag = Styled.h2`
  font-size: 18px;
  letter-spacing: -0.18px;
  text-align: left;
  color: #121212;
  line-height: 1.5;
  margin-bottom:18px;
`;

export const DetailBox = Styled.div`
  display:flex;
  align-items: center;
`;
