import Styled from 'styled-components';

export const Container = Styled.button`
  background-color:white;
  border:none;
  outline:none;
  width:90px;
  display:flex;
  flex-direction:column;
  align-items:center;
  cursor:pointer;
`;

export const ImgBox = Styled.div`
  width: 32px;
  height: 32px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:lightgray;
`;

export const Img = Styled.img`
  object-fit: contain;
`;

export const PTag = Styled.p`
  font-size: 10px;
  font-weight: 500;
  line-height: 1.5;
  color: #2b2b2b;
`;
