import React, { ReactElement, useState, useEffect } from 'react';
import * as S from './style';
import unCheckedCircle from '../../../assets/images/check/unCheckedCircle.png';
import checkedCircle from '../../../assets/images/check/checkedCircle.png';
import axiosAPI from '../../../utils/axios';
import useGetUserData from '../../../swr/useGetUserData';
import Loading from '../../atoms/Loading';

const CareerOn = (): ReactElement => {
  const { data, loading } = useGetUserData();
  const careerStatus = data?.data.roomEscapeRecodesOpenStatus;
  const [careerOpenList, setCareerOpenList] = useState([
    { id: 1, content: '전체 공개', img: unCheckedCircle, request: 'OPEN' },
    { id: 2, content: '친구에게만 공개', img: unCheckedCircle, request: 'ONLY_FRIENDS_OPEN' },
    { id: 3, content: '나만 보기', img: unCheckedCircle, request: 'CLOSE' },
  ]);

  useEffect(() => {
    setCareerOpenList((prev) => {
      return prev.map((career) => {
        if (career.request === careerStatus) return { ...career, img: checkedCircle };
        return { ...career };
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCheck = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, checkedId: number) => {
    e.preventDefault();
    setCareerOpenList((prev) => {
      return prev.map((openItem) => {
        if (openItem.id === checkedId) {
          return { ...openItem, img: checkedCircle };
        }
        return { ...openItem, img: unCheckedCircle };
      });
    });
  };

  useEffect(() => {
    const memberId = sessionStorage.getItem('bbangUserId');
    careerOpenList.forEach((career) => {
      if (career.img === checkedCircle && memberId) {
        axiosAPI({
          method: 'put',
          url: `/api/members/${memberId}/room-escape-recodes-open-status`,
          data: {
            roomEscapeRecodesOpenStatus: career.request,
          },
        });
      }
    });
  }, [careerOpenList]);

  if (loading) return <Loading />;
  return (
    <S.Container>
      <S.H2>방탈출 기록 공개</S.H2>
      <ul>
        {careerOpenList.map((item) => {
          return (
            <S.Li key={item.id} onClick={(e) => onCheck(e, item.id)} data-blink="blink">
              <S.PTag data-blink="blink">{item.content}</S.PTag>
              <img src={item.img} alt={item.content} data-blink="blink" />
            </S.Li>
          );
        })}
      </ul>
    </S.Container>
  );
};

export default CareerOn;
