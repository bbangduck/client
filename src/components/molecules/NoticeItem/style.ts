import Styled from 'styled-components';

export const Container = Styled.li`
  height:83px;
  border-bottom:1px solid #ebebeb;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

export const Box = Styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:4px;
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.fontGray[1]};
`;

export const Img = Styled.img`
  cursor:pointer;
`;

export const Span = Styled.span`
  font-family: Montserrat;
  font-size: ${({ theme }) => theme.sizes.font[1]};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.fontGray[0]};;
`;
