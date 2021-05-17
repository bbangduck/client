import Styled from 'styled-components';

export const Container = Styled.aside`
  width: 320px;
  height: 238px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.colors.fontGray[1]};
  padding:20px;
`;

export const GraphBox = Styled.div`
  margin-bottom:16px;
`;

export const Box = Styled.div`
  display:flex;
  align-items: center;
  justify-content:space-between;
  margin-bottom:12px;
`;

export const P = Styled.p`
  font-size: 12px;
  letter-spacing: normal;
  color: #ffffff;
`;

export const BarBg = Styled.div`
  width:216px;
  height:16px;
  background-color: rgba(255, 255, 255, 0.2);
`;

interface BarProps {
  width: string;
}
export const Bar = Styled.div<BarProps>`
  width:${({ width }) => width};
  height:16px;
  background-color: white;
`;

export const BottomBox = Styled.div`
  display:flex;
  align-items: center;
  justify-content:space-between;
`;

export const Left = Styled.p`
  font-size: 12px;
  letter-spacing: -0.12px;
  color: #9c9c9c;
`;

export const Span = Styled.span`
  font-weight:bold;
`;

export const Right = Styled.div`
  width: 81px;
  height: 26px;
  border-radius: 4px;
  border: solid 1px #ffffff;
  display:flex;
  justify-content:center;
  align-items: center;
  cursor:pointer;
`;

export const IsPTag = Styled.p`
  font-size: 12px;
  letter-spacing: -0.12px;
  color: #ffffff;
`;

// 없을때
export const Aside = Styled.aside`
  width: 320px;
  height: 238px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.colors.fontGray[1]};
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = Styled.img`
  margin-bottom:4px;
`;

export const PTag = Styled.p`
  font-size: 12px;
  letter-spacing: -0.12px;
  color: #9c9c9c;
`;
