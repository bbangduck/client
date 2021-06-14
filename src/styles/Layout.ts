import Styled from 'styled-components';

const Layout = Styled.div`
  font-family:"NotoSansCJKkr"; 
  position:relative;
  width:360px;
  height:auto;
  min-height:${({ theme }) => theme.sizes.mobile.minHeight};
  padding: 0 20px;
  margin:auto;
  background-color: #ffffff;
  overflow:hidden;
`;

export default Layout;
