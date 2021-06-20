import Styled from 'styled-components';

export const Li = Styled.li`
  border-bottom:1px solid #ebebeb;
  margin-bottom:24px;
  padding-bottom:24px;
  width:100%;
`;

export const TopBox = Styled.div`
  height:64px;
  width:100%;
  display:flex;
  align-items:center;
  padding:12px 0;
`;

export const Img = Styled.img`
  width:40px;
  height:40px;
  margin-right:8px;
  border-radius:50%;
`;

export const RightBox = Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:100%;
  width:100%;
`;

export const Box = Styled.div`
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
`;

export const Level = Styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 2.17;
  letter-spacing: -0.12px;
  color: #9c9c9c;
`;

export const Nickname = Styled.p`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.14px;
  color: #4b4b4b;
  line-height: 1.86;
`;

export const Date = Styled.p`
  font-size: 10px;
  letter-spacing: -0.1px;
  color: #9c9c9c;
`;

export const SqureBoxs = Styled.div`
  display:flex;
  margin-bottom:12px;
  margin-left:48px;
  `;

export const ReviewContent = Styled.div`
  margin-left:48px;
  font-size: ${({ theme }) => theme.sizes.font[1]};
  line-height: 2;
  letter-spacing: -0.12px;
  color: ${({ theme }) => theme.colors.fontGray[3]};
  position:relative;
  margin-bottom:12px;
`;

export const MoreBox = Styled.div`
  position:absolute;
  bottom:0;
  right:0;
  width:47px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  cursor:pointer;
`;

export const More = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[1]};
  font-weight: bold;
  line-height: 2.17;
  color: ${({ theme }) => theme.colors.fontGray[1]};
`;
