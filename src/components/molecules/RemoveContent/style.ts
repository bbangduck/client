import Styled from 'styled-components';

export const Container = Styled.div`
  position:relative;
`;

export const H2 = Styled.h2`
  font-size: ${({ theme }) => theme.sizes.font[4]};
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: ${({ theme }) => theme.colors.fontGray[1]};
  margin-bottom:20px;
`;

export const Span = Styled.span`
  color: #ff5c53;
`;

export const P = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.fontGray[2]};;
  margin-bottom:20px;
`;

export const InputPositionPox = Styled.div`
  position:absolute;
  top:132px;
  width:100%;
`;
