import Styled from 'styled-components';

interface ContainerProps {
  pop: boolean;
}
export const Container = Styled.div<ContainerProps>`
  white-space:nowrap;
  display:flex;
  height:44px;
  justify-content:center;
  align-items:center;
  position:fixed;
  left:50%;
  padding: 12px 40px;
  opacity: 0.7;
  border-radius: 109px;
  background-color: #000000;
  font-size: 14px;
  letter-spacing: -0.14px;
  color: #ffffff;
  transform:translate(-50%,${({ pop }) => (pop ? '76px' : 'calc(-80px)')});
  transition:.5s;
  z-index:1000;
`;
