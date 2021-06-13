import Styled from 'styled-components';

export const Label = Styled.label`
  display:flex;
  flex-direction:column;
`;

export const InputBox = Styled.div`
  position:relative;
`;

export const Span = Styled.span`
  font-size: 12px;
  color: #4b4b4b;
  margin-bottom:8px;
`;

interface InputProps {
  focus: boolean;
}
export const Input = Styled.input<InputProps>`
  padding: 12px 44px 12px 12px;
  border: solid 1px ${({ focus }) => (focus ? ' #2b2b2b' : '#cbcbcb')};
  font-size: 14px;
  color: #2b2b2b;
  outline:none;
  width:100%;

  ::placeholder {
    color: #9c9c9c;
  }
`;

export const deleteBox = Styled.div`
  position:absolute;
  right:10px;
  top:50%;
  transform:translateY(-50%);
  cursor:pointer;
`;

export const ErrorMsg = Styled.span`
  font-size: 10px;
  line-height: 2.6;
  color: #ff5c53;
`;

export const BtnBox = Styled.div`
  height:470px;
  min-height:calc(100vh - 246px);
`;
