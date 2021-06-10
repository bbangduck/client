import Styled from 'styled-components';

interface FormProps {
  isFocus: boolean;
  marginBottom: number;
}
export const Form = Styled.form<FormProps>`
  position:relative;
  display:flex;
  align-items:center;
  height:44px;
  background-color:${({ isFocus }) => (isFocus ? 'white' : '#f6f6f6')};
  margin-bottom:${({ marginBottom }) => `${marginBottom}px`};
  border:${({ isFocus }) => (isFocus ? '1px solid #2b2b2b' : 'none')};
`;

export const Input = Styled.input`
  width:100%;
  height:100%;
  padding:0 80px 0 12px;
  border:none;
  background:none;
  outline:none;

  ::placeholder{
    font-size: 14px;
    letter-spacing: -0.35px;
    color: #9c9c9c;
  }
`;

export const Img = Styled.img`
  position:absolute;
  right:46px;
  cursor:pointer;
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
