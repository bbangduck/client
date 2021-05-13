import { reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import './fontFace.css';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *{
    box-sizing:border-box;
  }
  
  button{
    border:none;
    outline:none;
  }

  body{
    background-color:rgb(233, 249, 255);
  }
`;
