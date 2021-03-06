import Styled from 'styled-components';

export const Header = Styled.header`
  /* position: relative;
  height:616px;
  margin-bottom:16px; */
`;

export const Img = Styled.img`
  width:100%;
  max-width:480px;
  min-width:360px;
  min-height:475px;
  max-height:631px;
  height:120vw;
  object-fit:cover;
`;

export const HeaderBox = Styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  padding:0 20px;
`;

export const Container = Styled.div`
  width:100%;
  transform:translateY(-20px);
  padding:0 20px;
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
  font-size: ${({ theme }) => theme.sizes.font[4]};
  font-weight: bold;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.fontGray[2]};
  margin-bottom:8px;
  line-height: 1.5;
`;

export const Location = Styled.p`
  font-size: 18px;
  letter-spacing: -0.18px;
  text-align: left;
  color: ${({ theme }) => theme.colors.fontGray[2]};
  line-height: 1.5;
  margin-bottom:18px;
`;

export const DetailBox = Styled.div`
  display:flex;
  align-items: center;
`;
