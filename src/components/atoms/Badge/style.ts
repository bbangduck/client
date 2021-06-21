import Styled from 'styled-components';

export const Container = Styled.li`
  width: 68px;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const ImgBox = Styled.div`
  width: 68px;
  height: 68px;
  background-color:lightgray;
  margin-bottom:4px;
  overflow:hidden;
  object-fit:cover;
  background:gray;
  `;

export const Img = Styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
`;

export const Span = Styled.span`
  font-size: 10px;
  line-height: 1.5;
  text-align: center;
  color: #9c9c9c;
`;
