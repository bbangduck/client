import Styled from 'styled-components';

interface BoxProps {
  isOn: boolean;
}
export const Box = Styled.div<BoxProps>`
  height: 40px;
  margin-bottom: 12px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom: ${({ isOn }) => (isOn ? '6px' : '12px')};
`;

export const PTag = Styled.p`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.16px;
  color: #121212;
`;

export const RightBox = Styled.div`
  width: 102px;
  height: 32px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #2b2b2b;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
`;

export const Span = Styled.span`
  font-size: 12px;
  letter-spacing: -0.12px;
  color: #ffffff;
  margin-right:8px;
`;

interface AnnounceProps {
  isOn: boolean;
}
export const Announce = Styled.div<AnnounceProps>`
  width: 320px;
  height: 60px;
  margin-bottom: ${({ isOn }) => (isOn ? '24px' : '40px')};
  padding-left:12px;
  border-radius: 8px;
  background-color: #f6f6f6;
  display:flex;
  align-items:center;
`;

export const PTag2 = Styled.p`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.12px;
  color: #9c9c9c;
  margin-left:8px;
`;
