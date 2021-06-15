import Styled from 'styled-components';

export const Container = Styled.div`
  margin-bottom:32px;
`;

export const Title = Styled.p`
  height:40px;
  line-height:40px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.16px;
  color: #121212;
  margin-bottom:16px;
`;

export const SubTitle = Styled.p`
  height:36px;
  line-height:36px;
  font-size: 14px;
  letter-spacing: -0.14px;
  color: #2b2b2b;
  margin-bottom:19px;
`;

export const FlexBox = Styled.div`
  transform:translateX(-20px);
  width:360px;
  padding:0 17px;
  display:flex;
  flex-wrap:wrap;
`;

interface BoxProps {
  clicked: boolean;
}
export const Box = Styled.div<BoxProps>`
  margin:0 3px 8px 3px ;
  padding: ${({ clicked }) => (clicked ? '6px 12px' : '5px 11px')};
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius: 15px;
  border: ${({ clicked }) => (clicked ? 'none' : 'solid 1px #ebebeb')};
  font-size: 11px;
  letter-spacing: -0.11px;
  color: ${({ clicked }) => (clicked ? '#ffffff' : '#4b4b4b')};
  cursor:pointer;
  background-color:${({ clicked }) => (clicked ? '#2b2b2b' : 'transparent')};
`;
