import Styled from 'styled-components';

export const Container = Styled.div`
  width:360px;
  transform:translateX(-20px);
  height:40px;
  padding:0 20px;
  display:flex;
  border-bottom: 1px solid #ebebeb;
  cursor:pointer;
`;

interface PTagProps {
  clicked: boolean;
}
export const PTag = Styled.p<PTagProps>`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.14px;
  color: #2b2b2b;
  margin-right:20px;
  height:100%;
  padding:12px 0 8px 0;
  border-bottom:${({ clicked }) => (clicked ? '2px solid #2b2b2b' : 'none')} ;
  font-weight:${({ clicked }) => (clicked ? 'bold' : 'normal')} ;
`;
