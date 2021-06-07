import Styled from 'styled-components';

export const Container = Styled.div`
  height:216px;
`;

export const H2 = Styled.h2`
  font-size:${({ theme }) => theme.sizes.font[3]};
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.16px;
  color: ${({ theme }) => theme.colors.fontGray[2]};
  margin-bottom:8px;
`;

export const PTag = Styled.p`
  font-size: 14px;
  letter-spacing: -0.14px;
  color: #2b2b2b;
`;

export const Li = Styled.li`
  height:44px;
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

export const Img = Styled.img`
  cursor:pointer;
`;
