import Styled from 'styled-components';

export const Container = Styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 7px 0;
  margin-bottom:8px;
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[3]};
  font-weight: bold;
  letter-spacing: -0.16px;
  color:  ${({ theme }) => theme.colors.fontGray[2]};
`;

export const Box = Styled.div`
  display:flex;
  align-items:center;
  padding: 4px 10px;
  border-radius: 261px;
  border: solid 1px #ebebeb;
  cursor:pointer;
`;

export const Span = Styled.span`
  font-size:  ${({ theme }) => theme.sizes.font[1]};
  color:  ${({ theme }) => theme.colors.fontGray[1]};
  margin-left:4px;
`;
