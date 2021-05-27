import Styled from 'styled-components';

export const Container = Styled.form`
  width:80px;
  margin:0 auto;
  height:80px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:20.4px;
  position:relative;
`;

export const IconBox = Styled.label`
  width:32px;
  height:32px;
  position:absolute;
  right:0;
  bottom:0;
  border-radius:50%;
  cursor:pointer;
`;

export const FileUpload = Styled.input`
  display:none;
`;
