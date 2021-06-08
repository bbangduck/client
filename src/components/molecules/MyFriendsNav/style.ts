import Styled from 'styled-components';

export const Container = Styled.div`
  display:flex;
  justify-content:space-between;
  width: 360px;
  transform: translate(-20px,-20px);
  border-bottom:1px solid #ebebeb;
  padding: 0 63px;
`;

interface PTagProps {
  clicked: boolean;
}
export const PTag = Styled.p<PTagProps>`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.14px;
  color: #2b2b2b;
  font-weight: ${({ clicked }) => clicked && 'bold'};
  border-bottom: ${({ clicked }) => clicked && '2px solid #2b2b2b'};
  padding: ${({ clicked }) => (clicked ? '12px 0 7px 0' : '10px 0')};
  cursor:pointer;
`;
