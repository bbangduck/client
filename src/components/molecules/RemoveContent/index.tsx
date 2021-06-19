import React, { ReactElement, useState, useEffect } from 'react';
import InputList from '../../atoms/InputList';
import * as S from './style';

const RemoveContent = (): ReactElement => {
  const [reasonListOpen, setReasonListOpen] = useState(false);
  const [reason, setReason] = useState('');

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

  return (
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
  );
};

export default RemoveContent;
