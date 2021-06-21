import Styled from 'styled-components';

const Layout = Styled.div`
  font-family:"NotoSansCJKkr"; 
  position:relative;
  width: 100vw;
  min-width:360px;
  max-width:480px;
  height:100%;
  margin:0 auto;
  background-color: #ffffff;
  min-height:${({ theme }) => theme.sizes.mobile.minHeight};
`;

export default Layout;
