import Styled from 'styled-components';

export const MapContainer = Styled.div`
  width:100%;
  height:calc(100vh - 56px);
`;

export const LocationBox = Styled.div`
  position:absolute;
  right:20px;
  top:76px;
  display:flex;
  justify-content:center;
  align-items:center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  cursor:pointer;
  z-index:10;
  background:white;
`;

export const DetailBox = Styled.div`
  position:absolute;
  left:0;
  bottom:81px;
  width:calc(100% - 40px);
  margin-left:20px;
  padding:16px;
  background:white;
  z-index:1;
`;

export const Title = Styled.p`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.14px;
  color: #4b4b4b;
  margin-bottom:7px;
`;

export const Address = Styled.p`
  font-size: 12px;
  letter-spacing: -0.12px;
  color: #9c9c9c;
  margin-bottom:16px;
`;

export const Themes = Styled.p`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.12px;
  color: #4b4b4b;
`;

export const Box = Styled.div`
  position:absolute;
  right:12px;
  bottom:12px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
`;
