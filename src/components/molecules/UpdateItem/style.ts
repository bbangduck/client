import Styled from 'styled-components';

export const Container = Styled.div`
  margin-bottom:40px;
`;

export const TopBox = Styled.div`
  height: 40px;
  margin-bottom:8px;
  display:flex;
  align-items:center;
`;

export const H2 = Styled.h2`
  font-size:${({ theme }) => theme.sizes.font[3]};
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.16px;
  color: ${({ theme }) => theme.colors.fontGray[2]};
`;

export const BottomBox = Styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

export const PTag = Styled.p`
  font-size: 14px;
  line-height: 1.86;
  color: ${({ theme }) => theme.colors.fontGray[3]};
`;

export const Img = Styled.img`
  cursor:pointer;
`;
