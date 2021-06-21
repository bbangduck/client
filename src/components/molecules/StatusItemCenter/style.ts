import Styled from 'styled-components';

interface ContainerProps {
  detailExist: boolean;
}
export const Container = Styled.div<ContainerProps>`
  display:flex;
  margin-bottom:${({ detailExist }) => (detailExist ? '20px' : '40px')};
`;

export const ImgBox = Styled.div`
  width:27%;
  max-width: 115px;
  min-width: 68px;
  height:33vw;
  max-height: 155px;
  min-height: 110px;
  background:lightgray;
  margin-right:16px;
`;

export const Img = Styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
`;

export const RightBox = Styled.div`
  display:flex;
  flex-direction:column;
`;

export const Top = Styled.div`
  margin-bottom:18px;
`;

export const PTag = Styled.p`
  font-size: ${({ theme }) => theme.sizes.font[3]};
  font-weight: bold;
  letter-spacing: -0.16px;
  color: ${({ theme }) => theme.colors.fontGray[3]};
  line-height: 1.63;
`;

export const Location = Styled.span`
  line-height: 1.43;
  font-size: ${({ theme }) => theme.sizes.font[2]};
  color: ${({ theme }) => theme.colors.fontGray[2]};
`;

export const Bottom = Styled.div`
  display:flex;
  align-items:center;
`;

export const HintBox = Styled.div`
  height:31px;
  padding: 0 12px;
  border: solid 1px #ebebeb;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:8px;
`;

export const Hint = Styled.span`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: bold;
  color: #4b4b4b;
`;
