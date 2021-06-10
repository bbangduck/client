import Styled from 'styled-components';

export const Section = Styled.section`
  min-height:${({ theme }) => theme.sizes.mobile.minHeight};
  height:${({ theme }) => theme.sizes.mobile.height};
`;

export const Box = Styled.div`
  transform:translateY(-20px);
`;

export const PTag = Styled.p`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: #2b2b2b;
  margin-bottom:20px;
`;

export const Box2 = Styled.div`
  margin-bottom: 153px;
`;
