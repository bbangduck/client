import Styled from 'styled-components';

export const Form = Styled.form`
  display:flex;
  height: 44px;
  margin-bottom:8px;
`;

export const Input = Styled.input`
  margin-right:8px;
  width: 100%;
  border: solid 1px #cbcbcb;
  outline:none;
  padding:12px;
  font-size: 14px;

  ::placeholder {
    font-size: 14px;
    color: #9c9c9c;
  }
`;

export const Btn = Styled.button`
  height:100%;
  width: 84px;
  background-color: #2b2b2b;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 14px;
  color: #ffffff;
  cursor:pointer;
`;
