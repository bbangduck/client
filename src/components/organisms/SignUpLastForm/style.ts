import Styled from 'styled-components';

export const Form = Styled.form`
  padding:0 20px;
`;

export const Label = Styled.label`
  display:flex;
  flex-direction:column;
`;

export const InputBox = Styled.div`
  display:flex;
`;

export const Span = Styled.span`
  font-size: 12px;
  color: #4b4b4b;
  margin-bottom:8px;
`;

interface InputProps {
  focus?: boolean;
}
export const Input = Styled.input<InputProps>`
  width:100%;
  padding: 12px 44px 12px 12px;
  border: solid 1px ${({ focus }) => (focus ? ' #2b2b2b' : '#cbcbcb')};
  font-size: 14px;
  color: #2b2b2b;
  outline:none;
  margin-right:8px;

  ::placeholder {
    color: #9c9c9c;
  }
`;

export const CheckBtn = Styled.button`
  position:relative;
  width:84px;
  height:44px;
  background-color: #2b2b2b;
  font-size: 14px;
  color: #ffffff;
  cursor:pointer;
`;

export const ErrorMsg = Styled.span`
  font-size: 10px;
  line-height: 2.6;
  color: #ff5c53;
`;

export const SuccessMsg = Styled.span`
  display:flex;
  align-items:center;
  font-size: 10px;
  line-height: 2.6;
  color: #06880d;
`;

export const BtnBox = Styled.div`
  height:470px;
  min-height:calc(100vh - 246px);
`;
