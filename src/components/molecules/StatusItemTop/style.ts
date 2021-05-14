import Styled from 'styled-components';

export const Container = Styled.div`
  height:37px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:20px;
`;

export const LeftBox = Styled.div`
  display:flex;
  align-items:flex-end;
`;

export const Number = Styled.span`
  font-family: Montserrat;
  font-size: ${({ theme }) => theme.sizes.font[4]};
  font-weight: bold;
  line-height: 1.08;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.fontGray[1]};
  margin-right:16px;
`;

export const Date = Styled.span`
  font-size: ${({ theme }) => theme.sizes.font[0]};
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.colors.fontGray[0]};
  margin-bottom:6px;
`;

export const Img = Styled.img`
  cursor:pointer;
`;
