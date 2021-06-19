import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BottomBtn from '../../atoms/BottomBtn';
import InputList from '../../atoms/InputList';
import usePopAlarm from '../../../hooks/usePopAlarm';
import * as S from './style';

const RemoveContent = (): ReactElement => {
  const history = useHistory();
  const [reasonListOpen, setReasonListOpen] = useState(false);
  const [reason, setReason] = useState('');
  const [popAlarm] = usePopAlarm();

  const removeAccountList = [
    { id: 1, content: '선택해주세요.' },
    { id: 2, content: '너무 비싸요.' },
    { id: 3, content: '사장님 나빠요.' },
    { id: 4, content: '시간 없어요.', lastBorder: true },
  ];

  const onReasonClick = (reasonValue: string) => {
    setReasonListOpen(false);
    if (reasonValue === '선택해주세요.') {
      setReason('');
    } else {
      setReason(reasonValue);
    }
  };

  const onNextClick = () => {
    if (reason) {
      // history.push('/mypage/removeAccount/2');
      history.push({
        pathname: '/mypage/removeAccount',
        state: { reason },
      });
    } else {
      popAlarm('이유를 선택해주세요');
    }
  };

  return (
    <>
      <S.Container>
        <S.H2>
          빵덕을
          <br />
          <S.Span>탈퇴</S.Span> 하시나요?
        </S.H2>
        <S.P>탈퇴하시는 이유를 알려주세요</S.P>
        <S.InputPositionPox>
          <InputList
            title="선택해주세요."
            list={removeAccountList}
            listOpen={reasonListOpen}
            setListOpen={setReasonListOpen}
            onClickItem={onReasonClick}
            reason={reason}
          />
        </S.InputPositionPox>
      </S.Container>
      <S.BottomBox>
        <BottomBtn content="다음" onClick={onNextClick} />
      </S.BottomBox>
    </>
  );
};

export default RemoveContent;
