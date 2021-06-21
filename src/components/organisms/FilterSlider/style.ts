import Styled from 'styled-components';

interface ContainerProps {
  filterOn: boolean;
}
export const Container = Styled.div<ContainerProps>`
  position:fixed;
  bottom:0;
  transform:${({ filterOn }) => (filterOn ? 'translateX(0)' : 'translateX(600px)')};
  height:100vh;
  width:100vw;
  max-width:480px;
  min-width:360px;
  background-color:#2b2b2b60;
  z-index:1;
  display:flex;
  justify-content:flex-end;
  transition:.6s;
`;

export const ContentBox = Styled.div`
  min-width: 256px;
  width:71%;
  height:100%;
  background-color:#ffffff;
  padding-top:24px;
`;

export const HeaderBox = Styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  height:56px;
  padding:0 20px;
`;

export const PTag = Styled.p`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.4px;
  color: #2b2b2b;
`;

export const RightBox = Styled.div`
  display:flex;
  align-items:center;
  cursor:pointer;
`;

export const Span = Styled.span`
  font-size: 12px;
  color: #2d369f;
  margin-left:4px;
`;
