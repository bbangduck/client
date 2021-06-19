import Styled from 'styled-components';

interface ContainerProps {
  firstRender?: boolean;
}
export const Container = Styled.div<ContainerProps>`
  display:flex;
  flex-direction:column;
  border-radius: 8px;
  border: ${({ firstRender }) => (firstRender ? 'none' : 'solid 1px #ebebeb')};
  cursor:pointer;
`;

export const FirstBox = Styled.div<ContainerProps>`
  border-radius:8px 8px 0 0 ;
  padding:12px;
  height:42px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color:${({ firstRender }) => firstRender && '#f6f6f6'};
`;

export const Span = Styled.span<ContainerProps>`
  font-size: 12px;
  color: ${({ firstRender }) => (firstRender ? '#9c9c9c' : '#2b2b2b')};
`;

interface ListBoxProps {
  listOpen: boolean;
  height?: number;
}
export const ListBox = Styled.div<ListBoxProps>`
  position:relative;
  border-radius:0 0 8px 8px;
  height:${({ listOpen }) => (listOpen ? `${126}px` : '0')};
  overflow:${({ listOpen }) => (listOpen ? 'auto' : 'hidden')};
  transition:.2s;
`;

interface ItemBoxProps {
  borderRadius?: boolean;
}
export const ItemBox = Styled.div<ItemBoxProps>`
  padding:12px;
  height:42px;
  display:flex;
  align-items:center;
  border-radius:${({ borderRadius }) => borderRadius && '0 0 8px 8px'};

  &:hover {
    background-color:#f6f6f6;
  }
`;
