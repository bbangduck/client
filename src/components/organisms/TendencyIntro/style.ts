import Styled from 'styled-components';

export const Section = Styled.section`
  width: 100%;
  height: 242px;
  border-radius: 8px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:32px 0;
  margin-bottom:22px;
`;

export const ImgBox = Styled.div`
  width: 80px;
  height: 80px;
  background-color: #ff5c53;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:16px;
`;

export const PTag = Styled.p`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.16px;
  color: #2b2b2b;
  margin-bottom:32px;
`;

export const Ul = Styled.ul`
  width:100%;
  justify-content:center;
  display:flex;
`;
