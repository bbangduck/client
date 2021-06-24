import { reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import './fontFace.css';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *{
    box-sizing:border-box;
    font-family:NotoSansCJKkr; 
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  
  button{
    border:none;
    outline:none;
  }
  html,body{
    font-size:16px;
  }
  body{
    background-color:rgb(233, 249, 255);
  }
`;
