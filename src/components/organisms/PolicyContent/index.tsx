import React, { ReactElement } from 'react';
import PolicyTitle from '../../atoms/PolicyTitle';
import * as S from './style';

const PolicyContent = (): ReactElement => {
  return (
    <div>
      <PolicyTitle title="개인정보 처리방침" date="2021년 02월 02일" />
      <S.ContentBox>
        <S.CenterBox>
          <S.CenterPTag>
            빵덕(이하 “회사”)는 정보주체의 개인정보를 중요시하며, 개인정보 보호법, 전기통신사업법 등 회사가 준수해야할
            관련 법령상의 개인정보보호 규정을 준수하고 있습니다. 회사는 개인정보처리방침을 통하여 처리하는 개인정보가
            어떻게 이용되고 있으며, 개인정보보호를 위해 어떠한 조치를 하고 있는지 알려드립니다. 본 개인정보처리방침은
            회사가 제공하는 서비스에 한해 적용되며 다음과 같은 내용을 담고 있습니다.
          </S.CenterPTag>
        </S.CenterBox>
        <div>
          <S.H2>1. 처리하는 개인정보의 항목 및 목적</S.H2>
          <S.BottomPTag>
            1-1항목 <br />
            회사는 서비스 제공 및 유지를 위한 필요한 경우 목적에 따라 필요 최소한의 개인정보만을 다음과 같이 수집하여
            처리합니다. <br />
            회원정보 : 회원명, 이름, 아이디, 이메일주소, 비밀번호, 휴대폰번호 <br />
            멤버정보: 소속단체정보(회원명, 직급 등), 이름, 아이디, 이메일주소, 비밀번호, 휴대폰번호, 생년월일, 성별,
            개인위치정보 거래정보: 세금계산서 발행을 위한 담당자 정보 (이름, 연락처, 이메일 주소) <br />
            활동기록: IP, 서비스 이용 기록, 불량 이용 기록 등 <br />
            회사는 회원(또는 멤버)으로부터 제공받거나 연동된 시스템을 통해 정보주체가 입력하는 방식으로 개인정보를
            수집하며, 경우에 따라 출력된 형태의 종이문서 또는 파일을 통해 개인정보를 수집할 수도 있습니다.
          </S.BottomPTag>
        </div>
      </S.ContentBox>
    </div>
  );
};

export default PolicyContent;
