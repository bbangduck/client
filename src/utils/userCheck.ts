const userCheck = (): boolean => {
  const userInfo = {
    aToken: sessionStorage.getItem('bbangAT'),
    rToken: sessionStorage.getItem('bbangRT'),
    userId: sessionStorage.getItem('bbangUserId'),
  };
  const { aToken, rToken, userId } = userInfo;

  if (aToken && rToken && userId) return true;
  return false;
};

export default userCheck;
