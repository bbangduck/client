const setLocalStorage = (accessToken: string, refreshToken: string, userId: string): void => {
  sessionStorage.removeItem('bbangAT');
  sessionStorage.removeItem('bbangRT');
  localStorage.setItem('bbangAT', accessToken);
  localStorage.setItem('bbangRT', refreshToken);
  localStorage.setItem('bbangUserId', userId);
};
export default setLocalStorage;
