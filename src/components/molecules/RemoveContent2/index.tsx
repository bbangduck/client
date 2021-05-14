import React, { ReactElement } from 'react';
import * as S from './style';

const Remove2Content = (): ReactElement => {
  return (
    <div>
      <S.H2>
        <S.YellowFont>주의사항</S.YellowFont>을 꼭 읽어주세요.
      </S.H2>
      <S.PTag>회원 탈퇴 시 개인 정보 및 이용 정보는 즉시 삭제됩니다.</S.PTag>
      <S.Box>
        <S.Span>
          · 회원 탈퇴와 동시에 회원가입 시에 기재한 모든 개인 정보 및 서비스 이용 내역은 삭제되며, 복구는 불가능합니다.
          <br />· 단, 타 법령에 의해 수집 및 이용한 회원정보는 법령 준수기간동안 보관됩니다.
        </S.Span>
      </S.Box>
      <S.LastPTag>
        탈퇴 후 기존 작성한 방탈출 리뷰, 댓글 등은 모두 삭제
        <br /> 됩니다.
      </S.LastPTag>
    </div>
  );
};

export default Remove2Content;
