import Styled from 'styled-components';

interface ContainerProps {
  pop: boolean;
}
export const Container = Styled.div<ContainerProps>`
  position:absolute;
  left:50%;
  height:50px;
  line-height:50px;
  transform:translate(-50%,${({ pop }) => (pop ? '0' : ' -50px')});
  font-size: 14px;
  color: #06880d;
  transition:.5s;
`;
