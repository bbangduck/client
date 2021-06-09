import Styled from 'styled-components';

export const Form = Styled.form`
  position:relative;
  display:flex;
  align-items:center;
  height:44px;
  background:dodgerblue;
  background-color:#f6f6f6;
  margin-bottom:16px;
`;

export const Input = Styled.input`
  width:100%;
  height:100%;
  padding:0 48px 0 12px;
  border:none;
  background:none;
  outline:none;

  ::placeholder{
    font-size: 14px;
    letter-spacing: -0.35px;
    color: #9c9c9c;
  }
`;

export const Button = Styled.button`
  position:absolute;
  right:12px;
  cursor:pointer;
  width: 24px;
  height: 24px;
  border:none;
  outline:none;
  background-color:transparent;
  display:flex;
  justify-content:center;
  align-items:center;
`;
