import Styled from 'styled-components';

export const Container = Styled.div`
  width:272px;
`;

export const TopBox = Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  height:40px;
  margin-bottom:12px;
`;

export const NameBox = Styled.div`
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  margin-bottom:9px;
`;

export const Name = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[2]};
  font-weight: bold;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.colors.fontGray[3]};
`;

export const Brief = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  font-weight: bold;
  letter-spacing: -0.12px;
  color: ${({ theme }) => theme.colors.fontGray[0]};
`;

export const Date = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[0]};
  letter-spacing: -0.1px;
  color: ${({ theme }) => theme.colors.fontGray[0]};
`;

export const Boxes = Styled.div`
  display:flex;
  margin-bottom:12px;
`;

export const ReviewContent = Styled.div`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  line-height: 2;
  letter-spacing: -0.12px;
  color: ${({ theme }) => theme.colors.fontGray[3]};
  position:relative;
  margin-bottom:12px;
`;

export const MoreBox = Styled.div`
  position:absolute;
  bottom:0;
  right:0;
  width:47px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
`;

export const More = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  font-weight: bold;
  line-height: 2.17;
  color: ${({ theme }) => theme.colors.fontGray[1]};
`;

export const HashBox = Styled.ul`
  display:flex;
  flex-wrap:wrap;
  margin-bottom:24px;
`;
