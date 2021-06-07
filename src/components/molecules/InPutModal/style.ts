import Styled from 'styled-components';

export const Container = Styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color: rgba(43, 43, 43, 0.6);
  display:flex;
  justify-content:center;
`;

export const ModalBox = Styled.div`
  position:absolute;
  top:28vh;
  padding: 32px 24px 24px 24px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const TitleBox = Styled.div`
  width: 232px;
  height: 40px;
  margin-bottom:8px;
  display:flex;
  align-items:center;
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[3]};
  font-weight: bold;
  letter-spacing: -0.16px;
  color:  ${({ theme }) => theme.colors.fontGray[2]};
`;

export const Label = Styled.label`
  display:flex;
  flex-direction:column;
  margin-bottom:25px;
`;

interface SpanProps {
  inputError: boolean;
}
export const Span = Styled.span<SpanProps>`
  font-size: ${({ theme }) => theme.sizes.font[0]};
  color:  ${({ theme, inputError }) => (inputError ? '#ff5c53' : theme.colors.fontGray[0])};
  margin-bottom:7px;
`;

export const Span2 = Styled.span`
  font-size: ${({ theme }) => theme.sizes.font[0]};
  color:#ff5c53;
  margin-top:8px;
`;

interface InputProps {
  inputError: boolean;
}
export const Input = Styled.input<InputProps>`
  height:27px;
  border:none;
  border-bottom: solid 1px ${({ inputError }) => (inputError ? '#ff5c53' : '#cbcbcb')};
  outline:none;
  font-size: ${({ theme }) => theme.sizes.font[1]};
  color: ${({ theme }) => theme.colors.fontGray[3]};
`;

export const BtnBox = Styled.div`
  display:flex;
  justify-content:flex-end;
`;

export const LeftBtn = Styled.button`
  width: 74px;
  height: 36px;
  margin: 0 8px 0 0;
  background-color: #ffffff;
  border:none;
  outline:none;
  cursor:pointer;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.fontGray[0]};
`;

export const RightBtn = Styled.button`
  width: 74px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.fontGray[1]};
  border:none;
  outline:none;
  cursor:pointer;
  font-size: ${({ theme }) => theme.sizes.font[2]};
  color: #ffffff;
`;
