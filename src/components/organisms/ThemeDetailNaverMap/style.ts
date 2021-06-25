import Styled from 'styled-components';

export const MapContainer = Styled.div`
  width:100%;
  height:calc(100vh - 56px);
`;

export const LocationBox = Styled.div`
  position:absolute;
  right:20px;
  top:20px;
  display:flex;
  justify-content:center;
  align-items:center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  cursor:pointer;
  z-index:1;
`;
