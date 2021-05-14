import Styled from 'styled-components';

export const Container = Styled.section`
  min-height:${({ theme }) => theme.sizes.mobile.minHeight};
  height:${({ theme }) => theme.sizes.mobile.height};
`;
