import React, { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';

const SignUpNickNameTemplate = (): ReactElement => {
  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      <p>닉네임적어</p>
    </div>
  );
};

export default SignUpNickNameTemplate;
