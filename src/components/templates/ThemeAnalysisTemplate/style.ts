import Styled from 'styled-components';

export const Section = Styled.section`
  width:360px;
  transform:translateX(-20px);
  padding:0 20px 53px;
  background-color:#2b2b2b;
`;

export const PTag = Styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom:26px;
`;

export const Box = Styled.ul`
  margin-bottom:39px;
`;

export const Item = Styled.li`
  height:16px;
  display:flex;
  align-items: center;
  justify-content:space-between;
  margin-bottom:12px;
  position:relative;
`;

export const P = Styled.p`
  font-size: 12px;
  color: #ffffff;
`;

export const BarBg = Styled.div`
  width: 216px;
  height: 16px;
  background-color: rgba(255, 255, 255, 0.2);
  position:absolute;
  left:64px;
  top:50%;
  transform:translateY(-50%);
`;

interface BarProps {
  width: string;
}
export const Bar = Styled.div<BarProps>`
  width: ${({ width }) => width};
  height: 16px;
  background-color: white;
`;

export const People = Styled.p`
  font-size: 12px;
  color: #ffffff;
`;

export const BtnBox = Styled.div`
  position:relative;
  min-height:52px;
  height:calc(100vh - 721px);
`;

export const Btn = Styled.button`
  position:absolute;
  bottom:0;
  left:0;
  width: 320px;
  height: 52px;
  box-shadow: 0 -5px 10px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #2b2b2b;
  cursor:pointer;
`;
