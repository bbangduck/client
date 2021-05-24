const removeSessionStorage = (): void => {
  sessionStorage.removeItem('bbangAT');
  sessionStorage.removeItem('bbangRT');
  sessionStorage.removeItem('bbangUserId');
};
export default removeSessionStorage;
