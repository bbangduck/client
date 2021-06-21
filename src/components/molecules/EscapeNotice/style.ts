import Styled from 'styled-components';

export const Section = Styled.section`
  height: 65px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  border-top:1px solid #ebebeb;
  margin-top:20px;
  cursor:pointer;
  padding:0 20px;
`;

export const Box = Styled.div`
  height:100%;
  display:flex;
  align-items: center;
`;

export const Img = Styled.img`
  margin-right:20px;
`;

export const PTag = Styled.p`
  font-size: 14px;
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.fontGray[1]};
`;
