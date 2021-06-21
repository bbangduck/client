import Styled from 'styled-components';

export const Container = Styled.div`
  margin-left:48px;
`;

export const HashBox = Styled.ul`
  display:flex;
  flex-wrap:wrap;
  margin-bottom:4px;
  height:auto;
`;

export const Help = Styled.p`
  font-size: 10px;
  color: #9c9c9c;
  margin-bottom:8px;
`;

export const ThumbBox = Styled.div`
  width: 92px;
  height: 32px;
  padding: 4px 8px;
  border: solid 1px #ebebeb;
  background-color: #ffffff;
  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:pointer;
`;

export const ThumbP = Styled.p`
  font-size: 10px;
  color: #9c9c9c;
  cursor:pointer;
`;

interface BoxProps {
  moreOn: boolean;
}
export const Box = Styled.div<BoxProps>`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:${({ moreOn }) => (moreOn ? '12px' : '0')};
`;

export const CommentBox = Styled.div`
  width: 100%;
  padding:12px;
  background-color: #f6f6f6;
`;

export const CommentTop = Styled.div`
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  margin-bottom:8px;
`;

export const CommentLocation = Styled.p`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.12px;
  color: #2b2b2b;
`;

export const Date = Styled.div`
  font-size: 10px;
  letter-spacing: -0.1px;
  color: #9c9c9c;
`;

export const Comment = Styled.div`
  font-size: 12px;
  letter-spacing: -0.12px;
  color: #2b2b2b;
  line-height: 1.5;
`;
