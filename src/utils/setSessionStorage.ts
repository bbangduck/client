const setSessionStorage = (accessToken: string, refreshToken: string, userId: string): void => {
  localStorage.removeItem('bbangAT');
  localStorage.removeItem('bbangRT');
  sessionStorage.setItem('bbangAT', accessToken);
  sessionStorage.setItem('bbangRT', refreshToken);
  sessionStorage.setItem('bbangUserId', userId);
};
export default setSessionStorage;
