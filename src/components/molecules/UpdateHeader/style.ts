import Styled from 'styled-components';

interface HeaderProps {
  img?: string;
  marginBottom: string;
}
export const Header = Styled.header<HeaderProps>`
  position:relative;
  height:56px;
  width:100%;
  max-width:480px;
  display:flex;
  align-items:center;
  margin-bottom:${({ marginBottom }) => marginBottom} ;
  justify-content:${({ img }) => img && ` space-between`};
`;

export const ImgBox = Styled.div`
  width: 24px;
  height: 24px;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  z-index:1;
  `;

export const H1Box = Styled.div`
  width:100%;
  height:56px;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  left:0;
  z-index:0;
`;

export const H1 = Styled.h1`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: -0.35px;
  color: ${({ theme }) => theme.colors.fontGray[1]};
`;

export const Img = Styled.img`
  cursor:pointer;
`;
