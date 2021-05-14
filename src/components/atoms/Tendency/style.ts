import Styled from 'styled-components';

export const Container = Styled.li`
  height: 26px;
  padding: 0 12px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.fontGray[1]};
  margin-right:8px;
  display:flex;
  align-items:center;
  `;

export const Span = Styled.span`
  font-size: 12px;
  line-height: 26px;
  letter-spacing: -0.12px;
  color: #ffffff;
`;
