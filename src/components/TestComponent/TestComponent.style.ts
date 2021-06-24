import Styled from 'styled-components';

export const Ptag = Styled.p`
  color:${({ theme }) => theme.colors.testBlue};
`;

export const Div = Styled.div`
  width:50px;
  height:50px;
  background-color:gray;
  overflow-y:scroll;
  /* overflow-y:scroll; */
`;
