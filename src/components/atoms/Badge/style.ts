import Styled from 'styled-components';

export const Container = Styled.li`
  min-width: 68px;
  max-width:94px;
  width:21.25%;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const ImgBox = Styled.div`
  width: 100%;
  min-height: 68px;
  max-height:94px;
  height:19vw;
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
