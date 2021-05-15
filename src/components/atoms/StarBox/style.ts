import Styled from 'styled-components';

interface LikeProps {
  shadow?: boolean;
}
export const Like = Styled.div<LikeProps>`
  width: 56px;
  height: 31px;
  background-color: ${({ theme }) => theme.colors.fontGray[1]};
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:8px;
  box-shadow: ${({ shadow }) => shadow && '0 5px 10px 0 rgba(0, 0, 0, 0.05)'};
`;

export const Img = Styled.img`
  margin-right:2px;
`;

export const Span = Styled.span`
  font-family: Montserrat;
  font-size: ${({ theme }) => theme.sizes.font[1]};
  font-weight: bold;
  color: #ffffff;
`;
