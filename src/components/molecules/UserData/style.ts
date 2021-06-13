import Styled from 'styled-components';

interface ContainerProps {
  marginBottom: number;
  marginTop: number;
}
export const Containter = Styled.div<ContainerProps>`
  position:relative;
  display:flex;
  align-items:flex-start;
  margin-bottom:${({ marginBottom }) => `${marginBottom}px`};
  margin-top:${({ marginTop }) => `${marginTop}px`};
`;

export const ContentBox = Styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
`;

export const Title = Styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  color: #121212;
  margin-bottom:2px;
`;

export const Intro = Styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: #121212;
  margin-bottom:8px;
`;

export const Box = Styled.div`
  padding: 4px 12px;
  border-radius: 4px;
  background-color: #f4f4f9;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.12px;
  color: #151950;
`;

export const ChoiceBtn = Styled.button`
  position:absolute;
  right:0;
  top:0;
  padding: 8px 16px;
  background-color: #2b2b2b;
  border:none;
  outline:none;
  font-size: 12px;
  color: #ffffff;
  cursor:pointer;
`;
