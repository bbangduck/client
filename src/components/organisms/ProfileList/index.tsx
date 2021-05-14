import React, { ReactElement } from 'react';
import pen from '../../../assets/images/pen/pen.png';
import UpdateItem from '../../molecules/UpdateItem';
import CareerOn from '../../molecules/CareerOn/index';

const UpdateList = (): ReactElement => {
  return (
    <div>
      <UpdateItem title="이메일 주소" content="Bbangduck@gmail.com" icon={null} />
      <UpdateItem title="닉네임" content="빵덕 방린이에요" icon={pen} />
      <UpdateItem title="나의 한마디" content="안녕하세요 잘 부탁드립니다." icon={pen} />
      <CareerOn />
    </div>
  );
};

export default UpdateList;
