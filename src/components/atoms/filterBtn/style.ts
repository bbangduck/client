import Styled from 'styled-components';

export const Container = Styled.div`
  width:85px;
  height:40px;
  border-radius: 20px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  position:fixed;
  bottom:69px;
  left:50%;
  transform:translateX(-50%);
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
`;

export const Dot = Styled.div`
  position:absolute;
  top:8px;
  left:36px;
  width: 4px;
  height: 4px;
  border-radius:50%;
  background-color: #ff5c53;
`;

interface PTagProps {
  filtered: boolean;
}
export const PTag = Styled.p<PTagProps>`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.14px;
  color: ${({ filtered }) => (filtered ? '#4b4b4b' : '#2d369f')};
  margin-left:3px;
`;
